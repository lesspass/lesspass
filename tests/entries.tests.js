import entries from '../src/services/entries';

import {localStorage} from './helpers';
entries.localStorage = localStorage;

suite('entries', () => {
  var entry, token;

  beforeEach(() => {
    token = 'ZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFt';
    localStorage.setItem('token', token);
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
    nock('http://localhost/', headers).get('/api/entries/').reply(200, {entries: []});
    entries.all().then(() => {
      done();
    });
  });

  test('should send requests with Authorization header updated', (done) => {
    var new_token = 'WV9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRyd';
    localStorage.setItem('token', new_token);
    var headers = {reqheaders: {'Authorization': 'JWT ' + new_token}};
    nock('http://localhost/', headers).get('/api/entries/').reply(200, {entries: []});
    entries.all().then(() => {
      done();
    });
  });

  test('should make a post request to create an entry', (done) => {
    nock('http://localhost/').post('/api/entries/', entry).reply(201, {});
    entries.create(entry)
      .then((response) => {
        assert.equal(201, response.status);
        done();
      });
  });

  test('should get all entries', (done) => {
    nock('http://localhost/').get('/api/entries/').reply(200, {entries: []});
    entries.all().then((response) => {
      assert.equal(200, response.status);
      assert.equal(0, response.data.entries.length);
      done();
    });
  });
});
