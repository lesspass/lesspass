import test from 'ava';
import {LocalStorageMock} from './_helpers';
import Auth from '../src/api/auth';
import Storage, {LOCAL_STORAGE_KEY} from '../src/api/storage';
import nock from 'nock';


function AuthFactory(token, localStorage = new LocalStorageMock()) {
    const storage = new Storage(localStorage);
    storage.saveToken(token);
    return new Auth(storage);
}

test('request token', t => {
    const token = '5e0651';
    const user = {email: 'test@example.org', password: 'password'};

    nock('https://lesspass.com').post('/api/tokens/auth/', user).reply(201, {token});
    return Auth._requestToken(user, {baseURL: 'https://lesspass.com'}).then(requestedToken => {
        t.is(requestedToken, token);
    });
});

test('user first connection is guest', t => {
    const storage = new Storage(new LocalStorageMock());
    const auth = new Auth(storage);
    t.true(auth.isGuest());
});

test('user return on site before token expire', t => {
    const auth = AuthFactory('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE0MzcwMTg1ODIsImV4cCI6MTc1NzkyODQzNH0.KzEBhVgm3xa51jsBklB0Ib9DDwAkvynOnkwLLJoD5AU');
    t.true(auth.isAuthenticated());
    t.false(auth.isGuest());
});

test('user return on site after token expiration', t => {
    const auth = AuthFactory('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE0MzcwMTg1ODIsImV4cCI6MTQzNzAxODU4M30.NmMv7sXjM1dW0eALNXud8LoXknZ0mH14GtnFclwJv0s');
    t.false(auth.isAuthenticated());
    t.true(auth.isGuest());
    t.false(auth.user.authenticated);
});

test('login save token', t => {
    const token = '3e3231';
    const storage = new LocalStorageMock();
    const auth = AuthFactory(token, storage);
    const user = {
        email: 'test@lesspass.com',
        password: 'password'
    };
    nock('https://lesspass.com').post('/api/tokens/auth/', user).reply(201, {token});
    return auth.login(user).then(() => {
        t.is(JSON.parse(storage.getItem(LOCAL_STORAGE_KEY)).jwt, token);
    });
});

test('logout user remove token and unauthenticate user', t => {
    const token = '3e3231';
    const storage = new LocalStorageMock();
    const auth = AuthFactory(token, storage);
    return auth.logout().then(() => {
        t.falsy(storage.getItem(LOCAL_STORAGE_KEY));
    });
});

test('login custom endpoint', t => {
    const token = '3e3231';
    const storage = new LocalStorageMock();
    const auth = AuthFactory(token, storage);
    const user = {
        email: 'test@lesspass.com',
        password: 'password'
    };
    nock('https://test.example.org').post('/api/tokens/auth/', user).reply(201, {token});
    return auth.login(user, 'https://test.example.org').then(() => {
        t.is(JSON.parse(storage.getItem(LOCAL_STORAGE_KEY)).jwt, token);
    });
});
