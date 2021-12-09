# TEE

Trusted Execution Environments (TEEs) allow organizations to run applications within a set of memory pages that are encrypted with a secret key by the host CPU in such a way that these pages are not accessible to the operating system or any other software, even running at the highest privilege level.

There are currently two leading models of TEEs:
* Process-based: current implementations include Intel’s SGX (Software Guard eXtensions).
* VM-based: current implementations include AMD’s SEV (Secure Encrypted Virtualization).

Applications that need to run in a TEE must be developed specifically for each platform, and they differ significantly depending if it’s a process-based or VM-based TEE model. Additionally, they must implement something called attestation, which is a validation process for the TEE to prove that it’s genuine before it can be trusted by the application. Rewriting the application or the custom VMM that runs it, as well as the attestation, for each hardware platform is extremely complex and time-consuming.

In the next section, we will introduce Enarx, an open source framework for running applications in TEEs that addresses many of the issues raised. We’ll give a simplified overview of the component architecture of Enarx (and how it allows for support for multiple hardware platforms) and the process of creating and deploying applications to TEE instances using Enarx.