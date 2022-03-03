# Requirements

## Recommended hardware

Enarx requires specific hardware to run, namely a CPU with a supported Trusted Execution Environment. Currently, Enarx has support for Intel SGX and AMD SEV-SNP.

For Intel, our recommendation would be the 3rd Gen Intel Xeon Scalable Ice Lake. This [article](https://www.servethehome.com/3rd-gen-intel-xeon-scalable-ice-lake-sku-list-and-value-analysis/) provides a comprehensive analysis of the different models. The 5318Y or 5318S provide good value.

For AMD our recommendation would be the EPYC 7003 Milan. This [article](https://www.servethehome.com/amd-epyc-7003-milan-sku-list-and-value-analysis/) offers an analysis of the different models. The 7313 seems like a good value.

## Setting up an SGX machine
- Run a recent kernel with SGX support compiled in
- Set the SGX device node permissions

```console
# groupadd -r sgx_prv
# cat > /etc/udev/rules.d/99-sgx.rules <<EOF
SUBSYSTEM=="misc", KERNEL=="sgx_provision", MODE="0660", GROUP="sgx_prv"
SUBSYSTEM=="misc", KERNEL=="sgx_enclave", MODE="0666"
EOF
```

<!-- 
- aesmd maybe with podman? https://github.com/MADANA-IO/sgx-aesmd 
```console
# podman run --restart always -v /dev/sgx_enclave:/dev/sgx_enclave -v /dev/sgx_provision:/dev/sgx_provision --volume /var/run/aesmd:/var/run/aesmd --name aesmd ghcr.io/madana-io/sgx-aesmd:latest
```
-->

### Hardware requirements for SGX
- Is there IPMI support?
  - There is a similar technology called Intel AMT ([ref1](http://blog.dustinkirkland.com/2013/12/why-i-returned-all-of-my-i3-intel-nucs.html), [ref2](https://www.intel.com/content/www/us/en/support/articles/000026592/technologies.html)) that is present on NUCs with `i5` Ivy Bridge processors. 
  - If running an [AMT check](https://github.com/mjg59/mei-amt-check) produces the result `Error: Management Engine refused connection. This probably means you don't have AMT`
- Are there other NUC models that support SGX2?
- Are SGX features accessible from a VM?
  - There is some [experimental support](https://01.org/intel-software-guard-extensions/sgx-virtualization) for this

## Setting up an SEV-SNP machine
- install an [SEV-SNP patched kernel](https://github.com/AMDESE/linux/tree/sev-snp-part2-v5)

```console
# dnf copr enable harald/kernel-snp 
# dnf install kernel{,-core,-modules}-5.14.0-0.rc2.28.sev.snp.part2.v5.fc34.x86_64
```

- Update the machine to the latest BIOS and/or install the [latest firmware](https://developer.amd.com/sev/):

```console
$ wget https://developer.amd.com/wp-content/resources/amd_sev_fam19h_model0xh_1.2A.2A.zip
$ unzip amd_sev_fam19h_model0xh_1.2A.2A.zip
$ sudo mv amd_sev_fam19h_model0xh_1.2A.2A.sbin /lib/firmware/amd/amd_sev_fam19h_model0xh.sbin
$ sudo chown root:root /lib/firmware/amd/amd_sev_fam19h_model0xh.sbin
```

- Set SEV device node permissions

```console
# echo 'KERNEL=="sev", MODE="0666"' > /etc/udev/rules.d/50-sev.rules
```
- Increase the memlock limit for SEV keeps (need to pin a large number of pages)

```console
# echo '* - memlock 8388608' > /etc/security/limits.d/sev.conf
```
- Enable SEV

```console
# echo 'options kvm_amd sev=1' > /etc/modprobe.d/kvm-amd.conf
```

## Requirements for KVM as a backend

KVM (Kernel-based Virtual Machine) is a full virtualization solution for Linux on x86 hardware containing virtualization extensions (Intel VT or AMD-V). It consists of a loadable kernel module, kvm.ko, that provides the core virtualization infrastructure and a processor specific module, kvm-intel.ko or kvm-amd.ko.

It's not always possible to have access to hardware with the support for Intel SGX or AMD SEV-SNP, hence, enarx supports KVM to facilitate the testing on more common hardware which have virtualization support. For the KVM support, the Intel VT and AMD-V features must be provided by the hardware.

KVM module is loaded by the Linux kernel automatically if the hardware supports the feature, hence, it's easy for anyone to set it up.

To check if the kvm module is loaded use the following command:
```console
lsmod | grep kvm
```

If the module is loaded the following output should be expected
```console
kvm_intel    213   0
kvm 	      10   1 kvm_intel
```
or
```console
kvm_amd    23213   0
kvm 	      10   1 kvm_amd
```