# WebAssembly with SwiftWasm

1. Setting up the environment
    
    First, we need to pull the docker image and run it in an interactive mode; we would be accessing the container from its bash. To do the same, run the following command.
    
    ```
    docker run --rm -it ghcr.io/swiftwasm/swift:latest /bin/bash
    ```
    
    
2. Code
    
    To write the fibonacci code, we need to have a text editor in the container. For this demo, we would be using nano text editor. To install the same, follow the below instructions :
    
    1. First, we need to run the `apt update` command in our container.
    2. To install nano text editor using apt, we need to run `apt install nano`
    
    With our text editor now installed in the container, lets make a swift file and write the fibonacci code in it.
    
    To make a new file, we would be using the `touch` command.
    
    ```
    touch fibonacci.swift
    ```
    
    To open the newly created file in nano text editor, we use this simple command.
    
    ```
    nano fibonacci.swift
    ```
    
    The fibonacci code in Swift is as follows :
    
    ```
    func fibonacci(n: Int) -> Int {
        var a = 0
        var b = 1
        for _ in 0..<n {
            let temp = a
            a = b
            b = temp + b
        }
        return a
    }
    
    print(fibonacci(n:7))
    ```
    
3. Compiling the code
    
    To compile your Swift code to wasm, simply run:
    
    ```
    swiftc -target wasm32-unknown-wasi fibonacci.swift -o fibonacci.wasm
    ```
    
    This would generate a `fibonacci.wasm` file.
    

4. Running .wasm file in Wasmtime
    
    We would be using Wasmtime as our WebAssembly runtime to run our `fibonacci.wasm` file. Before we install wasmtime in our container, we would need to install `curl` command, which is a command-line tool to transfer data to or from a server. To install the `curl` command, run the following command :
    
    ```
    apt install curl
    ```
    
    With that done, lets install our WebAssembly runtime, Wasmtime with the following command.
    
    ```
    curl https://wasmtime.dev/install.sh -sSf | bash
    ```
    
    We need to open a new terminal to start using Wasmtime, but the same can be achieved simply by the following command.
    
    ```
    exec bash
    ```
    
    To run our `fibonacci.wasm` , run the following command :
    
    ```
    wasmtime fibonacci.wasm
    ```
    
    