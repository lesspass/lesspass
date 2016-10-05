import test from 'ava';
import {LocalStorageMock} from './_helpers';
import Storage, {LOCAL_STORAGE_KEY} from '../src/api/storage';

const localStorage = new LocalStorageMock();
const storage = new Storage(localStorage);

test('get default storage', t => {
    t.is(storage.json().baseURL, 'https://lesspass.com');
});

test('get storage saved in local storage', t => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({baseURL: 'https://example.org'}));
    t.is(storage.json().baseURL, 'https://example.org');
});

test('save storage in local storage', t => {
    storage.save({baseURL: 'https://example.org'});
    t.is(localStorage.getItem(LOCAL_STORAGE_KEY), '{"baseURL":"https://example.org"}');
});

test('save storage in local storage', t => {
    storage.save({baseURL: 'https://example.org'});
    t.is(localStorage.getItem(LOCAL_STORAGE_KEY), '{"baseURL":"https://example.org"}');
});

test('save storage in local storage merge', t => {
    localStorage.clear();
    storage.save({a: 'a'});
    storage.save({b: 'b'});
    t.is(localStorage.getItem(LOCAL_STORAGE_KEY), '{"a":"a","b":"b"}');
});

test('storage clear local storage', t => {
    storage.save({a: 'a'});
    storage.clear();
    t.is(localStorage.getItem(LOCAL_STORAGE_KEY), null);
});

