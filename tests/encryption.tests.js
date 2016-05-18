import test from 'ava';
import {encryptLogin, deriveHash} from '../src/encryption';

test('should create encrypted hash with pbkdf2 (8192 iterations and sha 256)', t => {
  const login = 'test@lesspass.com';
  const masterPassword = 'password';

  return encryptLogin(login, masterPassword).then(hash => {
    t.is('90cff82b8847525370a8f29a59ecf45db62c719a535788ad0df58d32304e925d', hash);
  });
});

test('should create encrypted hash with 64 chars length', t => {
  const login = 'test@lesspass.com';
  const masterPassword = 'password';

  return encryptLogin(login, masterPassword).then(hash => {
    t.is(64, hash.length);
  });
});

test('should reject promise if no parameter', t => {
  t.plan(1);
  return encryptLogin('', '').catch(() => {
    t.pass('promise rejected with empty parameter');
  });
});

test('should derive hash with default length', t => {
  const hash = '9f505f3a95fe0485da3242cb81c9fe25c2f400d8399737655a8dad2b52778d88';
  const site = 'lesspass.com';
  t.is(12, deriveHash(hash, site).length);
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
    deriveHash(hash, site),
    deriveHash(hash, site, option)
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
  t.is(10, deriveHash(hash, site, option).length);
});

test('should return two different passwords if site different', t => {
  const hash = 'f4fd3885fb70085f2285c3382e2d9adb4c2553285fc45dd896791aa5e79070a9';
  const site = 'google.com';
  const site2 = 'facebook.com';
  t.not(
    deriveHash(hash, site),
    deriveHash(hash, site2)
  );
});

test('should return two different passwords if counter different', t => {
  const hash = 'dfba06278c9aa24d992bc2d390a53efef482788859455875f72015335d085fcd';
  const site = 'lesspass.com';
  const option = {counter: 1};
  const option2 = {counter: 2};
  t.not(
    deriveHash(hash, site, option),
    deriveHash(hash, site, option2)
  );
});
