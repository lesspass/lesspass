var lesspass = require('../lib/lesspass');
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

lesspass.encryptLogin(login, masterPassword).then(function (encryptedLogin) => {
    var generatedPassword = lesspass.deriveEncryptedLogin(encryptedLogin, site, options);
    assert(generatedPassword, 'azYS7,olOL2]');
});
