At each measurement, a SHA256 hash is taken of `SECS.MRENCLAVE:TMPUPDATEFIELD` and the enclave's `MRENCLAVE` update counter is increased. The tables below describe the contents of the `TMPUPDATEFIELD` for each of these instructions.

### ECREATE

| Bytes | Value                     | Comment   |
|-------|---------------------------|-----------|
| 8     | 0x0045544145524345        | "ECREATE" |
| 4     | SECS.SSAFRAMESIZE         |           |
| 8     | SECS.SIZE                 |           |
| 44    | 0                         | Reserved  |

### EADD

| Bytes | Value                     | Comment                                                   |
|-------|---------------------------|-----------------------------------------------------------|
| 8     | 0x0000000044444145        | "EADD"                                                    |
| 8     | OFFSET                    | Page addr - enclave base addr                             |
| 48    | SECINFO                   | First 48 bytes. NOTE: SECINFO is modified before hashing. |

### EEXTEND
| Bytes | Value                     | Comment                       |
|-------|---------------------------|-------------------------------|
| 8     | 0x00444E4554584545        | "EEXTEND"                     |
| 8     | OFFSET                    | Page addr - enclave base addr |
| 48    | 0                         | Reserved                      |
| 256   | Memory Contents           |                               |