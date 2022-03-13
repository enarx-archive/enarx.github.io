# WebAssembly with C++

![C++ WebAssembly](static/img/tutorial/C++WASI.png?raw=true)

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

## C++ Code Snippet

We will create a Simple C++ Program that will return us the fibonacci sequence of an Integer Input.

Create a folder with the naming convention that you prefer. In My Case, I will be using
"C++-to-WASM" as the name of my folder.

```bash
mkdir C++-to-WASM
cd C++-to-WASM
```

Create a file named `FibonacciSequence.cpp`, again you can choose any name for your file but make sure that you suffix it with the extension `.cpp`.

```C++
// Simple Program to calculate Fibonacci Sequence of an integer input
#include<iostream>
using namespace std;
int FibonacciSequence(int num) {
    if(num <= 1) {
        return num ;
    }
    return FibonacciSequence(num-1) + FibonacciSequence(num-2);
}
int main(){
    cout << "Enter the Number" << endl;
    int n ;
    cin  >> n ;
    
    cout << "Fibonacci Sequence term at " << n << "  " << "is " << FibonacciSequence(n) << endl;
}
```

## Compiling the C++ Code

1. Compiling Using `g++`

```bash
g++ FibonacciSequence.cpp
```
![C++ Screenshot1](/static/img/tutorial/C++ExecutionScreenshot.png?raw=true)

2. Compile to WASM Binary using the following Command:

Since the Code has been written in C++, we need to figure out a way to generate a WebAssembly Binary.
That's why we will be using `wasienv` in order to generate a `.wasm` binary from this `cpp` file.

When you have your `cpp` file created, you can execute `wasic++`

```bash
 wasic++ Fibonacci.cpp -o FibonacciBinary.wasm
```

Note that while executing this command, it might generate some warnings but you can ignore them.

3. Now, you will have a new `FibonacciBinary.wasm` file ready in your Directory

4. Executing it using WASM Runtime
```bash
wasmtime FibonacciBinary.wasm
```
![C++ Screenshot2](/static/img/tutorial/C++WasmScreenshot.png?raw=true)
