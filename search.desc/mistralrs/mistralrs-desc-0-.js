searchState.loadedDescShard("mistralrs", 0, "This crate provides an asynchronous, multithreaded API to …\nChat completion streaming request chunk.\nAn OpenAI compatible chat completion response.\nTemplate for chat models including bos/eos/unk as well as …\nChat completion choice.\nChat completion streaming chunk choice.\nCompletion request choice.\nChat completion streaming chunk choice.\nCompletion request choice.\nAn OpenAI compatible completion response.\nControl the constraint with Regex or Yacc.\nCustomizable logtis processor\nThe different types of elements allowed in tensors.\nThe scheduler method controld how sequences are scheduled …\nDelta in content for streaming response.\nMetadata to initialize the device mapper.\nContains the error value\nSelect a GGML model.\nA loader for a GGML model.\nA builder for a GGML loader.\nConfig for a GGML loader.\nSelect a GGUF model.\nLoader for a GGUF model.\nA builder for a GGUF loader.\nConfig for a GGUF loader.\n<code>NormalLoader</code> for a Gemma model.\n<code>VisionLoader</code> for an Idefics 2 Vision model.\n<code>VisionLoader</code> for an LLaVA Vision model.\n<code>VisionLoader</code> for an LLaVANext Vision model.\nA device mapper which does device mapping per hidden layer.\nA value of type <code>L</code>.\n<code>NormalLoader</code> for a Llama model.\nThe <code>Loader</code> trait abstracts the loading process. The …\nA builder for a loader using the selected model.\nAll local paths and metadata necessary to load a model.\nLogprobs per token.\nSelect a LoRA architecture\nSelect a GGML model with LoRA.\nSelect a GGUF model with LoRA.\nThe MistralRs struct handles sending requests to the …\nThe MistralRsBuilder takes the pipeline and a scheduler …\nDType for the model.\nThe kind of model to build.\n<code>ModelPaths</code> abstracts the mechanism to get all necessary …\nOnly quantize MoE experts, if applicable. The enables MoQE.\nA loader for a “normal” (non-quantized) model.\nA builder for a loader for a “normal” (non-quantized) …\nThe architecture to load the normal model as.\nA normal request request to the <code>MistralRs</code>.\nConfig specific to loading a normal model.\nContains the success value\nAdapter model ordering information.\nAll memory counts in MB. Default for block size is 32.\n<code>NormalLoader</code> for a Phi 2 model.\n<code>NormalLoader</code> for a Phi 3 model.\n<code>VisionLoader</code> for a Phi 3 Vision model.\nSelect a plain model, without quantization or adapters\n<code>NormalLoader</code> for a Qwen 2 model.\nA request to the Engine, encapsulating the various …\nMessage or messages for a <code>Request</code>.\nThe response enum contains 3 types of variants:\nA logprob with the top logprobs for this token.\nChat completion response message.\nA value of type <code>R</code>.\nSampling params are used to control sampling.\nMetadata for a speculative pipeline\nA loader for a speculative pipeline using 2 <code>Loader</code>s.\nSpeculative decoding pipeline: …\n<code>NormalLoader</code> for a Starcoder2 model.\nStop sequences or ids.\nTerminate all sequences on the next scheduling step. Be …\nThe core struct for manipulating tensors.\nThe source of the HF token.\nSelect the model from a toml file\nTop-n logprobs element\nType which can be converted to a DType\nOpenAI compatible (superset) usage during a request.\nA loader for a vision (non-quantized) model.\nA builder for a loader for a vision (non-quantized) model.\nThe architecture to load the vision model as.\nSelect a vision plain model, without quantization or …\nConfig specific to loading a vision model.\nSelect an X-LoRA architecture\nSelect a GGML model with X-LoRA.\nSelect a GGUF model with X-LoRA.\nThis operation multiplies the input tensor by <code>mul</code> then …\nLogits and sequence context (prompt and generated tokens), …\nRun the <code>forward</code> method of <code>m</code> on <code>self</code>.\nApplies a unary custom op.\nApplies a unary custom op without backward support\nApplies a binary custom op.\nApplies a binary custom op without backward support\nApplies a ternary custom op.\nApplies a ternary custom op without backward support\nRun the <code>forward</code> method of <code>m</code> on <code>self</code>.\nCreates a new 1D tensor with values from the interval …\nCreates a new 1D tensor with values from the interval …\nReturns the indices that sort the tensor along the last …\nSimilar to <code>argmax_keepdim</code> but the target dimension is …\nSimilar to <code>argmin_keepdim</code> but the target dimension is …\nConvert the response into a result form.\nString representation for dtypes.\n2D average pooling over an input tensor with multiple …\nSame as <code>avg_pool2d</code> but with a <code>stride</code> that can be set to a …\nReturn <code>BF16</code> for devices that support it, otherwise default …\nBroadcast the input tensor to the target shape. This …\nReturns a new tensor duplicating data from the original …\nMatrix-multiplication with broadcasting support.\nMatrix-multiplication with broadcasting support and fused …\nBroadcasting version of <code>pow</code>.\nIf the loader type is not specified, loader type is …\nConcatenates two or more tensors along a particular …\nJinja format chat templating for chat completion.\nSplit a tensor into the specified number of chunks, this …\nClamp the tensor values to be between <code>min</code> and <code>max</code>.\nElement-wise comparison between two tensors, e.g. …\nReturns a tensor that is in row major order. This is the …\nApplies a 1D convolution over the input tensor.\nApplies a 2D convolution over the input tensor.\nApplies a 1D transposed convolution over the input tensor.\nApplies a 2D transposed convolution over the input tensor.\nCompared to clone, this copies the actual storage but may …\nReturns the cumulative sum of elements of the input tensor …\nReturns a new tensor detached from the current graph, …\nThe device on which the input tensor is located.\nThe dimension size for a specified dimension index.\nThe dimension size for this tensor on each axis.\nThe dtype for the elements stored in the input tensor.\nA device mapper to not map device.\nThe number of elements stored in this tensor.\nApplies the Exponential Linear Unit (ELU) function on each …\nReturns a tensor with the values from the <code>self</code> tensor at …\nCreates a new tensor filled with uninitialized memory.\nCreate an empty topology.\nCreates a new tensor filled with uninitialized memory of …\nElement-wise equality.\nAn alias for broadcast_as.\nReturns a matrix with a diagonal of ones of size n by n.\nFlattens the input tensor on the dimension indexes from …\nFlattens the input tensor by reshaping it into a one …\nFlattens the input tensor on the dimension indexes from …\nFlattens the input tensor on the dimension indexes from <code>0</code> …\nReturns a tensor that is in row major order. This always …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new 1D tensor from an iterator.\nCreates a new tensor initialized with values from the …\nCreates a new tensor initialized with values from the …\nReturns a new tensor with all the elements having the same …\nγ completions to run of the draft model\nGather values across the target dimension.\nElement-wise comparison with greater-equal, the returned …\nReturns the sub-tensor fixing the index at <code>i</code> on the first …\nConfiguration of optional adapters. <code>(String, String)</code> is of …\nOptional adapter files. <code>(String, PathBuf)</code> is of the form …\n<code>XLoraConfig</code> for the XLORA classifier\nFilepath for the XLORA classifier\nRetrieve the <code>PretrainedConfig</code> file.\nFilepath for general model configuration.\nInformation for preloading LoRA adapters (adapter name, …\nReturns the sub-tensor fixing the index at <code>index</code> on the …\nReturn the defined ordering of adapters and layers within …\nGet the preprocessor config (for the vision models). This …\nGet the processor config (for the vision models). This is …\nFile where the content is expected to deserialize to […\nA serialised <code>tokenizers.Tokenizer</code> HuggingFace object.\nModel weights files (multiple files supported).\nElement-wise comparison with greater-than, the returned …\nsee [TensorIndex#method.i]\nsee [TensorIndex#method.i]\nsee [TensorIndex#method.i]\nsee [TensorIndex#method.i]\nsee [TensorIndex#method.i]\nThe unique identifier for this tensor.\nAccumulate element from <code>source</code> at indexes <code>indexes</code> and add …\nSelect values for the input tensor at the target indexes …\nThis should be called to initialize the debug flag and …\nApplies a unary custom op in place.\nApplies a unary custom op in place (for the first tensor).\nApplies a ternary custom op in place (for the first …\nInterpolate the input tensor to the <code>target_size</code> size, …\nInterpolate the input tensor to the <code>(target_h, target_w)</code> …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if the data is stored in a C contiguous (aka …\nReturns true if the data is stored in a Fortran contiguous …\nWhether this tensor is a variable or not. A variable is a …\nThe layout of the input tensor, this stores both the shape …\nElement-wise comparison with lower-equal, the returned …\nIf <code>revision</code> is None, then it defaults to <code>main</code>. If <code>dtype</code> is …\nLoad a model from the specified paths. Also initializes …\nReturns log(sum(exp(tensor), dim)).\nIf <code>training == true</code>, <code>loss_csv_path</code> will not save anything. …\nElement-wise comparison with lower-than, the returned …\nReturns the matrix-multiplication of the input tensor with …\nReturns the matrix-multiplication of the input tensor with …\nReturns the matrix-multiplication of the input tensor with …\nSimilar to <code>max_keepdim</code> but the target dimension is …\nGathers the maximum value across the selected dimension. …\n2D max pooling over an input tensor with multiple channels.\nSame as <code>max_pool2d</code> but with a <code>stride</code> that can be set to a …\nReturns the mean of all elements in the input tensor. The …\nReturns the mean of all elements in the input tensor. The …\nCreates grids of coordinates specified by the 1D inputs.\nSimilar to <code>min_keepdim</code> but the target dimension is …\nGathers the minimum value across the selected dimension. …\nReturns a new tensor that is a narrowed version of the …\nElement-wise non-equality.\nCreates a new tensor on the specified device using the …\nCreate a loader builder for a GGUF model. <code>tok_model_id</code> is …\nNormalize a ‘relative’ axis value: positive values are …\nCreates a new tensor filled with ones.\nCreates a new tensor filled with ones with same shape, …\nPad the input tensor using same values along dimension <code>dim</code>…\nPad the input tensor using 0s along dimension <code>dim</code>. This …\nParse ISQ value: one of\nReturns a tensor with the same data as the input where the …\nPointwise pow operation.\nRaise the tensor to some float exponent <code>e</code>.\nCreates a new tensor initialized with values sampled …\nCreates a new tensor initialized with values sampled from …\nThe number of dimensions for this tensor, 0 for a scalar …\nReads a npy file and return the stored multi-dimensional …\nReads a npz file and returns the stored multi-dimensional …\nReads a npz file and returns the stored multi-dimensional …\nRepeat this tensor along the specified dimensions.\nReshape returns a tensor with the target shape provided …\nRoll the tensor input along the given dimension. Elements …\nRound element of the input tensor to the nearest integer.\nThe tensor shape, i.e. dimension sizes on each axis.\nThe size used by each element in bytes, i.e. 1 for <code>U8</code>, 4 …\nReturns a copy of <code>self</code> where the values within <code>ranges</code> have …\nEmbeds the values of the <code>src</code> tensor into the <code>self</code> tensor …\nEmbeds the values of the <code>src</code> tensor into the <code>self</code> tensor …\nSet the values on <code>self</code> using values from <code>src</code>. The copy …\nSorts the tensor along the last dimension, returns the …\nCreates a new tensor with the specified dimension removed …\nStacks two or more tensors along a particular dimension.\nThe storage used by this tensor, together with the layout …\nSimilar to <code>strided_index</code> but returns the position of the …\nReturns an iterator over position of the elements in the …\nReturns the sum of all elements in the input tensor. The …\nComputes the sum of all the elements in this tensor and …\nReturns the sum of all elements in the input tensor. The …\nReturns a tensor that is a transposed version of the …\nIf the target device is the same as the tensor device, …\nCasts the input tensor to the target <code>dtype</code>.\nRetrieves the single scalar value hold in the tensor. If …\nAn alias for <code>to_scalar</code>.\nReturns the data contained in a 1D tensor as a vector of …\nReturns the data contained in a 2D tensor as a vector of …\nReturns the data contained in a 3D tensor.\nReturns true if the computation graph should track this …\nReturns a tensor that is a transposed version of the …\nReturns a lower triangular matrix of ones of size n by n.\nReturns an upper triangular matrix of ones of size n by n.\nReturns a view of which contains all slices of size <code>size</code> …\nCreates a new tensor with a dimension of size one inserted …\nAlias for <code>interpolate1d</code>.\nAlias for <code>interpolate2d</code>.\nReturns the unbiased variance over the selected dimension.\nReturns the unbiased variance over the selected dimension.\nReturns a tensor with the same shape as the input tensor, …\nWrites a multi-dimensional array in the npy format.\nWrites multiple multi-dimensional arrays using the npz …\nCreates a new tensor filled with zeros.\nCreates a new tensor filled with ones with same shape, …\nModel ID to load LoRA from. This may be a HF hub repo or a …\nModel ID to load LoRA from. This may be a HF hub repo or a …\nModel ID to load LoRA from. This may be a HF hub repo or a …\nThe architecture of the model.\nThe architecture of the model.\nThe architecture of the model.\nThe architecture of the model.\nModel data type. Defaults to <code>auto</code>.\nModel data type. Defaults to <code>auto</code>.\nModel data type. Defaults to <code>auto</code>.\nModel data type. Defaults to <code>auto</code>.\n.toml file containing the selector configuration.\nGQA value\nGQA value\nGQA value\nModel ID to load from. This may be a HF hub repo or a …\nForce a base model ID to load from instead of using the …\nForce a base model ID to load from instead of using the …\nModel ID to load from. This may be a HF hub repo or a …\nOrdering JSON file\nOrdering JSON file\nOrdering JSON file\nOrdering JSON file\nOrdering JSON file\nOrdering JSON file\nISQ organization: <code>default</code> or <code>moqe</code> (Mixture of Quantized …\nQuantized filename(s). May be a single filename, or use a …\nQuantized filename(s). May be a single filename, or use a …\nQuantized filename(s). May be a single filename, or use a …\nQuantized filename.\nQuantized filename.\nQuantized filename.\nQuantized model ID to find the <code>quantized_filename</code>. This …\nQuantized model ID to find the <code>quantized_filename</code>. This …\nQuantized model ID to find the <code>quantized_filename</code>. This …\nQuantized model ID to find the <code>quantized_filename</code>. This …\nQuantized model ID to find the <code>quantized_filename</code>. This …\nQuantized model ID to find the <code>quantized_filename</code>. This …\nIndex of completion tokens to generate scalings up until. …\nIndex of completion tokens to generate scalings up until. …\nIndex of completion tokens to generate scalings up until. …\n<code>tok_model_id</code> is the local or remote model ID where you can …\n<code>tok_model_id</code> is the local or remote model ID where you can …\n<code>tok_model_id</code> is the local or remote model ID where you can …\nModel ID to load the tokenizer from. This may be a HF hub …\nModel ID to load the tokenizer from. This may be a HF hub …\nModel ID to load the tokenizer from. This may be a HF hub …\nPath to local tokenizer.json file. If this is specified it …\nPath to local tokenizer.json file. If this is specified it …\nPath to local tokenizer.json file. If this is specified it …\nPath to local tokenizer.json file. If this is specified it …\nPath to local tokenizer.json file. If this is specified it …\nPath to local tokenizer.json file. If this is specified it …\nPath to local tokenizer.json file. If this is specified it …\nPath to a topology YAML file.\nPath to a topology YAML file.\nPath to a topology YAML file.\nPath to a topology YAML file.\nPath to a topology YAML file.\nPath to a topology YAML file.\nPath to a topology YAML file.\nPath to a topology YAML file.\nPath to a topology YAML file.\nPath to a topology YAML file.\nModel ID to load X-LoRA from. This may be a HF hub repo or …\nModel ID to load X-LoRA from. This may be a HF hub repo or …\nModel ID to load X-LoRA from. This may be a HF hub repo or …\nLinear layer with fused bias matmul.\nRoPE for Llama3\nMatrix multiplication, configurable to be via f16 (to use …\nRoPE supporting LongRope\nExpands a mask from (bs, seq_len) to (bs, 1, tgt_len, …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCompute matrix-matrix product, optionally casting to f16 …\nCompute matrix-matrix product, optionally casting to f16 …\nGemma uses weight + 1.0\nCompute quantized matrix-matrix product, optionally …\nCompute quantized matrix-matrix product, optionally …\nComputes softmax(QK^T*sqrt(d_k))V")