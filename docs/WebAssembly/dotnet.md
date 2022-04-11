# WebAssembly With .NET 

## Environment Setup 

To Compile this demo, you must install the following: 

### Wasmtime

You will find wasmtime at [wasmtime.dev](https://wasmtime.dev/)

### .NET Preview Version(7.0.0-preview.2)

Important Note:
You must download and install this preview version of .NET 7.0.0-preview.2 in order to get this demo working. 
With other versions of .NET, this demo will not compile and hence you will not be able to run it. 

You can download it here: [.NET Preview Version](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)

### Workflow

We will use the [Experimental WASI SDK for .NET Core](https://github.com/SteveSandersonMS/dotnet-wasi-sdk) in order to get this demo up and running. 

### Step 1

First we will have to create a new .NET Console Application and we can create one using the following 
command:

```bash
dotnet new console -o MyFirstWasiApp
```

You can name your Console Application as per your requirements in my case, I have named it `MyFirstWasiApp`

Note that by default, the canonical example that is being used when you build the Console Application in Step 1, is a Hello World Example that will return `Hello World` as a result to the Console. 

Since we are following a standard convention of using the Fibonnaci Code Snippet in every Guide, you can replace the existing code which is present in the `Program.cs` file by this:

```C#
using System;

namespace MyFirstWasiApp
{
    public class Program
    {

        public void fibonacci(ref int num){
            int a=1,b=0,temp;
            while(num >= 0){
                temp=a;
                a=a+b;
                b=temp;
                num--;
            }
            Console.WriteLine("Fibonacci Term is: "+b);
        }
    

        public static void Main(string[] args)
        {
            Program p = new Program();
            int num=10;
            p.fibonacci(ref num);
        }
        
    }
}
```
Also Note that the With the current State of the `Experimental WASI SDK` it does not allow to take user input through the Console through the `ReadLine()` method. 

### Step 2

Navigate to the newly created Console Application Directory:

```bash
cd MyFirstWasiApp
```

### Step 3

Now, in this third step, we will have to import the 
`Wasi.Sdk` package to our Console Application in so that our WASM Binary can have support for WASI Bindings.

```bash
dotnet add package Wasi.Sdk --prerelease
```

### Step 4 

Finally, you can build your application now using the following command: 

```bash
dotnet build
```

Now, you will be able to see your Output WebAssembly Binary that this produces in the following Directory:
`bin/Debug/net7.0/MyFirstWasiApp.wasm`. 

Now, you can run it on Wasmtime by executing: 
```bash
wasmtime run MyFirstWasiApp.wasm
```