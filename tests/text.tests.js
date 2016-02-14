var assert = require('assert');
var text = require('../text');

describe('crypto', function () {
    it('should return char inside a string based on modulo of the index', function () {
        var template = 'cv';
        assert.equal('c', text._getCharType(template, 0));
        assert.equal('v', text._getCharType(template, 1));
        assert.equal('c', text._getCharType(template, 10));
    });
    it('should convert a string into an array of char code', function () {
        var charCodes = text._string2charCodes('ab40f6ee71');
        assert.equal(97, charCodes[0]);
        assert.equal(98, charCodes[1]);
        assert.equal(10, charCodes.length);
    });
    it('must return a string of the same length as the input', function () {
        var hash = 'Y2Vi2a112A';
        assert.equal(hash.length, text._encode(hash, 'cv').length);
    });
    it('should return different values if strings different', function () {
        var hash = 'a';
        assert.notEqual(text._encode(hash, 'cv'), text._encode(hash, 'vc'));
    });
    it('should get password char based on its type and index', function () {
        var typeVowel = 'V';
        assert.equal('A', text._getPasswordChar(typeVowel, 0));
    });
    it('should modulo if overflow', function () {
        var typeVowel = 'V';
        assert.equal('E', text._getPasswordChar(typeVowel, 1));
        assert.equal('E', text._getPasswordChar(typeVowel, 7));
    });
});
