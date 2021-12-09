Enarx comprises the following components:
* Attestation
* Enarx API & core
* Enarx runtime
* Management

The following components are relevant or related to Enarx:
* Developer tools
* TLSSock

***
# Core components
## Attestation
An application which is going to run in an Enarx Keep needs to attest two things:
1. The hardware TEE (Trusted Execution Environment) providing Keeps.
1. A measurement of the Enarx runtime.  This means that Red Hat may need to launch a service to abstract attestation. The way that this works is that the client requests attestation from Enarx.  Enarx supplies a blob. The client forwards this to Red Hat. Red Hat will then complete attestation of the h/w environment and translate the measurements of Enarx into a something which allows you to identify the specific version of Enarx.


From the client’s point of view, the attestation steps of Enarx end up with the following two cryptographically validated assertions:
1. The TEE type and version;
1. The Enarx version and integrity.
The attestation processes associated with the various hardware architectures are very different (see [SEV architectural](AMD-SEV) and [SGX architectural](Intel-SGX)): providing a common mechanism to abstract this is expected to be a major part of the work associated with this project.

## Enarx API & core
This project actually defines the WASI APIs and manages the attestation for all of the TEEs.  It leverages the Enarx runtime.

## Enarx runtime
This project aims to create a reusable engine to do WebAssembly.  See [Enarx runtime](Runtime).

## Management
This project will allow orchestration and management of workloads into Enarx Keeps.

# Related components
## Developer tools
In order to address the market and encourage maximum adoption of Enarx, tools need to be enabled to allow developers to make use of Enarx as simply as possible.

## TLSSock
The intent of TLSSock is to extend POSIX APIs to support TLS and DTLS natively.  This is not to be used within the Keep: it’s to gather agreement on an API to be put into POSIX.  We hope at some point to go through the standards process so that this is accepted by the industry.  Adoption of TLSSock and associated APIs will enable applications to use the same code both from within and outside the Keep.

Crypto-agility is a strong design requirement, and there is interest in providing implementations of some of the emerging quantum-resistant algorithms (partly as supporting one or more would provide good visibility for the project).

Deemed out-of-scope:
* IPSec integration - as this operates at the interface level, not the socket level.

Issues for discussion:
* SNI support
* GSS-API support
* Hardware offload support
