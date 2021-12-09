# Enarx

Enarx is a framework for running applications in TEE instances – which we refer to as “Keeps”–without the need to trust lots of dependencies, without the need to rewrite the application, and without the need to implement attestation separately.

Enarx aims to minimize the trust relationships required when executing applications, meaning that the only components which need to be trusted are: the CPU and associated firmware, the workload itself, and the Enarx middleware, which is fully open source and auditable. Applications run without any of the layers in the stack (e.g. hypervisor, kernel, user-space) being able to look into or alter the Keep or its contents.

It provides a WebAssembly runtime, based on wasmtime, offering developers a wide range of language choices for implementation, including Rust, C, C++, C#, Go, Java, Python and Haskell. It is designed to work across silicon architectures transparently to the user so that the application can run equally simple on Intel platforms (SGX or the recently-announced TDX), AMD platforms (SEV) or forthcoming platforms such as Arms’ Realms and IBM’s PEF - all without having to recompile the application code.

Enarx is CPU-architecture independent, enabling the same application code to be deployed across multiple targets, abstracting issues such as cross-compilation and differing attestation mechanisms between hardware vendors.

Enarx provides attestation, packaging and provisioning of the application to take place in a way which is transparent to the user. Every instance of an application goes through three steps:
* Attestation: Enarx checks that the host to which you’re planning to deploy is a genuine TEE instance.
* Packaging: Once the attestation is complete and the TEE instance verified, the Enarx management component encrypts the application, along with any required data.
* Provisioning: Enarx then sends the application and data along to the host for execution in the Enarx Keep.

At no point is the host system able to look inside or change the code or data within a Keep. Thus, Enarx allows organizations with sensitive code or data to run their applications with strong integrity and confidentiality protections.