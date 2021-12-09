Here are two short demo videos of an early (late 2019) build of core Enarx functionality in action.

They show the same example being run on two different underlying physical TEE technologies, [AMD SEV](https://github.com/enarx/enarx/wiki/SEV-architectural) and [Intel SGX](https://github.com/enarx/enarx/wiki/SGX-architectural).

## AMD SEV
In this first example, you can see a Keep being initiated using AMD SEV and executing a simple addition.

[![Enarx SEV demo video](https://github.com/enarx/enarx.github.io/blob/master/assets/video/enarx-SEV-demo-video-2019.gif)](https://raw.githubusercontent.com/enarx/enarx.github.io/master/asets/video/enarx-SEV-demo-video-2019.webm)

### Building the demo

Want to try it out for yourself? Make sure you've got everything you need
before you begin:

#### Prerequisites

* An AMD processor with SEV capabilities (EPYC)
* A Linux kernel with `CONFIG_KVM_AMD_SEV` enabled (set to 'y') with the appropriate
  kernel command line parameters set: `mem_encrypt=on kvm_amd.sev=1`
  * NOTE: The above requirements are out of scope for this document. Please refer to
    the following resources and/or your favorite internet search engine to get started.
  * [How do I build the Linux kernel?](https://kernelnewbies.org/KernelBuild)
  * [How do I set kernel command line parameters?](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/system_design_guide/configuring-kernel-command-line-parameters_system-design-guide)
* An [Enarx development environment](https://github.com/enarx/demo.git)
* The `wasm32-unknown-unknown` Rust toolchain target

```bash
$ rustup target add wasm32-unknown-unknown
```

* The `cmake` package must be installed to build the demo

#### Building

1. Clone the demo repository:

```bash
$ git clone https://github.com/enarx/demo.git
```
2. Enter the cloned repository and build the project:

```bash
$ cd demo
$ cargo build
```

### Running the demo

Once built, the demo can be ran like so:

```bash
$ cargo run --bin demo 3 4
```

Alternatively:

```bash
$ ./target/debug/demo 3 4
```

## Intel SGX
In this second example, the same thing is done using Intel SGX.

[![asciicast](https://asciinema.org/a/IdQsQjspjypMP6rZUVSOt240d.png)](https://asciinema.org/a/IdQsQjspjypMP6rZUVSOt240d)

# Where to next?
For more information about Enarx, please refer to the [introduction](https://github.com/enarx/enarx/wiki/Enarx-Introduction) or the [FAQ](https://github.com/enarx/enarx/wiki/Enarx-FAQ)

For more information about Enarx components, please refer to the [Enarx components page](https://github.com/enarx/enarx/wiki/Enarx-components).

For more information about TEEs, please refer to the [TEEs](https://github.com/enarx/enarx/wiki/TEEs-(Trusted-Execution-Environment)) page.
