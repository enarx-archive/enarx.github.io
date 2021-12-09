# Introduction

We've known for a long time that we need encryption for data at rest and in transit: Enarx helps you do encryption for data in use.

Enarx is an application deployment system enabling applications to run within Trusted Execution Environments (TEEs) without rewriting for particular platforms or SDKs. It handles attestation and delivery into a run-time “Keep” based on WebAssembly, offering developers a wide range of language choices for implementation.

Enarx is CPU-architecture independent, enabling the same application code to be deployed across multiple targets, abstracting issues such as cross-compilation and differing attestation mechanisms between hardware vendors. It currently supports AMD SEV and Intel SGX.

Enarx is part of the [Confidential Computing Consortium](https://confidentialcomputing.io/) from the Linux Foundation. It was accepted as one of the consortium's founding projects on 2019-10-31.

### Use cases and applications
If you have sensitive data, or you're running sensitive workloads on your premises or in the cloud, then Enarx can help you maintain their confidentiality.  Key sectors include: banking & finance; government & public sector; telecommunications; Internet of Things (IoT); health (e.g. HIPAA); customer data (e.g. GDPR); sensitive enterprise functions; defence; Human Rights NGOs.

Specific applications which could employ Enarx to increase their security include: code execution on "at risk" hosts (e.g. automotive use, set-top boxes, Edge deployments, mobile security assets); sensitive configuration (e.g. firewall or networking); cryptographic key management (e.g. key generation, PKCS#11 key stores); logging; payment processing; policy management; proprietary algorithms (e.g. banking algorithms, big data); personal identifiable data processing (e.g. for GDPR protection or healthcare apps); remote agents (e.g. auditing or logging functions); software builds; security protocol termination points (e.g. TLS, IPSec).

### CISOs
Enarx is a project which allows you to run applications in the public cloud, on your premises - or wherever else - with significantly reduced and better quantifiable risk.  It uses hardware-based security called "Trust Execution Environments" from CPU manufacturers, and cuts out many of the layers that can be compromised.  The only components that do need to be trusted are fully open source software, which means that they can be examined and audited by industry experts and your own teams.

### Architects
Enarx is an open source project which uses TEEs (Trusted Execution Environments), to allow you to run applications within "Keeps" on systems that you don't trust.  Enarx manages the creation of these Keeps, providing cryptographic confidence that the Keeps are using valid CPU hardware and then encrypting and provisioning your applications and data to the Keep using one-time cryptographic keys.  Your applications run without any of the layers in the stack (e.g. hypervisor, kernel, user-space, middleware) being able to look into the Keep.  The Keep's run-time can accept applications written in many different languages, including Rust, C, C++, C#, Go, Java, Python and Haskell.  It allows you to run on TEEs from various CPU manufacturers without having to worry about portability: Enarx manages that for you, along with attestation and deployment.

### Developers
If you want to run applications that process sensitive data, or which implement sensitive algorithms themselves, Enarx is for you.  Enarx is a deployment framework for applications, rather than a development framework.  What this means is that you don't have to write to particular SDKs, or manage the tricky attestation steps required to use TEEs.  You write your application in your favourite language, and as long as it uses WebAssembly as a compile target, it should run within an Enarx "Keep".  Enarx even manages portability across hardware platforms, so you don't need to worry about that, either.  It's all open source, so you can look at it yourself, audit it, or even contribute (see below).

### Contributors
Enarx is an open source project (under the Apache 2.0 licence), and we welcome contributions, whether you are a developer, tester, documentation guru or other enthusiastic bod with an interest in providing a way for the rest of the world to up the security level of the applications they're running with minimal effort.  There are various components to Enarx, including attestation, hypervisor work, uni-kernel and WebAssembly run-time pieces.  We want to provide a simple and flexible framework to allow developers and operations folks to deploy applications to TEEs on any supported platform without recompilation, having to choose an obscure language or write to a particular SDK.
