import test from 'ava';
import * as getters from '../src/store/getters';

test('version', t => {
    const state = {
        password: {version: 2},
        defaultPassword: {version: 1}
    };
    const version = getters.version(state);
    t.is(version, 2);
});

test('version no password', t => {
    const state = {
        password: null,
        defaultPassword: {version: 1}
    };
    const version = getters.version(state);
    t.is(version, 1);
});