# WebAssembly with Zig

![Zig Webassembly](/img/tutorial/zigWasi.png?raw=true)

## Environment setup

To compile this demo, you must install the following:

### Zig

Go to [ziglang.org](https://ziglang.org/download/) and follow the instructions.


### Wasmtime

You will find wasmtime at [wasmtime.dev](https://wasmtime.dev/)

## Zig Code

we would create a simple Zig program that calculates caculates the fibonacci sequence of an integer input.

create a folder with a name of your choice, i would be using "Zig-to-WASI" as the name of my folder.

create a file `main.zig`, add following code into your main.zig file and save the file.

```zig
const std = @import("std");

fn fibonacci(index: u32) u32 {
    if (index < 2) return index;
    return fibonacci(index - 1) + fibonacci(index - 2);
}

pub fn main() !void {
    const stdout = std.io.getStdOut().writer();
    var x: u32 = 7;
    
    try stdout.print("fibonacci of {d} ", .{x});
    try stdout.print("is: {d} \n ", .{fibonacci(x)}  );
}
```
## Compiling Go code

1. Compile using `zig` 

```bash
zig run main.zig
```
![Zig Screenshot1](/img/tutorial/zigRunScreenshot.png?raw=true)



2. compile to WASM using the following command:

```
zig build-exe main.zig -target wasm32-wasi
```

3. The wasm file created in same folder

```bash
file main.wasm
```

4. wasm runtime
```bash
wasmtime main.wasm
```
![Zig Screenshot2](/img/tutorial/zigWasmScreenshot.png?raw=true)
