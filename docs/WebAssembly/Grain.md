# WebAssembly with Grain

1. Setting up the environment
    
    To install Grain on your local system, follow the instructions given [here](https://grain-lang.org/docs/getting_grain), and to install Wasmtime to run our .wasm file, you can take a look at their [website](https://wasmtime.dev/).
    
2. Code
    
    Open your preferred text editor and make a file with .gr extension. Grain recommends VS Code to work with .gr files. Installation of grain extension for VS code is highly recommended.
    
    The Fibonacci code in Grain is as follows :
    
    
    ```
    let rec fibonacci = (n) => {
      if (n == 0 || n == 1) {
        n
      } else {
        fibonacci(n - 1) + fibonacci(n - 2)
      }
    }
    
    print(fibonacci(7))
    ```
    
    We need to mention that a function is recursive with the keyword `rec`in Grain.
    
3. Compiling the code
    
    To compile your Grain code, simply run :
    
    ```
    grain fibonacci.gr
    ```

    This would print `21` on your terminal and generate a `fibonacci.gr.wasm` file.


4. Running .wasm file in Wasmtime
    
    To run our .wasm file in wasmtime, run the following command
    
    ```
    wasmtime fibonacci.gr.wasm
    ```