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
      console.log(generatedPassword);  //azYS7,olOL2]
    });



### Browser

    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
    <script src="lesspass.min.js"></script>
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
        console.log(generatedPassword);  //azYS7,olOL2]
      });
    </script>
    </body>
    </html>

## API

### `generatePassword(login, masterPassword, site, options)`

generate unique password based on login, masterPassword, site and options.

paramaters :

 * `login`: string
 * `masterPassword`: string
 * `site`: string
 * option: dict with lesspass options
   * `counter`: integer (default: 1)
   * `password.length`: integer between 6 and 64 (default: 12)
   * `password.settings`: array of string in `lowercase`, `uppercase`, `numbers` or `symbols` (default: `['lowercase', 'uppercase', 'numbers', 'symbols']`)

exemple :

     var options = {
        counter: 2,
        password: {
            length: 14,
            settings: ['lowercase', 'uppercase', 'numbers']
        }
    };


return:

  * promise with generated password


    lesspass.generatePassword(login, masterPassword, site, options)
        .then(function (generatedPassword) {
            console.log(generatedPassword);
        })
        .catch(function (error) {
            console.log(error);
        });


see **tests/api.tests.js** for more examples


## Tests

    npm test

see [LessPass](https://github.com/lesspass/lesspass) project