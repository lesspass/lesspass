#!/usr/bin/env node
'use strict';
const copyPaste = require('copy-paste');
const meow = require('meow');
const LessPass = require('lesspass');
const read = require('read');
const chalk = require('chalk');

const cli = meow(`
    Usage
      $ lesspass <site> <login> [masterPassword] [options] 

    Options
        -l                  add lowercase in password
        -u                  add uppercase in password
        -d                  add digits in password
        -s                  add symbols in password

        --no-lowercase      remove lowercase from password
        --no-uppercase      remove uppercase from password
        --no-digits         remove digits from password
        --no-symbols        remove symbols from password

        --length, -L        int (default 16)
        --counter, -c       int (default 1)
        
        --clipboard, -C     copy generated password to clipboard rather than displaying it.
                            Need pbcopy (OSX), xclip (Linux) or clip (Windows).

    Examples
      # no symbols
      $ lesspass lesspass.com contact@lesspass.com password --no-symbols 
      OlfK63bmUhqrGODR
      
      # no symbols shortcut
      $ lesspass lesspass.com contact@lesspass.com password -lud
      OlfK63bmUhqrGODR
      
      # only digits and length of 8
      $ lesspass lesspass.com contact@lesspass.com  -d -L8
        master password: 
        75837019`, {alias: {L: 'length', c: 'counter', C: 'clipboard'}});


function calcPassword(site, login, masterPassword, passwordProfile) {
    LessPass.generatePassword(site, login, masterPassword, passwordProfile)
        .then(function (generatedPassword) {
            if (passwordProfile.clipboard) {
                copyPaste.copy(generatedPassword, function () {
                    console.log("Copied to clipboard");
                    process.exit();
                });
            } else {
                console.log(generatedPassword);
                process.exit();
            }
        });
}


function hasNoShortOption(options) {
    let hasShortOption = false;
    ['l', 'u', 'd', 's'].forEach(function (shortOption) {
        if (typeof options[shortOption] !== 'undefined' && options[shortOption]) {
            hasShortOption = true;
        }
    });
    return !hasShortOption;
}

function getOptionBoolean(options, optionString) {
    let shortOption = optionString.substring(0, 1);
    if (options[shortOption]) {
        return true;
    }
    if (typeof options[optionString] === 'undefined') {
        return hasNoShortOption(options);
    }
    return options[optionString]
}

const lowercase = getOptionBoolean(cli.flags, 'lowercase');
const uppercase = getOptionBoolean(cli.flags, 'uppercase');
const symbols = getOptionBoolean(cli.flags, 'symbols');
const digits = getOptionBoolean(cli.flags, 'digits');

const passwordProfile = {
    lowercase: lowercase,
    uppercase: uppercase,
    symbols: symbols,
    numbers: digits,
    clipboard: cli.flags.clipboard || false,
    length: cli.flags.length || 16,
    counter: cli.flags.counter || 1
};

const site = cli.input[0];
const login = cli.input[1];

if (typeof  site === 'undefined' && typeof login === 'undefined') {
    console.log(chalk.red('site or login cannot be empty'));
    console.log('type lesspass --help');
    process.exit(-1);
}


if (cli.input.length === 3) {
    const masterPassword = cli.input[2];
    calcPassword(site, login, masterPassword, passwordProfile)
} else {
    read({prompt: 'master password: ', silent: true}, function (er, password) {
        calcPassword(site, login, password, passwordProfile)
    });
}
