import test from 'ava';
import timekeeper from 'timekeeper';
import mutations from '../src/store/mutations';
import * as types from '../src/store/mutation-types';

test('LOGOUT', t => {
  const LOGOUT = mutations[types.LOGOUT];
  const state = {
    authenticated: true
  };
  LOGOUT(state);
  t.false(state.authenticated);
});

test('LOGOUT clean user personal info', t => {
  const LOGOUT = mutations[types.LOGOUT];
  const state = {
    token: '123456',
    password: {counter: 2},
    passwords: [{id: '1', site: 'test@example.org'}],
    defaultPassword: {counter: 1},
  };
  LOGOUT(state);
  t.true(state.token === null);
  t.is(state.passwords.length, 0);
  t.is(state.password.counter, 1);
});

test('LOGIN', t => {
  const LOGIN = mutations[types.LOGIN];
  const state = {authenticated: false};
  LOGIN(state);
  t.true(state.authenticated);
});

test('SET_TOKEN', t => {
  const token = '123456';
  const SET_TOKEN = mutations[types.SET_TOKEN];
  const state = {token: null};
  SET_TOKEN(state, {token});
  t.is(state.token, token);
});

test('SET_PASSWORD', t => {
  const SET_PASSWORD = mutations[types.SET_PASSWORD];
  const state = {password: null};
  SET_PASSWORD(state, {password: {uppercase: true, version: 2}});
  t.is(state.password.version, 2);
  t.true(state.password.uppercase);
});

test('SET_PASSWORD dont change lastUse date', t => {
  const SET_PASSWORD = mutations[types.SET_PASSWORD];
  const now = 1485989236000;
  const time = new Date(now);
  timekeeper.freeze(time);
  const state = {lastUse: null, password: null};
  SET_PASSWORD(state, {password: {}});
  t.true(state.lastUse === null);
  timekeeper.reset();
});

test('PASSWORD_GENERATED change lastUse date', t => {
  const PASSWORD_GENERATED = mutations[types.PASSWORD_GENERATED];
  const now = 1485989236000;
  const time = new Date(now);
  timekeeper.freeze(time);
  const state = {lastUse: null};
  PASSWORD_GENERATED(state);
  t.is(now, state.lastUse);
  timekeeper.reset();
});

test('SET_PASSWORD immutable', t => {
  const SET_PASSWORD = mutations[types.SET_PASSWORD];
  const state = {};
  const password = {version: 2};
  SET_PASSWORD(state, {password});
  password.version = 1;
  t.is(state.password.version, 2);
});

test('SET_DEFAULT_OPTIONS', t => {
  const SET_DEFAULT_OPTIONS = mutations[types.SET_DEFAULT_OPTIONS];
  const state = {
    defaultPassword: {
      site: '',
      login: '',
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true,
      length: 16,
      counter: 1,
      version: 2
    }
  };
  SET_DEFAULT_OPTIONS(state, {options: {symbols: false, length: 30}});
  t.is(state.defaultPassword.length, 30);
  t.false(state.defaultPassword.symbols);
});

test('SET_PASSWORDS', t => {
  const SET_PASSWORDS = mutations[types.SET_PASSWORDS];
  const state = {
    passwords: []
  };
  SET_PASSWORDS(state, {passwords: [{site: 'site1'}, {site: 'site2'}]});
  t.is(state.passwords[0].site, 'site1');
  t.is(state.passwords[1].site, 'site2');
});

test('DELETE_PASSWORD', t => {
  const DELETE_PASSWORD = mutations[types.DELETE_PASSWORD];
  const state = {
    passwords: [{id: '1', site: 'site1'}, {id: '2', site: 'site2'}]
  };
  t.is(state.passwords.length, 2);
  DELETE_PASSWORD(state, {id: '1'});
  t.is(state.passwords.length, 1);
});

test('DELETE_PASSWORD replace state.password with state.defaultPassword', t => {
  const DELETE_PASSWORD = mutations[types.DELETE_PASSWORD];
  const state = {
    passwords: [{id: '1', length: 30}, {id: '2', length: 16}],
    password: {id: '1', length: 30},
    defaultPassword: {length: 16}
  };
  DELETE_PASSWORD(state, {id: '1'});
  t.is(state.password.length, 16);
});

test('SET_BASE_URL', t => {
  const SET_BASE_URL = mutations[types.SET_BASE_URL];
  const state = {
    baseURL: 'https://lesspass.com'
  };
  const baseURL = 'https://example.org';
  SET_BASE_URL(state, {baseURL: baseURL});
  t.is(state.baseURL, baseURL);
});

test('SET_VERSION', t => {
  const SET_VERSION = mutations[types.SET_VERSION];
  const state = {
    password: {version: 2},
  };
  SET_VERSION(state, {version: 1});
  t.is(state.password.version, 1);
});

