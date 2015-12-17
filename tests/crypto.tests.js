import assert from 'assert';
import * as crypto from '../app/crypto';

describe('crypto', function () {
    it('should convert string into array of char code', function () {
        var uint8Array = crypto.string2Uint8Array('ab');
        assert.equal(97, uint8Array[0]);
        assert.equal(98, uint8Array[1]);
        assert.equal('a', String.fromCharCode(uint8Array[0]));
    });

    describe('getTemplate', function () {
        it('should get a template based on modulo of the index', function () {
            var templates = ['template1', 'template2', 'template3'];
            assert.equal('template2', crypto.getTemplate(templates, 4));
            assert.equal('template2', crypto.getTemplate(templates, 10));
        });
    });

    describe('encode', function () {
        it('should return char inside template based on modulo of the indexes', function () {
            var template = '0123456789';
            assert.equal('01', crypto.encode(template, [20, 11]));
            assert.equal('01', crypto.encode(template, [20, 21]));
            assert.equal('29', crypto.encode(template, [12, 19]));
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