# Installing Enarx

You can install Enarx from crates.io, GitHub, or Nix.

## Install directly from crates.io

    $ rustup toolchain install 1.57 -t x86_64-unknown-linux-musl,x86_64-unknown-linux-gnu
    $ RUSTC_BOOTSTRAP=1 cargo +1.57 install --bin enarx -- enarx
    
## Install from GitHub

    $ git clone https://github.com/enarx/enarx
    $ cd enarx/
    $ cargo build

    $ cargo install --bin enarx --path ./

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