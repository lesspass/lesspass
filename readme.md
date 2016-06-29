[![Build Status](https://travis-ci.org/lesspass/core.svg?branch=master)](https://travis-ci.org/lesspass/core)

# LessPass Core

core library for LessPass password manager in node.js used to generate unique password

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
        password: {
          length: 12,
          settings: ['lowercase', 'uppercase', 'numbers', 'symbols']
        }
    };
    lesspass.generatePassword(login, masterPassword, site, options).then(function (generatedPassword) {
        console.log(generatedPassword)  //azYS7,olOL2]
    });

### Browser

    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
    <script src="dist/lesspass.min.js"></script>
    <script>
        var login = 'contact@lesspass.com';
        var masterPassword = 'password';
        var site = 'lesspass.com';
        var options = {
            counter: 1,
            password: {
                length: 12,
                settings: ['lowercase', 'uppercase', 'numbers', 'symbols']
            }
        };
        lesspass.generatePassword(login, masterPassword, site, options).then(function (generatedPassword) {
            console.log(generatedPassword)
        });
    </script>
    </body>
    </html>

## API

### `generatePassword(login, masterPassword, site, options)`

generate unique password based on login, masterPassword, site and options.

return: promise with generatedPassword

    lesspass.generatePassword(login, masterPassword, site, options)
        .then(function (generatedPassword) {

        });

## Tests

    npm test

see [LessPass](https://github.com/lesspass/lesspass) project