import test from 'ava';
import * as getters from '../src/store/getters';

test('version', t => {
  const state = {
    route: {path: '/'},
    password: {version: 2},
    defaultPassword: {version: 1}
  };
  const version = getters.version(state);
  t.is(version, 2);
});

test('version path equal default options', t => {
  const state = {
    route: {path: '/options/default'},
    password: {version: 2},
    defaultPassword: {version: 1}
  };
  const version = getters.version(state);
  t.is(version, 1);
});

test('version no password', t => {
  const state = {
    route: {path: '/'},
    password: null,
    defaultPassword: {version: 1}
  };
  const version = getters.version(state);
  t.is(version, 1);
});

test('passwordURL', t => {
  const state = {
    password: {
      login: "test@example.org",
      site: "example.org",
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: false,
      length: 16,
      counter: 1,
      version: 2
    },
    baseURL: 'https://lesspass.com'
  };

  t.is(getters.passwordURL(state), 'https://lesspass.com/#/?login=test@example.org&site=example.org&uppercase=true&lowercase=true&numbers=true&symbols=false&length=16&counter=1&version=2')
});

test('message', t => {
  const state = {
    message: {text: 'error message', status: 'error'}
  };
  const message = getters.message(state);
  t.is(message.text, state.message.text);
  t.is(message.status, state.message.status);
});

test('optionsDifferentFromDefault', t => {
  t.false(getters.optionsDifferentFromDefault({
    password: {
      login: "test@example.org",
      site: "example.org",
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true,
      length: 16,
      counter: 1,
      version: 2
    }
  }));
  t.true(getters.optionsDifferentFromDefault({
    password: {
      login: "test@example.org",
      site: "example.org",
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: false,
      length: 32,
      counter: 1,
      version: 1
    }
  }));
});
