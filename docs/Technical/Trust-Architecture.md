# Trust Architecture

Exactly what layers in the stack trust each other is a key issue for Enarx.  This diagram gives a simple view of the various layers in the VM case (e.g. with [AMD SEV](https://github.com/enarx/enarx/wiki/SEV-architectural)), and what their role is.

![Enarx trust architecture (VM case)](https://raw.githubusercontent.com/enarx/enarx.github.io/main/assets/images/trust-architecture.png)

Enarx provides four layers in the run-time stack.  Working from the lowest up, they are:
1. a VMM (Virtual Memory Manager)
2. a microkernel (μkernel)
3. a WASM runtime (WebAssembly)
4. a WASI implementation (Web Assembly System Interface).

All of these are cryptographically measured and checked at runtime before each deployment.  They are not the only layers in the stack, however.  Others include the CPU (in which layer we also include CPU firmware), the host kernel and the application itself.  See below for a little more detail about the trust architecture.

Note: Enarx does not use a TPM as part of its trust architecture.  See [Is Enarx a host attestation project?](FAQ#is-enarx-a-host-attestation-project) and [Does Enarx use/need a TPM?](FAQ#does-enarx-useneed-a-tpm) on the [FAQ page](FAQ) for more details.

In this discussion, the party doing the trusting (the "trustor") is the tenant, or client: the entity wishing to execute a workload, referred to in this architecture as the "application".  A fundamental principle of the Enarx project is that the client does *not* trust the host, its owner or operator.  Although the host's owner (or the host's operator) may have trust requirements, these are not addressed in this discussion.

## Components and associated trust domains

### CPU
**Status:** Trusted :green_heart: 

In order to do any standard computation, the CPU must be trusted to perform operations.  In the Enarx trust model, the validity of the CPU and firmware are both checked cryptographically at runtime, as they provide the hardware root of the trust for the entire architecture.  If either is found not to be valid, then the provisioning components of the Enarx system will not schedule an application to run on the host.

### Kernel
**Status:** Untrusted :red_circle:

The kernel is that which is provided by the host on which the Enarx Keep is to be created.  It is under the control of the host's owner/operator, and is therefore untrusted by the client.

### VMM (Virtual Memory Manager)
**Status:** Untrusted :red_circle:

The VMM is provided by Enarx, and provides memory management for processes within the Enarx Keep, but is untrusted: specifically, it has access only to encrypted memory pages.

### Microkernel (μkernel)
**Status:** Trusted :green_heart:

The microkernel is provided by Enarx, and is trusted to perform standard kernel operations.  

### WASM (WebAssembly runtime)
**Status:** Trusted :green_heart:

The [WASM](https://webassembly.org/) runtime is provided by Enarx, and is trusted to provide the runtime for the application within the Enarx Keep, and includes silicon architecture specific JIT (Just In Time) compilation for performance optimisation.

### WASI (WebAssembly System Interface) 
**Status:** Trusted :green_heart:

The [WASI](https://wasi.dev/) layer is provided by Enarx, and is an interface for WebAssembly applications running on server-type systems (rather than in browsers, for instance).  It is focused on security and portability, and is trusted.

### Application
**Status:**  Trusted :green_heart:

The application layer is the workload provided by the client to run within the Enarx Keep.  It is not provided by Enarx, but is considered trusted by the client as it was provided by them.

## Diagram of Enarx components
Here is another view of the detail of Enarx components:  
![Enarx component details image](https://raw.githubusercontent.com/enarx/enarx.github.io/main/assets/images/enarx-component-detail.png)
