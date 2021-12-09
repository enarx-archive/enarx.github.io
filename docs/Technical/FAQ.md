# FAQ

## What's the point of Enarx?
Enarx aims to make it simple to deploy workloads to a variety of different TEEs in the cloud, on your premises or elsewhere, and to allow you to have confidence that your application workload is as secure as possible.

The problem we're trying to address is that there are many sensitive workloads that you shouldn't entrust to a public cloud to run, or may even have concerns about running on on-premises systems.  TEEs (see below) provide a great opportunity to help secure these workloads, but they're not easy to use.  Enarx aims to make it simple to deploy workloads to a variety of different TEE technologies in the cloud, on your premises or elsewhere, and to ensure that your application workload is as secure as possible.  

You can find a basic introduction here: [Introducing Enarx](https://aliceevebob.com/2019/05/07/announcing-enarx/).

If you like your information presented visually, here's [the problem we're looking to solve](Problem).

## How do I pronounce "Enarx"?
[Enarx pronunciation guide (British English)](https://github.com/enarx/enarx.github.io/raw/master/assets/audio/enarx.mp3)

The way you'd pronounce the letter "n", then "arks".  En-arks.  Enarx.  [Simple]( https://www.youtube.com/watch?v=NKHyqjHqQLU&t=66).

## What does the word Enarx mean?
It's almost Latin for "in the citadel" or "within the stronghold".  [Nathaniel McCallum](https://github.com/npmccallum) and [Mike Bursell](https://github.com/MikeCamel), who are ultimately to blame for the project, are both old/ancient language geeks, and wanted a cool name.  We tried lots: some were rubbish, some were taken.  We chose Enarx, which also (luckily) turned out not to be trademark-encumbered. 

## Is Enarx open source?
Absolutely.  All of Enarx is, and always will be, open source.  We use the [Apache 2.0 license](https://github.com/enarx/enarx/blob/master/LICENSE).

## Who needs Enarx?
Everybody.  No: really.  Do you have some sensitive data or processes?  Yes, you do.  So you're a potential Enarx user. See also "[Enarx for…](Introduction#use-cases-and-applications)" in the Enarx introduction page.

## What's a TEE?
A TEE is Trusted Execution Environment.  TEE technology is such a key part of the architecture of Enarx that is has its own page: [TEEs (Trusted Execution Environments)](TEE)).

## What's a Keep?
A Keep is the Enarx project's term for a TEE instance with all of the Enarx runtime and associated pieces inside it.

## Why not do containers?
Would it be possible to implement containers within TEEs?  That depends somewhat on the TEE implementation, but the answer is a "kind of yes".  However, when you run containers on a host, the interactions that the container runtime has with the host leak all sorts of information that we really don't want to be making available to it.  One of the design goals of Enarx is to reduce the number of layers that you need to trust, so this isn't a great fit.  We know that containers are great, and one of the interesting sets of questions around Enarx revolves around exactly how you orchestrate Keeps, but whatever that looks like, we won't be doing something which meets the specification for containers, for the reasons outlined above.

## Is Enarx a host attestation project?
No.  Enarx uses attestation as part of its workflow, but it is not a host attestation project (like [Keylime](https://github.com/keylime) or [ISECL](https://github.com/intel-secl)). Host attestation projects tackle the issue of trust in the host in a different way to Enarx, by measuring the various layers of the stack - typically at boot-up - to check that they are as expected, and have not been substituted for untrusted pieces.  They typically use TPMs (Trusted Platform Modules) as their hardware root of trust.  Enarx aims to remove the need to trust these layers by taking them out of the stack.  We expect both approaches to coexist, at least until TEEs are ubiquitous and people choose to execute all of their workloads in Enarx Keeps!

## Does Enarx use/need a TPM?
No.  Enarx uses TEEs for generic computation, rather than using the capabilities provided by TPMs for more specialised cryptographic operations.  Enarx also does not need a TPM as part of its [trust model](Trust-Architecture), which is anchored in the host CPU and firmware.  TPMs are typically used for host attestation, which is a different approach to trust management to that offered by Enarx.

## Will Enarx support RT (realtime) execution?
There are currently no plans for Enarx to support RT execution.  The architecture of TEEs means that it would be difficult to make the sorts of guarantees about timely execution that RT applications require, and doing this on top of another operating system (Linux, the host) is not considered feasible at this time.

## Will Enarx offer protection against side-channel attacks?
The short answer is yes, where possible.  
To expand on this, first of all this is only a goal for now, as we won't be focusing our efforts on it immediately given we are still working on core functionality.
Secondly, it is likely to be impossible to mitigate all side-channel attacks, but we certainly will attempt to do so where possible, as part of our aim to make Enarx Keeps as secure as possible.

## How can I contribute?
You can find information on how to get started over at [How to contribute](/docs/Contributing/Introduction).

## Does Red Hat own Enarx?
No single company or organisation "owns" Enarx.  It's open source software.   Copyright on code is owned by whoever contributes it to the project.  For more information, try [this definition](https://opensource.com/resources/what-open-source) from [Opensource.com](https://opensource.com) or our [license page](https://github.com/enarx/enarx/blob/main/LICENSE) (spoiler: it's Apache 2.0).

## Who writes this stuff?
Well, [Mike Bursell](https://github.com/MikeCamel) wrote quite a lot of this, which is why it's in pristine British English, with the exception of:
* any typos
* the few times that [Nathaniel McCallum](https://github.com/npmccallum) pressured him into writing something understandable by broader audiences
  * (why _can't_ we have **Enarx'** as the possessive for "Enarx"?)
* the word "LICENSE", which is an important part of the project, and has established meaning within the project hierarchy.
* the bits written by [axel simon](https://github.com/axelsimon), which are in less-than-pristine hybrid English (and usually of lower entertainment value).

***


