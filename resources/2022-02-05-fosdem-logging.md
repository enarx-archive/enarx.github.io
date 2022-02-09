---
slug: 2022-02-05-fosdem-logging
title: "Logging, debugging and error management in Confidential Computing"
authors: [mike]
tags: [Event]
---

**Title**: Logging, debugging and error management in Confidential Computing  
**Author**: Mike Bursell  
**Date**: Saturday, February 5, 2022, 13:25 AM - 13:50  

Debugging applications is an important part of the development process. However, error messages and general logging can leak sensitive data, and in some cases even compromise your whole stack, as developers worldwide have recently learned from the log4j vulnerability.

With Conﬁdential Computing, the world gets much more complicated, as every piece of information that a malicious entity on the host (including the host itself!) can gather may be leaking vital information about your workload. This talk details some of the problems that arise, and discusses some options to address them whilst considering real life workloads and application lifecycles.

_Full Abstract_

Log entries and other error messages can be very useful, but they can also provide information to other parties - sometimes information which you’d prefer they didn’t have. This is particularly true when you are thinking about Confidential Computing: running applications or workloads in environments where you really want to protect the confidentiality and integrity of your application and its data.

This talk examines some of the issues that we need to consider when designing Confidential Computing frameworks, the applications we run in them, and their operations. Designers and architects of the TEE infrastructure and even, to a lesser extent, of potential workloads themselves, need to consider very carefully the impact of host gaining access to messages associated with the workload and the infrastructure components. It is, realistically, infeasible to restrict all communication to levels appropriate for deployment, so it is recommended that various profiles are created which can be applied to different stages of a deployment, and whose use is carefully monitored, logged (!) and controlled by process.

**Source**: FOSDEM 2022

**Link**: https://fosdem.org/2022/schedule/track/hardware_aided_trusted_computing/