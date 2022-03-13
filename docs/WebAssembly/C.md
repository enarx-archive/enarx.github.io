# WebAssembly with C

![C WebAssembly](static/img/tutorial/CWASI.png?raw=true)

## Environment Setup 

To compile this demo, you must install
the following:

### C++

Go to [C and C++ Installation](https://docs.microsoft.com/en-us/cpp/build/vscpp-step-0-installation?view=msvc-170)
and follow the instructions.

### Wasmer

[Wasmer](https://docs.wasmer.io/) is an open-source runtime for executing WebAssembly on the Server.

#### Wasienv

[Wasienv](https://github.com/wasienv/wasienv) is a tool to compile different programming languages to WebAssembly, so you can run your programs on the Browser, or in the Server.

### Wasmtime

You will find wasmtime at [wasmtime.dev](https://wasmtime.dev/)

## C Code Snippet

We will create a Simple C Program that will return us the fibonacci sequence of an Integer Input.

Create a folder with the naming convention that you prefer. In My Case, I will be using
"C-to-WASM" as the name of my folder.

```bash
mkdir C-to-WASM
cd C-to-WASM
```

Create a file named `FibonacciSequence.c`, again you can choose any name for your file but make sure that you suffix it with the extension `.c`.

```C
// Simple Program to calculate Fibonacci Sequence of an integer input
#include<stdio.h>

int FibonacciSequence(int num) {
    if(num <= 1) {
        return num ;
    }
    return FibonacciSequence(num-1) + FibonacciSequence(num-2);
}
int main(){
    printf("Enter the Number\n");
    int n ;
    scanf("%d",&n);
    
    printf("Fibonacci Sequence term at %d is %d " , n , FibonacciSequence(n));
}
```

## Compiling the C Code

1. Compiling Using `gcc`

```bash
gcc FibonacciSequence.c
```
![C Screenshot1](/static/img/tutorial/CExecutionScreenshot.png?raw=true)

2. Compile to WASM Binary using the following Command:

Since the Code has been written in C, we need to figure out a way to generate a WebAssembly Binary.
That's why we will be using `wasienv` in order to generate a `.wasm` binary from this `c` file.

When you have your `c` file created, you can execute `wasicc`

```bash
 wasicc Fibonacci.c -o FibonacciBinary.wasm
```

Note that while executing this command, it might generate some warnings but you can ignore them.

3. Now, you will have a new `FibonacciBinary.wasm` file ready in your Directory

4. Executing it using WASM Runtime
```bash
wasmtime FibonacciBinary.wasm
```
![C Screenshot2](/static/img/tutorial/CWasmScreenshot.png?raw=true)