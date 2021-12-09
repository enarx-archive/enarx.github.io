# Threat Model

## What is a threat model?
A threat model makes explicit the security assumptions of a project, product, tool or method. It helps both those building it, by knowing what to guard against and what is simply out of scope, and those using it, by being upfront about what it does and doesn't protect against.

## Enarx threat model

Enarx is built with these principles in mind:
* Don’t trust the **host**
* Don’t trust the host **owner**
* Don’t trust the host **operator**
* All **hardware** cryptographically verified
* All **software** audited and cryptographically verified

In short visual form:

![A representation of a computing stack, with "CPU | Firmware" at the bottom and "Application" and "Middleware" at the top. The other six middle layers in between are crossed out.](https://raw.githubusercontent.com/enarx/enarx.github.io/main/assets/images/enarx-trust-stack.png)

## Threat model detailed

Enarx takes as its core principle the exchange of computing resources by two parties that do not trust each another. Party A ("the Host") wants to offer computing resources to Party B ("the Guest") for some economic consideration. This consideration may be monetary. However, it may also be that the Host derives sufficient value from the Guest's software service to bypass further economic exchange.

### The Host does not trust the Guest

The Host wants to provide the Guest access to computing resources without the Guest being able to modify the Host's hardware, firmware, operating system or other software. Further, since the ability to introspect such services could lead to privilege escalation attacks via hardware, firmware or software exploits, or a combination thereof, the Guest should not be able to introspect the execution context the Host provides. In sum, the Host requires hardware, firmware and software privacy and integrity protection from the Guest.

Nevertheless, the Host must retain full control of resource allocation. At any time, the Host must be able to measure, restrict or terminate the use of computing resources by the Guest.

### The Guest does not trust the Host

The Guest wants access to the Host's computing resources. However, the Guest wants to maintain privacy and integrity of the data processed by its application. This requirement may come from regulations such as HIPAA or from institutional policy. Maintaining the privacy and integrity of the data also implies the need to protect the integrity of the code which processes that data. Further, the Host's ability to measure the resources of the Guest combined with knowledge of the code may lead to statistical analysis attacks on the data. Therefore, the Guest should also have privacy of its code. In sum, the Guest requires privacy and integrity protection of both its code and data from the Host.

Further, the Guest needs a guarantee that such protections will be irrevocably provided by the Host. Since the Host may be malicious or compromised, this assurance cannot come from the Host itself. Likewise, contracts or laws are both expensive to procure and fail to provide the property of irrevocability since future legal challenges may invalidate such mechanisms. A superior solution is found in having hardware which can enforce the desired protections combined with cryptographic attestation that such hardware governs the execution context.


