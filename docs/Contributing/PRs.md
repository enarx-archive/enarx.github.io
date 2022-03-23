# PRs

You've followed our [coding style guidelines](Coding-style) and steps on [how to contribute code](Code#working-on-the-code), and now you're ready to submit a PR to Enarx. Here's a quick guide on how to do it.

This guide assumes that you have [forked our repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) and are working on a local feature branch of your fork. It also assumes that you have set our repo as a remote named "upstream" on your fork as described [here](Code#on-your-local-machine).

### Check that your code is really ready

* You should run a quick `cargo fmt` in all the crates where you've made changes and run `cargo test` to double check that your changes didn't break functionality.
* Check the output when you run a `git diff upstream/master`. Do you see any changes you don't actually want to submit? Did you alter any code for testing purposes that shouldn't actually be part of the PR? If so, you should undo these changes.

### Squash your commits

If you have a series of commits that reflects your work process itself rather than logical changes in the code (think commit messages like `"This actually works!"` followed by `"Whoops still broken"`), you need to squash these into logical commits that describe the changes you made. Unless your PR in unusually large and complex, this will mean one commit per PR. You can do this by rebasing within your branch:

`git log` will show you how many commits you have made on top of the existing code. If you've made 5 new commits that you want to squash into one commit, you can do so by issuing `git rebase -i HEAD~5`. This last number will be the number of commits you're going to edit.

The menu that comes up will show your last 5 (or however many you specified) commits in order of most recent at the bottom. Note that this is the **opposite** of `git log`'s commit order, which can be confusing. You will want to mark each commit **except the oldest one you want to use** with `f` or `fixup`. The oldest commit you want to use should remain unaltered (it will be marked with `p` or `pick` by default). Save and exit from this menu to keep all the code changes from all 5 of your commits, but have only one commit message for all of these changes.

Issue a `git log` to see that your 5 commits have now become one.

**Note:** Never mark your oldest commit (the oldest commit you want to use) with `f` or `fixup`. This will squash all of your commits, including that one, into the commit that came right before yours.

### Commit messages
Pull requests to Enarx repositories should contain **logical commits**. In other words, commits should only contain changes relevant to one feature or component of the code. This helps repositories maintain a coherent and understandable history of code changes.

To that end, **merge commits are strictly not allowed**. It is expected that any code up for a pull request will be rebased on top of the upstream Enarx repository's `main` branch. Fast-forward-only merges are acceptable if needed.

We recommend reading this [excellent article](https://chris.beams.io/posts/git-commit/) to understand how to write a good git commit message.

Commit messages should answer these questions:

* What?: a short summary of what you changed in the subject line.
* Why?: what the intended outcome of the change is (arguably the most important piece of information that should go into a message).
* How?: if multiple approaches for achieving your goal were available, you also want to explain why you chose the used implementation strategy.
  Note that you should not explain how your change achieves your goal in your commit message.
  That should be obvious from the code itself.
  If you cannot achieve that clarity with the used programming language, use comments within the code instead.

The commit message is primarily the place for documenting the why.

Commit message titles should follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

Format is `<type>[optional scope]: <description>`, where `type` is one of:

* fix: A bug fix
* feat: A new feature
* perf: A code change that improves performance
* refactor: A code change that neither fixes a bug nor adds a feature
* style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* test: Adding missing tests or correcting existing tests
* docs: Documentation only changes
* revert: Reverts a previous commit
* chore: Other changes that don't modify src or test files
* build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)

`scope` should be the module name (without numbers) or:

* cli: for the dracut command line interface
* rt: for the dracut initramfs runtime logic
* functions: for general purpose dracut functions

Commit messages are checked with [Commisery](https://github.com/tomtom-international/commisery).

### Rebase onto upstream/main

Ideally, you've been incrementally [pulling changes from upstream into your code](Code#keeping-your-code-up-to-date-with-the-projects-code) as you work. However, sometimes you will finish some work and realize you don't have the latest code from upstream. Fixing this is easy:

Make sure you've done a `git commit` on your branch. Ideally you will also have squashed your commits as described above. Then issue:

```
git fetch upstream
git rebase upstream/main
```

or alternatively:

```
git checkout main
git pull upstream main
git checkout <your branch>
git rebase main
```

Sometimes, there will be conflicts in the files, and that's okay. Resolve the conflict in each file, run `git add <file>` on each file, and then `git rebase --continue`.

`git log` should now show your commit(s) on top of the latest commits from `upstream/main`.

### Submit the pull request

On GitHub, go to your personal repo (the one you `git clone`d earlier) and find the branch you worked on. You can see your branches at: `https://github.com/<your_username>/<enarx_repo>/branches`.
 
You can then click on  "New pull request".
 
If your PR includes multiple commits, explain what you are trying to achieve, to give context to the reviewers.
If your code fixes a specific issue, mentioning that issue (with \#issue_number) is helpful too. Doing so — by effectively saying something such as: "Fixes #123" — will close the corresponding issue when your PR is accepted. Make sure to properly link to the issue with the [correct keywords](https://help.github.com/en/enterprise/2.16/user/github/managing-your-work-on-github/closing-issues-using-keywords).
 
Once you are ready, click on "Create pull request".
 
You have just contributed code to the project, thanks!