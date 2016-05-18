import test from 'ava';
import lesspass from '../src/lesspass';

test('should create password', t => {
  const masterPassword = 'password';
  const entry = {
    site: 'facebook',
    password: {
      length: 14,
      settings: ['lowercase', 'uppercase', 'numbers', 'symbols'],
      counter: 1
    }
  };
  t.is('iwIQ8[acYT4&oc', lesspass.createPassword(masterPassword, entry));
});
test('should create password 2', t => {
  const masterPassword = 'password';
  const entry = {
    site: 'facebook',
    password: {
      length: 12,
      settings: ['strong'],
      counter: 1
    }
  };
  t.is('Vexu8[Syce4&', lesspass.createPassword(masterPassword, entry));
});
test('should create 2 passwords different if counter different', t => {
  const masterPassword = 'password';
  const entry = {
    site: 'facebook',
    password: {
      length: 14,
      settings: ['lowercase', 'uppercase', 'numbers', 'symbols'],
      counter: 1
    }
  };
  const entry2 = {
    site: 'facebook',
    password: {
      length: 14,
      settings: ['lowercase', 'uppercase', 'numbers', 'symbols'],
      counter: 2
    }
  };
  t.not(
    lesspass.createPassword(masterPassword, entry),
    lesspass.createPassword(masterPassword, entry2)
  );
});
