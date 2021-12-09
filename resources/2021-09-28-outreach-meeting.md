---
title: 2021-09-28 Outreach Meeting
authors: [enarx]
tags: [Meeting]
---
# Present 
* axel
* Ben
* Mike 
* Nick
* Shaun

# Agenda

## General discussion

### Blog
Enarx's Blog is now live. Nick is coordinating with Ashley and the Linux Foundation to configure DNS for blog.enarx.dev. First post about the New Custodian was published yesterday at:

https://enarx.ghost.io/

### Enarx Keeploader

As we are getting ready for our first release, Nathaniel has recommended that we give more visibility to [enarx-keepldr](https://github.com/enarx/enarx-keepldr). We also heard feedback from new users who couldn't find their way around running enarx just by looking at the current [enarx/enarx](https://github.com/enarx/enarx) github repo. That's because there is no actual enarx code there, just documentation. So the proposal is to move the enarx/enarx-keepldr code to enarx/enarx, and keep the documentation on enarx/enarx under the wiki. Here's a brief action plan:
1. Move keepldr code to enarx/enarx (maintains git history)
1. Remove docs folder from enarx/enarx, and move it to the wiki
1. Move keepldr wiki (2 pages) to enarx/enarx wiki
1. Transfer keepldr issues to enarx/enarx
1. Transfer enarx/enarx non-code issues to enarx/outreach
1. PRs can still get merged across repos (from keepldr to enarx/enarx)

### Vulnerability Disclosure and Embargo Policy

The CCC has again urgently requested that all CCC projects have a disclosure policy. I sent a PR to adopt the Vulnerability Disclosure and Embargo Policy proposed by axel:

https://github.com/enarx/rfcs/tree/master/00002-vulnerability-disclosure-and-embargo-policy


## CCC
The TAC has approved Enarx and other CCC projects to be part of the Outreachy program. Besides the benefits of the program itself, another benefit is bringing the CCC projects closer together to collaborate and grow their communities. 

### Outreachy
The Outreachy community application deadline was extended to October 6. Nick and Ashley already filled out the application.

https://github.com/enarx/outreach/issues/15

https://www.outreachy.org/

### Hacktoberfest
Hacktoberfest's website is now live. We are aiming to build simple demos on top of Enarx.

https://github.com/enarx/outreach/issues/14

https://hacktoberfest.digitalocean.com/

## Events

### Open Source Summit
Some CCC US-based members are currently at the OSS. Mike was in a panel (virtual):

https://osselc21.sched.com/event/lAUA/panel-discussion-evolving-the-confidential-computing-consortium-non-profit-collaboration-for-growth-stephen-walli-aeva-black-microsoft-mike-bursell-congruus

### Enigma / Usenix

Results for Enigma will come on the 30th:

https://www.usenix.org/conference/enigma2021/call-for-participation

### Cloud Security Alliance
Rolling CFP till 2021-December-31. Let's create a proposal in October/November.

https://www.cvent.com/c/abstracts/6e04faab-fd38-4df4-b2a3-2e2780b7c24b