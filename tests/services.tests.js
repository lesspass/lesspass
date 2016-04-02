import auth from '../src/services/auth';
import entries from '../src/services/entries';

suite('request', () => {
  test('should send requests with localStorage token', (done) => {
    var token = 'ZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFt';
    localStorage.setItem('token', token);
    var stub = nock('http://localhost/', {
      reqheaders: {'Authorization': 'JWT '+  token}
    });
    stub.get('/api/entries/').reply(200, {entries: []}, {'Content-Type': 'application/json'});
    entries.all().then((response) => {
      done();
    });
  });
});

suite('entries', () => {
  var entry = {
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

  test('should make a post request to create an entry', (done) => {
    nock('http://localhost/')
      .post('/api/entries/', entry)
      .reply(201, {}, {'Content-Type': 'application/json'});
    entries.create(entry)
      .then((response) => {
        assert.equal(201, response.status);
        done();
      });
  });

  test('should get all entries', (done) => {
    nock('http://localhost/')
      .get('/api/entries/')
      .reply(200, {entries: []}, {'Content-Type': 'application/json'});
    entries.all()
      .then((response) => {
        assert.equal(200, response.status);
        assert.equal(0, response.data.entries.length);
        done();
      });
  });
});

suite('auth', () => {
  var credentials = {
    email: 'test@lesspass.com',
    password: 'password'
  };
  var token = 'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9';


  beforeEach(() => {
    nock('http://localhost/')
      .post('/api/sessions/', credentials)
      .reply(201, {token: token}, {'Content-Type': 'application/json'});
  });

  test('should make a post request to create a session', (done) => {
    auth.login(credentials)
      .then(() => {
        done();
      });
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

