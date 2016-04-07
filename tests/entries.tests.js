import entries from '../src/services/entries';
import {entriesGetAll} from './helpers';
import {entriesGetOne} from './helpers';

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
      "login": "guillaume@lesspass.com",
    };
  });

  test('should send requests with Authorization header', (done) => {
    var headers = {reqheaders: {'Authorization': 'JWT ' + token}};
    nock('http://localhost/', headers).get('/api/entries/').query(true).reply(200, {entries: []});
    entries.all().then(() => {
      done();
    });
  });

  test('should create an entry', (done) => {
    nock('http://localhost/').post('/api/entries/', entry).reply(201, entry);
    entries.create(entry)
      .then((newEntry) => {
        assert.equal(entry.login, newEntry.login);
        done();
      });
  });

  test('should send requests with Authorization header updated', (done) => {
    var new_token = 'WV9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRyd';
    localStorage.setItem('token', new_token);
    var headers = {reqheaders: {'Authorization': 'JWT ' + new_token}};
    nock('http://localhost/', headers).get('/api/entries/').query(true).reply(200, {entries: []});
    entries.all().then(() => {
      done();
    });
  });

  test('should get all entries with offset', (done) => {
    nock('http://localhost/').get('/api/entries/').query(true).reply(200, {entries: entriesGetAll});
    entries.all().then((response) => {
      assert.equal(200, response.status);
      assert.equal(entriesGetAll.count, response.data.entries.results.length);
      done();
    });
  });

  test('should get all entries with parameters', (done) => {
    nock('http://localhost/').get('/api/entries/?limit=100&offset=0&search=query&sorting=asc&ordering=-created')
      .reply(200, {entries: []});
    entries.all(100, 0, 'query', 'asc', '-created')
      .then(() => {
        done();
      });
  });

  test('should get an entry', (done) => {
    var headers = {reqheaders: {'Authorization': 'JWT ' + token}};
    nock('http://localhost/', headers).get('/api/entries/d1ff1ae9-bb29-469d-8e5e-8a387f529de0/').reply(200, entriesGetOne);
    entries.get('d1ff1ae9-bb29-469d-8e5e-8a387f529de0')
      .then((entry) => {
        assert.equal(entriesGetOne.email, entry.email);
        done();
      });
  });

  test('should update an entry', (done) => {
    var updatedEntry = JSON.parse(JSON.stringify(entriesGetOne));
    updatedEntry.email = 'test2@lesspass.com';
    var headers = {reqheaders: {'Authorization': 'JWT ' + token}};
    nock('http://localhost/', headers).put(`/api/entries/${updatedEntry.id}/`).reply(200, updatedEntry);
    entries.update(updatedEntry)
      .then((entry) => {
        assert.equal(updatedEntry.email, entry.email);
        done();
      });
  });

  test('should delete an entry', (done) => {
    var headers = {reqheaders: {'Authorization': 'JWT ' + token}};
    nock('http://localhost/', headers).delete(`/api/entries/${entriesGetOne.id}/`).reply(200, entriesGetOne);
    entries.delete(entriesGetOne)
      .then(() => {
        done();
      });
  });
});
