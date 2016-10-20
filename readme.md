[![Build Status](https://travis-ci.org/lesspass/core.svg?branch=master)](https://travis-ci.org/lesspass/core)

> core library for LessPass password manager in javascript used to generate unique password.

## Requirements

  - node v4.6.x

## Install

    npm install lesspass

## Usage
    
    import LessPass from 'lesspass';
        
    const site = 'lesspass.com';
    const login = 'contact@lesspass.com';
    const masterPassword = 'password';
    const options = {
        counter: 1,
        length: 12,
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: true
    };
    LessPass.encryptLogin(login, masterPassword)
        .then(encryptedLogin => {
            var generatedPassword = LessPass.renderPassword(encryptedLogin, site, options);
            console.log(generatedPassword); //azYS7,olOL2]
        });


see [tests/api.tests.js](tests/api.tests.js) for more examples


## Tests

    npm test

## License

MIT © [Guillaume Vincent](http://guillaumevincent.com)


## [LessPass project](https://github.com/lesspass/lesspass)
