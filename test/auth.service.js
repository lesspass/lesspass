import test from 'ava';
import nock from 'nock';
import {LocalStorage} from 'node-localstorage';

import auth from '../src/services/auth';

const localStorage = new LocalStorage('./localStorage');
auth.localStorage = localStorage;

const user = {
  email: 'test@lesspass.com',
  password: 'password'
};
const token = 'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9';

test('should make a post request to create a session', t => {
  nock('http://localhost/').post('/api/tokens/auth/', user).reply(201, {token});
  return auth.login(user).then(r => {
    t.is(token, r.token);
  });
});

test('should throw error if bad request', t => {
  nock('http://localhost/').post('/api/tokens/auth/', user).reply(400, {});
  t.plan(1);
  return auth.login(user).catch(r => {
    t.is(400, r.status);
  });
});

test('should get user info', t => {
  nock('http://localhost/').get('/api/auth/me/').reply(200, {email: user.email});
  return auth.getUser().then(u => {
    t.is(u.email, user.email);
  });
});

test('should register a user', t => {
  nock('http://localhost/').post('/api/auth/register/', user).reply(201, {email: user.email, pk: 1});
  return auth.register(user).then(r => {
    t.is(r.email, user.email);
  });
});

test('should store token in localStorage', t => {
  nock('http://localhost/').post('/api/tokens/auth/', user).reply(201, {token});
  t.plan(1);
  return auth.login(user).then(() => {
    t.is(token, auth.localStorage.getItem('token'));
  });
});

/* eslint camelcase: 0 */
const credentials = {
  current_password: 'current password',
  new_password: 'new password'
};

const headers = {headers: {Authorization: `JWT ${token}`}};

test('should send requests with Authorization header', t => {
  nock('http://localhost/', headers).post('/api/auth/password/').query(true).reply(200, {});
  return auth.changePassword(credentials).then(r => {
    t.is(r.status, 200);
  });
});

test('should change password', t => {
  nock('http://localhost/', headers).post('/api/auth/password/', credentials).reply(200, {});
  t.plan(1);
  return auth.changePassword(credentials).then(r => {
    t.is(r.status, 200);
  });
});

test('should authenticate the user', t => {
  nock('http://localhost/').post('/api/tokens/auth/', user).reply(201, {token});
  t.plan(1);
  return auth.login(user).then(() => {
    t.true(auth.user.authenticated);
  });
});

test('get token', t => {
  auth.localStorage.setItem('hwm-token', token);
  return auth.getToken('hwm-token').then(expectedToken => {
    t.is(token, expectedToken);
  });
});

test('get missing token failed', () => {
  auth.localStorage.removeItem('token');
  return auth.getToken('token').catch(() => {
  });
});

test('check refresh token non-expired', t => {
  const fakeToken = 'wibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9eyJzdWIiOiIxMjM0NTY3ODkwIi';
  nock('http://localhost/').post('/api/tokens/refresh/', {token}).reply(200, {token: fakeToken});
  return auth.refreshToken(token).then(newToken => {
    t.is(fakeToken, newToken);
  });
});

test('check refresh token expired', t => {
  auth.localStorage.setItem('token', token);
  nock('http://localhost/').post('/api/tokens/refresh/', {token}).reply(400);
  return auth.refreshToken(token).catch(r => {
    t.is(r.status, 400);
  });
});

test('logout', t => {
  auth.localStorage.setItem('token', token);
  auth.user.authenticated = true;
  auth.logout();
  t.false(auth.user.authenticated);
  t.true(auth.localStorage.getItem('token') === null);
});

test('check token with a valid token', t => {
  auth.localStorage.setItem('token', token);
  nock('http://localhost/').post('/api/tokens/verify/', {token}).reply(200, {});
  return auth.checkAuth().then(() => {
    t.true(auth.user.authenticated);
  });
});

test('check token with an invalid token', t => {
  nock('http://localhost/').post('/api/tokens/verify/', {token}).reply(400);
  auth.localStorage.setItem('token', token);
  t.plan(1);
  return auth.checkAuth().catch(() => {
    t.false(auth.user.authenticated);
  });
});

test('check auth without any token', t => {
  auth.user.authenticated = true;
  auth.localStorage.removeItem('token');
  return auth.checkAuth().catch(() => {
    t.true(!auth.user.authenticated);
  });
});

test.after.always(() => {
  localStorage._deleteLocation();
});
