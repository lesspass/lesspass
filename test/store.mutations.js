import test from 'ava';
import timekeeper from 'timekeeper';

import {mutations} from '../src/store/mutations';
import * as types from '../src/store/mutation-types';

test('LOGOUT', t => {
    const LOGOUT = mutations[types.LOGOUT];
    const state = {authenticated: true};
    LOGOUT(state);
    t.false(state.authenticated);
});

test('LOGIN', t => {
    const LOGIN = mutations[types.LOGIN];
    const state = {authenticated: false};
    LOGIN(state);
    t.true(state.authenticated);
});

test('SET_PASSWORD', t => {
    const SET_PASSWORD = mutations[types.SET_PASSWORD];
    const state = {password: null};
    SET_PASSWORD(state, {password: {uppercase: true, version: 2}});
    t.is(state.password.version, 2);
    t.true(state.password.uppercase);
});

test('SET_PASSWORD change lastUse date', t => {
    const SET_PASSWORD = mutations[types.SET_PASSWORD];
    const now = 1485989236000;
    const time = new Date(now);
    timekeeper.freeze(time);
    const state = {lastUse: null, password: null};
    SET_PASSWORD(state, {password: {}});
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

test('SET_DEFAULT_PASSWORD', t => {
    const SET_DEFAULT_PASSWORD = mutations[types.SET_DEFAULT_PASSWORD];
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
    SET_DEFAULT_PASSWORD(state, {options: {symbols: false, length: 30}});
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

test('DELETE_PASSWORD clean password with default password if same id', t => {
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

test('SET_VERSION password null', t => {
    const SET_VERSION = mutations[types.SET_VERSION];
    const state = {
        password: null,
    };
    SET_VERSION(state, {version: 2});
    t.is(state.password.version, 2);
});