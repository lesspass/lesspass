# Contribute

## Introduction

First, thank you for considering contributing to LessPass! It's people like you that make the open source community great! 😊

We welcome any type of contribution, not only code. You can help by...

- **QA**: filing bug reports; the more details you can give the better (e.g. screenshots with the console open)
- **Marketing**: writing blog posts and howto's, making videos, updating the wiki, writing documentation, printing stickers, ...
- **Community**: presenting the project at meetups, organizing a dedicated meetup for the local community, hosting a [hackathon](https://en.wikipedia.org/wiki/Hackathon) for LessPass, ...
- **Code**: taking a look at the [open issues](issues). Even if you can't write code, commenting on them and showing that you care about a given issue matters. It helps us triage them.
- **Money**: helping us financially. We welcome financial contributions in full transparency on our [Open Collective page](https://opencollective.com/lesspass).

## Your first contribution

Working on your first Pull Request? You can learn how using this *free* series, [*How to Contribute to an Open Source Project on GitHub*](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

## Development

### Tools

Before diving in to the code, you'll need these tools installed in your environment:

* [NodeJS](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)

The mobile apps need:

* [Gradle](https://developer.android.com/studio/build/) for Android
* [Xcode](https://developer.apple.com/xcode/) for iOS

If you are working on the CLI, you will need:

* [Python 3](https://www.python.org/)

### Folder architecture

Here are some folders that worth noticing:

* `packages` contains the code for the `typescript` and `React` packages.
  * `lesspass` core package doing the password generation.
  * `lesspass-api` contains the code for consuming LessPass API. Used by lesspass-mobile.
  * `lesspass-mobile` contains the `android` and `ios` version. `react native`. Uses lesspass-api.
  * `lesspass-web-component` the web component used by all React applications (web-extension, web-site).
  * `lesspass-web-extension` contains the code specific for the web extension. Uses lesspass-web-component.
  * `lesspass-web-site` contains the code specific for the web site. Uses lesspass-web-component.
* `cli` contains the command line version. Development is done with `python`.

### Commands

To install dependencies, please run `yarn install`

To run tests, you can run `yarn test` in the root directory or any sub-folder describe above.

## Submitting code

Any code change should be submitted as a pull request. The description should explain what the code does and give steps to execute it. The pull request should also contain tests for any new functionality.

## Code review process

The bigger the pull request, the longer it will take to review and merge. Try to break down large pull requests in smaller chunks that are easier to review and merge.

It is also always helpful to have some context for your pull request. What was the purpose? Why does it matter to you? How will it benefit LessPass?

## Financial contributions

We accept donations, financial backing, and sponsorships via [Open Collective](https://opencollective.com/lesspass).

Anyone can file an expense. If the expense makes sense for the development of the community, it will be "merged" in the ledger of our Open Collective by the core contributors and the person who filed the expense will be reimbursed.

## Questions

If you have any questions, create an [issue](issue). Protip: do a quick search first to see if someone else has asked the same question before!

You can also reach the core contributors at contact@lesspass.com

<!-- This `CONTRIBUTING.md` is based on @nayafia's template https://github.com/nayafia/contributing-template -->
