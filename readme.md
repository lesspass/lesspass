# LessPass

LessPass open source password manager (https://lesspass.com)


## How it works ?

 * [FR] [LessPass comment ça marche?](https://blog.lesspass.com/lesspass-comment-%C3%A7a-marche-9f1201fffda5#.yjmd1bcad)
 * [EN] [LessPass How Does It Work?](https://blog.lesspass.com/lesspass-how-it-works-dde742dd18a4#.vbgschksh)
 * [DE] [LessPass - Wie funktioniert das?](https://blog.lesspass.com/lesspass-wie-funktioniert-das-9483e5fc2c09)

## LessPass submodules

 - [backend](https://github.com/lesspass/backend) : REST API used by lesspass-pure to store password profiles
 - [cli](https://github.com/lesspass/cli) : build LessPass passwords directly in command line with nodejs
 - [cordova](https://github.com/lesspass/cordova) : Android application
 - [core](https://github.com/lesspass/core) : npm module with a clean api used to create passwords
 - [cozy](https://github.com/lesspass/cozy) : MyCozyCloud application
 - [desktop](https://github.com/lesspass/desktop) : LessPass desktop application build with electron
 - [frontend](https://github.com/lesspass/frontend) : https://lesspass.com source code
 - [move](https://github.com/lesspass/move) : password migration tool for LessPass
 - [nginx](https://github.com/lesspass/nginx) : configuration for nginx
 - [openssl](https://github.com/lesspass/openssl) : configuration for openssl
 - [pure](https://github.com/lesspass/pure) : pure component in vuejs used by cozy, frontend and webextension
 - [snap](https://github.com/lesspass/snap) : snap for lesspass-cli
 - [web extension](https://github.com/lesspass/webextension) : chrome and firefox web extension for LessPass password manager


## Self Host your LessPass Database (WIP)

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

You can edit `.env` file to use your own email server (for reset password for example)

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

Please do not contact contributors directly to report problems in LessPass.

 * [Adam Harris](https://github.com/aharris88)
 * [Antoine Briand](https://github.com/antoine-briand)
 * [Arnaud Meuret](https://github.com/ameuret)
 * [Bran Sorem](https://github.com/bransorem)
 * [Derek Shockey](https://github.com/derelk)
 * [Édouard Lopez](https://github.com/edouard-lopez)
 * [Erik Mulder](https://github.com/ewjmulder)
 * [Hugo Lopez](https://github.com/hugolpz)
 * [Ilya Pirozhenko](https://github.com/sochix)
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

