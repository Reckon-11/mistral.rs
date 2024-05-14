use std::{
    env,
    error::Error,
    pin::Pin,
    sync::Arc,
    task::{Context, Poll},
    time::Duration,
};
use tokio::sync::mpsc::{channel, Receiver, Sender};

use crate::openai::{ChatCompletionRequest, Grammar, StopTokens};
use anyhow::Result;
use axum::{
    extract::{Json, State},
    http::{self, StatusCode},
    response::{
        sse::{Event, KeepAlive},
        IntoResponse, Sse,
    },
};
use either::Either;
use indexmap::IndexMap;
use mistralrs_core::{
    ChatCompletionResponse, Constraint, MistralRs, NormalRequest, Request, RequestMessage,
    Response, SamplingParams, StopTokens as InternalStopTokens,
};
use serde::Serialize;

#[derive(Debug)]
struct ModelErrorMessage(String);
impl std::fmt::Display for ModelErrorMessage {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.0)
    }
}
impl std::error::Error for ModelErrorMessage {}
pub struct Streamer {
    rx: Receiver<Response>,
    is_done: bool,
    state: Arc<MistralRs>,
}

impl futures::Stream for Streamer {
    type Item = Result<Event, axum::Error>;

    fn poll_next(mut self: Pin<&mut Self>, _cx: &mut Context<'_>) -> Poll<Option<Self::Item>> {
        if self.is_done {
            return Poll::Ready(None);
        }
        match self.rx.try_recv() {
            Ok(resp) => match resp {
                Response::ModelError(msg, _) => {
                    MistralRs::maybe_log_error(
                        self.state.clone(),
                        &ModelErrorMessage(msg.to_string()),
                    );
                    Poll::Ready(Some(Ok(Event::default().data(msg))))
                }
                Response::ValidationError(e) => {
                    Poll::Ready(Some(Ok(Event::default().data(e.to_string()))))
                }
                Response::InternalError(e) => {
                    MistralRs::maybe_log_error(self.state.clone(), &*e);
                    Poll::Ready(Some(Ok(Event::default().data(e.to_string()))))
                }
                Response::Chunk(response) => {
                    if response.choices.iter().all(|x| x.finish_reason.is_some()) {
                        self.is_done = true;
                    }
                    MistralRs::maybe_log_response(self.state.clone(), &response);
                    Poll::Ready(Some(Event::default().json_data(response)))
                }
                Response::Done(_) => unreachable!(),
                Response::CompletionDone(_) => unreachable!(),
                Response::CompletionModelError(_, _) => unreachable!(),
            },
            Err(_) => Poll::Pending,
        }
    }
}

pub enum ChatCompletionResponder {
    Sse(Sse<Streamer>),
    Json(ChatCompletionResponse),
    ModelError(String, ChatCompletionResponse),
    InternalError(Box<dyn Error>),
    ValidationError(Box<dyn Error>),
}

trait ErrorToResponse: Serialize {
    fn to_response(&self, code: StatusCode) -> axum::response::Response {
        let mut r = Json(self).into_response();
        *r.status_mut() = code;
        r
    }
}

#[derive(Serialize)]
struct JsonError {
    message: String,
}

impl JsonError {
    fn new(message: String) -> Self {
        Self { message }
    }
}
impl ErrorToResponse for JsonError {}

#[derive(Serialize)]
struct JsonModelError {
    message: String,
    partial_response: ChatCompletionResponse,
}

impl JsonModelError {
    fn new(message: String, partial_response: ChatCompletionResponse) -> Self {
        Self {
            message,
            partial_response,
        }
    }
}

impl ErrorToResponse for JsonModelError {}

impl IntoResponse for ChatCompletionResponder {
    fn into_response(self) -> axum::response::Response {
        match self {
            ChatCompletionResponder::Sse(s) => s.into_response(),
            ChatCompletionResponder::Json(s) => Json(s).into_response(),
            ChatCompletionResponder::InternalError(e) => {
                JsonError::new(e.to_string()).to_response(http::StatusCode::INTERNAL_SERVER_ERROR)
            }
            ChatCompletionResponder::ValidationError(e) => {
                JsonError::new(e.to_string()).to_response(http::StatusCode::UNPROCESSABLE_ENTITY)
            }
            ChatCompletionResponder::ModelError(msg, response) => {
                JsonModelError::new(msg, response)
                    .to_response(http::StatusCode::INTERNAL_SERVER_ERROR)
            }
        }
    }
}

