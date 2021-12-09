# Intel SGX
### Hardware requirements
A system with SGX 2 and EDMM support.

## Attestation overview
* SGX assumes that clients want proof that the application should be allowed to run within the enclave, and therefore applications need to be signed by Intel (or chain does…). 
  * Note that (as of 2017-07-04), as currently implemented in upstream Linux code, this requirement is loosened, and anybody can run anything in the enclave.  
* While it is still common practice to involve Intel's or other 3rd party hosts in attestation, Enarx makes use of Intel's [Data Center Attestation Primitives](https://github.com/intel/SGXDataCenterAttestationPrimitives/blob/master/README.md), which allows the attestation process to involve the attesting and attested parties only.
