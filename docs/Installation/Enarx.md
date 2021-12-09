# Installing Enarx

You can install Enarx from crates.io, GitHub, or Nix.

## Install directly from crates.io

    $ cargo +nightly install --bin enarx -- enarx
    
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

### Known Issue for Enarx 0.1

`nix-shell` opens file descriptors `3` and `4` and the enarx `cargo test` fails therefore. `nix develop` does not seem to have this problem.