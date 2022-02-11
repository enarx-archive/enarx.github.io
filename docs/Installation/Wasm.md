# Running Enarx

## Build and run a WebAssembly module

Install the WebAssembly Rust toolchain:

    $ rustup target install wasm32-wasi

Create a simple Rust program.  First make sure you're not in the repository you already created:

    $ cd ~/
    $ cargo init --bin hello-world
    $ cd hello-world
    $ echo 'fn main() { println!("Hello, Enarx!"); }' > src/main.rs
    $ cargo build --release --target=wasm32-wasi

Assuming you did install the `enarx` binary and have it in your `$PATH`, you can
now run the WebAssembly program in an Enarx keep.

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

#### Note about KVM backend

`enarx` will look for the kvm driver loaded by the kernel and will be ready to use if it's found. Linux kernel
automatically loads the kvm module if the virtualization feature is enabled by the hardware. The status of whether or not
enarx was able to find the driver can be checked with the command `enarx info`. If the output shows the driver for kvm is available, you are ready to use enarx using kvm backend.

When you execute the `enarx run` command, enarx tries to automatically select the appropriate driver, and kvm is automatically selected if it's the only backend available. But if you want to specifically use the kvm backend you can pass the `kvm` as a parameter to `--backend` option, or set the `ENARX_BACKEND` environment variable as `kvm`:

    $ enarx run --backend=kvm target/wasm32-wasi/release/hello-world.wasm
    $ ENARX_BACKEND=kvm enarx run target/wasm32-wasi/release/hello-world.wasm