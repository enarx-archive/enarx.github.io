# Hardware and CPU

This page lists Trusted Execution Environment-enabled hardware.
It is also compiled with Enarx in mind (ie: some hardware that may have TEE functionality but not in ways that suit the Enarx project's goals).

## AMD
### SEV
- EPYC CPUs

Ryzen and Ryzen Pro don't have SEV support ([source](https://github.com/AMDESE/AMDSEV/issues/1)).

## Intel
### SGX
Note: needs to be SGX 2

- 10th Gen Core CPUs: support should be guaranteed
- 9th Gen Core CPUs: could work, but harder to get to work

A helpful list of hardware with SGX support can be found [here](https://github.com/ayeks/SGX-hardware/).
