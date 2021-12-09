# TEEs
A TEE is Trusted Execution Environment.  We (Enarx) define a TEE as "a hardware-based technique for securing sensitive data and algorithms in such a way that even the kernel, root user or hypervisor can't see what's going on."  Examples are AMD's SEV, Intel's SGX and IBM's PEF.  When you need to secure a workload using TEE technology on a host machine, you create a TEE instance.  Intel's SGX calls this an "enclave", AMD's SEV calls this a "secure VM".  We call it a "Keep".

In order to use a TEE instance - or a Keep - you need to ensure that it's genuine.  This happens via a process called "attestation".  Attestation is a key part of the Enarx project.

## What's the difference between a TPM and a TEE instance?
You could implement many of the capabilities of a TPM within a TEE, but it doesn't make sense to create a "full" TPM implementation within a TEE on two levels:
* One of the key points of a TPM is that it's linked to the hardware, meaning that the boot sequence can be tied into PCRs (Platform Configuration Registers). TEEs aren't necessarily suitable as Hardware-Based Roots of Trust.
* Enarx provides a general processing environment.  The capabilities of a TPM are carefully scoped, and to meet the requirements of the TCG (Trusted Computing Group, the standards body for TPMs), you need to implement these very carefully.

Neither of these points is to suggest that you shouldn't consider using a Enarx Keep for some of the tasks which, until now, have been best suited to a TPM, including key management and cryptographic operations: these are, in fact, definitely great uses for Enarx Keeps. But a TEE instance offers a much greater set of capabilities, and should generally be much, much faster than a TPM.

## What's the difference between an HSM and a TEE instance?
HSM's (Hardware Security Modules) generally provide higher levels of protection than TEEs, but are separate modules, accessed via PCI bus, network, etc. TEEs are integral to the CPU packages on a motherboard.  Both HSMs and TEE instances can be used as general-function processing units (depending on the model), and both can be programmed for particular uses (e.g. PKCS#11 modules). The cost of HSMs is high (typically thousands of dollars), whereas TEEs are integral to a chipset. The work to program an HSM for a specific task (beyond a modular use) is typically very difficult and highly skilled.

## Further reading
- [Hardware with TEE support](Hardware)
- [Vulnerabilities in and attacks on TEEs](Vulnerabilities-Attacks)
- [Current Trusted Execution Environement Landscape](https://next.redhat.com/2019/12/02/current-trusted-execution-environment-landscape/), long-form article published in February 2020 by members of the Enarx team.
