[![Build Status](https://travis-ci.org/lesspass/lesspass.svg?branch=master)](https://travis-ci.org/lesspass/lesspass)
# lesspass

lesspass open source password manager (https://lesspass.com)


## lesspass submodules

 - [core](https://github.com/lesspass/core) : npm module with a clean api used to create passwords
 - [backend](https://github.com/lesspass/api) : backend api used to store information about passwords
 - [nginx](https://github.com/lesspass/nginx) : configuration for nginx


## requirements

  * git
  * docker 1.10
  * docker-compose 1.6

## try lesspass on local

clone application:

    git clone https://github.com/guillaumevincent/lesspass.git
    cd lesspass
    git submodule update --init
    docker-compose up -d

open the application in a browser: [http://localhost](http://localhost)


## tests

run frontend tests

    cd frontend
    npm install
    npm test


## status

| module | tests |
| --- | --- |
| [frontend](https://github.com/lesspass/lesspass) | [![Build Status](https://travis-ci.org/lesspass/lesspass.svg?branch=master)](https://travis-ci.org/lesspass/lesspass) |
| [core](https://github.com/lesspass/core) | [![Build Status](https://travis-ci.org/lesspass/core.svg?branch=master)](https://travis-ci.org/lesspass/core) |
| [backend](https://github.com/lesspass/api) | [![Build Status](https://travis-ci.org/lesspass/api.svg?branch=master)](https://travis-ci.org/lesspass/api) |
