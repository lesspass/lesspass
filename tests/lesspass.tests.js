var assert = require('assert');
var lesspass = require('../lesspass');

describe('lesspass', function () {
    it('should create password', function () {
        var masterPassword = "password";
        var entry = {
            site: 'facebook',
            password: {
                length: 14,
                settings: ['lowercase', 'uppercase', 'numbers', 'symbols'],
                counter: 1
            }
        };
        assert.equal('iwIQ8[acYT4&oc', lesspass.createPassword(masterPassword, entry));
    });
    it('should create password 2', function () {
        var masterPassword = "password";
        var entry = {
            site: 'facebook',
            password: {
                length: 12,
                settings: ['strong'],
                counter: 1
            }
        };
        assert.equal('Vexu8[Syce4&', lesspass.createPassword(masterPassword, entry));
    });
    it('should create 2 passwords different if counter different', function () {
        var masterPassword = "password";
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
            lesspass.createPassword(masterPassword, entry),
            lesspass.createPassword(masterPassword, entry2)
        );
    });
});
