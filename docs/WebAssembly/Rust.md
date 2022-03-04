# WebAssembly with Rust

![Rust WASI](/static/img/tutorial/rustWasi.jpg?raw=true)

## Environment setup

To get started, you must install the following:

### Rust

Go to [rust-lang.org](https://www.rust-lang.org/tools/install) and follow the instructions using rustup.

### Wasmtime

You will find wasmtime at [wasmtime.dev](https://wasmtime.dev/)

### Install the WebAssembly Rust toolchain:

```
 rustup target install wasm32-wasi
```

 To get started, lets start with a very simple demo that caculates fibonacci sequence, According to the trusty Wikipedia, the Fibonacci sequence is characterized by the fact that every number after the first two is the sum of the two preceding ones.


## Rust Code

First create a new binary crate using the command below:

```bash
cargo new demo
```

You can use any IDE of your choice and open up this project folder, add this on `main.rs` file
  
```rust
use std::io;

fn fib (n: u32) -> u32 {
    if n <= 0 {
        return 0;
    } else if n == 1 {
        return 1;
    }   fib(n - 1) + fib(n - 2)
 }

 fn main() {
    let mut nth = String::new();

    println!("Enter input: ");

    io::stdin()
        .read_line(&mut nth)
        .expect("Failed to read line");

    let nth: u32 = nth.trim().parse().expect("Please type a number!");

    println!("Fibonacci: {}", fib(nth));
    
}
  
```

## Compiling Rust Code

1. Compile using cargo

``` bash
cargo build
cargo run
```
![Rust Screenshot1](/static/img/tutorial/rustRunSreenshot.png?raw=true)

2. Compile to wasm

```bash
cargo build --target=wasm32-wasi
```
![Rust Screenshot2](/static/img/tutorial/rustCompileScreenshot.png?raw=true)


3. The wasm file created in release folder of wasi32

```bash
file target/wasm32-wasi/release/demo.wasm
```

4. Wasm runtime

```bash

wasmtime target/wasm32-wasi/release/demo.wasm
```
![Rust Screenshot3](/static/img/tutorial/rustWasm.png?raw=true)

	
