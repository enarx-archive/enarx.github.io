# Use Cases

These are the initial use cases for Enarx. We expect that more will come up, and work is in progress to help specific industries and groups understand the benefit of Enarx and Confidential Computing.

We've tried to be sensitive to gender and ethnicity in our descriptions.

## 1 - Terry - "Elastic compute"

Terry runs a datacenter which contains compute nodes owned by different departments. He cannot standardize the operating system, hardware or firmware from the various departments. However, the departments want elastic compute across department boundaries. Additionally, they need to process data protected by [HIPAA](https://en.wikipedia.org/wiki/Health_Insurance_Portability_and_Accountability_Act) requirements.

## 2 - Michelle - "Unused cycles"

Michelle is an executive at Ye Olde Cable Company. Faced with declining revenue in television services and a saturated market for internet services, she is trying to find a new business model to keep profits up. She wonders if she can sell the unused compute resources from the millions of ARM CPU routers on premise at the customer sites. She needs a way to provide privacy and integrity guarantees to the lessee of compute resources. She also needs to make sure that the applications written for an Intel CPU can run on her ARM CPUs.

## 3 - Bob - "National security"

Bob is a project lead for a new application being developed at the Elbonia Intelligence Service (EIS). National security depends on the data in this application being encrypted at all times. However, past projects have proven this extremely difficult and error prone due to the opt-in nature of cryptography. Further, their HyperMacro servers were compromised by Freedonia installing a spy chip on their motherboards. He wants to write his new application on a platform which provides always-on encryption, where even the code cannot be exfiltrated. Further, he wants to be able to immediately swap to a new hardware architecture without an application rebuild should his existing hardware become compromised.

## 4 - Kohani - "Key management"

Kohani is an OS engineer at a major operating system company. She is tasked with writing a keyring application which provides isolation of the key material from the operating system. The keyring application needs to support multiple keyrings - system keyring, user keyrings, and application keyrings, and needs to provide the option of multi-factor authentication for keyring access. Accessing the keys from a secure enclave should involve a cryptographic exchange rather than passing the key as plain text. She evaluates existing industry practices and determines that this has mostly been done with custom cryptographic hardware (Apple: T2, Intel: TPM, Google: Titan). However, she doesn’t have control over the hardware or even documentation for it. Even where she does, the hardware provides complicated interfaces and poor performance. She wishes she could write code once that would run in the secure enclaves provided by all her target CPUs.

## 5 - Filippe - "Data analytics"

Filippe is an application developer for a big European bank. The challenge he has is to farm out processing of the business transaction data and do analytics that allow him to generate a daily report to finalise the day. A high volume of data needs to be processed in a distributed fashion but sending the data to the cloud is risky. Different compliance requirements kick in requiring special arrangements between the bank and the cloud provider effectively locking the bank to consume services from a single provider (vendor lock in). Encrypting the data and the application and running the processing in the secure enclave bypassing cloud provider software is an appealing option that provides high level of security, elasticity and avoids vendor lock in.

## 6 - Charley - "Edge computing"

Charley is a security architect for a major telecoms provider which wants to deploy applications to “the Edge”: servers in locations which are not secure such as sports stadia, small businesses and town halls.  She needs to ensure that the data processed by the applications (which may include customer details) cannot be stolen if somebody compromises any of the servers. She also needs to ensure that the data and processing can’t be modified by a non-authorized user or application.

## 7 - Pierre - "Network security functions"
Pierre is a network security operator who want to orchestrate different network security functions like firewalls, deep packet inspection to NFV (network functions virtualization) environment. He wants to make sure that the network security function is deployed integrally. Since the network security functions are confidential, he also wants to make sure the network security functions cannot be accessed by unauthorized NFV hosts.  

Reference: draft-ietf-i2nsf-applicability-18