import test from 'ava';
import timekeeper from 'timekeeper';

import {mutations} from '../src/store/mutations';
import * as getters from '../src/store/getters';


test('LOGOUT', t => {
    const {LOGOUT} = mutations;
    const state = {authenticated: true};
    LOGOUT(state);
    t.false(state.authenticated);
});

test('LOGIN', t => {
    const {LOGIN} = mutations;
    const state = {authenticated: false};
    LOGIN(state);
    t.true(state.authenticated);
});

test('SET_CURRENT_PASSWORD', t => {
    const {SET_CURRENT_PASSWORD} = mutations;
    const state = {currentPassword: null};
    SET_CURRENT_PASSWORD(state, {password: {uppercase: true, version: 2}});
    t.is(state.currentPassword.version, 2);
    t.true(state.currentPassword.uppercase);
});

test('SET_CURRENT_PASSWORD immutable', t => {
    const {SET_CURRENT_PASSWORD} = mutations;
    const state = {};
    const password = {version: 2};
    SET_CURRENT_PASSWORD(state, {password});
    password.version = 1;
    t.is(state.currentPassword.version, 2);
});

test('SET_DEFAULT_PASSWORD', t => {
    const {SET_DEFAULT_PASSWORD} = mutations;
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