[![Build Status](https://travis-ci.org/lesspass/core.svg?branch=master)](https://travis-ci.org/lesspass/core)

> core library for LessPass password manager in javascript used to generate unique password.

## Requirements

  - node LTS v6

## Install

    npm install lesspass

## Usage
    
    var LessPass = require('lesspass');
    
    var site = 'lesspass.com';
    var login = 'contact@lesspass.com';
    var masterPassword = 'password';
    var options = {
        counter: 1,
        length: 12,
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: true,
        template: 'vcVCns'
    };
    
    LessPass.encryptLogin(login, masterPassword).then(encryptedLogin => {
        LessPass.renderPassword(encryptedLogin, site, options).then(generatedPassword => {
             console.log(generatedPassword); //azYS7,olOL2]
        });
    });


see [tests/api.tests.js](tests/api.tests.js) for more examples


## Tests

    npm test

## License

This project is licensed under the terms of the GNU GPLv3.


## Issues

report issues on [LessPass project](https://github.com/lesspass/lesspass/issues)
