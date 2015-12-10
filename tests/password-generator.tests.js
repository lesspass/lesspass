(function () {
  'use strict';

  var assert = require('assert');
  var PasswordGenerator = require('../app/password-generator');

  describe('password-generator',function () {
    it('should return a default password with a size of 10',function () {
      var passwordGenerator = new PasswordGenerator();

      var generatedPassword = passwordGenerator.make_password('password', 'facebook');

      assert.equal(10, generatedPassword.length);
    });
  });
}());
