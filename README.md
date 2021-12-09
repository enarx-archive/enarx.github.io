# Enarx Docs

This repository contains the assets required to build the [Enarx website and documentation](https://enarx.dev/). We're glad that you want to contribute!

----

## Prerequisites

To install the website locally and build it, you need the following installed:

- [NodeJS](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

Before you start, install the dependencies. Clone the repository and navigate to the directory:

```sh
git clone https://github.com/enarx/docs.git
cd docs
```

The Enarx website uses [Docusaurus](https://docusaurus.io/) to build a customizable and optimized website.

----

## Running the website

To start a local development server, run the following command: 

```sh
yarn start
```

This starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

----

## Building the website

To build the website, run the following command: 

```sh
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service. You can run the following command to serve the build:

```sh
yarn serve
```

----

## Contributing to the docs

Click the Fork button in the upper-right area of the screen to create a fork of this repository in your GitHub account. Create a branch off the `main` and make any changes you want in your fork. Create a new pull request to help us know about your proposed changes so that we can provide actionable feedback. As a pull request owner, it is your responsibility to modify your pull request to address the feedback that has been provided to you by the reviewer.

After all the comments are addressed, please let us know and we will merge your pull request. Contributions are welcome to make our documentation more accessible and readable, adding new features to help a wider audience know about Enarx and help onboard new contributors and users.

Participation in the Enarx community is governed by the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md).

You can engage with us on the following channels:

- [Chat](https://chat.enarx.dev)
- [Meetings](https://enarx.dev/meetings)

----

## License

[MIT License](LICENSE)
