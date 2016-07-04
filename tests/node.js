var lesspass = require('../lib/lesspass');

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

