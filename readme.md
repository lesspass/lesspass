[![Build Status](https://travis-ci.org/lesspass/core.svg?branch=master)](https://travis-ci.org/lesspass/core)

# LessPass Core

core library for LessPass password manager in node.js used to generate unique password

## Requirements

  - node 4.x.x

## Install

    npm install lesspass

## Usage

    import lesspass from 'lesspass';

    const login = 'contact@lesspass.com';
    const masterPassword = 'password';
    const site = 'lesspass.com';
    const options = {
        counter: 1,
        password: {
          length: 12,
          settings: ['lowercase', 'uppercase', 'numbers', 'symbols']
        }
    };
    lesspass.generatePassword(login, masterPassword, site, options).then(password => {
        console.log(password) //azYS7,olOL2]
    });

## API

### `generatePassword(login, masterPassword, site, options)`

generate unique password based on login, masterPassword, site and options.


## Tests

    npm test

see [lesspass](https://github.com/lesspass/lesspass) project