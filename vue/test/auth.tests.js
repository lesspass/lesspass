import test from 'ava';
import {LocalStorageMock} from './_helpers';
import Auth from '../src/services/auth';
import nock from 'nock';


test('request token', t => {
    const token = '5e0651';
    const user = {email: 'test@example.org', password: 'password'};

    nock('https://example.org').post('/api/tokens/auth/', user).reply(201, {token});
    return Auth._requestToken(user).then(requestedToken => {
        t.is(requestedToken, token);
    });
});

test('user first connection is guest', t => {
    const storage = new LocalStorageMock();
    const auth = new Auth(storage);
    t.true(auth.isGuest());
});

test('user return on site before token expire', t => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE0MzcwMTg1ODIsImV4cCI6MTc1NzkyODQzNH0.KzEBhVgm3xa51jsBklB0Ib9DDwAkvynOnkwLLJoD5AU';
    const storage = new LocalStorageMock({jwt: token});
    const auth = new Auth(storage);
    t.true(auth.isAuthenticated());
    t.false(auth.isGuest());
    t.true(auth.user.authenticated);
});

test('user return on site after token expiration', t => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE0MzcwMTg1ODIsImV4cCI6MTQzNzAxODU4M30.NmMv7sXjM1dW0eALNXud8LoXknZ0mH14GtnFclwJv0s';
    const storage = new LocalStorageMock({token});
    const auth = new Auth(storage);
    t.false(auth.isAuthenticated());
    t.true(auth.isGuest());
    t.false(auth.user.authenticated);
});

test('login save token', t => {
    const token = '3e3231';
    const storage = new LocalStorageMock();
    const auth = new Auth(storage);
    const user = {
        email: 'test@lesspass.com',
        password: 'password'
    };
    nock('https://example.org').post('/api/tokens/auth/', user).reply(201, {token});
    return auth.login(user).then(() => {
        t.is(storage.getItem('jwt'), token);
    });
});

test('logout user remove token and unauthenticate user', t => {
    const token = '3e3231';
    const storage = new LocalStorageMock({token});
    const auth = new Auth(storage);
    auth.user.authenticated = true;
    return auth.logout().then(() => {
        t.false(auth.user.authenticated);
        t.falsy(storage.getItem('jwt'));
    });
});