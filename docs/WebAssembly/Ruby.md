# WebAssembly with Ruby

![Ruby WebAssembly](/img/tutorial/ruby_wasm_logos.png?raw=true)

## Intro

Beginning in [Ruby 3.2 Preview 1](https://www.ruby-lang.org/en/news/2022/04/03/ruby-3-2-0-preview1-released/), Ruby supports WebAssembly as an additional platform. As such, it does work with Enarx. For this Demo, you'll need to be using a Linux system.

## Instructions

1. Download the pre-compiled Ruby Wasm file from the [Ruby.wasm releases page](https://github.com/ruby/ruby.wasm/releases).
    * Decompress the file.
    * `cd head-wasm32-unknown-wasi-full` Change directory to the newly created directory.
    * `mv usr/local/bin/ruby ruby.wasm`
2. Create a simple Ruby script. I used this:
   `puts "Hello, Enarx!";puts RUBY_DESCRIPTION`. This just says "Hello", but more importantly, shows the version information and platform of the Ruby interpreter. Let's create this file in a `src/hello_enarx.rb` inside the "head" directory from the prior step.
    * Test the script by running `ruby src/hello_enarx.rb`.
    * On my system, the version information includes "x86_64-linux-gnu".
3. Next, download [wasi-vfs](https://github.com/kateinoigakukun/wasi-vfs/releases/tag/v0.1.0) (Wasi virtual filesystem) program. It's created by a member of the Ruby development team. Choose the file for your system (Linux, right??).
    * Decompress the file
    * Place the `wasi-vfs` binary somewhere in your $PATH. For me, it was in `~/bin/`.
4. Create the new Ruby wasm file by packing the script we wish to run, and the Ruby library of scripts.
    * `wasi-vfs pack ruby.wasm --mapdir /usr::usr/ --mapdir /src::src/ -o ruby_full.wasm`
    * Test that it works: `wasmtime run ruby_full.wasm -- /src/hello_enarx.rb`
    * This time, the version information includes "wasm32-wasi"!
    * Notice that the command to wasmtime includes a forward slash _before_ "src". That's because we're referring to the script inside the virtual filesystem inside the Wasm file.
5. Running with [Enarx](https://enarx.dev/).
    * First, we'll need an `Enarx.toml` file. The first line contains the command line arguments. Since the first argument that Ruby (and most programs) expect is the name of the running program, we'll have two arguments: "ruby" and "/src/hello_enarx.rb". The value of the first argument doesn't matter; what does matter is the path to our script as the second argument. The leading slash points to the Ruby script inside the Wasm file.
    * To run Enarx, we'll pass the path of the Toml file with the command line option `--wasmcfgfile Enarx.toml`.

![Ruby Enarx](/img/tutorial/ruby_enarx.png?raw=true)

### Enarx.toml

```toml
args = ["ruby.wasm", "/src/hello_enarx.rb"]

[[files]]
kind = "stdin"

[[files]]
kind = "stdout"

[[files]]
kind = "stderr"
```
### hello_enarx.rb
```ruby
puts "Hello, Enarx!";puts RUBY_DESCRIPTION
```