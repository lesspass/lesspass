import assert from 'assert';
import Lesspass from '../app/lesspass';

describe('LessPass', ()=> {
    describe('public api', ()=> {
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
            assert.equal('iwIQ8[acYT4&oc', Lesspass.createPassword(masterPassword, entry));
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
            assert.equal('Vexu8[Syce4&', Lesspass.createPassword(masterPassword, entry));
        });
        it('should create master password with pbkdf2 (8192 iterations and sha 256)', (done)=> {
            var email = 'test@lesspass.com';
            var password = "password";

            Lesspass.createMasterPassword(email, password).then((masterPassword) => {
                assert.equal("90cff82b8847525370a8f29a59ecf45db62c719a535788ad0df58d32304e925d", masterPassword);
                assert.equal(64, masterPassword.length);
                done();
            });
        });
        it('should create 64 char length master password', (done)=> {
            var email = 'test@lesspass.com';
            var password = "password";

            Lesspass.createMasterPassword(email, password).then((masterPassword) => {
                assert.equal("90cff82b8847525370a8f29a59ecf45db62c719a535788ad0df58d32304e925d", masterPassword);
                assert.equal(64, masterPassword.length);
                done();
            });
        });
    });
    describe('hash', ()=> {
        it('should have default length of 12', ()=> {
            var masterPassword = 'password';
            var entry = {'site': 'facebook'};
            assert.equal(12, Lesspass._createHash(masterPassword, entry).length);
        });
        it('should be able to create hash with defined length', ()=> {
            var masterPassword = 'password';
            var entry = {
                site: 'facebook',
                password: {
                    length: 10
                }
            };
            assert.equal(10, Lesspass._createHash(masterPassword, entry).length);
        });
        it('should return two different passwords if site different', ()=> {
            var masterPassword = 'password';
            var entry = {site: 'facebook'};
            var entry2 = {site: 'google'};
            assert.notEqual(
                Lesspass._createHash(masterPassword, entry),
                Lesspass._createHash(masterPassword, entry2)
            );
        });
        it('should return two different passwords if counter different', ()=> {
            var masterPassword = 'password';
            var old_entry = {site: 'facebook'};
            var entry = {site: 'facebook', 'counter': 2};
            assert.notEqual(
                Lesspass._createHash(masterPassword, entry),
                Lesspass._createHash(masterPassword, old_entry)
            );
        });
    });
    describe('password templates', ()=> {
        it('should get default template from password type', ()=> {
            assert.equal('Cvcvns', Lesspass._getTemplate());
        });
        it('should get template from password type', ()=> {
            assert.equal('vc', Lesspass._getTemplate(['lowercase']));
            assert.equal('VC', Lesspass._getTemplate(['uppercase']));
            assert.equal('n', Lesspass._getTemplate(['numbers']));
            assert.equal('s', Lesspass._getTemplate(['symbols']));
        });
        it('should concatenate template if two password password_types', ()=> {
            assert.equal('vcVC', Lesspass._getTemplate(['lowercase', 'uppercase']));
            assert.equal('vcns', Lesspass._getTemplate(['lowercase', 'numbers', 'symbols']));
        });
        it('should not care about order of type in password password_types', ()=> {
            assert.equal(
                Lesspass._getTemplate(['uppercase', 'lowercase']),
                Lesspass._getTemplate(['lowercase', 'uppercase'])
            );
        });
        it('should return char inside template based on modulo of the index', function () {
            var template = 'cv';
            assert.equal('c', Lesspass._getCharType(template, 0));
            assert.equal('v', Lesspass._getCharType(template, 1));
            assert.equal('c', Lesspass._getCharType(template, 10));
        });
    });
    describe('crypto', ()=> {
        it('should convert a string into a char code table', ()=> {
            var charCodes = Lesspass._string2charCodes('ab40f6ee71');
            assert.equal(97, charCodes[0]);
            assert.equal(98, charCodes[1]);
            assert.equal(10, charCodes.length);
        });
        it('should return password size same size of hash given', function () {
            var hash = 'Y2Vi2a112A';
            assert.equal(10, Lesspass._encode(hash, 'cv').length);
        });
        it('should return different values if templates are different', function () {
            var hash = 'a';
            assert.notEqual(Lesspass._encode(hash, 'cv'), Lesspass._encode(hash, 'vc'));
        });
        it('should get password char based on its type and index', function () {
            var typeVowel = 'V';
            assert.equal('A', Lesspass._getPasswordChar(typeVowel, 0));
        });
        it('should modulo if overflow', function () {
            var typeVowel = 'V';
            assert.equal('E', Lesspass._getPasswordChar(typeVowel, 1));
            assert.equal('E', Lesspass._getPasswordChar(typeVowel, 7));
        });
    });
});