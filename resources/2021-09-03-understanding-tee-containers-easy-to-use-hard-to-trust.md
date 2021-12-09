---
slug: 2021-09-03-understanding-tee-containers-easy-to-use-hard-to-trust
title: "Understanding TEE Containers, Easy to Use? Hard to Trust"
author: Weijie Liu, Hongbo Chen, XiaoFeng Wang, Zhi Li, Danfeng Zhang, Wenhao Wang, Haixu Tang
tags: [Paper]
---
As an emerging technique for confidential computing, trusted execution environment (TEE) receives a lot of attention. To better develop, deploy, and run secure applications on a TEE platform such as Intel's SGX, both academic and industrial teams have devoted much effort to developing reliable and convenient TEE containers. In this paper, we studied the isolation strategies of 15 existing TEE containers to protect secure applications from potentially malicious operating systems (OS) or untrusted applications, using a semi-automatic approach combining a feedback-guided analyzer with manual code review. Our analysis reveals the isolation protection each of these TEE containers enforces, and their security weaknesses. We observe that none of the existing TEE containers can fulfill the goal they set, due to various pitfalls in their design and implementation. We report the lessons learnt from our study for guiding the development of more secure containers, and further discuss thetrend of TEE container designs. We also release our analyzer that helps evaluate the container middleware both from the enclave and from the kernel.

**Source**: arXiv.org

**Link**: https://arxiv.org/abs/2109.01923