import auth from '../src/services/auth';

import {localStorage} from './helpers';
auth.localStorage = localStorage;

suite('auth', () => {
  var token, credentials;

  beforeEach(() => {
    credentials = {
      email: 'test@lesspass.com',
      password: 'password'
    };
    token = 'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9';
  });

  test('should make a post request to create a session', (done) => {
    nock('http://localhost/').post('/api/token-auth/', credentials).reply(201, {token: token});
    auth.login(credentials).then(() => {
      done();
    });
  });

  test('should throw error if bad request', (done) => {
    nock('http://localhost/').post('/api/token-auth/', credentials).reply(400, {});
    auth.login(credentials).catch(() => {
      done();
    });
  });

  test('should store token in localStorage', (done) => {
    nock('http://localhost/').post('/api/token-auth/', credentials).reply(201, {token: token});
    auth.login(credentials).then(() => {
      assert.equal(token, localStorage.getItem('token'));
      done();
    });
  });

  test('should authenticate the user', (done) => {
    nock('http://localhost/').post('/api/token-auth/', credentials).reply(201, {token: token});
    auth.login(credentials).then(() => {
      assert(auth.user.authenticated);
      done();
    });
  });

  test('check token with a valid token', (done) => {
    nock('http://localhost/').post('/api/token-verify/', {"token": token}).reply(200);
    localStorage.setItem('token', token);
    auth.checkAuth().then(() => {
      assert(auth.user.authenticated);
      done();
    });
  });

  test('check token with an invalid token', (done) => {
    nock('http://localhost/').post('/api/token-verify/', {"token": token}).reply(400);
    localStorage.setItem('token', token);
    auth.checkAuth().catch(() => {
      assert(!auth.user.authenticated);
      done();
    });
  });

  test('check auth without any token', (done) => {
    auth.user.authenticated = true;
    localStorage.removeItem('token');
    auth.checkAuth().catch(() => {
      assert(!auth.user.authenticated);
      done();
    });
  });

  test('get token', (done) => {
    localStorage.setItem('lesspass-token', token);
    auth.getToken('lesspass-token').then((expected_token) => {
      assert.equal(token, expected_token);
      localStorage.removeItem('lesspass-token');
      done();
    });
  });

  test('get missing token', (done) => {
    localStorage.removeItem('token');
    auth.getToken('token').catch(() => {
      done();
    });
  });

  test('check refresh token non-expired', (done) => {
    var new_token = 'wibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9eyJzdWIiOiIxMjM0NTY3ODkwIi';
    nock('http://localhost/').post('/api/token-refresh/', {"token": token}).reply(200, {token: new_token});
    auth.refreshToken(token).then((t) => {
      assert.equal(new_token, t);
      done();
    });
  });

  test('check refresh token expired', (done) => {
    localStorage.setItem('token', token);
    nock('http://localhost/').post('/api/token-refresh/', {"token": token}).reply(400);
    auth.refreshToken(token).catch(() => {
      done();
    });
  });

  test('logout', (done) => {
    auth.user.authenticated = true;
    auth.logout().then(()=> {
      assert(!auth.user.authenticated);
      assert(localStorage.getItem('token') === null);
      done();
    });
  });
});