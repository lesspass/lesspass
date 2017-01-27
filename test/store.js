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

test('SET_CURRENT_PASSWORD_PROFILE', t => {
    const {SET_CURRENT_PASSWORD_PROFILE} = mutations;
    const state = {currentPasswordProfile: null};
    SET_CURRENT_PASSWORD_PROFILE(state, {
        uppercase: true,
        version: 2
    });
    t.is(state.currentPasswordProfile.version, 2);
    t.true(state.currentPasswordProfile.uppercase);
});

test('SET_CURRENT_PASSWORD_PROFILE immutable', t => {
    const {SET_CURRENT_PASSWORD_PROFILE} = mutations;
    const state = {};
    const profile = {version: 2};
    SET_CURRENT_PASSWORD_PROFILE(state, profile);
    profile.version = 1;
    t.is(state.currentPasswordProfile.version, 2);
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
    SET_DEFAULT_OPTIONS(state, {
        symbols: false,
        length: 30
    });
    t.is(state.defaultOptions.length, 30);
    t.false(state.defaultOptions.symbols);
});