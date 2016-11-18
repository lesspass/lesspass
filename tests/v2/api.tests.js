var assert = chai.assert;

describe('LessPass v2', function () {
    describe('API', function () {
        it('render password', function () {
            var site = 'example.org';
            var login = 'contact@example.org';
            var masterPassword = 'password';
            var passwordProfile = {
                iterations: 100000,
                lowercase: true,
                uppercase: true,
                digits: true,
                symbols: false,
                length: 14,
                counter: 1
            };
            return LessPass.generatePassword(site, login, masterPassword, passwordProfile).then(function (generatedPassword) {
                assert.equal('y5m7Ctw2695ksh', generatedPassword);
            });
        });
        it('render password only digit', function () {
            var site = 'example.org';
            var login = 'contact@example.org';
            var masterPassword = 'password';
            var passwordProfile = {
                iterations: 100000,
                lowercase: false,
                uppercase: false,
                digits: true,
                symbols: false,
                length: 6,
                counter: 1
            };
            return LessPass.generatePassword(site, login, masterPassword, passwordProfile).then(function (generatedPassword) {
                assert.equal('874236', generatedPassword);
            });
        });
        it('render password  no number', function () {
            var site = 'example.org';
            var login = 'contact@example.org';
            var masterPassword = 'password';
            var passwordProfile = {
                iterations: 100000,
                lowercase: true,
                uppercase: true,
                digits: false,
                symbols: true,
                length: 14,
                counter: 1
            };
            return LessPass.generatePassword(site, login, masterPassword, passwordProfile).then(function (generatedPassword) {
                assert.equal("s>{F}wN/-fmMX?", generatedPassword);
            });
        });
    });
});

