const LessPass = require('../src/lesspass');
const assert = require('assert');

const site = 'lesspass.com';
const login = 'contact@lesspass.com';
const masterPassword = 'password';
const passwordProfile = {
  lowercase: true,
  uppercase: true,
  numbers: true,
  symbols: true,
  length: 16,
  counter: 1,
  version: 2
};
LessPass.generatePassword(site, login, masterPassword, passwordProfile)
  .then(function(generatedPassword) {
    assert.equal(generatedPassword, '\\g-A1-.OHEwrXjT#');
    console.log('generated password ok');
  })
  .catch(function(e) {
    console.log(e);
  });
