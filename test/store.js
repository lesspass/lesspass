import test from 'ava';
import {mutations} from '../src/store/mutations';

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

test('SET_DEFAULT_OPTIONS', t => {
    const {SET_DEFAULT_OPTIONS} = mutations;
    const state = {
        defaultOptions: {
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
    t.is(state.defaultOptions.length, 30);
    t.false(state.defaultOptions.symbols);
});