# WebAssembly With C 

## Environment Setup 

To compile this demo, you must install the following:

### Wasmtime

You can install it from [Wasmtime.dev](https://www.wasmtime.dev)

### Wasi-Sdk

Next you will have to download the latest release version of Wasi-Sdk. You can download it from here: [Wasi-Sdk](https://github.com/WebAssembly/wasi-sdk/releases) and download the binary as per your Operating System.

### Steps

First of all, create a new directory. I am naming my Directory as `C-Tutorial `. In this directory, create a new file which will contain your `C Source Code` and then paste the following code:

```C
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

After you are done creating your Source Code File,  fire up your Terminal/Bash and follow the following steps:

Navigate to the directory where you downloaded the `wasi-sdk` directory and inside that directory navigate to `~/Downloads/wasi-sdk-{Release_Version}/bin/clang`.  You can replace the `{Release_Version}` with the specified version of `wasi-sdk` that you have downloaded at the time you are following this tutorial. In my case it is `wasi-sdk-14  

The `wasi-sdk` provides a `clang` which is configured to target WASI and we will use that in order to generate our WASM Binary.

```bash
~/Downloads/wasi-sdk-14.0/bin/clang demo.c -o demo.wasm
```

Now you will have your WASM Binary `demo.wasm ` in your `C-Tutorial` directory and now you can run it on Wasmtime. 

`wasmtime demo.wasm`

Additionally, you can also run it in the `Enarx Keep` as well:

`enarx run demo.wasm`