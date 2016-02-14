var assert = require('assert');
var passwordGenerator = require('../password-generator');

describe('passwordGenerator', function () {
    describe('master password', function () {
        it('should create master password with pbkdf2 (8192 iterations and sha 256)', function (done) {
            var email = 'test@lesspass.com';
            var password = "password";

            passwordGenerator.createMasterPassword(email, password).then(function (masterPassword) {
                assert.equal("90cff82b8847525370a8f29a59ecf45db62c719a535788ad0df58d32304e925d", masterPassword);
                done();
            });
        });
        it('should create 64 char length master password', function (done) {
            var email = 'test@lesspass.com';
            var password = "password";

            passwordGenerator.createMasterPassword(email, password).then(function (masterPassword) {
                assert.equal(64, masterPassword.length);
                done();
            });
        });
    });
    describe('password templates password', function () {
        it('should get default template from password type', function () {
            assert.equal('Cvcvns', passwordGenerator._getTemplate());
        });
        it('should get template from password type', function () {
            assert.equal('vc', passwordGenerator._getTemplate(['lowercase']));
            assert.equal('VC', passwordGenerator._getTemplate(['uppercase']));
            assert.equal('n', passwordGenerator._getTemplate(['numbers']));
            assert.equal('s', passwordGenerator._getTemplate(['symbols']));
        });
        it('should concatenate template if two password password_types', function () {
            assert.equal('vcVC', passwordGenerator._getTemplate(['lowercase', 'uppercase']));
            assert.equal('vcns', passwordGenerator._getTemplate(['lowercase', 'numbers', 'symbols']));
        });
        it('should not care about order of type in password password_types', function () {
            assert.equal(
                passwordGenerator._getTemplate(['uppercase', 'lowercase']),
                passwordGenerator._getTemplate(['lowercase', 'uppercase'])
            );
        });
    });
    describe('hash', function () {
        it('should have default length of 12', function () {
            var masterPassword = 'password';
            var entry = {'site': 'facebook'};
            assert.equal(12, passwordGenerator._createHash(masterPassword, entry).length);
        });
        it('should allow to change default length', function () {
            var masterPassword = 'password';
            var entry = {
                site: 'lesspass',
                password: {
                    length: 10,
                    counter: 1
                }
            };
            assert.equal(10, passwordGenerator._createHash(masterPassword, entry).length);
        });
        it('should return two different passwords if site different', function () {
            var masterPassword = 'password';
            var entry = {site: 'facebook'};
            var entry2 = {site: 'google'};
            assert.notEqual(
                passwordGenerator._createHash(masterPassword, entry),
                passwordGenerator._createHash(masterPassword, entry2)
            );
        });
        it('should return two different passwords if counter different', function () {
            var masterPassword = 'password';
            var entry = {
                site: 'facebook',
                password: {
                    length: 14,
                    settings: ['lowercase', 'uppercase', 'numbers', 'symbols'],
                    counter: 1
                }
            };
            var entry2 = {
                site: 'facebook',
                password: {
                    length: 14,
                    settings: ['lowercase', 'uppercase', 'numbers', 'symbols'],
                    counter: 2
                }
            };
            assert.notEqual(
                passwordGenerator._createHash(masterPassword, entry),
                passwordGenerator._createHash(masterPassword, entry2)
            );
        });
    });

});