test('SET_VERSION 1 should modify length to 12', t => {
  const SET_VERSION = mutations[types.SET_VERSION];
  const state = {
    password: {length: 16, version: 2},
  };
  SET_VERSION(state, {version: 1});
  t.is(state.password.length, 12);
});

test('SET_VERSION 2 should modify length to 16', t => {
  const SET_VERSION = mutations[types.SET_VERSION];
  const state = {
    password: {length: 12, version: 1},
  };
  SET_VERSION(state, {version: 2});
  t.is(state.password.length, 16);
});

test('LOAD_PASSWORD_FIRST_TIME 30 seconds after last use', t => {
  const now = 1485989236000;
  const time = new Date(now);
  timekeeper.freeze(time);
  const thirtySecondBefore = now - 30 * 1000;
  const state = {
    lastUse: thirtySecondBefore,
    password: {
      login: 'test@example.org',
      length: 30
    },
    defaultPassword: {
      login: '',
      length: 16
    }
  };
  const LOAD_PASSWORD_FIRST_TIME = mutations[types.LOAD_PASSWORD_FIRST_TIME];
  LOAD_PASSWORD_FIRST_TIME(state);
  t.is(state.password.login, 'test@example.org');
  t.is(state.password.length, 30);
  timekeeper.reset();
});

test('LOAD_PASSWORD_FIRST_TIME more than 1 minute after last use', t => {
  const now = 1485989236000;
  const time = new Date(now);
  timekeeper.freeze(time);
  const oneMinuteAndOneSecond = now - 61 * 1000;
  const state = {
    lastUse: oneMinuteAndOneSecond,
    password: {
      login: 'test@example.org',
      length: 30
    },
    defaultPassword: {
      login: '',
      length: 16
    }
  };
  const LOAD_PASSWORD_FIRST_TIME = mutations[types.LOAD_PASSWORD_FIRST_TIME];
  LOAD_PASSWORD_FIRST_TIME(state);
  t.is(state.password.login, '');
  t.is(state.password.length, 16);
  timekeeper.reset();
});

test('LOAD_PASSWORD_FIRST_TIME last use null', t => {
  const time = new Date(1485989236000);
  timekeeper.freeze(time);
  const state = {
    lastUse: null,
    password: {
      site: '',
      version: 1
    },
    defaultPassword: {
      site: '',
      version: 2
    }
  };
  const LOAD_PASSWORD_FIRST_TIME = mutations[types.LOAD_PASSWORD_FIRST_TIME];
  LOAD_PASSWORD_FIRST_TIME(state);
  t.is(state.password.version, 2);
  timekeeper.reset();
});

test('LOAD_PASSWORD_FOR_SITE', t => {
  const state = {
    password: {
      site: ''
    },
    passwords: [
      {id: '1', site: 'www.example.org'},
      {id: '2', site: 'www.google.com'}
    ]
  };
  const LOAD_PASSWORD_FOR_SITE = mutations[types.LOAD_PASSWORD_FOR_SITE];
  LOAD_PASSWORD_FOR_SITE(state, {site: 'www.google.com'});
  t.is(state.password.id, '2');
  t.is(state.password.site, 'www.google.com');
});

test('LOAD_PASSWORD_FOR_SITE no passwords', t => {
  const state = {
    password: {
      site: ''
    },
    passwords: []
  };
  const LOAD_PASSWORD_FOR_SITE = mutations[types.LOAD_PASSWORD_FOR_SITE];
  LOAD_PASSWORD_FOR_SITE(state, {site: 'account.google.com'});
  t.false('id' in state.password);
  t.is(state.password.site, 'account.google.com');
});

test('LOAD_PASSWORD_FOR_SITE multiple accounts matching criteria', t => {
  const state = {
    password: {
      site: ''
    },
    passwords: [
      {id: '1', site: 'www.example.org'},
      {id: '2', site: 'www.google.com'},
      {id: '3', site: 'account.google.com'},
    ]
  };
  const LOAD_PASSWORD_FOR_SITE = mutations[types.LOAD_PASSWORD_FOR_SITE];
  LOAD_PASSWORD_FOR_SITE(state, {site: 'www.google.com', url: 'https://www.google.com'});
  t.is(state.password.id, '2');
  t.is(state.password.site, 'www.google.com');
});

test('SET_MESSAGE', t => {
  const SET_MESSAGE = mutations[types.SET_MESSAGE];
  const state = {};
  SET_MESSAGE(state, {message: {text: 'success message', status: 'success'}});
  t.is(state.message.text, 'success message');
  t.is(state.message.status, 'success');
});

test('CLEAN_MESSAGE', t => {
  const CLEAN_MESSAGE = mutations[types.CLEAN_MESSAGE];
  const state = {message: {text: 'error message', status: 'error'}};
  CLEAN_MESSAGE(state);
  t.is(state.message.text, '');
  t.is(state.message.status, 'success');
});
