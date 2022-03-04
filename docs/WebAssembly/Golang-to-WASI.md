# WebAssembly with Golang

![Golang Webassembly](https://raw.githubusercontent.com/jnyfah/enarx.github.io/main/static/img/golang-wasi.jpg)

## Environment setup

To compile this demo, you must install the following:

### Golang

Go to [go.dev](https://go.dev/) and follow the instructions.

### Tinygo

A Go compiler intended for use in small places such as microcontrollers, WebAssembly (Wasm), and command-line tools

Go to [tinygo.org](https://tinygo.org/getting-started/install/) and follow the instructions.

please note: Tinygo requires golang version 1.15 through 1.17

### Wasmtime

You will find wasmtime at [wasmtime.dev](https://wasmtime.dev/)

## Go Code

we would create a simple Go program that calculates caculates the fibonacci sequence of an integer input.

create a folder with a name of your choice, i would be using "Golang-to-WASI" as the name of my folder.

```bash
cd Golang-to-WASI
go mod init Golang-to-WASI
```
create a file `main.go`, add following code into your main.go file and save the file.

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
## Compiling Go code

1. Compile using `go` 

```bash
go run main.go
```
![Golang Screenshot1](https://raw.githubusercontent.com/jnyfah/enarx.github.io/main/static/img/golang1.png)



2. compile to WASM using the following command:

```
tinygo build -wasm-abi=generic -target=wasi -o main.wasm main.go
```

3. The wasm file created in the folder

```bash
file main.wasm
```

4. wasm runtime
```bash
wasmtime main.wasm
```
![Golang Screenshot2](https://raw.githubusercontent.com/jnyfah/enarx.github.io/main/static/img/golang2.png)
