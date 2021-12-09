# Coding Style

The Enarx project follows the Rust coding guidelines.

Any further recommendation we issue should be due to the fact the Rust project has no official guideline on a specific aspect.

If you find one of our coding recommendations to be in contradiction with the Rust coding guidelines, the latter should prevail.

In any case, we will align to new Rust guidelines when published.

## Versioning
Enarx uses **[semantic versioning](https://semver.org/)**.

## Comments
Comments should be **complete sentences with proper grammar**.

They should describe both what the code is doing and why it is doing it.

## Variable names
The Enarx project prefers the use of **descriptive variable names that give an idea of what that variable is being used for**. We do not enforce specific guidelines beyond this preference. For example, we will frown upon extremely short C-style names (think `b` with regards to a boolean variable).

## Formatting
In keeping with our general policy on Rust guidelines outlined above, **we expect all code submitted to the repository to conform to the [Rust formatting guidelines](https://github.com/rust-dev-tools/fmt-rfcs/blob/master/guide/guide.md)**. All Enarx repositories using Rust enforce this requirement as a gating test for new pull requests.

Fortunately, this is an easy requirement to satisfy using [`rustfmt`](https://github.com/rust-lang/rustfmt), Rust's official formatting tool. If not already installed, you can add it using `rustup component add rustfmt`. You can run it on any crate by running `cargo fmt` in a crate's root (the same directory that contains `Cargo.toml`).

## Commit etiquette
Pull requests to Enarx repositories should contain **logical commits**. In other words, commits should only contain changes relevant to one feature or component of the code. This helps repositories maintain a coherent and understandable history of code changes.

To that end, **merge commits are strictly not allowed**. It is expected that any code up for a pull request will be rebased on top of the upstream Enarx repository's `main` branch. Fast-forward-only merges are acceptable if needed.

We recommend reading this [excellent article](https://chris.beams.io/posts/git-commit/) to understand how to write a good git commit message.

If you want to learn more about merging, [this quick video](https://www.youtube.com/watch?v=AJqup7axNX8) outlines the two predominant Git merging strategies. We follow fast-forward merging (the one on the left).
