# WebAssembly

The Enarx project makes heavy use of WebAssembly.
This page will tell you more about what it is, and how and why we use it.

## What's Wasm?

> WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable target for compilation of high-level languages like C/C++/Rust, enabling deployment on the web for client and server applications.

-- *[https://webassembly.org/](https://webassembly.org/)*

In simpler terms, on every system which has a Wasm virtual machine runtime, a Wasm application (binary) will run in exactly the same way. 
Notably, once an application has been compiled to Wasm, it doesn't need be recompiled in order to run it on a different system.

Although it has its roots in web browsers and has been described as *"Javascript, done right"*, it is not limited to browsers. In fact, [non-web uses](https://github.com/WebAssembly/design/blob/4d7cf2e/NonWeb.md) of Wasm were taken into account early on.

Wasm binary instructions, much like in original Assembly, operate on the machine level. Contempory programs that operate on this level -- commonly called Operating Systems -- build interfaces which mediate access to the hardware for higher-level applications.

<!-- 
TODO:
* this interface is built by the virtual machine runtime, which mediates access to real hardware
* for actual application portability there needs to be a common standard which the virtual machine runtime implementations adhere to
-->

Without a similar interface, Wasm binaries are restricted to being stand-alone applications. This means no standard to access lower layers of the software stack such as storage, which one would commonly want to use for an application running outside a browser.

This is where WASI comes in.

### Links and further documentation

- [WebAssembly.org](https://webassembly.org/)
- [WebAssembly.org: "non web"](https://webassembly.org/docs/non-web/)

## What's WASI?

> WASI is a modular system interface for WebAssembly. As described in the initial announcement, it’s focused on security and portability.

-- *https://wasi.dev*

> WASI stands for WebAssembly System Interface. It's an API designed by the Wasmtime project that provides access to several operating-system-like features, including files and filesystems, Berkeley sockets, clocks, and random numbers, that we'll be proposing for standardization.

-- [wasmtime WASI-intro](https://github.com/bytecodealliance/wasmtime/blob/6c97cfe/docs/WASI-intro.md)

WebAssembly System Interface, or WASI for short, is a proposed standard under active development to give Wasm applications standardized access to the host system.

<!-- 
TODO
* portable compilation target for application devs
* implemented by application development SDKs and toolchains
-->

If you'd like to know more about WASI, we highly recommend this blog post by Lin Clark of Mozilla: [Standardizing WASI, a WebAssembly System Interface](
https://hacks.mozilla.org/2019/03/standardizing-wasi-a-webassembly-system-interface/)

### Links and further documentation

- [Official documentation: overview](https://github.com/WebAssembly/WASI/blob/master/docs/WASI-overview.md)

## Why are we using Wasm/WASI?

Enarx chose Wasm in combination with WASI for its isolation and portability features.

### Isolation

To be more specific, Enarx needs to protect guests from hosts, but also hosts from guests. The Wasm virtual machine architecture by default protects the host from the guest, giving us the second half, while our use of Trusted Execution Environments gives us the first one.

### Portability

Enarx aims to make simple to deploy applications on any TEE technology, regardless of hardware, essentially abstracting the hardware away.

<!--Remove repetition in above sentence? -->

The WASI standard gives applications a portable compilation target, which means that you can compile your application *once* and deploy it "anywhere".
