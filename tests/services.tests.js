import assert from 'assert';
import nock from 'nock';


import Auth from '../src/services/auth';
import Entries from '../src/services/entries';
import {LocalStorage} from 'node-localstorage';

const url = 'http://localhost/';

suite('auth', () => {
  var auth, localStorage, token, credentials;

  beforeEach(() => {
    credentials = {
      email: 'test@lesspass.com',
      password: 'password'
    };
    token = 'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9';
    localStorage = new LocalStorage('./tests/localStorage');
    auth = new Auth(localStorage);
  });

  test('should make a post request to create a session', (done) => {
    nock(url).post('/api/token-auth/', credentials).reply(201, {token: token});
    auth.login(credentials).then(() => {
      done();
    });
  });

  test('should throw error if bad request', (done) => {
    nock(url).post('/api/token-auth/', credentials).reply(400, {});
    auth.login(credentials).catch(() => {
      done();
    });
  });

  test('should store token in localStorage', (done) => {
    nock(url).post('/api/token-auth/', credentials).reply(201, {token: token});
    auth.login(credentials).then(() => {
      assert.equal(token, localStorage.getItem('token'));
      done();
    });
  });

  test('should authenticate the user', (done) => {
    nock(url).post('/api/token-auth/', credentials).reply(201, {token: token});
    auth.login(credentials).then(() => {
      assert(auth.user.authenticated);
      done();
    });
  });

  test('check auth with a valid token', (done) => {
    nock(url).post('/api/token-verify/', {"token": token}).reply(200);
    localStorage.setItem('token', token);
    auth.checkAuth().then(() => {
      assert(auth.user.authenticated);
      done();
    });
  });

  test('check auth with an invalid token', (done) => {
    nock(url).post('/api/token-verify/', {"token": token}).reply(400);
    localStorage.setItem('token', token);
    auth.checkAuth().catch(() => {
      assert(!auth.user.authenticated);
      done();
    });
  });

  test('check refresh token non-expired', (done) => {
    var new_token = 'wibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9eyJzdWIiOiIxMjM0NTY3ODkwIi';
    nock(url).post('/api/token-refresh/', {"token": token}).reply(200, {token: new_token});
    auth.refreshToken(token).then((t) => {
      assert.equal(new_token, t);
      done();
    });
  });

  test('check refresh token expired', (done) => {
    localStorage.setItem('token', token);
    nock(url).post('/api/token-refresh/', {"token": token}).reply(400);
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

  after(()=> {
    localStorage._deleteLocation()
  });
});


suite('entries', () => {
  var entries, entry, localStorage, token;

  beforeEach(() => {
    token = 'ZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFt';
    localStorage = new LocalStorage('./tests/localStorageEntries');
    localStorage.setItem('token', token);
    entries = new Entries(localStorage);
    entry = {
      "site": "twitter.com",
      "password": {
        "counter": 1,
        "settings": [
          "lowercase",
          "uppercase",
          "numbers",
          "symbols"
        ],
        "length": 12
      },
      "email": "guillaume@oslab.fr",
    };
  });

  test('should send requests with Authorization header', (done) => {
    var headers = {reqheaders: {'Authorization': 'JWT ' + token}};
    nock(url, headers).get('/api/entries/').reply(200, {entries: []});
    entries.all().then(() => {
      done();
    });
  });

  test('should make a post request to create an entry', (done) => {
    nock(url).post('/api/entries/', entry).reply(201, {});
    entries.create(entry)
      .then((response) => {
        assert.equal(201, response.status);
        done();
      });
  });

  test('should get all entries', (done) => {
    nock(url).get('/api/entries/').reply(200, {entries: []});
    entries.all().then((response) => {
      assert.equal(200, response.status);
      assert.equal(0, response.data.entries.length);
      done();
    });
  });

  after(()=> {
    localStorage._deleteLocation()
  });
});