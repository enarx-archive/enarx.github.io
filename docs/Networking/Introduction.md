# Introduction

Enarx has support for networking since version 0.2.0 (Balmoral Castle) and support for TLS since version 0.3.0 (Chittorgarh Fort). Enarx comes with a full fledged mio TCP Echo Server by default.

The next section provides a walk-through of this TCP Echo Server, demonstrating how to run this server and test it with a client (ncat/netcat).

The subsequent section demonstrates the same TCP Echo Server, but with a simple ROT-13 cipher to encode the data (it rotates each letter by 13 characters further along the alphabet).