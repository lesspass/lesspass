var lesspass = require('../lib/index');
var assert = require('assert');

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

var generatedPassword;
lesspass.encryptLogin(login, masterPassword)
    .then(function (encryptedLogin) {
        generatedPassword = lesspass.renderPassword(encryptedLogin, site, options);
        assert.equal(generatedPassword, 'azYS7,olOL2]');
        console.log('generated password ok');
    })
    .catch(e => {
        console.log(e);
    });
