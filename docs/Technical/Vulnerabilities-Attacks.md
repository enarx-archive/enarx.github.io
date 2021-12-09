# Vulnerabilities and Attacks

This page will attempt to list the know vulnerabilities of the various TEEs of interest to the Enarx project, as well as their status ("fixed in version X") and workarounds, if any.

They are organised by technology and by date, trying to separate between attacks relating to the hardware itself and those relating to their respective SDKs.

Each technology will also be introduced by a section presenting its inherent limitations: while not vulnerabilites *per se*, as they are part of of the respective threat models, they can be useful to have in mind when considering the overall picture.

**Note**: this page is very much a work in progress. Any help is welcome to help make it more complete.

# Intel SGX
## SDK-related
help welcome :)

## Hardware-related
### Malware Guard Extension: Using SGX to Conceal Cache Attacks
- Type:
- Date: 2017-02
- By: Graz University of Technology
- Paper: [Malware Guard Extension: Using SGX to Conceal Cache Attacks](https://arxiv.org/abs/1702.08719)
- More info:
- Countermeasures:
- Fixed in: ?


### Prime + Probe
- Type: side channel (DRAM cache)
- Date: 2017
- By: Graz University of Technology
- Paper:
- More info: ?
- Countermeasures: [DR.SGX](https://arxiv.org/abs/1709.09917)
- Fixed in: ?


### SgxPectre
- Type: side channel (Spectre variation)
- Date: 2018
- By: Ohio State University
- Paper: [SgxPectre Attacks: Stealing Intel Secrets from SGX Enclaves via Speculative Execution](https://arxiv.org/abs/1802.09085)
- More info: https://github.com/osusecLab/SgxPectre
- Countermeasures:
- Fixed in: ?

### Foreshadow
- Type: speculative execution attack (Spectre variation)
- Date: 2018-08
- By: [imec-DistriNet, KU Leuven](https://distrinet.cs.kuleuven.be/), [Technion](https://www.technion.ac.il/en), [University of Michigan](https://www.umich.edu/), [University of Adelaide](https://www.adelaide.edu.au/)/[CSIRO's Data61](https://data61.csiro.au/). Earlier work by [LSDS Group](https://github.com/lsds/spectre-attack-sgx) from the Imperial College London
- Paper: https://foreshadowattack.eu/foreshadow.pdf
- More info: https://foreshadowattack.eu/
- Countermeasures:
- Fixed in: ?

### Plundervolt
- Type: Side channel (subtype: fault injection attack)
- Date: 2019-07
- By: [University of Birmingham](https://www.birmingham.ac.uk/research/centre-for-cyber-security-and-privacy/index.aspx), [imec-DistriNet, KU Leuven](https://distrinet.cs.kuleuven.be/), [Graz University of Technology](https://www.iaik.tugraz.at/)
- Paper: https://plundervolt.com/doc/plundervolt.pdf
- More info: https://plundervolt.com/
- Countermeasures: From the paper: "... countermeasures cannot be implemented at the level of the untrusted
OS or in the untrusted runtime components. Instead, two possible approaches to mitigating Plundervolt are possible: preventing unsafe undervolting directly at the level of the CPU hardware and microcode, or hardening the trusted in-enclave code itself against faults."
- Fixed in: N/A

### Practical Enclave Malware with Intel SGX
- Type:
- Date: 2019
- By: Graz University of Technology
- Paper: https://arxiv.org/abs/1902.03256
- More info:
- Countermeasures:
- Fixed in: ?

### MicroScope
- Type: side channel
- Date: 2019
- By:
- Paper: http://dl.acm.org/citation.cfm?doid=3307650.3322228
- More info:
- Countermeasures: ?
- Fixed in: ?

### Load Value Injection (LVI)
- Type: transient-execution attack ("reverse Meltdown")
- Date: 2019-03-10
- By: [imec-DistriNet, KU Leuven](https://distrinet.cs.kuleuven.be/), [Worcester Polytechnic Institute](https://www.wpi.edu/), [Graz University of Technology](https://www.iaik.tugraz.at/), [University of Michigan](https://www.umich.edu/), [University of Adelaide](https://www.adelaide.edu.au/)/[Data61](https://data61.csiro.au/)
- Paper: https://lviattack.eu/lvi.pdf
- More info: https://lviattack.eu
- Countermeasures: Hardware
- Fixed in: ?

# AMD SEV
## SDK-related
help me :)

## Hardware-related
### SEVered
- Type: side channel (page fault)
- Date: 2018-05
- By: AISEC Fraunhofer
- Paper: [SEVered: Subverting AMD’s Virtual Machine Encryption](https://arxiv.org/abs/1805.09604)
- More info:
- Countermeasures: ?
- Fixed in: ?

# IBM PEF
N/A
