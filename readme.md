# LessPass

LessPass open source password manager (https://lesspass.com)


## How it works ?

 * [FR] [LessPass comment ça marche?](https://blog.lesspass.com/lesspass-comment-%C3%A7a-marche-9f1201fffda5#.yjmd1bcad)
 * [EN] [LessPass How Does It Work?](https://blog.lesspass.com/lesspass-how-it-works-dde742dd18a4#.vbgschksh)

## LessPass submodules

 - [backend](https://github.com/lesspass/backend) : backend used to store information about passwords
 - [cli](https://github.com/lesspass/cli) : build LessPass passwords directly in command line with nodejs
 - [cordova](https://github.com/lesspass/cordova) : Android and iOS application
 - [core](https://github.com/lesspass/core) : npm module with a clean api used to create passwords
 - [cozy](https://github.com/lesspass/cozy) : MyCozyCloud application
 - [desktop](https://github.com/lesspass/desktop) : LessPass desktop application build with electron
 - [frontend](https://github.com/lesspass/frontend) : frontend for LessPass with vuejs
 - [nginx](https://github.com/lesspass/nginx) : configuration for nginx
 - [pure](https://github.com/lesspass/pure) : pure component in vuejs used by cozy, frontend and webextension
 - [snap](https://github.com/lesspass/snap) : snap for lesspass-cli 
 - [web extension](https://github.com/lesspass/webextension) : chrome and firefox web extension for lesspass password manager


## Self Host your LessPass Database

### requirements 

 * `docker`
 * `docker-compose`

### install 

simply run 

    bash <(curl -s https://raw.githubusercontent.com/lesspass/lesspass/master/lesspass.sh) [DOMAIN]

You can specify your domain (eg example.com). If not provided, you'll be asked to enter it.

## Status

| module | tests |
| --- | --- |
| [backend](https://github.com/lesspass/backend) | [![Build Status](https://travis-ci.org/lesspass/backend.svg?branch=master)](https://travis-ci.org/lesspass/backend) |
| [core](https://github.com/lesspass/core) | [![Build Status](https://travis-ci.org/lesspass/core.svg?branch=master)](https://travis-ci.org/lesspass/core) |
| [pure](https://github.com/lesspass/pure) | [![Build Status](https://travis-ci.org/lesspass/pure.svg?branch=master)](https://travis-ci.org/lesspass/pure) |
| [cli](https://github.com/lesspass/cli) | [![Build Status](https://travis-ci.org/lesspass/cli.svg?branch=master)](https://travis-ci.org/lesspass/cli) |
| [web extension](https://github.com/lesspass/webextension) | [![Build Status](https://travis-ci.org/lesspass/webextension.svg?branch=master)](https://travis-ci.org/lesspass/webextension) |


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
 * [Ilya Pirozhenko](https://github.com/sochix)
 * [Marc Sluiter](https://github.com/slintes)
 * [Martin](https://github.com/martinseener)
 * [Matthias Gliwka](https://github.com/gliwka)
 * [Maxime Le Conte des Floris](https://github.com/mlcdf)
 * [Panther2](https://github.com/panther2)
 * [Pascal Grange](https://github.com/pgrange)
 * [Peter Medus](https://github.com/Facel3ss1)
 * [Philip Ulrich](https://github.com/philip-ulrich)
 * [Pierre Rudloff](https://github.com/Rudloff)
 
