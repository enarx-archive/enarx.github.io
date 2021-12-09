# AMD SEV
### Hardware requirements
A system with SEV.

### Attestation overview
* SEV is targetted at secure VMs.  You attest to a signature by AMD, which includes a hash of something they call firmware in this context.  This firmware is basically code injected into the VM. This firmware allows host to have some code within the TEE: that code will form an Enarx Keep.
* Enarx will run as this “firmware”, which is essentially injected into the VM.  AMD will provide a signature from a key burned into the CPU over a hash of the firmware that it is going to be loaded.