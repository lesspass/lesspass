import test from 'ava';
import timekeeper from 'timekeeper';

import * as getters from '../src/store/getters';

test('password 5 minutes after last use', t => {
    const now = 1485989236;
    const time = new Date(now * 1000);
    timekeeper.freeze(time);
    const fiveMinutesBefore = (now - 5 * 60) * 1000;
    const state = {
        lastUse: fiveMinutesBefore,
        password: {
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
    const password = getters.password(state);
    t.is(password.login, 'test@example.org');
    t.is(password.length, 30);
    timekeeper.reset();
});

test('password more than 10 minutes after last use', t => {
    const now = 1485989236;
    const time = new Date(now * 1000);
    timekeeper.freeze(time);
    const fifteenMinutesBefore = (now - 15 * 60) * 1000;
    const state = {
        lastUse: fifteenMinutesBefore,
        password: {
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
    const password = getters.password(state);
    t.is('', password.login);
    t.is('', password.site);
    t.is(16, password.length);
    timekeeper.reset();
});

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