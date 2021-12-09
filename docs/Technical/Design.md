# Design Principles

The Enarx project adheres and champions the following Design Principles:

1. Minimal Trusted Computing Base
   1. Every line of code in the computing base represents a possible way for the host to attack the tenant's code and data. Care will be taken to have as few lines of code as possible inside our trusted computing base. All trusted code will be measured for the code-owner's validation.
1. Minimum trust relationships
   1. Every component of the host machine on which a Keep is running is explicitly untrusted with the exception of…
      1. …the CPU and its firmware. All programs must trust the processor on which they run, as this is the minimum capability required for execution.
      1. …the Enarx Keep platform. Enarx will deliver all additional code to enable the core application runtime.
1. Deployment-time portability
   1. Applications deployed with Enarx can be redeployed on different CPU architectures without recompilation.
   1. The set of trusted CPUs is a deployment-time configuration.
1. Network stack outside the TCB
   1. Network stacks are large, complex and buggy, offering opportunities for privilege escalation and compromise.  Enarx aims to provide a small, easily-auditable TCB, and as a result chooses to use Operating-System provided networking, whilst managing encryption/decryption of packets within the Keep.
1. Security at rest, in transit and in use
   1. Enarx encrypts all data stored or transmitted from within a Keep at rest and in transit by default.
   1. Enarx is designed to enable deployment best practices, including automated, short-running Keeps.
   1. Enarx aims to make redeployment of Keeps trivial. Therefore, migration of Keeps is not supported.
1. Auditability 
   1. Code in Enarx will be crafted to be easily auditable.
   1. Enarx code will be broken into small, independent components that are easy to understand.
   1. Run-time modularity of the core platform makes auditing difficult and is to be avoided.
1. Open source
   1. This guarantees people can tailor the software to their needs.
   1. It is also the best way to provide auditability to all, and not just to some.
   1. Enarx is published under the Apache 2.0 licence.
1. Open standards 
   1. Enarx uses well-known, shared open standards where possible, and aims to work to bring new ones into existence where necessary.
1. Memory safety
   1. Enarx uses programming languages that encourage memory safety to reduce memory corruption costs.
   1. Exceptions to this policy need to be clearly justified, limited in scope and publicly documented.
   1. The primary programming language of Enarx is Rust.
1. No backdoors
   1. The Enarx project founders and core team take a strong view that backdoors in software, firmware or hardware are never a good idea, and pledge to resist any attempts by any parties (internal or external to the project, commercial, charitable or governmental, from whatever jurisdiction) to insert backdoors into any aspect of Enarx, or to encourage, force or cajole any such backdoors to be inserted.
