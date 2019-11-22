# Contributing to the Enarx project
The Enarx project welcomes contributions!

You will find some information here that aims to make it easier for newcomers to contribute.

## Communicating
We are moving to **Gitter** for general conversations to allow for different rooms and fully logged conversations.  You'll find us here.
[![Gitter](https://badges.gitter.im/enarx/community.svg)](https://gitter.im/enarx/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

IRC (currently experimentally bridged to Gitter, via [matrix](https://matrix.to/#/!vFlmPpXiSVPXcOgLvz:matrix.org?via=matrix.org)): #enarx on [freenode](https://freenode.net/)

## Issues and bugs
* View our project-level [kanban board](https://github.com/orgs/enarx/projects/1)
* Or individual [projects](https://github.com/enarx) via their own issue databases

## Code

To contribute to the Enarx repos, you should follow a few recommendations.

### Coding style
We adhere to upstream Rust coding style guidelines. For more information about the Enarx coding style, plese refer to our [documentation on this subject](https://github.com/enarx/enarx.github.io/wiki/Coding-style).

### Environment set up
You will also need to set up your environment if you haven't already done so.

Here are a few pointers to help you set up your git environment.

#### On the Github side
* Ensure you have an SSH key set up. If you do not, you can generate one with the following command:
  * `ssh-keygen -t ed25519 -C "$(whoami) on $(hostname), generated on $(date -I)"`
Then add it to your Github profile.
* Fork the desired repo on github.com to your user, to be able to work on your own version of the code before submitting it. On a given repo, use the "fork" button at the top right.

#### On your local machine
* If you have not already done so, set your username and email:
  * `git config --global user.name "your name"`
  * `git config --global user.email "your.em@il.test"`
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
* Commit your changes:
  * `git commit -m "commit message here"`
* Push your changes:
  * `git push`
* If this is your first commit on your new branch, you will need to create the new branch remotely before pushing to it. This can all be done in one command with: `git push --set-upstream origin <your-branch-name>`. Git should suggest this as a command when a regular push fails.

With this, your code is visible in your personal repo on Github and can be shown to others, for instance.

### Contributing your code
When you consider your code to be ready, you can make a request for that code to be reviewed and, if al goes well, merged into the main code base: a Pull Request (or PR).

On Github, go to your personal repo (the one you `git clone`d earlier) and find the branch you worked on. You can see your branches at: `https://github.com/<your_username>/<enarx_repo>/branches`.

You can then click on  "New pull request".

If your PR includes multiple commits, explain what you are trying to achieve, to give context to the reviewers.
If your code fixes a specific issue, mentioning that issue (with \#issue_number) is helpful too. Doing so — by effectively saying something such as: "Fixes #123" — will close the corresponding issue when your PR is accepted.

Once you are ready, click on "Create pull request".

You have just contributed code to the project, thanks!

#### How often to commit, how often to make pull requests?
Our recommendation is to commit incrementally, whether it works or not, and to push it to your *personal* repo.

When your code is at a point at which you're ready to merge it, squash all the "stream of consciousness" commits into a series of logical commits. This helps maintain a history of code changes that is both truthfull and readable to others.


### Keeping your code up to date with the project's code
As the project keeps moving, the code base will change. Once changes have been made to the Enarx repo, to keep your local version of the code up to date:
* [Sync the fork](https://help.github.com/en/articles/syncing-a-fork):
  * `git fetch upstream`
* Ensure you are on your master branch:
  * `git checkout master`
* Make sure your local master branch is up to date with the upstream (that any commits you've made that aren't already in upstream/master are replayed on top of that other branch):
  * `git rebase upstream/master`

From then on, you can go on to making changes again on your working branch, committing them etc..
