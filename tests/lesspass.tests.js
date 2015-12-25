import assert from 'assert';
import Lesspass from '../app/lesspass';

import sinon from 'sinon';

describe('LessPass', ()=> {
    describe('public api', ()=> {
        it('should create password', function () {
            var master_password = "password";
            var site_information = {
                'site_name': 'facebook',
                'password_length': 12,
                'password_types': ['strong'],
                'counter': 1
            };
            assert.equal('Vexu8[Syce4&', Lesspass.create_password(master_password, site_information));
        });
        it('should create password new API', function () {
            var email = "test@lesspass.com";
            var password = "password";
            var entry = {
                site: 'facebook',
                password: {
                    length: 14,
                    settings: ['lowercase', 'uppercase', 'numbers', 'symbols'],
                    counter: 1
                }
            };
            var lesspass = new Lesspass();
            assert.equal('evYZ1_inUQ2[eb', lesspass.createPassword(email, password, entry));
        });
    });
    describe('master password', () => {
        it('should pbkdf2 email with password with 8192 iterations and use SHA 256 pseudo random function', ()=> {
            var email = 'test@lesspass.com';
            var password = "password";
            assert.equal(
                "90cff82b8847525370a8f29a59ecf45db62c719a535788ad0df58d32304e925d",
                Lesspass._createMasterPassword(email, password)
            );
        });
        it('should be length of 64', ()=> {
            var email = 'test@lesspass.com';
            var password = "password";
            assert.equal(64, Lesspass._createMasterPassword(email, password).length);
        });
    });
    describe('master password spy', () => {
        var lesspass, createMasterPasswordStub, defaultEntry;
        before(()=> {
            lesspass = new Lesspass();
            defaultEntry = {
                site: 'facebook',
                password: {
                    length: 14,
                    settings: ['lowercase', 'uppercase', 'numbers', 'symbols'],
                    counter: 1
                }
            };
        });
        beforeEach(() => {
            createMasterPasswordStub = sinon.stub(Lesspass, '_createMasterPassword', () => 'masterpassword');
        });
        it('should call createMasterPassword only once', ()=> {
            var email = "test@lesspass.com";
            var password = "password";
            lesspass.createPassword(email, password, defaultEntry);
            lesspass.createPassword(email, password, defaultEntry);
            assert.ok(createMasterPasswordStub.calledOnce);
        });

        it('should call createMasterPassword twice if email change', ()=> {
            var password = "password";
            lesspass.createPassword("admin@lesspass.com", password, defaultEntry);
            lesspass.createPassword("test@lesspass.com", password, defaultEntry);
            assert.ok(createMasterPasswordStub.calledTwice);
        });

        it('should call createMasterPassword twice if password change', ()=> {
            var email = "test@lesspass.com";
            lesspass.createPassword(email, "password1", defaultEntry);
            lesspass.createPassword(email, "password2", defaultEntry);
            assert.ok(createMasterPasswordStub.calledTwice);
        });

        afterEach(() => {
            Lesspass._createMasterPassword.restore();
        })
    });
    describe('hash', ()=> {
        it('should have default length of 12', ()=> {
            var master_password = "password";
            var site_information = {'site_name': 'facebook'};
            assert.equal(12, Lesspass._create_hash(master_password, site_information).length);
        });
        it('should be able to create hash with defined length', ()=> {
            var master_password = "password";
            var site_information = {
                'site_name': 'facebook',
                'password_length': 10
            };
            assert.equal(10, Lesspass._create_hash(master_password, site_information).length);
        });
        it('should return two different passwords if site different', ()=> {
            var master_password = "password";
            var site_information = {'site_name': 'facebook'};
            var site_information2 = {'site_name': 'google'};
            assert.notEqual(
                Lesspass._create_hash(master_password, site_information),
                Lesspass._create_hash(master_password, site_information2)
            );
        });
        it('should return two different passwords if counter different', ()=> {
            var master_password = "password";
            var old_site_information = {'site_name': 'facebook'};
            var site_information = {'site_name': 'facebook', 'counter': 2};
            assert.notEqual(
                Lesspass._create_hash(master_password, site_information),
                Lesspass._create_hash(master_password, old_site_information)
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