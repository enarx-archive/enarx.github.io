List of project ideas for 2022:
- [Attested SSH](#attested-ssh)
- [WASI Test Suites](#wasi-test-suites)
- [WASI HTTP Support](#wasi-http-support)
- [Enarx HTTP Demo](#enarx-http-demo)

## Attested SSH
With the move within the industry to blind hypervisors, there is going to be a trend where cloud providers provision customer provided VM images into realms. However, how can the customer be sure that the VM they are communicating with (typically via SSH, at least to start) is inside a realm and the image they provided?
This proposal will integrate an attestation flow into the SSH protocol, to assure users of these facts. As a first step, this should be done with AWS Nitro enclaves (as this is likely the easiest), but can be extended to other technologies, such as AMD SEV, Intel SGX, or Arm CCA. Ideally, the solution will utilize the Proxy Attestation infrastructure from the Veracruz project.

### Expected outcomes
Users should have the option of transparently SSHing into protected VMs and automatically be assured that it is protected and is their image. It should be as easy as SSH is today, to encourage client take-up.

- Platform-specific details must be transparent to the user of the SSH client
- Details in addition to the typical SSH workflow should be as minimal as possible (I see no way to prevent the user from having to provide a hash of the VM image, however)
- It should be possible, but not required, to perform attestation on each SSH connection. Caching of attestation data, or even saving the enclave public key, may be beneficial.

The usability of the SSH connection should be the same as one without attestation.

### Skills required/preferred
- Rust programming
- Familiarity with Linux
- Familiarity with Docker
- Familiarity with AWS services
- (preferred) Familiarity with Attestation protocols used in various enclave technologies

### Possible mentors
- Derek D. Miller
- Thomas Fossati

### Expected size of project
175 hours

### Difficulty
Medium

## WASI Test Suites
The project aims to build a WebAssembly System Interface (WASI) test suites covering the behaviors of most, if not all, popular WASM engines, which would be a valuable resource for the wider WebAssembly (WASM) community.

Veracruz, an adopted project of the Confidential Compute Consortium (CCC), provides a solution to privacy preserving computation. Veracruz uses WASM internally and support WASI, a recent proposal that standardizes the OS-like interface between the host and WASM sandboxing. However, the behaviors are not clear in the current WASI proposal; many APIs are simply described to match POSIX, without referencing a clear version or additional documentation. The project aims to develop a test suite for WASI by investigating existing POSIX test suites and WASM engines. We plan to adopt as many test cases as possible from exiting POSIX test suites and test them on several WASM engines such as Lucet, Wasmtime, Wasmer and WAMR with the goal to cover much behaviors if not all. 

### Expected outcomes

The expected outcome of this internship is a WASI test suite, a report of the testing results on popular WASM engines and, in an ideal situation, a docker environment as the testing infrastructure.

### Skills required/preferred
- Programming in C or Rust (Required)
- Linux (Required)
- WebAssembly (Preferred)
- Understanding of POSIX (Preferred)
- Git (Nice to have)
- Docker (Nice to have)

### Possible Mentors
- Shale Xiong
- Christopher Haster

### Expected size of Project
350 hours

### Difficulty
Hard

## WASI HTTP Support

WASI (WebAssembly System Interface) provides a wide array of POSIX-compatible APIs, including support for standard I/O, networking, file I/O, filesystem manipulation, and memory management. As of now, WASI supports TCP connections and the project aims to expand this to support HTTP Requests.

### Expected outcomes

The expected outcome would be a simple HTTP server allowing developers to deploy microservices running from TEEs (Trusted Execution Environment) using frameworks like axum, hyper, and tokio.

### Skills required/preferred
- Programming in C (Required)
- Programming in Rust (Required)
- Understanding of POSIX (Preferred)
- WebAssembly (Preferred)
- Git (Preferred)

### Possible Mentors
- Harald Hoyer

### Expected size of Project
175 hours

### Difficulty
Medium

## Enarx HTTP Demo

The project aims to implement a Single Page Application to consume Web services served by a microservice running on a TEE (Trusted Execution Environment). The frontend can be implemented using any modern JavaScript framework, including React, Vue, or Svelte.

### Expected outcomes

The expected outcome would be a frontend that interacts with a microservice running on a TEE seeking to demonstrate Confidential Computing. The demo would have application for real-world cases like Banking/Finance or Healthccare which deal with sensitive data and are strongly regulated.

### Skills required/preferred
- JavaScript framework (Required)
- WebAssembly (Preferred)
- Git (Preferred)

### Possible Mentors
- Nick Vidal

### Expected size of Project
175 hours

### Difficulty
Easy