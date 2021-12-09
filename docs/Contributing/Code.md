# Code
The Enarx project welcomes contributions!
 
Would you like to help with the development of Enarx?
 
This page will guide you towards submitting your first pull request.
 
There are many different skills needed to build Enarx, from low-level assembly
code for platform-specific enablement (think SGX, SEV, etc.) to kernel-related
work, from WebAssembly to building and maintaining our infrastructure and automated
integration and testing (CI/CD), and more, so please don't hesitate to try your
hand at any of these or to come and talk to us.
 
You will find good first issues to work on in our issue tracker, labelled "[good
first issue](https://github.com/enarx/enarx/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)".
 
#### Note on issue and bug tracking
To get a better understanding of how we track issues and bugs, we recommend you
also read the [How to contribute: bug reporting](Bugs) page.


***
1. [Code of Conduct](#code-of-conduct)
1. [Contributing code: general process](Code)
    1. [First Steps](#first-steps)
    1. [Developer Certificate of Origin](#developer-certificate-of-origin)
    1. [Coding Style](#Coding-Style)
    1. [Development Environment set up](#enarx-development-environment-set-up)
    1. [Enarx Lab machines](#enarx-lab-machines)
***


 
## Code of Conduct
The Enarx project aims to be a welcoming and inclusive community, and to this
end adheres to and enforces the Contributor Covenant code of conduct. You can read it
[here](https://github.com/enarx/.github/blob/main/CODE_OF_CONDUCT.md).
 
## Code

### First steps

#### Using Rust and Git
If you've never programmed in Rust, don't worry, we've all been here. It can be very challenging to ramp up on a project without first being familiar with the programming language it uses Furthermore, being familiar with version control software (Git) is a critical skill to have for collaborating with others.

Here are some of our favourite resources for learning Git and Rust:

* [The Book](https://doc.rust-lang.org/book/) & [other official resources](https://www.rust-lang.org/learn)
* [Programming Rust](https://www.oreilly.com/library/view/programming-rust/9781491927274/) - This book is not free, but some of us like it very much.
* [Pro Git 2nd Edition](https://git-scm.com/book/en/v2) - You can get very far with git by just reading Chapters 2, 3, and 5.
* Once you've got the basics of Git, a good skill to develop is how to create atomic commits. These might also appear in search results as "logical commits".

#### Methodology
If you've never contributed code to an open source project, [this page](https://www.dataschool.io/how-to-contribute-on-github/) will walk you through the whole process and should be very helpful.

Contributing code to the Enarx project follows this overall methodology:
1. fork the code to your account
2. make improvements
3. publish them to your account
4. submit improvements using a [Pull Request](PRs) (PR)
   1. make changes as required
5. repeat
 
With this general plan in mind, there are a few more recommendations you should follow:
 
1. make sure that everything you're doing is in GitHub.
   It doesn't matter if it's not perfect. Churn is expected, but we need the code there to start with.
2. ensure that no single issue should take more than 1-2 days to complete.
   If you have an issue that will take more time, then break it down into separate issues, and link them (under the top issue if required).
3. only have 1-3 issues assigned to you at any time.
4. when you complete an issue, [submit a PR](PRs). Mention that issue in the PR ("closes #123")
5. review other folks' PRs.
 
We are always willing to discuss ways to improve this set of guidelines, if for any reason you feel they aren't working.

### Developer Certificate of Origin
Enarx uses the Developer Certificate of Origin (DCO) to help check that 
contributors are allowed to make a contribution and that as an open source 
project, Enarx has the right to distribute them under its license (Apache 
Licence 2.0).

In practice, this means code committed to the project must be signed-off, using
`git commit -s`, which will result in a commit message ending in something like:
> Signed-off by Nathaniel McCallum <nathaniel@profian.com>

You can read the text of the DCO on the [DCO's website](https://developercertificate.org/). (We also host [a copy](https://github.com/enarx/.github/blob/main/DEVELOPER_CERTIFICATE_OF_ORIGIN.md) of the text in one of our repos.)
  
 
### Coding style
We adhere to upstream Rust coding style guidelines. For more information about the Enarx coding style, please refer to our [documentation on this subject](Coding-Style).
 
### Enarx Development Environment set up
These instructions are still a bit minimal, we will make them more complete in the near future.

Note: we have some lab machines available. More information on how to access and use them on the [Lab page](Lab).
 
#### Fedora, Red Hat Enterprise Linux (RHEL)
 
`openssl-devel` package can be installed like so:

```bash
# dnf install openssl-devel
```
Two Perl packages (which are openssl dependencies) also need to be installed thus:
```bash
# dnf install perl-FindBin perl-File-Compare
```

`musl` packages are now included in Fedora. However, they need to be enabled on RHEL like so:

```bash
# dnf copr enable taocris/musl 
 ```

`musl` packages can be installed on Fedora and RHEL like so:

```bash
# dnf install musl-devel musl-libc-static musl-gcc musl-clang  
```


#### Debian, Ubuntu
You will need these additional packages:
* libssl-dev
* musl-dev
* musl-tools

To install:
```bash
# apt install libssl-dev musl-dev musl-tools
```
 
#### Rust
 
If Rust is not already installed, please visit [rustup.rs](https://rustup.rs) and follow the Rust project's
official quickstart instructions to install it. It's possible that Rust might be packaged
for your favorite operating system, but `rustup` provides a number of well-supported features
for managing the Rust toolchain and is a preferred and trusted channel for keeping the toolchain
updated beyond what might be available in the package repositories.
 
With the Rust toolchain installed, add the required target platform like so:
 
```bash
$ rustup target add x86_64-unknown-linux-musl
```
For Ubuntu, we must also install Rust Nightly as below:
```bash
$ rustup toolchain install nightly-x86_64-unknown-linux-gnu
```
```bash
$ rustup toolchain install nightly
```
 
##### cargo-make
 
The Enarx project's continuous integration (CI) pipeline also relies on a few tools within the
Rust ecosystem. Some examples of their uses would be to encourage a consistent coding style and
to regularly check dependencies for any known security vulnerabilities. Contributors need to install cargo-make in order to use these tools while working on Enarx to streamline the contribution process.
 
`cargo-make` can be installed like so:
 
```bash
$ cargo install cargo-make
```

The Enarx project makes heavy use of `cargo-make` to build and test code. We turned to `cargo-make` due to limitations with Rust's default handling of workspaces. Please familiarize yourself with some of the core workflows we use `cargo-make` for as it will come in handy during the contribution process.

Note that we are assuming the following commands are ran from the root of the Enarx repository, however, many of these will also work if you're in a crate directory (such as `build` or `test`).

Before running `cargo-make`, we must ensure **make** and **perl** are installed, otherwise openssl will fail to build.
For Ubuntu, we must also ensure **pkg-config** are installed, otherwise openssl will fail to build.

* `cargo make ci-flow`: run the entire continuous integration (CI) suite tests locally on your machine. We encourage you to run this before opening a PR as it will likely provide you feedback faster than our CI machines and save you the trouble of having to force push.

* `cargo make integration-ci`: run the entire CI suite tests _and_ the integration tests. This is only useful if you have special hardware. No worries if you don't, Enarx's CI will soon run these tests for you.

* `cargo make build`: build all the packages in the workspace.

* `cargo make test`: test all the packages in the workspace.

* `cargo make format`: run `cargo fmt` on each package in the workspace.

* `cargo make clean`: run `cargo clean` on each package in the workspace.
 
### Git environment set up
You will also need to set up your git environment if you haven't already done so.
 
Here are a few pointers to help you set it up.
 
#### On the Github side
* Ensure you have an SSH key set up. If you do not, you can generate one with the following command:
  * `ssh-keygen -t ed25519 -C "$(whoami) on $(hostname), generated on $(date -I)"`
Then add it to your Github profile.
* Fork the desired repo on github.com to your user, to be able to work on your own version of the code before submitting it. On any given repo, say [enarx/enarx](https://github.com/enarx/enarx), use the "fork" button at the top right to create a copy of the repo in your Github account.
 
#### On your local machine
* If you have not already done so, set your username and email:
  * `git config --global user.name "your name"`
  * `git config --global user.email "name@example.com"`
* Clone your fork locally:
  * `git clone https://github.com/<your_username>/<enarx_repo>`
* Add an "upstream" remote to your local git repo:
  * `git remote add upstream https://github.com/enarx/<enarx_repo.git>`
* To check the remote repositories: `git remote -v`
 
### Working on the code
* Create a branch for your work:
  * `git checkout -b <your_working_branch>`
* Make your changes, then add the changed files to the staging area:
  * `git add <file>` (or `git add -a` to take into account all modified files, including deletions)
* Commit your changes (the "-s" is to sign-off your commits, cf. [DCO section](#developer-certificate-of-origin))
  * `git commit -s -m "commit message here"`
* Push your changes:
  * `git push`
* If this is your first commit on your new branch, you will need to create the new branch remotely before pushing to it. This can all be done in one command with: `git push --set-upstream origin <your-branch-name>`. Git should suggest this as a command when a regular push fails.
 
With this, your code is visible in your personal repo on GitHub and can be shown to others, for instance.
 
### Contributing your code
When you consider your code to be ready, you can make a request for that code to be reviewed and, if all goes well, merged into the main code base: a Pull Request (or PR). More info on the pull request process can be found [here](PRs).
 
#### How often to commit, how often to make pull requests?
Our recommendation is to commit incrementally, whether it works or not, and to push it to your *personal* repo.
 
When your code is at a point at which you're ready to merge it, squash all the "stream of consciousness" commits into a series of logical commits. This helps maintain a history of code changes that is both truthful and readable to others.
 
Also, make sure that your commit messages follow these conventions in order to be clear and maintainable: [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/).
 
### Keeping your code up to date with the project's code
As the project keeps moving, the code base will change. Once changes have been made to the Enarx repo, to keep your local version of the code up to date:
* [Sync the fork](https://help.github.com/en/articles/syncing-a-fork):
  * `git fetch upstream`
* Ensure you are on your main branch:
  * `git checkout main`
* Make sure your local main branch is up to date with the upstream (that any commits you've made that aren't already in upstream/main are replayed on top of that other branch):
  * `git rebase upstream/main`
 
From then on, you can go on to making changes again on your working branch, committing them etc..


### Enarx Lab machines
We have some lab machines available. More information on how to access and use them on this [Lab page](Lab).