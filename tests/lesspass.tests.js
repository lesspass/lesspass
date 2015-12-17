import assert from 'assert';
import * as lesspass from '../app/lesspass';

describe('lesspass', function () {
    it('should return a default password with a size of 10', function () {
        var generatedPassword = lesspass.create_hash('password', 'facebook');
        assert.equal(10, generatedPassword.length);
    });
    it('should allow to change password length', function () {
        var generatedPassword = lesspass.create_hash('password', 'facebook', 12);
        assert.equal(12, generatedPassword.length);
    });
    it('should allow to change password with increment', function () {
        var password1 = lesspass.create_hash('password', 'facebook', 12);
        var password2 = lesspass.create_hash('password', 'facebook', 12, 2);
        assert.notEqual(password1, password2)
    });
    it('should create password', function () {
        var master_password = 'password';
        var password_info = {
            'size': '12',
            'type': 'luns',
            'counter': '1'
        };
        var site = 'facebook';
        assert.equal('veXU8[syCE4&', lesspass.create_password(master_password, site, password_info));
    });
});


describe('crypto', function () {
    it('should convert string into array of char code', function () {
        var uint8Array = lesspass.string2Uint8Array('ab');
        assert.equal(97, uint8Array[0]);
        assert.equal(98, uint8Array[1]);
        assert.equal('a', String.fromCharCode(uint8Array[0]));
    });

    describe('templates', function () {
        it('should get a template from user password type entries', function () {
            assert.equal('cv', lesspass.getTemplate('l'));
            assert.equal('CV', lesspass.getTemplate('u'));
            assert.equal('cvn', lesspass.getTemplate('ln'));
            assert.equal('ns', lesspass.getTemplate('ns'));
        });
        it('should return char inside template based on modulo of the index', function () {
            var template = 'cv';
            assert.equal('c', lesspass.getCharType(template, 0));
            assert.equal('v', lesspass.getCharType(template, 1));
            assert.equal('c', lesspass.getCharType(template, 10));
        });
    });

    describe('encode', function () {
        it('should return password size same size of hash given', function () {
            var hash = 'Y2Vi2a112A';
            var passwordType = 'lun';
            assert.equal(10, lesspass.encode(hash, passwordType).length);
        });
        it('for the same hash should return value depending on the passwordType', function () {
            var hash = 'a';
            var passwordType1 = 'n';
            var passwordType2 = 'l';
            assert.notEqual(lesspass.encode(hash, passwordType1), lesspass.encode(hash, passwordType2));
        });
    });

    describe('getPasswordChar', function () {
        it('should have vowel type', function () {
            assert.equal(6, lesspass.passwordChars['v'].length);
            assert.equal(6, lesspass.passwordChars['V'].length);
        });
        it('should have consonant type', function () {
            assert.equal(20, lesspass.passwordChars['c'].length);
            assert.equal(20, lesspass.passwordChars['C'].length);
        });
        it('should have alphabet uppercase type', function () {
            assert.equal(26, lesspass.passwordChars['A'].length);
        });
        it('should have alphabet uppercase and lowercase type', function () {
            assert.equal(52, lesspass.passwordChars['a'].length);
        });
        it('should have number type', function () {
            assert.equal(10, lesspass.passwordChars['n'].length);
        });
        it('should have symbol type', function () {
            assert.ok(lesspass.passwordChars['s'].length);
        });
        it('should have all type', function () {
            assert.equal(86, lesspass.passwordChars['x'].length);
        });
        it('should return char based on its type and on his index', function () {
            var typeVowel = 'V';
            assert.equal('A', lesspass.getPasswordChar(typeVowel, 0));
        });
        it('should return char and modulo if overflow', function () {
            var typeVowel = 'V';
            assert.equal('E', lesspass.getPasswordChar(typeVowel, 1));
            assert.equal('E', lesspass.getPasswordChar(typeVowel, 7));
        });
    });
});