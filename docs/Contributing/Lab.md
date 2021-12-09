# Lab Machines

Enarx requires specific hardware to run – and by extension to develop – namely a CPU with a supported Trusted Execution Environment.

Thanks to [Packet.com](https://packet.com), we have some lab machines available, with direct hardware access (bare metal). These machines are open to the community to work on.

This document explains the rules regarding these machines as well as how to access them and use them.

## Obtaining access

Access to the Enax Lab machines is relatively open, and the machines are intended to be used by the community. We do expect you to have started contributing to the project and to know you a minimum first, so please join the [chat](https://chat.enarx.dev) if you haven't already done so.

Practically, to request access, you will need to open a Pull Request against the [enarx/packet.com](https://github.com/enarx/packet.com) repository, adding your user and SSH key to the Kickstart file used to configure the server (`enarx.ks`).

You must follow the rules laid out in the kickstart file, reproduced below for clarity:

```
## Interactive User Policy
## 1. User names MUST match GitHub accounts
## 2. Users MUST be locked
## 3. Users MUST define an ssh key
```

Don't forget to also pick a user and group ID (uid, gid). Use the next available number, by looking at the currently used ones.

Regarding SSH keys, please try to stick to something modern.

You can use [one of the previous](https://github.com/enarx/packet.com/pull/17/files) PRs as a model.

## Using the lab machines

We currently have three lab machines:

An AMD SEV box, at rome.sev.lab.enarx.dev.

Another AMD SEV box, at milan.sev.lab.enarx.dev.

An Intel SGX2 box, at coffeelake.sgx.lab.enarx.dev.

These machines are running Fedora (32, currently), with SELinux enforcing (of course).

### Connecting to the machines

Once your user has been created and SSH key authorized, you can connect using SSH:

```
ssh my-github-username@rome.sev.lab.enarx.dev
```

### Adding software packages

To request installation of software, please file a PR adding the package to the `enarx.ks`

### Installing Rust

Given Enarx is written in Rust, you will want to install Rust and Cargo, its package manager.

To do so, follow the instructions in [How to contribute code](Code#rust) and install Rust to your home directory via rustup.rs.

### Maintaining long-running sessions

The lab machines have `tmux` installed, which will enable you to leave things running (such as compilation jobs).  

If you are new to tmux, this [crash course](https://thoughtbot.com/blog/a-tmux-crash-course) and [detailed walkthrough](https://thevaluable.dev/tmux-boost-productivity-terminal/) of a possible Tmux workflow may come in handy.