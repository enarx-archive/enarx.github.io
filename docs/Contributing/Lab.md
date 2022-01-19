# Lab Machines

Enarx requires specific hardware to run – and by extension to develop – namely a CPU with a supported Trusted Execution Environment.

Thanks to [Packet.com](https://packet.com), we have some lab machines available, with direct hardware access (bare metal). These machines are open to the community to work on.

This document explains the rules regarding these machines as well as how to access them and use them.

## Obtaining access

Access to the Enax Lab machines is relatively open, and the machines are intended to be used by the community. We do expect you to have started contributing to the project and to know you a minimum first, so please join the [chat](https://chat.enarx.dev) if you haven't already done so.

If you would like access to the Enarx infrastructure, please add yourself to both `users.conf` and `sshkeys.conf` at GitLab by doing a merge request:

https://gitlab.com/enarx/lab

Once the lab machines have been rebooted to pick up the changes, you can log into them using ssh with your ssh key. 

You must follow the rules laid out in the kickstart file, reproduced below for clarity:

```
## Interactive User Policy
## 1. User names MUST match GitHub/GitLab accounts
## 2. Users MUST be locked
## 3. Users MUST define an ssh key
```

Don't forget to also pick a user and group ID (uid, gid). Use the next available number, by looking at the currently used ones.

Regarding SSH keys, please try to stick to something modern.

## Using the lab machines

We currently have two lab machines:

An AMD SEV box, at milan.sev.lab.enarx.dev.

An Intel SGX2 box, at icelake.sgx.lab.enarx.dev.

### Connecting to the machines

Once your user has been created and SSH key authorized, you can connect using SSH:

```
ssh my-github-username@milan.sev.lab.enarx.dev
```

### Adding software packages

If you need to change the enarx infrastructure, please file a Merge Request
against the appropriate container. Once your merge request is merged,
we will reboot the lab systems to pick up the new settings.

### Report issues

If you found and issue with our Lab machines, please file it on GitLab. If you have a proposed solution, please file a merge request on GitLab.

[File issue for Lab machines](https://gitlab.com/enarx/lab/-/issues) 

### Installing Rust

Given Enarx is written in Rust, you will want to install Rust and Cargo, its package manager.

To do so, follow the instructions in [How to contribute code](Code#rust) and install Rust to your home directory via rustup.rs.

### Maintaining long-running sessions

The lab machines have `tmux` installed, which will enable you to leave things running (such as compilation jobs).  

If you are new to tmux, this [crash course](https://thoughtbot.com/blog/a-tmux-crash-course) and [detailed walkthrough](https://thevaluable.dev/tmux-boost-productivity-terminal/) of a possible Tmux workflow may come in handy.