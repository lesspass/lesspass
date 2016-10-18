import test from 'ava';
import nock from 'nock';
import HTTP from '../src/api/http';
import {TOKEN_KEY} from '../src/api/token';
import {LOCAL_STORAGE_KEY} from '../src/api/storage';
import Storage from '../src/api/storage';
import {LocalStorageMock} from './_helpers';


const storage = new Storage(new LocalStorageMock());
const passwords = new HTTP('passwords', storage);


const token = 'ZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFt';
storage.save({baseURL: 'https://lesspass.com', [TOKEN_KEY]: token});
/* eslint camelcase: 0 */
const foo = {
    name: 'foo'
};

test('should send requests with Authorization header', t => {
    const headers = {reqheaders: {Authorization: `JWT ${token}`}};
    nock('https://lesspass.com', headers).get('/api/passwords/').query(true).reply(200, {});
    return passwords.all().then(response => {
        t.is(response.status, 200);
    });
});

test('should create a foo', t => {
    nock('https://lesspass.com').post('/api/passwords/', foo).reply(201, foo);
    return passwords.create(foo).then(response => {
        const newIncident = response.data;
        t.is(foo.login, newIncident.login);
    });
});

test('should send requests with Authorization header updated', t => {
    const newToken = 'WV9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRyd';
    storage.save({baseURL: 'https://lesspass.com', [TOKEN_KEY]: newToken});
    const headers = {reqheaders: {Authorization: `JWT ${newToken}`}};
    nock('https://lesspass.com', headers).get('/api/passwords/').query(true).reply(200, {});
    return passwords.all().then(response => {
        t.is(response.status, 200);
    });
});

test('should get all foo with parameters', t => {
    nock('https://lesspass.com').get('/api/passwords/?limit=100&offset=0&search=query&ordering=-created')
        .reply(200, {});
    const params = {limit: 100, offset: 0, search: 'query', ordering: '-created'};
    return passwords.all(params).then(response => {
        t.is(response.status, 200);
    });
});
