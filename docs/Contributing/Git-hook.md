# Git hook

This is a simple script that will run linting and formatting checks when you run `git push`.

*NOTE*: This is an optional step! It's valid to run these checks in some other way.

To install the hook paste the following into `.git/hooks/pre-push`:

```
#!/bin/sh
set -xe

# Run linting checks (not completely exhaustive)
cargo clippy --all-features --manifest-path=Cargo.toml -- -D warnings

if [ -d "internal" ]; then
  cargo clippy --target=x86_64-unknown-linux-musl --all-features --manifest-path=internal/shim-sgx/Cargo.toml -- -D warnings
  cargo clippy --target=x86_64-unknown-linux-musl --all-features --manifest-path=internal/shim-sev/Cargo.toml -- -D warnings
  cargo clippy --target=x86_64-unknown-linux-musl --all-features --manifest-path=internal/wasmldr/Cargo.toml -- -D warnings
fi

# Run formatting tests
cargo fmt -- --check

if [ -d "internal" ]; then
  cargo fmt --manifest-path=internal/shim-sgx/Cargo.toml -- --check
  cargo fmt --manifest-path=internal/shim-sev/Cargo.toml -- --check
  cargo fmt --manifest-path=internal/wasmldr/Cargo.toml -- --check
fi

exit 0
```

You can skip running this check with:

```sh
git push --no-verify
```
