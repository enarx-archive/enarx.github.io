# Introduction

In this guide, you'll find a walkthrough of the Enarx repositories on [GitHub](https://github.com/enarx). The outline of the Enarx repositories are:

## Main crates

- [enarx](enarx):
  - src: backends (code that runs in the host side)
  - internal: wasmldr, shin-sev, shin-sgx
  - examples: tcp_server
  - tests
  - helper
- [sallyport](sallyport): communication channel between untrusted host and guest: mostly syscalls.

## Secondary crates

- [ctr0stack](ctr0stack): read write stack from Linux kernel for things like environment variables
- [vsdo](vsdo): used by SGX to enter an enclave
- [rct1](rct1): load binary from disk (static or dynamic)
- [xsave](xsave): save x86 cpu state
- [flagset](flagset): handle flags
- [sgx](sgx): set of data structures related to SGX
- [mmarinus](mmarinus): rust mmap (memory map) wrapper (runtime-safe)
- [iocuddle](iocuddle): rust ioctl (input/output control) wrapper (runtime-safe)
- [noted](noted): macro to generate notes (define size of enclave, etc)

## Helper crates

- [lset](lset): types for measuring linear sets
- [nbytes](nbytes): define constants
- [uabs](uabs): calculates the absolute value of input and returns unsigned integer
- [signrel](signrel): maps relationships between integers that only differ by signedness

## Lab machines & workflow

- [linux](linux): used by the Lab machines (SGX and SEV)
- [spdx](spdx): GitHub Actions to find OSI license (written in Python)