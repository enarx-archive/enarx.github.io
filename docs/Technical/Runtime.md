Enarx runtime requires the following:
* Call-out API
* a JIT 
Enarx needs a library where we can say “here’s a context; here’s an application that we can load into context; here are the call-outs for APIs within that context; run the application”.  This will use a JIT compilation engine to provide runtime portability across CPUs. 

### Call-out API
[WASI](https://github.com/WebAssembly/WASI) - The [W3C subcommittee](https://www.w3.org/community/webassembly/) to standardize a WASM system API.

### JIT
[Wasmtime](https://github.com/CraneStation/wasmtime) - A standalone WASM JIT. Built by [Mozilla](https://research.mozilla.org/rust/) using [Rust](https://www.rust-lang.org/) and [Cranelift](https://github.com/CraneStation/cranelift).