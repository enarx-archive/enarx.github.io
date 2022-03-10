---
slug: 2022-02-05-fosdem-wasm-cc
title: "WebAssembly + Confidential Computing"
authors: [nick]
tags: [Event, Webinar]
---

**Title**: WebAssembly + Confidential Computing  
**Author**: Nick Vidal  
**Date**: Saturday, February 5, 2022, 10:55 AM - 11:20 AM  

The Enarx project reached a huge milestone: its first official release, featuring WebAssembly runtime. WebAssembly and Confidential Computing are a great match because WebAssembly offers developers a wide range of language choices, it works across silicon architectures, and it provides a sandboxed environment. This presentation will highlight the benefits of WebAssembly to Confidential Computing and showcase some demos.

_Full Abstract_

After 3 years since its inception, the Enarx project finally had its first official release, bringing WebAssembly to Confidential Computing.

Enarx is a deployment framework for running applications in TEE instances – which we refer to as “Keeps” – without the need to trust lots of dependencies, without the need to rewrite the application, and without the need to implement attestation separately.

The WebAssembly runtime, based on wasmtime, offers developers a wide range of language choices for implementation, including Rust, C, and C++. It is designed to work across silicon architectures transparently to the user so that the application can run equally simple on Intel platforms (SGX or the recently-announced TDX), AMD platforms (SEV) or forthcoming platforms such as Arms’ Realms and IBM’s PEF - all without having to recompile the application code. WebAssembly's sandbox model offers an extra layer of protection, isolating the application from the host.

**Source**: FOSDEM 2022

**Link**: https://fosdem.org/2022/schedule/track/hardware_aided_trusted_computing/