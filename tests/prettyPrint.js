import test from 'ava';
import lesspass from '../src/lesspass2';

test('should print different password if templates different', t => {
    const encryptedLogin = '78ae5892055ab59fdd54489ae30928d322841a27590b65cf875fcfdd083f7c32';
    t.not(lesspass._prettyPrint(encryptedLogin, 'cv'), lesspass._prettyPrint(encryptedLogin, 'vc'));
});

test('must return a string of the same length as the input', t => {
    const hash = 'f5785e569ab5d38b02e2248c798ac17df90f57a85f34a9d5382408c2f0d9532d';
    t.is(hash.length, lesspass._prettyPrint(hash, 'cv').length);
});

test('should return char inside a string based on modulo of the index', t => {
    const template = 'cv';
    t.is('c', lesspass._getCharType(template, 0));
    t.is('v', lesspass._getCharType(template, 1));
    t.is('c', lesspass._getCharType(template, 10));
});

test('should convert a string into an array of char code', t => {
    const charCodes = lesspass._string2charCodes('ab40f6ee71');
    t.is(97, charCodes[0]);
    t.is(98, charCodes[1]);
    t.is(10, charCodes.length);
});

test('should get password char based on its type and index', t => {
    const typeVowel = 'V';
    t.is('A', lesspass._getPasswordChar(typeVowel, 0));
});

test('should modulo if overflow', t => {
    const typeVowel = 'V';
    t.is('E', lesspass._getPasswordChar(typeVowel, 1));
    t.is('E', lesspass._getPasswordChar(typeVowel, 7));
});