fn parse_request(
    oairequest: ChatCompletionRequest,
    state: Arc<MistralRs>,
    tx: Sender<Response>,
) -> (Request, bool) {
    let repr = serde_json::to_string(&oairequest).expect("Serialization of request failed.");
    MistralRs::maybe_log_request(state.clone(), repr);

    let stop_toks = match oairequest.stop_seqs {
        Some(StopTokens::Multi(m)) => Some(InternalStopTokens::Seqs(m)),
        Some(StopTokens::Single(s)) => Some(InternalStopTokens::Seqs(vec![s])),
        None => None,
    };
    let messages = match oairequest.messages {
        Either::Left(req_messages) => {
            let mut messages = Vec::new();
            for message in req_messages {
                let mut message_map = IndexMap::new();
                message_map.insert("role".to_string(), message.role);
                message_map.insert("content".to_string(), message.content);
                messages.push(message_map);
            }
            RequestMessage::Chat(messages)
        }
        Either::Right(prompt) => {
            let mut messages = Vec::new();
            let mut message_map = IndexMap::new();
            message_map.insert("role".to_string(), "user".to_string());
            message_map.insert("content".to_string(), prompt);
            messages.push(message_map);
            RequestMessage::Chat(messages)
        }
    };

    let is_streaming = oairequest.stream.unwrap_or(false);
    (
        Request::Normal(NormalRequest {
            id: state.next_request_id(),
            messages,
            sampling_params: SamplingParams {
                temperature: oairequest.temperature,
                top_k: oairequest.top_k,
                top_p: oairequest.top_p,
                top_n_logprobs: oairequest.top_logprobs.unwrap_or(1),
                frequency_penalty: oairequest.frequency_penalty,
                presence_penalty: oairequest.presence_penalty,
                max_len: oairequest.max_tokens,
                stop_toks,
                logits_bias: oairequest.logit_bias,
                n_choices: oairequest.n_choices,
            },
            response: tx,
            return_logprobs: oairequest.logprobs,
            is_streaming,
            suffix: None,
            constraint: match oairequest.grammar {
                Some(Grammar::Yacc(yacc)) => Constraint::Yacc(yacc),
                Some(Grammar::Regex(regex)) => Constraint::Regex(regex),
                None => Constraint::None,
            },
            adapters: oairequest.adapters,
        }),
        is_streaming,
    )
}

#[utoipa::path(
    post,
    tag = "Mistral.rs",
    path = "/v1/chat/completions",
    request_body = ChatCompletionRequest,
    responses((status = 200, description = "Chat completions"))
)]
pub async fn chatcompletions(
    State(state): State<Arc<MistralRs>>,
    Json(oairequest): Json<ChatCompletionRequest>,
) -> ChatCompletionResponder {
    let (tx, mut rx) = channel(10_000);
    let (request, is_streaming) = parse_request(oairequest, state.clone(), tx);
    let sender = state.get_sender();

    if let Err(e) = sender.send(request).await {
        let e = anyhow::Error::msg(e.to_string());
        MistralRs::maybe_log_error(state, &*e);
        return ChatCompletionResponder::InternalError(e.into());
    }

    if is_streaming {
        let streamer = Streamer {
            rx,
            is_done: false,
            state,
        };

        ChatCompletionResponder::Sse(
            Sse::new(streamer).keep_alive(
                KeepAlive::new()
                    .interval(Duration::from_millis(
                        env::var("KEEP_ALIVE_INTERVAL")
                            .map(|val| val.parse::<u64>().unwrap_or(1000))
                            .unwrap_or(1000),
                    ))
                    .text("keep-alive-text"),
            ),
        )
    } else {
        let response = match rx.recv().await {
            Some(response) => response,
            None => {
                let e = anyhow::Error::msg("No response received from the model.");
                MistralRs::maybe_log_error(state, &*e);
                return ChatCompletionResponder::InternalError(e.into());
            }
        };

        match response {
            Response::InternalError(e) => {
                MistralRs::maybe_log_error(state, &*e);
                ChatCompletionResponder::InternalError(e)
            }
            Response::ModelError(msg, response) => {
                MistralRs::maybe_log_error(state.clone(), &ModelErrorMessage(msg.to_string()));
                MistralRs::maybe_log_response(state, &response);
                ChatCompletionResponder::ModelError(msg, response)
            }
            Response::ValidationError(e) => ChatCompletionResponder::ValidationError(e),
            Response::Done(response) => {
                MistralRs::maybe_log_response(state, &response);
                ChatCompletionResponder::Json(response)
            }
            Response::Chunk(_) => unreachable!(),
            Response::CompletionDone(_) => unreachable!(),
            Response::CompletionModelError(_, _) => unreachable!(),
        }
    }
}
