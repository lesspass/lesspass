# LessPass

LessPass is a stateless password manager.

Stop wasting your time synchronizing your encrypted vault. Remember one master password to access your passwords, anywhere, anytime. No sync needed. Try the demo at [https://www.lesspass.com](https://www.lesspass.com).

## How to use LessPass

### Web extensions

Install the web extension on [Chrome](https://chrome.google.com/webstore/detail/lesspass/lcmbpoclaodbgkbjafnkbbinogcbnjih) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/lesspass/). When you need to generate a password, click on the password field on the web site you want to generate a password for. Hit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> or <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> on mac to open the web extension. Fill the login and master password and hit <kbd>Enter</kbd>. Your password is now copied in the clipboard. Hit <kbd>esc</kbd> key and paste the generated password on the web site.

### Command Line Interface

If you want to use LessPass in your terminal, you can use `pip` to install LessPass CLI:

    python3 -m pip install --user lesspass
    lesspass --help

### Mobile application

Install the mobile application for [iOS](https://apps.apple.com/app/id1531215924) or [Android](https://play.google.com/store/apps/details?id=com.lesspass.android) or [FDroid](https://f-droid.org/en/packages/com.lesspass.android/).

### Web site

You can use the password generator functionnality on the web site directly. Even if for security reason, we recommend to use the web extensions.

## Todo

- [ ] :speech_balloon: Translation on the website #456
- [ ] :memo: Guide to self host a LessPass server on Digital Ocean

## :rotating_light: LessPass Server Access Update

LessPass Server is now reserved for existing users of the LessPass service. New registrations are no longer possible. This change is a way to thank our initial users for being part of the journey :beers:.

For new users who wish to use LessPass connected, you will need to self-host your own LessPass server. I will provide a guide in the future on how to deploy this using DigitalOcean. Currently, LessPass uses App Platform for automatic server deployment.

Referral link:

[![DigitalOcean Referral Badge](https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%203.svg)](https://www.digitalocean.com/?refcode=7780bf9be762)

There are also [alternative server implementations](https://github.com/lesspass/lesspass/wiki/Third-party-implementations-of-LessPass#api-servers) available. However, please use them with caution, as I cannot guarantee that these implementations fully support the latest API.

## Questions

If you have any questions, create an [issue](issue).
Protip: do a quick search first to see if someone else has asked the same question before!

You can also reach me at contact@lesspass.com

## Special Thank you

Based on an original idea from [masterpassword app](https://masterpassword.app/) :heart:

## License

This project is licensed under the terms of the GNU GPLv3.

[LessPass mobile](https://github.com/lesspass/lesspass/tree/master/packages/lesspass-mobile) is bi-licensed under both the Mozilla Public License Version 2 as well as the GNU GPLv3.

## Contributors

This project exists thanks to all of the people who contribute to the project. [You can help too! There are many ways to help make LessPass better.](CONTRIBUTING.md)

[![Contributors list](https://opencollective.com/lesspass/contributors.svg?width=890)](https://github.com/lesspass/lesspass/graphs/contributors)
