# LessPass

LessPass open source password manager (https://lesspass.com)

[![Backers on Open Collective](https://opencollective.com/lesspass/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/lesspass/sponsors/badge.svg)](#sponsors)

## How does it work?

 * [FR] [LessPass comment ça marche?](https://blog.lesspass.com/lesspass-comment-%C3%A7a-marche-9f1201fffda5#.yjmd1bcad)
 * [EN] [LessPass How Does It Work?](https://blog.lesspass.com/lesspass-how-it-works-dde742dd18a4#.vbgschksh)
 * [DE] [LessPass - Wie funktioniert das?](https://blog.lesspass.com/lesspass-wie-funktioniert-das-9483e5fc2c09)

## LessPass submodules

 - [backend](https://github.com/lesspass/backend) : REST API used by [lesspass-pure](https://github.com/lesspass/pure) to store password profiles
 - [cli](https://github.com/lesspass/cli) : LessPass passwords directly in your terminal
 - [cordova](https://github.com/lesspass/cordova) : LessPass Android application
 - [core](https://github.com/lesspass/core) : npm core library used to generate LessPass passwords
 - [cozy](https://github.com/lesspass/cozy) : LessPass for MyCozyCloud
 - [desktop](https://github.com/lesspass/desktop) : LessPass desktop application built with electron
 - [frontend](https://github.com/lesspass/frontend) : [lesspass.com](https://lesspass.com) source code
 - [move](https://github.com/lesspass/move) : password migration tool for LessPass
 - [nginx](https://github.com/lesspass/nginx) : configuration for nginx
 - [openssl](https://github.com/lesspass/openssl) : configuration for openssl
 - [pure](https://github.com/lesspass/pure) : LessPass web component
 - [snap](https://github.com/lesspass/snap) : snap for [lesspass-cli](https://github.com/lesspass/cli)
 - [web extension](https://github.com/lesspass/webextension) : Chrome and Firefox web extension


## Self Host your LessPass Database

### requirements 

 * `docker`
 * `docker-compose`

### install 

simply run 

    bash <(curl -s https://raw.githubusercontent.com/lesspass/lesspass/master/lesspass.sh) [DOMAIN] [EMAIL]

`[DOMAIN]` and `[EMAIL]` are used to generate a LetsEncrypt certificate and configure LessPass.

### create super user

Go into the backend container and create a super user

```
docker exec -it lesspass_backend_1 sh
python manage.py createsuperuser
```

Now you can access and manage users and password profiles on `https://[DOMAIN]/admin`


### configure email

You can edit `.env` file to use your own email server (in order to reset the password for example)

```
DEFAULT_FROM_EMAIL="LessPass" <admin@example.org>
EMAIL_HOST=...
EMAIL_HOST_USER=...
EMAIL_HOST_PASSWORD=...
EMAIL_PORT=...
EMAIL_USE_TLS=1
```

## Status

| module | tests |
| --- | --- |
| [backend](https://github.com/lesspass/backend) | [![Build Status](https://travis-ci.org/lesspass/backend.svg?branch=master)](https://travis-ci.org/lesspass/backend) |
| [core](https://github.com/lesspass/core) | [![Build Status](https://travis-ci.org/lesspass/core.svg?branch=master)](https://travis-ci.org/lesspass/core) |
| [pure](https://github.com/lesspass/pure) | [![Build Status](https://travis-ci.org/lesspass/pure.svg?branch=master)](https://travis-ci.org/lesspass/pure) |
| [cli](https://github.com/lesspass/cli) | [![Build Status](https://travis-ci.org/lesspass/cli.svg?branch=master)](https://travis-ci.org/lesspass/cli) |
| [webextension](https://github.com/lesspass/webextension) | [![Build Status](https://travis-ci.org/lesspass/webextension.svg?branch=master)](https://travis-ci.org/lesspass/webextension) |



## License

This project is licensed under the terms of the GNU GPLv3.

## Contributors :heart:

This project exists thanks to all the people who contribute. [[Contribute]](CONTRIBUTING.md).
<a href="graphs/contributors"><img src="https://opencollective.com/lesspass/contributors.svg?width=890" /></a>

Please do not contact contributors directly to report problems in LessPass.

 * [Adam Harris](https://github.com/aharris88)
 * [Antoine Briand](https://github.com/antoine-briand)
 * [Antoine Motet](https://github.com/motet-a)
 * [Arnaud Meuret](https://github.com/ameuret)
 * [Bran Sorem](https://github.com/bransorem)
 * [Derek Shockey](https://github.com/derelk)
 * [Édouard Lopez](https://github.com/edouard-lopez)
 * [Erik Mulder](https://github.com/ewjmulder)
 * [Hugo Lopez](https://github.com/hugolpz)
 * [Ilya Pirozhenko](https://github.com/sochix)
 * [Josué Cau](https://github.com/josuecau)
 * [Kcchouette](https://github.com/Kcchouette)
 * [Leo Arias](https://github.com/elopio)
 * [Marc Sluiter](https://github.com/slintes)
 * [Martin](https://github.com/martinseener)
 * [Matthias Gliwka](https://github.com/gliwka)
 * [Maxime Le Conte des Floris](https://github.com/mlcdf)
 * [Panther2](https://github.com/panther2)
 * [Pascal Grange](https://github.com/pgrange)
 * [Peter Medus](https://github.com/Facel3ss1)
 * [Philip Ulrich](https://github.com/philip-ulrich)
 * [Pierre Rudloff](https://github.com/Rudloff)
 * [Pierre-Jean Vardanéga](https://github.com/pvardanega)
 * [Toastal](https://github.com/toastal)
 * [YFdyh000](https://github.com/yfdyh000)
 * [朱震庭](https://github.com/r2qokk)

## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/lesspass#backer)]

<a href="https://opencollective.com/lesspass#backers" target="_blank"><img src="https://opencollective.com/lesspass/backers.svg?width=890"></a>


## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/lesspass#sponsor)]

<a href="https://opencollective.com/lesspass/sponsor/0/website" target="_blank"><img src="https://opencollective.com/lesspass/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/lesspass/sponsor/1/website" target="_blank"><img src="https://opencollective.com/lesspass/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/lesspass/sponsor/2/website" target="_blank"><img src="https://opencollective.com/lesspass/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/lesspass/sponsor/3/website" target="_blank"><img src="https://opencollective.com/lesspass/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/lesspass/sponsor/4/website" target="_blank"><img src="https://opencollective.com/lesspass/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/lesspass/sponsor/5/website" target="_blank"><img src="https://opencollective.com/lesspass/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/lesspass/sponsor/6/website" target="_blank"><img src="https://opencollective.com/lesspass/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/lesspass/sponsor/7/website" target="_blank"><img src="https://opencollective.com/lesspass/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/lesspass/sponsor/8/website" target="_blank"><img src="https://opencollective.com/lesspass/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/lesspass/sponsor/9/website" target="_blank"><img src="https://opencollective.com/lesspass/sponsor/9/avatar.svg"></a>

