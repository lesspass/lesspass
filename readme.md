# LessPass

LessPass open source password manager (https://lesspass.com)


## How it works ?

 * [FR] [LessPass comment ça marche ?](https://blog.lesspass.com/lesspass-comment-%C3%A7a-marche-9f1201fffda5#.yjmd1bcad)

## LessPass submodules

 - [backend](https://github.com/lesspass/backend) : backend used to store information about passwords
 - [core](https://github.com/lesspass/core) : npm module with a clean api used to create passwords
 - [pure](https://github.com/lesspass/pure) : pure component in vuejs used by cozy, frontend and webextension
 - [cozy](https://github.com/lesspass/cozy) : MyCozyCloud application
 - [frontend](https://github.com/lesspass/frontend) : frontend for LessPass with vuejs
 - [nginx](https://github.com/lesspass/nginx) : configuration for nginx
 - [web extension](https://github.com/lesspass/webextension) : chrome and firefox web extension for lesspass password manager


## Self Host your LessPass Database

### requirements 

 * docker
 * docker-compose

### install 

simply run 

    bash <(curl -s https://raw.githubusercontent.com/lesspass/lesspass/master/lesspass.sh)


## Status

| module | tests |
| --- | --- |
| [backend](https://github.com/lesspass/backend) | [![Build Status](https://travis-ci.org/lesspass/backend.svg?branch=master)](https://travis-ci.org/lesspass/backend) |
| [core](https://github.com/lesspass/core) | [![Build Status](https://travis-ci.org/lesspass/core.svg?branch=master)](https://travis-ci.org/lesspass/core) |
| [pure](https://github.com/lesspass/pure) | [![Build Status](https://travis-ci.org/lesspass/pure.svg?branch=master)](https://travis-ci.org/lesspass/pure) |
| [web extension](https://github.com/lesspass/webextension) | [![Build Status](https://travis-ci.org/lesspass/webextension.svg?branch=master)](https://travis-ci.org/lesspass/webextension) |
