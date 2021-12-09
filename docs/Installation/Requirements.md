# Requirements

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
- Is there IPMI support on the NUC7CJYH?
  - There is a similar technology called Intel AMT ([ref1](http://blog.dustinkirkland.com/2013/12/why-i-returned-all-of-my-i3-intel-nucs.html), [ref2](https://www.intel.com/content/www/us/en/support/articles/000026592/technologies.html)) that is present on NUCs with `i5` Ivy Bridge processors. 
  - Running an [AMT check](https://github.com/mjg59/mei-amt-check) on the NUC7CJYH produces the result `Error: Management Engine refused connection. This probably means you don't have AMT`
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