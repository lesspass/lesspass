import assert from 'assert';
import entries from '../../src/services/entries';
import nock from 'nock';

suite('Entries', () => {
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
