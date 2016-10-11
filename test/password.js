import test from 'ava';
import Password from '../src/domain/password';

test('password is new if no passwords', t => {
    const password = new Password({site: 'example.org'});
    t.true(password.isNewPassword([]))
});

test('password is new if no site matching', t => {
    const password = new Password({site: 'example.org'});
    t.true(password.isNewPassword([{site: 'ubuntu.org'}]))
});

test('password is new if site match but no login', t => {
    const password = new Password({site: 'example.org', login: 'test'});
    t.true(password.isNewPassword([{site: 'example.org', login: 'test@example.org'}]))
});

test('password is not new if site and login matching', t => {
    const password = new Password({site: 'example.org', login: 'test'});
    t.false(password.isNewPassword([{site: 'example.org', login: 'test'}]))
});

test('password options default', t => {
    const password = new Password({
        site: 'example.org',
        login: 'test',
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true,
        length: 12,
        counter: 1,
    });
    t.deepEqual(password.options, {
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true,
        length: 12,
        counter: 1,
    })
});

test('password options', t => {
    const password = new Password({
        site: 'example.org',
        login: 'test',
        uppercase: false,
        lowercase: true,
        numbers: false,
        symbols: true,
        length: 14,
        counter: 3,
    });
    t.deepEqual(password.options, {
        uppercase: false,
        lowercase: true,
        numbers: false,
        symbols: true,
        length: 14,
        counter: 3,
    })
});

