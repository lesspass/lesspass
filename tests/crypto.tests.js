import assert from 'assert';
import * as crypto from '../app/crypto';

describe('crypto', function () {
    it('should convert string into array of char code', function () {
        var uint8Array = crypto.string2Uint8Array('ab');
        assert.equal(97, uint8Array[0]);
        assert.equal(98, uint8Array[1]);
        assert.equal('a', String.fromCharCode(uint8Array[0]));
    });

    describe('templates', function () {
        it('should get a template from user password type entries', function () {
            assert.equal('cv', crypto.getTemplate('l'));
            assert.equal('CV', crypto.getTemplate('u'));
            assert.equal('cvn', crypto.getTemplate('ln'));
            assert.equal('ns', crypto.getTemplate('ns'));
        });
        it('should return char inside template based on modulo of the index', function () {
            var template = 'cv';
            assert.equal('c', crypto.getCharType(template, 0));
            assert.equal('v', crypto.getCharType(template, 1));
            assert.equal('c', crypto.getCharType(template, 10));
        });
    });

    describe('encode', function () {
        it('should return password size same size of hash given', function () {
            var hash = 'Y2Vi2a112A';
            var passwordType = 'lun';
            assert.equal(10, crypto.encode(hash, passwordType).length);
        });
        it('for the same hash should return value depending on the passwordType', function () {
            var hash = 'a';
            var passwordType1 = 'n';
            var passwordType2 = 'l';
            assert.notEqual(crypto.encode(hash, passwordType1), crypto.encode(hash, passwordType2));
        });
    });

    describe('getPasswordChar', function () {
        it('should have vowel type', function () {
            assert.equal(6, crypto.passwordChars['v'].length);
            assert.equal(6, crypto.passwordChars['V'].length);
        });
        it('should have consonant type', function () {
            assert.equal(20, crypto.passwordChars['c'].length);
            assert.equal(20, crypto.passwordChars['C'].length);
        });
        it('should have alphabet uppercase type', function () {
            assert.equal(26, crypto.passwordChars['A'].length);
        });
        it('should have alphabet uppercase and lowercase type', function () {
            assert.equal(52, crypto.passwordChars['a'].length);
        });
        it('should have number type', function () {
            assert.equal(10, crypto.passwordChars['n'].length);
        });
        it('should have symbol type', function () {
            assert.ok(crypto.passwordChars['s'].length);
        });
        it('should have all type', function () {
            assert.equal(86, crypto.passwordChars['x'].length);
        });
        it('should return char based on its type and on his index', function () {
            var typeVowel = 'V';
            assert.equal('A', crypto.getPasswordChar(typeVowel, 0));
        });
        it('should return char and modulo if overflow', function () {
            var typeVowel = 'V';
            assert.equal('E', crypto.getPasswordChar(typeVowel, 1));
            assert.equal('E', crypto.getPasswordChar(typeVowel, 7));
        });
    });
});