# Installing Enarx

You can install Enarx from GitHub, crates.io, or Nix.

    
## Install from GitHub

    $ git clone https://github.com/enarx/enarx
    $ cd enarx/
    $ cargo build

    $ cargo install --bin enarx --path ./


## Install from crates.io

:::note

Rust version nightly-2022-03-14 is required when installing Enarx 0.3.0 from crates.io.

:::

    $ rustup toolchain install nightly-2022-04-11 -t x86_64-unknown-linux-musl,x86_64-unknown-linux-gnu
    $ cargo +nightly-2022-04-11 -Z bindeps install --bin enarx -- enarx


## Install from Nix

Users with `nix` package manager installed (see https://nixos.org) should be able to just do in the checked out repository:

    $ git clone https://github.com/enarx/enarx
    $ cd enarx/

```sh
$ nix-shell
```
(on legacy, stable `nix` installs)

or:
```sh
$ nix develop
```

:::note

`nix-shell` opens file descriptors `3` and `4` and the enarx `cargo test` fails therefore. `nix develop` does not seem to have this problem.

:::
