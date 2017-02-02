import test from 'ava';
import timekeeper from 'timekeeper';

import {mutations} from '../src/store/mutations';
import * as types from '../src/store/mutation-types';
import * as getters from '../src/store/getters';


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

test('SET_CURRENT_PASSWORD', t => {
    const SET_CURRENT_PASSWORD = mutations[types.SET_CURRENT_PASSWORD];
    const state = {currentPassword: null};
    SET_CURRENT_PASSWORD(state, {password: {uppercase: true, version: 2}});
    t.is(state.currentPassword.version, 2);
    t.true(state.currentPassword.uppercase);
});

test('SET_CURRENT_PASSWORD change lastUse date', t => {
    const SET_CURRENT_PASSWORD = mutations[types.SET_CURRENT_PASSWORD];
    var now = 1485989236000;
    var time = new Date(now);
    timekeeper.freeze(time);
    const state = {lastUse: null, currentPassword: null};
    SET_CURRENT_PASSWORD(state, {password: {}});
    t.is(now, state.lastUse);
    timekeeper.reset();
});

test('SET_CURRENT_PASSWORD immutable', t => {
    const SET_CURRENT_PASSWORD = mutations[types.SET_CURRENT_PASSWORD];
    const state = {};
    const password = {version: 2};
    SET_CURRENT_PASSWORD(state, {password});
    password.version = 1;
    t.is(state.currentPassword.version, 2);
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

test('store getter: get password 5 minutes after last use', t => {
    var now = 1485989236;
    var time = new Date(now * 1000);
    timekeeper.freeze(time);
    var fiveMinutesBefore = (now - 5 * 60) * 1000;
    const state = {
        lastUse: fiveMinutesBefore,
        currentPassword: {
            login: 'test@example.org',
            length: 30
        },
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
    const password = getters.getCurrentPassword(state);
    t.is('test@example.org', password.login);
    t.is(30, password.length);
    timekeeper.reset();
});

test('store getter: get password more than 10 minutes after last use', t => {
    var now = 1485989236;
    var time = new Date(now * 1000);
    timekeeper.freeze(time);
    var fifteenMinutesBefore = (now - 15 * 60) * 1000;
    const state = {
        lastUse: fifteenMinutesBefore,
        currentPassword: {
            login: 'test@example.org',
            length: 30
        },
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
    const password = getters.getCurrentPassword(state);
    t.is('', password.login);
    t.is('', password.site);
    t.is(16, password.length);
    timekeeper.reset();
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

test('DELETE_PASSWORD clean current password with default password if same id', t => {
    const DELETE_PASSWORD = mutations[types.DELETE_PASSWORD];
    const state = {
        passwords: [{id: '1', length: 30}, {id: '2', length: 16}],
        currentPassword: {id: '1', length: 30},
        defaultPassword: {length: 16}
    };
    DELETE_PASSWORD(state, {id: '1'});
    t.is(state.currentPassword.length, 16);
});