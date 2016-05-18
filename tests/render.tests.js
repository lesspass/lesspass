import test from 'ava';
import render from '../src/render';

test('should print different password if templates different', t => {
  const hash = '78ae5892055ab59fdd54489ae30928d322841a27590b65cf875fcfdd083f7c32';
  t.not(render.prettyPrint(hash, 'cv'), render.prettyPrint(hash, 'vc'));
});

test('must return a string of the same length as the input', t => {
  const hash = 'f5785e569ab5d38b02e2248c798ac17df90f57a85f34a9d5382408c2f0d9532d';
  t.is(hash.length, render.prettyPrint(hash, 'cv').length);
});

test('should return char inside a string based on modulo of the index', t => {
  const template = 'cv';
  t.is('c', render._getCharType(template, 0));
  t.is('v', render._getCharType(template, 1));
  t.is('c', render._getCharType(template, 10));
});

test('should convert a string into an array of char code', t => {
  const charCodes = render._string2charCodes('ab40f6ee71');
  t.is(97, charCodes[0]);
  t.is(98, charCodes[1]);
  t.is(10, charCodes.length);
});

test('should get password char based on its type and index', t => {
  const typeVowel = 'V';
  t.is('A', render._getPasswordChar(typeVowel, 0));
});

test('should modulo if overflow', t => {
  const typeVowel = 'V';
  t.is('E', render._getPasswordChar(typeVowel, 1));
  t.is('E', render._getPasswordChar(typeVowel, 7));
});

test('should get default template', t => {
  t.is('Cvcvns', render.getTemplate());
});

test('should get template from password setting', t => {
  t.is('vc', render.getTemplate(['lowercase']));
  t.is('VC', render.getTemplate(['uppercase']));
  t.is('n', render.getTemplate(['numbers']));
  t.is('s', render.getTemplate(['symbols']));
});

test('should concatenate template if two password settings', t => {
  t.is('vcVC', render.getTemplate(['lowercase', 'uppercase']));
  t.is('vcns', render.getTemplate(['lowercase', 'numbers', 'symbols']));
});

test('should not care about order of password settings', t => {
  t.is(
    render.getTemplate(['uppercase', 'lowercase']),
    render.getTemplate(['lowercase', 'uppercase'])
  );
});
