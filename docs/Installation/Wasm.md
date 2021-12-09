# Running Enarx

## Build and run a WebAssembly module

Install the Webassembly rust toolchain:

    $ rustup target install wasm32-wasi

Create a simple rust program:

    $ cargo init --bin hello-world
    $ cd hello-world
    $ echo 'fn main() { println!("Hello, Enarx!"); }' > src/main.rs
    $ cargo build --release --target=wasm32-wasi

Assuming you did install the `enarx` binary and have it in your `$PATH`, you can
now run the Webassembly program in an Enarx keep.

    $ enarx run target/wasm32-wasi/release/hello-world.wasm
    […]
    Hello, Enarx!

If you want to suppress the debug output, add `2>/dev/null`.

## Select a Different Backend

`enarx` will probe the machine it is running on in an attempt to deduce an
appropriate deployment backend. To see what backends are supported on your
system, run:

    $ enarx info

You can manually select a backend with the `--backend` option, or by
setting the `ENARX_BACKEND` environment variable:

    $ enarx run --backend=sgx target/wasm32-wasi/release/hello-world.wasm
    $ ENARX_BACKEND=sgx enarx run target/wasm32-wasi/release/hello-world.wasm