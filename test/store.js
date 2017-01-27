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
    t.true(state.currentPasswordProfile.version == 2);
    t.true(state.currentPasswordProfile.uppercase);
});