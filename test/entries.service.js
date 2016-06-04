import test from 'ava';
import nock from 'nock';

import entries from '../src/services/entries';
import {entriesGetAll, entriesGetOne, storageMock} from './_helpers';

entries.localStorage = storageMock();

const token = 'ZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFt';
entries.localStorage.setItem('token', token);
const entry = {
  site: 'twitter.com',
  password: {
    counter: 1,
    settings: [
      'lowercase',
      'uppercase',
      'numbers',
      'symbols'
    ],
    length: 12
  },
  login: 'guillaume@lesspass.com'
};

test('should send requests with Authorization header', t => {
  const headers = {reqheaders: {Authorization: `JWT ${token}`}};
  nock('http://localhost/', headers).get('/api/entries/').query(true).reply(200, {entries: []});
  return entries.all().then(response => {
    t.is(response.status, 200);
  });
});

test('should create an entry', t => {
  nock('http://localhost/').post('/api/entries/', entry).reply(201, entry);
  return entries.create(entry)
    .then(newEntry => {
      t.is(entry.login, newEntry.login);
    });
});

test('should send requests with Authorization header updated', t => {
  const newToken = 'WV9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRyd';
  entries.localStorage.setItem('token', newToken);
  const headers = {reqheaders: {Authorization: `JWT ${newToken}`}};
  nock('http://localhost/', headers).get('/api/entries/').query(true).reply(200, {entries: []});
  return entries.all().then(response => {
    t.is(response.status, 200);
  });
});

test('should get all entries with offset', t => {
  nock('http://localhost/').get('/api/entries/').query(true).reply(200, {entries: entriesGetAll});
  return entries.all().then(response => {
    t.is(response.status, 200);
    t.is(response.data.entries.results.length, entriesGetAll.count);
  });
});

test('should get all entries with parameters', t => {
  nock('http://localhost/').get('/api/entries/?limit=100&offset=0&search=query&sorting=asc&ordering=-created')
    .reply(200, {entries: []});
  return entries.all(100, 0, 'query', 'asc', '-created')
    .then(response => {
      t.is(response.status, 200);
    });
});

test('should get an entry', t => {
  nock('http://localhost/').get('/api/entries/d1ff1ae9-bb29-469d-8e5e-8a387f529de0/').reply(200, entriesGetOne);
  return entries.get('d1ff1ae9-bb29-469d-8e5e-8a387f529de0')
    .then(entry => {
      t.is(entriesGetOne.email, entry.email);
    });
});

test('should update an entry', t => {
  const updatedEntry = JSON.parse(JSON.stringify(entriesGetOne));
  updatedEntry.email = 'test2@lesspass.com';
  nock('http://localhost/').put(`/api/entries/${updatedEntry.id}/`).reply(200, updatedEntry);
  return entries.update(updatedEntry)
    .then(entry => {
      t.is(updatedEntry.email, entry.email);
    });
});

test('should delete an entry', t => {
  nock('http://localhost/').delete(`/api/entries/${entriesGetOne.id}/`).reply(200);
  return entries.delete(entriesGetOne)
    .then(response => {
      t.is(response, '');
    });
});
