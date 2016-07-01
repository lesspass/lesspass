import test from 'ava';
import lesspass from '../src/lesspass';

test('should create encrypted hash with pbkdf2 (8192 iterations and sha 256)', t => {
  const login = 'test@lesspass.com';
  const masterPassword = 'password';

  return lesspass.encryptLogin(login, masterPassword).then(hash => {
    t.is('90cff82b8847525370a8f29a59ecf45db62c719a535788ad0df58d32304e925d', hash);
  });
});

test('should create encrypted hash with 64 chars length', t => {
  return lesspass.encryptLogin('♥', '♥ ♥').then(hash => {
    t.is(64, hash.length);
  });
});

test('should reject promise if no parameter', t => {
  t.plan(1);
  return lesspass.encryptLogin('', '').catch(() => {
    t.pass('promise rejected with empty parameter');
  });
});

test('should derive hash with default length', t => {
  const hash = '9f505f3a95fe0485da3242cb81c9fe25c2f400d8399737655a8dad2b52778d88';
  const site = 'lesspass.com';
  t.is(12, lesspass._deriveHash(hash, site).length);
});

test('should derive hash with default options', t => {
  const hash = '90cff82b8847525370a8f29a59ecf45db62c719a535788ad0df58d32304e925d';
  const site = 'lesspass.com';
  const option = {
    counter: 1,
    password: {
      length: 12,
      settings: ['lowercase', 'uppercase', 'numbers', 'symbols']
    }
  };
  t.is(
    lesspass._deriveHash(hash, site),
    lesspass._deriveHash(hash, site, option)
  );
});

test('should derive hash with defined length', t => {
  const hash = 'd79d8482f708122288af7b259393a58fe05840f4555cc935cdd3f062b9aa75ed';
  const site = 'lesspass.com';
  const option = {
    counter: 1,
    password: {
      length: 10
    }
  };
  t.is(10, lesspass._deriveHash(hash, site, option).length);
});

test('should return two different passwords if site different', t => {
  const hash = 'f4fd3885fb70085f2285c3382e2d9adb4c2553285fc45dd896791aa5e79070a9';
  const site = 'google.com';
  const site2 = 'facebook.com';
  t.not(
    lesspass._deriveHash(hash, site),
    lesspass._deriveHash(hash, site2)
  );
});

test('should return two different passwords if counter different', t => {
  const hash = 'dfba06278c9aa24d992bc2d390a53efef482788859455875f72015335d085fcd';
  const site = 'lesspass.com';
  const option = {counter: 1};
  const option2 = {counter: 2};
  t.not(
    lesspass._deriveHash(hash, site, option),
    lesspass._deriveHash(hash, site, option2)
  );
});

test('should print different password if templates different', t => {
  const hash = '78ae5892055ab59fdd54489ae30928d322841a27590b65cf875fcfdd083f7c32';
  t.not(lesspass._prettyPrint(hash, 'cv'), lesspass._prettyPrint(hash, 'vc'));
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

test('should get default template', t => {
  t.is('Cvcvns', lesspass._getTemplate());
});

test('should get template from password setting', t => {
  t.is('vc', lesspass._getTemplate(['lowercase']));
  t.is('VC', lesspass._getTemplate(['uppercase']));
  t.is('n', lesspass._getTemplate(['numbers']));
  t.is('s', lesspass._getTemplate(['symbols']));
});

test('should concatenate template if two password settings', t => {
  t.is('vcVC', lesspass._getTemplate(['lowercase', 'uppercase']));
  t.is('vcns', lesspass._getTemplate(['lowercase', 'numbers', 'symbols']));
});

test('should not care about order of password settings', t => {
  t.is(
    lesspass._getTemplate(['uppercase', 'lowercase']),
    lesspass._getTemplate(['lowercase', 'uppercase'])
  );
});
