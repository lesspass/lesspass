(function () {
    'use strict';

    var assert = require('assert');
    var PasswordGenerator = require('../app/password-generator');

    describe('password-generator', function () {
        it('should return a default password with a size of 10', function () {
            var generatedPassword = PasswordGenerator.make_password('password', 'facebook');
            assert.equal(10, generatedPassword.length);
        });
        it('should allow to change password length', function () {
            var generatedPassword = PasswordGenerator.make_password('password', 'facebook', 12);
            assert.equal(12, generatedPassword.length);
        });
        it('should hmac text with master password', function () {
            assert.equal('MjE5Y2I1OG', PasswordGenerator.make_password('password', 'facebook'));
        });
    });
}());
