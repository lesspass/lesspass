# LessPass core

npm core library used to generate LessPass passwords

## Requirements

  - node LTS v6

## Install

    npm install lesspass

## Usage

    var profile = {
      site: 'example.org',
      login: 'contact@example.org'
    }
    var masterPassword = 'password';
    LessPass.generatePassword(profile, masterPassword)
        .then(function (generatedPassword) {
            console.log(generatedPassword); // WHLpUL)e00[iHR+w
        });

see [tests/api.tests.js](tests/v2/api.tests.js) for more examples

## API

### generatePassword(profile, masterPassword)

generate LessPass password
    
    var profile = {
      site: 'example.org',
      login: 'contact@example.org'
      options: {
        uppercase: true,
        lowercase: true,
        digits: true,
        symbols: true,
        length: 16,
        counter: 1
      },
      crypto: {
        method: 'pbkdf2',
        iterations: 100000,
        keylen: 32,
        digest: "sha256"
      }
    };
    var masterPassword = 'password';
    LessPass.generatePassword(profile, masterPassword)
        .then(function (generatedPassword) {
            console.log(generatedPassword); // WHLpUL)e00[iHR+w
        });

###  createFingerprint(password)

create a fingerprint
    
    LessPass.createFingerprint('password').then(fingerprint => {
      console.log(fingerprint); //e56a207acd1e6714735487c199c6f095844b7cc8e5971d86c003a7b6f36ef51e
    });

### isSupported()

test if LessPass is supported

    LessPass.isSupported().then(function(isSupported) {
      if (isSupported) {
        console.log("LessPass is supported");
      }
      else {
        console.log("LessPass is not supported");
      }
    });

## Tests

    npm test

## License

This project is licensed under the terms of the GNU GPLv3.


## Issues

report issues on [LessPass project](https://github.com/lesspass/lesspass/issues)
