import assert from 'assert';
import {lesspass} from '../app/lesspass';

describe('lesspass', ()=> {
    describe('public api', ()=> {
        it('should create password', function () {
            var master_password = "password";
            var site_information = {
                'site_name': 'facebook',
                'password_length': 12,
                'password_types': ['strong'],
                'counter': 1
            };
            assert.equal('Vexu8[Syce4&', lesspass.create_password(master_password, site_information));
        });
    });
    describe('hash', ()=> {
        it('should have default length of 12', ()=> {
            var master_password = "password";
            var site_information = {'site_name': 'facebook'};
            assert.equal(12, lesspass._create_hash(master_password, site_information).length);
        });
        it('should be able to create hash with defined length', ()=> {
            var master_password = "password";
            var site_information = {
                'site_name': 'facebook',
                'password_length': 10
            };
            assert.equal(10, lesspass._create_hash(master_password, site_information).length);
        });
        it('should return two different passwords if site different', ()=> {
            var master_password = "password";
            var site_information = {'site_name': 'facebook'};
            var site_information2 = {'site_name': 'google'};
            assert.notEqual(
                lesspass._create_hash(master_password, site_information),
                lesspass._create_hash(master_password, site_information2)
            );
        });
        it('should return two different passwords if counter different', ()=> {
            var master_password = "password";
            var old_site_information = {'site_name': 'facebook'};
            var site_information = {'site_name': 'facebook', 'counter': 2};
            assert.notEqual(
                lesspass._create_hash(master_password, site_information),
                lesspass._create_hash(master_password, old_site_information)
            );
        });
    });
    describe('password templates', ()=> {
        it('should get default template from password type', ()=> {
            assert.equal('Cvcvns', lesspass._getTemplate());
        });
        it('should get template from password type', ()=> {
            assert.equal('vc', lesspass._getTemplate(['lowercase']));
            assert.equal('VC', lesspass._getTemplate(['uppercase']));
            assert.equal('n', lesspass._getTemplate(['numbers']));
            assert.equal('s', lesspass._getTemplate(['symbols']));
        });
        it('should concatenate template if two password password_types', ()=> {
            assert.equal('vcVC', lesspass._getTemplate(['lowercase', 'uppercase']));
            assert.equal('vcns', lesspass._getTemplate(['lowercase', 'numbers', 'symbols']));
        });
        it('should not care about order of type in password password_types', ()=> {
            assert.equal(
                lesspass._getTemplate(['uppercase', 'lowercase']),
                lesspass._getTemplate(['lowercase', 'uppercase'])
            );
        });
        it('should return char inside template based on modulo of the index', function () {
            var template = 'cv';
            assert.equal('c', lesspass._getCharType(template, 0));
            assert.equal('v', lesspass._getCharType(template, 1));
            assert.equal('c', lesspass._getCharType(template, 10));
        });
    });
    describe('crypto', ()=> {
        it('should convert a string into a char code table', ()=> {
            var charCodes = lesspass._string2charCodes('ab40f6ee71');
            assert.equal(97, charCodes[0]);
            assert.equal(98, charCodes[1]);
            assert.equal(10, charCodes.length);
        });
        it('should return password size same size of hash given', function () {
            var hash = 'Y2Vi2a112A';
            assert.equal(10, lesspass._encode(hash, 'cv').length);
        });
        it('should return different values if templates are different', function () {
            var hash = 'a';
            assert.notEqual(lesspass._encode(hash, 'cv'), lesspass._encode(hash, 'vc'));
        });
        it('should get password char based on its type and index', function () {
            var typeVowel = 'V';
            assert.equal('A', lesspass._getPasswordChar(typeVowel, 0));
        });
        it('should modulo if overflow', function () {
            var typeVowel = 'V';
            assert.equal('E', lesspass._getPasswordChar(typeVowel, 1));
            assert.equal('E', lesspass._getPasswordChar(typeVowel, 7));
        });
    });
});