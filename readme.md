[![Build Status](https://travis-ci.org/lesspass/core.svg?branch=master)](https://travis-ci.org/lesspass/core)

> core library for LessPass password manager in javascript used to generate unique password.

## Requirements

  - node LTS v6

## Install

    npm install lesspass

## Usage
    
    const site = 'lesspass.com';
    const login = 'contact@lesspass.com';
    const masterPassword = 'password';
    const passwordProfile = {
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: true,
        length: 16,
        counter: 1,
        version: 2
    };
    LessPass.generatePassword(site, login, masterPassword, passwordProfile)
        .then(function (generatedPassword) {
            assert.equal(generatedPassword, '\\g-A1-.OHEwrXjT#');
            console.log('generated password ok');
        });


see [tests/api.tests.js](tests/v2/api.tests.js) for more examples


## Tests

    npm test

## License

This project is licensed under the terms of the GNU GPLv3.


## Issues

report issues on [LessPass project](https://github.com/lesspass/lesspass/issues)
