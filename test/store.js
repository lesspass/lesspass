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