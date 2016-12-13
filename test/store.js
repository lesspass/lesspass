import test from 'ava';
import { mutations } from '../src/store/mutations';

test('LOGOUT', t => {
    const {LOGOUT} = mutations;
    const state = {authenticated:true};
    LOGOUT(state);
    t.false(state.authenticated);
});