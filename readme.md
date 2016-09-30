[![Build Status](https://travis-ci.org/lesspass/core.svg?branch=master)](https://travis-ci.org/lesspass/core)

# LessPass Core

core library for LessPass password manager in javascript used to generate unique password.

It works with the browser and NodeJs

## Requirements

  - node 4.x.x

## Install

    npm install lesspass

## Usage

### Node

    var lesspass = require('lesspass');

    var login = 'contact@lesspass.com';
    var masterPassword = 'password';
    var site = 'lesspass.com';
    var options = {
        counter: 1,
        length: 12,
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: true
    };
    lesspass.encryptLogin(login, masterPassword).then(function (encryptedLogin) {
        var generatedPassword = lesspass.renderPassword(encryptedLogin, site, options);
        console.log(generatedPassword); //azYS7,olOL2]
    });



### Browser

    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
    <script src="../dist/lesspass.min.js"></script>
    <script>
        var site = 'lesspass.com';
        var login = 'contact@lesspass.com';
        var masterPassword = 'password';
        var options = {
            counter: 1,
            length: 12,
            lowercase: true,
            uppercase: true,
            numbers: true,
            symbols: true
        };
    
        lesspass.encryptLogin(login, masterPassword).then(function (encryptedLogin) {
            var generatedPassword = lesspass.renderPassword(encryptedLogin, site, options);
            console.log(generatedPassword);  //azYS7,olOL2]
        });
    </script>
    </body>
    </html>


see [tests/api.tests.js](tests/api.tests.js) for more examples


## Tests

    npm test

see [LessPass](https://github.com/lesspass/lesspass) project
