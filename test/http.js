import test from 'ava';
import nock from 'nock';
import HTTP from '../src/api/http';
import {TOKEN_KEY} from '../src/api/token';
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
    nock('https://lesspass.com').get('/api/passwords/?limit=100&offset=0&search=query&ordering=-created').reply(200, {});
    return passwords.all({params: {limit: 100, offset: 0, search: 'query', ordering: '-created'}}).then(response => {
        t.is(response.status, 200);
    });
});


const clients = new HTTP('clients', storage);

test('should get all clients', t => {
    nock('https://lesspass.com').get('/api/clients/').reply(200, {});
    return clients.all().then(response => {
        t.is(response.status, 200);
    });
});


test('should get all clients with parameters', t => {
    nock('https://lesspass.com').get('/api/clients/?param1=10&param2=-created').reply(200, {});
    return clients.all({params: {param1: 10, param2: '-created'}}).then(response => {
        t.is(response.status, 200);
    });
});

test('should get one resource', t => {
    nock('https://lesspass.com').get('/api/clients/c8e4f983-8ffe-b705-4064-d3b7aa4a4782/').reply(200, {});
    return clients.get({id: 'c8e4f983-8ffe-b705-4064-d3b7aa4a4782'}).then(response => {
        t.is(response.status, 200);
    });
});

test('should get one resource with parameters', t => {
    nock('https://lesspass.com').get('/api/clients/c8e4f983-8ffe-b705-4064-d3b7aa4a4782/?param1=10&param2=-created').reply(200, {});
    return clients.get({id: 'c8e4f983-8ffe-b705-4064-d3b7aa4a4782'}, {params: {param1: 10, param2: '-created'}})
        .then(response => {
            t.is(response.status, 200);
        });
});

test('should create one resource', t => {
    nock('https://lesspass.com').post('/api/clients/', {name: 'resource'}).reply(201, {});
    return clients.create({name: 'resource'}).then(response => {
        t.is(response.status, 201);
    });
});

test('should create one resource with parameters', t => {
    nock('https://lesspass.com').post('/api/clients/?param1=10&param2=-created', {name: 'resource'}).reply(201, {});
    return clients.create({name: 'resource'}, {params: {param1: 10, param2: '-created'}}).then(response => {
        t.is(response.status, 201);
    });
});

test('should update one resource', t => {
    nock('https://lesspass.com').put('/api/clients/c8e4f983-4064-8ffe-b705-d3b7aa4a4782/', {}).reply(200, {});
    return clients.update({id: 'c8e4f983-4064-8ffe-b705-d3b7aa4a4782'}, {}).then(response => {
        t.is(response.status, 200);
    });
});

test('should update one resource with parameters', t => {
    nock('https://lesspass.com').put('/api/clients/2/?param1=10&param2=-created', {id: '2'}).reply(200, {});
    return clients.update({id: '2'}, {params: {param1: 10, param2: '-created'}}).then(response => {
        t.is(response.status, 200);
    });
});

test('should remove one resource', t => {
    nock('https://lesspass.com').delete('/api/clients/c8e4f983-8ffe-4064-b705-d3b7aa4a4782/').reply(204);
    return clients.remove({id: 'c8e4f983-8ffe-4064-b705-d3b7aa4a4782'}).then(response => {
        t.is(response.status, 204);
    });
});

test('should remove one resource with parameters', t => {
    nock('https://lesspass.com').delete('/api/clients/8/?param1=10&param2=-created').reply(204);
    return clients.remove({id: '8'}, {params: {param1: 10, param2: '-created'}}).then(response => {
        t.is(response.status, 204);
    });
});

test('should send requests with headers', t => {
    const headers = {Accept: 'application/json, text/javascript, *!/!*;'};
    nock('https://lesspass.com', headers).get('/api/clients/').query(true).reply(200, {});

    return clients.all({headers}).then(response => {
        t.is(response.status, 200);
    });
});
