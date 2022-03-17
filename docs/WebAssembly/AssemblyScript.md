# WebAssembly with AssemblyScript

Before we begin, it’s necessary that you have `npm` in your system.

1. Setting up the environment
    
    To install AssemblyScript on your local system, run the command given below, and to install Wasmtime to run our .wasm file, you can take a look at their [website](https://wasmtime.dev/).
    
    ```
    npm install -g assemblyscript
    ```
    
    We also need to install `as-wasi`. It is an easy to use API for the AssemblyScript WASI bindings. By bindings, we mean the declared functions that would map to the `WASI` host functions. The command to do the same is :
    
    ```
    npm install --save as-wasi
    ```
    
2. Code
    
    Open your preferred text editor and make a file with .ts extension. 
    
    The fibonacci code in AssemblyScript is as follows :
    
     
    
    ```
    import "wasi";
    import { Console } from "as-wasi";
    
    export function fibo (n: i32): i32 {
        if(n==1 || n==0){
          return n;
        }
        else{
          return fibo(n-1) + fibo(n-2);
        }
    }
    
    let a: i32 = fibo(7);
    Console.log(a.toString());
    ```
    
    We need to import `wasi` to add some nice defaults for compiling to `WASI` and we need to import `Console` to write to `stdout`.
    
3. Compiling the code
    
    To compile your AssemblyScript code, simply run :
    
    ```
    asc fibo.ts -o fibo.wasm
    ```
    
    This would generate a `fibo.wasm` file in your working directory.
    

4. Running .wasm file in Wasmtime
    
    To run our .wasm file in wasmtime, run the following command
    
    ```
    wasmtime fibo.wasm
    ```