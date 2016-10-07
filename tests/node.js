import lesspass from '../index';
import assert from 'assert';

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
lesspass.encryptLogin(login, masterPassword)
    .then(encryptedLogin => {
        var generatedPassword = lesspass.renderPassword(encryptedLogin, site, options);
        assert.equal(generatedPassword, 'azYS7,olOL2]');
        console.log('test node ES6 ok');
    })
    .catch(err => {
        console.log(err);
    });
