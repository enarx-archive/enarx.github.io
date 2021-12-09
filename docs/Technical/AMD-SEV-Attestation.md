# AMD SEV Remote Attestation Protocol

## Summary

A tenant may choose to deploy their workload into an AMD SEV-based Enarx Keep.
This document describes a client-server protocol to allow a tenant to perform
attestation with a remote AMD SEV Enarx Keep.

## Goal

This protocol allows a tenant to:

1. Verify the platform certificate chain belonging to the remote host where
the Enarx Keep is constructed
1. Establish a secure channel with the AMD Secure Processor (AMD SP) on the
remote host
1. Compare its own measurement of the guest's initial state with the AMD SP's
measurement from the untrusted host
1. Safely deliver its workload to the AMD SP

## Theory of Operation

This protocol maps the regular SEV launch procedure onto a simple client-server
model (client sends request to server; server sends its response to client).
In fact, the message formats are comprised of data structures defined in the
AMD SEV specification.

It is a short, serialized exchange. More importantly, however, it is meant to
be an “atomic” transaction. What this means is that the client and the backend
complete attestation successfully in this exchange or they don’t. There are no
“in-between” end conditions. Therefore, neither party should have any
expectation of “retrying” a previous step. It is always forward progress or
none at all. As the orchestrator, it is the Keep Manager’s responsibility to
know if the keep becomes defunct during attestation, launch, or normal
operation. It is expected that the Keep Manager will inform the client of an
appropriate error condition and tear down the defunct Keep if necessary.

A complete demonstration of this protocol in action is described in a Message
Sequence Diagram later on.

## Message Formats

The data structures defined in the SEV specification form the substrate for this
protocol. As a result, message payloads are binary structures. The messages for
this protocol are [CBOR-encoded](http://cbor.io/). They will be represented here
in [Concise Data Definition Language (CDDL)](https://tools.ietf.org/html/rfc8610).

The MIME-types for messages in this protocol will adhere to the MIME-type
convention, and will be arranged like so:

```
application/vnd.enarx.att.sev+cbor; msg=$MESSAGE
```

where `$MESSAGE` is the message type described in the corresponding message
formats below.

The CBOR representation for a message is:

```
message = {
      certificate-chain-naples //
      certificate-chain-rome //
      launch-start //
      measurement //
      secret //
      finish
}
```

where the key for these structures are the corresponding string:

```
"certificate-chain-naples" /
"certificate-chain-rome" /
"launch-start" /
"measurement" /
"secret" /
"finish"
```

A message's `mimetype` MUST correspond to its CBOR representation.

### Certificate Chain

The certificate chain varies depending on the processor hardware
generation.

#### Naples Certificate Chain

**MIME type**: certificate-chain-naples

```
certificate-chain-naples = (
      "ark": certificate-ca-small,
      "ask": certificate-ca-small,
      "pdh": certificate-sev,
      "pek": certificate-sev,
      "oca": certificate-sev,
      "cek": certificate-sev,
)
```

#### Rome Certificate Chain

**MIME type**: certificate-chain-rome

```
certificate-chain-rome = (
      "ark": certificate-ca-large,
      "ask": certificate-ca-large,
      "pdh": certificate-sev,
      "pek": certificate-sev,
      "oca": certificate-sev,
      "cek": certificate-sev,
)
```

### Launch Start

**MIME type**: launch-start

```
launch-start = (
      "policy": policy,
      "pdh": certificate-sev,
      "session": session,
)
```


### Measurement

**MIME type**: measurement

```
measurement = (
      "build": build,
      "measurement": bytes .size 32,
      "nonce": bytes .size 16,
)
```

### Secret

**MIME type**: secret

```
secret = (
      "header": {
            "iv": bytes .size 16,
            "mac": bytes .size 32,
      },
      "ciphertext": bytes,
)
```

### Finish

**MIME type**: finish

```
/* TODO */
```

#### Interior Data Structure CBOR

**version**

```
version = (
      "major": uint .size 1,
      "minor": uint .size 1,
)
```

**build**

```
build = (
      "version": version,
      "build": uint .size 1,
)
```

**policy**

```
policy = (
      "flags": uint .size 2,
      "minfw": version,
)
```

**certificate-sev**

This is an opaque, binary structure. See Appendix C in the AMD SEV specification.

**certificate-ca-large**

This is an opaque, binary structure. See Appendix B in the AMD SEV specification.

**certificate-ca-small**

This is an opaque, binary structure. See Appendix B in the AMD SEV specification.

**session**

```
session = (
      "nonce": bytes .size 16,
      "wrap_tk": bytes .size 32,
      "wrap_iv": bytes .size 16,
      "wrap_mac": bytes .size 32,
      "policy_mac": bytes .size 32,
)
```

## Message Sequence Diagram

![message sequence diagram](https://raw.githubusercontent.com/wiki/enarx/enarx/images/amd-sev-remote-attestation.svg)

## Changelog

v4:
* All messages are CBOR-encoded
* Add message/container-type representations
* Certificates are opaque binary structures now, so remove the CBOR representations

v3:
* Update all types to be cbor-encoded with CDDL descriptions
* Separate types for Rome and Naples certificate chains
* Add a configuration complete message

v2:

* Only allow for 1 secret packet to be sent (changed from accommodating
potentially many secrets)
* Add a message header to describe a packet's MIME type & the payload
length
* Disambiguate term "peer" -- it represented both the Keep Manager and
the tenant (by proxy)