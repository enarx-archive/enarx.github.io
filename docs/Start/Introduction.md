# Introduction

As organizations from different sectors move their computing workloads across multiple environments, from on-premises to public cloud to Edge, they require greater assurances that their sensitive code and data are protected. This is especially true for sectors like banking & finance; government & public sector; telecommunications; Internet of Things (IoT); healthcare (e.g. HIPAA); customer data (e.g. GDPR); sensitive enterprise functions; defence; and human rights.

There are three states in which data can be protected: at rest, in transit, and in use. Encrypting data at rest and in transit have become a common practice in cloud computing, while encrypting data in use (the core idea behind Confidential Computing) is still an emerging concern:
* Data at rest includes files, objects, and storage.
* Data in transit includes data that is moving from one location to another such as across the Internet or a private network.
* Data in use is data that is being processed in the CPU or memory.

When running a workload in the public cloud, either as a VM or container, the workload is susceptible to being tampered with by any individual or software with access to the host system. Even if the cloud provider has strict security policies, the workload is still susceptible if the host system itself has been compromised, including the operating system, firmware libraries, hypervisor, application stack, third party libraries, middleware, and drivers.

Trusted Execution Environments (TEEs) provide a hardware-based solution to this need to maintain data confidentiality and integrity in use, regardless of who might own or have access to the host system on which the application is running.