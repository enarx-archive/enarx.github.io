# Release Process

## Pre-work:
- [create crates.io account](https://doc.rust-lang.org/cargo/reference/publishing.html#before-your-first-publish)
- Make sure you are a member of the [enarx/owners](https://github.com/orgs/enarx/teams/owners) GitHub team
- Get a crates.io token and set it to .
- get a clean enarx repo from here: `git clone https://github.com/enarx/enarx.git`
  ```bash
  export UPSTREAM="upstream"
  git remote rename origin upstream
  ```
  * `origin` points to the user's fork
  ```bash
  export FORK="origin"
  git remote add origin https://github.com/<username>/enarx.git
  ```
- ensure you have git credentials available to push to origin
- make sure you have write permissions to `enarx/enarx` or other repositories

## Versioning
- Breaking changes require a major version number increase, assuming a stable >0 major release 
- Features require a minor number increase
- Bugfixes require a patch number increase

## Prerequisites:
- Prepare release notes
- `cargo` credentials are cached
- `git` credentials are available on host to allow pushing code
- `gh` installed and configured
- You are running the build process on a X86_64 host
- Freeze all merges until release process complete


## Weekly chores
* [Update Rust toolchain](https://github.com/enarx/enarx/actions/workflows/rust-toolchain-update.yml)
* [Update Cargo dependencies](https://github.com/enarx/enarx/actions/workflows/cargo-update.yml)


### Update and release prerequiste crates
> **NOTE:** The list of crates that need to be updated for a release can be seen by running this following command:
> ```bash
> grep -R 'git+https' *.lock | sort | uniq
> ```

<!-- TODO
Do we need to update/publish crates for dependencies:
- JSONpath?
- better grep?
Idea:
- if (the enarx organization) && (if there is a git hash specified in in the Cargo.toml)
  - then: 
    - PUBLISH: we need to ensure that for that crate that there exists a published version which includes that revision/commit
    - UPDATE Cargo.toml w/ latest published crate

if there is a git or path dependency then there is a published version that there is a most recent verison of the crate/HEAD
HASH or head.

if not a publish that contains a published release, then make that release for that crate
and update Cargo.toml with that crate version (removing the hash/head)

# tag all of the individual commits for each one of the bindeps and push
 -->

> This may be an optional step dependant on whether there are relevant changes in the prerequisite crates, including:
> * [crt0stack](https://github.com/enarx/crt0stack)
> * [flagset](https://github.com/enarx/flagset)
> * [iocuddle](https://github.com/enarx/iocuddle)
> * [lset](https://github.com/enarx/lset)
> * [mmarinus](https://github.com/enarx/mmarinus)
> * [mmledger](https://github.com/enarx/mmledger)
> * [nbytes](https://github.com/enarx/nbytes)
> * [noted](https://github.com/enarx/noted)
> * [primordial](https://github.com/enarx/primordial)
> * [rcrt1](https://github.com/enarx/rcrt1)
> * [sallyport](https://github.com/enarx/sallyport)
> * [sgx](https://github.com/enarx/sgx)
> * [snp](https://github.com/enarx/snp)
> * [vdso](https://github.com/enarx/vdso)
> * [xsave](https://github.com/enarx/xsave)

#### Assumptions:
- All approved PRs are merged
- Rust toolchain (if using snapshot) and `cargo update` has been run

#### Steps:
- Determine expected version by reviewing output of `git log`
- Set new version
  ```bash
  export MAJOR=0
  export MINOR=2
  export PATCH=2
  export NEW_VERSION="${MAJOR}.${MINOR}.${PATCH}"
  ```
- Set REPO variable, assuming GitHub repository matches directory name
  ```bash
  export REPO="$(basename ${PWD})"
  ```
- Get latest updates and checkout branch
  > **NOTE:** The following assumes a new release
  ```bash
  git fetch ${UPSTREAM}
  git checkout -b "b${MAJOR}.${MINOR}.z" ${UPSTREAM}/main
  ```
- Determine if crate builds and if it works
  ```bash
  cargo clean
  cargo build --release
  cargo test
  ```
- Update version in `Cargo.toml`
  ```bash
  sed -i 's/^version = .*/version = \"'${NEW_VERSION}'\"/' Cargo.toml
  cargo update -p $(grep name Cargo.toml | cut -d'"' -f2)
  ```
- Run `cargo test` again
  ```bash
  cargo clean
  cargo build --release
  cargo test
  ```
- Check if cargo successfully builds with dry run
  ```bash
  cargo publish --allow-dirty -v --dry-run
  ```
- Commit change and push to repo
  ```bash
  git commit -asS -m "chore(release): release v${NEW_VERSION}"
  git push ${FORK} b${MAJOR}.${MINOR}.z
  ```
- Create a PR
  ```bash
  gh pr create -t "chore(release): release v${NEW_VERSION}" \
               -b "chore(release): release v${NEW_VERSION}" \
               -R enarx/${REPO}
  ```
- Confirm that changes passed on CI and merge PR
- Checkout merged release branch
  ```bash
  git fetch ${UPSTREAM}
  git checkout ${UPSTREAM}/main
  ```
- Tag the new release on upstream
  ```bash
  git tag --sign -m "chore(release): Release v${NEW_VERSION}" v${NEW_VERSION}
  git push ${UPSTREAM} v${NEW_VERSION}
  ```
- Cargo publish
  > **NOTE:** Assuming cargo credentials are cached
  ```bash
  cargo publish -v
  ```

### The Enarx release itself
- Determine expected version by reviewing output of `git log`
- Set new version
  ```bash
  export MAJOR=0
  export MINOR=2
  export PATCH=2
  export NEW_VERSION="${MAJOR}.${MINOR}.${PATCH}"
  ```
- Get latest updates and checkout branch
  ```bash
  git fetch ${UPSTREAM}
  git checkout -b "b${MAJOR}.${MINOR}.z" ${UPSTREAM}/main
  ```
- Bump version inside sub-crate `src/bin/{shim-kvm,shim-sgx,exec-wasmtime}/Cargo.toml` files
  ```bash
  for d in crates/*/ ; do ( cd "$d"
    sed -i 's/^version = .*/version = \"'${NEW_VERSION}'\"/' Cargo.toml
    cargo update -p enarx-$(basename ${d}) )
  done
  sed -i 's/^version = .*/version = \"'${NEW_VERSION}'\"/' Cargo.toml
  cargo update -p $(grep name Cargo.toml | cut -d'"' -f2)
  ```
- _POTENTIALLY OPTIONAL STEP: If there are any changes in the prerequisite crates (e.g. `xsave`, `sgx`, etc) then it will be required to manually update the crates now_
  ```bash
  export UPDATED_PREREQUISTES=(xsave sgx)
  for d in crates/*/ ; do ; cd "$d"
    for p in ${UPDATED_PREREQUISTES[@]]}; do
      cargo update -p "${p}"
    done
  done
  for p in ${UPDATED_PREREQUISTES[@]]}; do cargo update -p ${p}; done
  ```
- Run unit tests
  ```bash
  cargo clean
  cargo build --release
  cargo test
  ```
- Check cargo manifest
  ```bash
  cargo package --allow-dirty -l
  ```
- Check if cargo successfully builds with dry run
  ```bash
  cd crates/shim-kvm; cargo publish --allow-dirty --dry-run -v --target x86_64-unknown-none; cd ..
  cd shim-sgx; cargo publish --allow-dirty --dry-run -v --target x86_64-unknown-none; cd ..
  cd exec-wasmtime; cargo publish --allow-dirty --dry-run -v ; cd ..
  cd sallyport; cargo publish --allow-dirty --dry-run -v ; cd ../..
  ```
- Commit change and push to repo
  ```bash
  git commit -asS -m "chore(release): Release v${NEW_VERSION}"
  git push ${FORK} "release/${NEW_VERSION}"
  ```
- Packaging binary dependency crates
  > **NOTE:** Assuming cargo credentials are cached
  ```bash
  cd crates/shim-kvm; cargo publish -v --target x86_64-unknown-none; cd ..
  cd shim-sgx; cargo publish -v --target x86_64-unknown-none; cd ..
  cd exec-wasmtime; cargo publish -v ; cd ..
  cd sallyport; cargo publish -v ; cd ../..
  ```
- Update enarx dependencies
  ```bash
  export UPDATED_BINDEPS=(enarx-exec-wasmtime enarx-shim-kvm enarx-shim-sgx sallyport)
  for p in ${UPDATED_PREREQUISTES[@]]}; do
      cargo update -p "${p}"
  done
  ```
- Run unit tests
  ```bash
  cargo clean
  cargo build --release
  cargo test
  ```
- Cargo dry-run publish
  ```bash
  cargo publish --allow-dirty --dry-run -v
  ```
 - Update the nightly snapshot version and enarx release version in the installed documentation
  ```bash
  git checkout -b release/${NEW_VERSION}-docs
  sed -i "s/nightly-[0-9]{4}-[01][0-9]-[01][0-9]/$(grep channel rust-toolchain.toml | cut -d \" -f 2)/g" docs/Install.md
  sed -i "s/Enarx [0-9]\.[0-9]\.[0-9]/Enarx ${NEW_VERSION}/g" docs/Install.md
  sed -i "s/--version [0-9]\.[0-9]\.[0-9]/--version ${NEW_VERSION}/g" docs/Install.md
  ```
- Commit change and push to repo
  ```bash
  git commit -asS --amend 
  git push --force ${FORK} "release/${NEW_VERSION}"
  ```
- Create a PR
  > **NOTE:** Checks will fail on documentation checks until crate is published
  ```bash
  gh pr create -t "chore(release): release v${NEW_VERSION}" \
               -b "chore(release): release v${NEW_VERSION}" \
               -b ""
  ```
- Confirm that changes passed on CI and merge PR
- Checkout merged release branch
  ```bash
  git fetch ${UPSTREAM}
  git checkout ${UPSTREAM}/main
  ```
- Tag the new release on upstream
  ```bash
  git tag --sign -m "chore(release): release v${NEW_VERSION}" v${NEW_VERSION}
  git push ${UPSTREAM} v${NEW_VERSION}
  ```
- Create a release PR
  ```bash
  gh pr create -t "release v${NEW_VERSION}" \
               -a "@me" \
               -b ""
  ```
- Merge release PR
- Get list of files we plan on uploading to `cargo`
  ```bash
  cargo package --list
  ```
- Cargo publish
  ```bash
  cargo publish -v
  ```
  - Create a document update PR
  ```bash
  gh pr create -t "release v${NEW_VERSION}" \
               -a "@me" \
               -b ""
  ```
- Merge release PR
- Create draft GitHub release
  ```bash
  gh release create -d --generate-notes "v${NEW_VERSION}"
  ```
- Update release notes on draft GitHub release
- Publish GitHub release
- Run `make-release` GitHub action on `enarx/website`, specifying the newly released version
- Send notification to RocketChat `#annoucements` & `#general` channels
- Assign issue to post release to social media channels
