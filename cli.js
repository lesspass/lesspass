#!/usr/bin/env node
'use strict';
var cpypst = require('copy-paste');
var meow = require('meow');
var LessPass = require('lesspass');
var read = require('read');

var cli = meow(`
    Usage
      $ lesspass <site> <login> <masterPassword>

    Options
        --lowercase, -l     true or false (default true)
        --uppercase, -u     true or false (default true)
        --symbols, -s       true or false (default true)
        --numbers, -n       true or false (default true)
        --clipboard, -C     true or false (default false)
        --length, -L        int (default 12)
        --counter, -c       int (default 1)

    Examples
      $ lesspass lesspass.com contact@lesspass.com 'my Master Password' --length=14 -s=false
      onAV7eqIM1arOZ
`, {
    alias: {
        l: 'lowercase',
        u: 'uppercase',
        s: 'symbols',
        n: 'numbers',
        L: 'length',
        c: 'counter',
        C: 'clipboard',
    }
});

function calcPassword(site, login, masterPassword, options) {
    LessPass.generatePassword(site, login, masterPassword, options).then(generatedPassword => {
        if (options.clipboard == true) {
            cpypst.copy(generatedPassword);
            console.log("Copied to clipboard");
            process.exit();
        } else {
            console.log(generatedPassword);
            process.exit();
        }
    });
}

var lowercase = (cli.flags.lowercase || 'true').toLowerCase() === 'true';
var uppercase = (cli.flags.uppercase || 'true').toLowerCase() === 'true';
var symbols = (cli.flags.symbols || 'true').toLowerCase() === 'true';
var numbers = (cli.flags.numbers || 'true').toLowerCase() === 'true';
var clipboard = (cli.flags.clipboard || 'false').toLowerCase() === 'true';
var options = {
    counter: cli.flags.counter || 1,
    length: cli.flags.length || 16,
    lowercase: lowercase,
    uppercase: uppercase,
    numbers: numbers,
    symbols: symbols,
    clipboard: clipboard
};

var site = cli.input[0];
var login = cli.input[1];

if (cli.input.length === 3) {
    var masterPassword = cli.input[2];
    calcPassword(site, login, masterPassword, options)
} else {
    read({prompt: 'master password: ', silent: true}, function (er, password) {
        calcPassword(site, login, password, options)
    });
}
