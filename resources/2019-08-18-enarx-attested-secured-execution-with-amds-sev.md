---
slug: 2019-08-18-enarx-attested-secured-execution-with-amds-sev
title: "Enarx - Attested, Secured Execution with AMD’s SEV"
author: Nathaniel McCallum, David Kaplan
tags: [Event]
---
Enarx - Attested, Secured Execution with AMD’s SEV - Nathaniel McCallum, Red Hat, Inc. & David Kaplan, Advanced Micro Devices, Inc. AMD SEV (Secure Encrypted Virtualization) is a new CPU security technology available in AMD's EPYC processors and provides new levels of protection for virtualized workloads. AMD SEV can encrypt the memory and register state of VMs individually, isolating them from the hypervisor.  Enarx is an open source project led by Red Hat, leveraging TEEs, and providing attestation and protection for run-time workloads. It is written in Rust and aims to reduce the number of trust relationships required when running executables in the private or public cloud. It currently supports AMD SEV, and this session will: a) Discuss SEV capabilities and roadmap; b) Introduce the Enarx architecture; c) Present some of the components of Enarx; d) Show a demonstration of an early set of Enarx capabilities.

**Source**: Linux Security Summit 2019

**Link**: https://www.youtube.com/watch?v=0-ISmJNxGiY