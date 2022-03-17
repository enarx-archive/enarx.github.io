# WebAssembly with Golang

![Golang Webassembly](/img/tutorial/golangWasi.jpg?raw=true)

## Environment setup

To compile this demo, you must install the following:

### Golang

Go to [go.dev](https://go.dev/) and follow the instructions.

### Tinygo

A Go compiler intended for use in small places such as microcontrollers, WebAssembly (Wasm), and command-line tools

Go to [tinygo.org](https://tinygo.org/getting-started/install/) and follow the instructions.

Please note: Tinygo requires golang version 1.15 through 1.17

### Wasmtime

You will find wasmtime at [wasmtime.dev](https://wasmtime.dev/)

## Go Code

Let's create a simple Go program that caculates the fibonacci sequence of an integer input.

Create a folder "Golang-to-WASI":

```bash
cd Golang-to-WASI
go mod init Golang-to-WASI
```

Create a file `main.go`, and add the following:

```go
// Simple Program to calculate fibonacci of input

package main

import "fmt"
func FibonacciRecursion(n int) int {
    if n <= 1 {
        return n
    }
    return FibonacciRecursion(n-1) + FibonacciRecursion(n-2)
}

func main(){
    fmt.Print("Enter number : ")
    var n int
    fmt.Scanln(&n)
    
    fmt.Println("Fibonacci of", n , "is", FibonacciRecursion(n));
}


```
## Compiling the Go code

1. Compile using `go` 

```bash
go run main.go
```

![Golang Screenshot1](/img/tutorial/golangRunScreenshot.png?raw=true)


2. Compile to WASM using the following command:

```
tinygo build -wasm-abi=generic -target=wasi -o main.wasm main.go
```

3. The wasm file created in the folder:

```bash
file main.wasm
```

4. wasm runtime
```bash
wasmtime main.wasm
```
![Golang Screenshot2](/img/tutorial/golangWasmScreenshot.png?raw=true)
