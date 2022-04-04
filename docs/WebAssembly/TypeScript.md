# WebAssembly with TypeScript

 With TypeScript, we do not have direct support for compiling it to a WebAssembly Binary and then executing it any of the Standard WASI Runtimes. 

 But TypeScript is a very near relative of JavaScript. Most of the times TypeScript code is transpiled to JavaScript code during the Development Cycle.

 Therefore, the best approach to using TypeScript in WebAssembly is to transpile it into JavaScript and then use it. 

## Installing the TypeScript Compiler 

You will need to install the TypeScript compiler globally or in your workspace to transpile TypeScript Source Code to JavaScript.

The easiest way to install it is through npm, the Node.js Package Manager. If you have npm installed, you can install TypeScript globally on your Computer by:

```bash
npm install -g typescript
```

## Step 1: Create a Simple TS File

Open your Code Editor and then create a `index.ts` file or you can name it whatever you want. 
Now place the following code in the File:

```TypeScript
function fibonacci(num: number) {
    var a: number = 1;
    var b: number = 0;
    var temp: number;
    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }
    console.log("Fibonacci Term is:", b);
}
```

## Step 2: Transpiling it to JavaScript

Open your Terminal and type in this command:

```bash
tsc index.ts
```

Now, you will be able to see the transpiled version of your source code in JavaScript in your Directory.

Now, since you have your JavaScript code now with you, you can follow the instructions at [WebAssembly Guide with JavaScript](https://enarx.dev/docs/WebAssembly/JavaScript) and then you can compile your JavaScript code to WebAssembly. 

Note that in one of the Subsections of the Guide which is `JavaScript Code Snippet`, it is mentioned to create a new file `index.js`. Now, in that file, you can copy your JavaScript code which you just transpiled right now and substitute it in place of the existing function and you will be good to go.