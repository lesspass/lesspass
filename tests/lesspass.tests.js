import assert from 'assert';
import * as lesspass from '../app/lesspass';

describe('lesspass', function () {
    it('should return a default password with a size of 10', function () {
        var generatedPassword = lesspass.make_password('password', 'facebook');
        assert.equal(10, generatedPassword.length);
    });
    it('should allow to change password length', function () {
        var generatedPassword = lesspass.make_password('password', 'facebook', 12);
        assert.equal(12, generatedPassword.length);
    });
    it('should hmac with hash sha256', function () {
        assert.equal('Y2ViYmVlZm', lesspass.make_password('password', 'facebook'));
    });
});