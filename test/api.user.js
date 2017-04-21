import test from 'ava';
import nock from 'nock';
import User from '../src/api/user';

test('login', t => {
  const token = '5e0651';
  const user = {email: 'test@example.org', password: 'password'};
  nock('https://lesspass.com').post('/api/tokens/auth/', user).reply(201, {token});
  return User.login(user, {baseURL: 'https://lesspass.com'}).then(response => {
    t.is(response.token, token);
  });
});

test('register', t => {
  const user = {email: 'test@example.org', password: 'password'};
  nock('https://lesspass.com').post('/api/auth/register/', user).reply(201, {email: user.email, pk: 1});
  return User.register(user, {baseURL: 'https://lesspass.com'}).then(response => {
    t.is(response.email, user.email);
  });
});

test('resetPassword', t => {
  var email = 'test@lesspass.com';
  nock('https://lesspass.com').post('/api/auth/password/reset/', {email}).reply(204);
  return User.resetPassword({email}, {baseURL: 'https://lesspass.com'}).then(data => {
    t.is(data.status, 204)
  });
});

test('confirmResetPassword', t => {
  var newPassword = {
    uid: 'MQ',
    token: '5g1-2bd69bd6f6dcd73f8124',
    new_password: 'password1'
  };
  nock('https://lesspass.com').post('/api/auth/password/reset/confirm/', newPassword).reply(204);
  return User.confirmResetPassword(newPassword, {baseURL: 'https://lesspass.com'}).then(data => {
    t.is(data.status, 204)
  });
});

test('refresh token', t => {
  const token = '3e3231';
  const newToken = 'wibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9eyJzdWIiOiIxMjM0NTY3ODkwIi';
  nock('https://lesspass.com').post('/api/tokens/refresh/', {token}).reply(200, {token: newToken});
  return User.requestNewToken({token}, {baseURL: 'https://lesspass.com'}).then(refreshedToken => {
    t.is(refreshedToken, newToken);
  });
});
