import assert from 'assert';
import auth from '../../src/services/auth';
import nock from 'nock';

suite('Auth', () => {
  var credentials = {
    email: 'test@lesspass.com',
    password: 'password'
  };
  var token = 'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9';

  before(() => {
    var LocalStorage = require('node-localstorage').LocalStorage;
    global.localStorage = new LocalStorage('./tests/localStorage');
  });

  beforeEach(() => {
    nock('http://localhost/')
      .post('/api/sessions/', credentials)
      .reply(201, {token: token}, {'Content-Type': 'application/json'});
  });

  test('should make a post request to create a session', (done) => {
    auth.login(credentials)
      .then(() => {
        done();
      }).catch((err) => {
      console.log(err)
    })
  });

  test('should throw error if bad request', (done) => {
    nock.cleanAll();
    var badCredentials = {email: 'test@lesspass.com', password: '黑客'};
    nock('//lesspass.com/').post('/api/sessions/', badCredentials).reply(400, {});
    auth.login(credentials)
      .catch((error) => {
        done();
      });
  });

  test('should store token in localStorage', (done) => {
    auth.login(credentials)
      .then((data) => {
        assert.equal(token, localStorage.getItem('token'));
        done();
      });
  });

  test('should authenticate the user', (done) => {
    auth.user.authenticated = false;
    auth.login(credentials)
      .then((data) => {
        assert(auth.user.authenticated);
        done();
      });
  });

  test('check auth', (done) => {
    auth.login(credentials)
      .then((data) => {
        assert(auth.user.authenticated);
        localStorage.removeItem('token');
        auth.checkAuth();
        assert(!auth.user.authenticated);
        done();
      });
  });

  test('logout', (done) => {
    auth.login(credentials)
      .then((data) => {
        assert(auth.user.authenticated);
        auth.logout();
        assert(!auth.user.authenticated);
        assert(localStorage.getItem('token') === null);
        done();
      });
  });

  test('logout return promise', (done) => {
    auth.logout().then(done)
  });

  after(() => {
    global.localStorage._deleteLocation()
  })
});
