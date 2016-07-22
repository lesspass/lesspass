import test from 'ava';

import Storage from '../src/services/storage';
import {LocalStorageMock, StorageAreaMock} from './_helpers';

var localStorageMock = new LocalStorageMock();
const localStorage = Storage(localStorageMock);
test('localStorage get no value', t => {
    return localStorage.get('test1').then(data => {
        t.is(data, null);
    });
});

test('localStorage get with saved value', t => {
    localStorageMock.setItem('test2', JSON.stringify({a: 1}));
    return localStorage.get('test2').then(data => {
        t.is(data.a, 1);
    });
});

test('localStorage set item', t => {
    return localStorage.set({'test3': {b: 2}}).then(() => {
        t.is(JSON.parse(localStorageMock.getItem('test3')).b, 2);
    });
});

test('localStorage remove item', t => {
    localStorageMock.setItem('test4', JSON.stringify({a: 1}));
    return localStorage.remove('test4').then(() => {
        t.is(localStorageMock.getItem('test4'), null);
    });
});

var storageAreaMock = new StorageAreaMock();
const storageArea = Storage(storageAreaMock);
test('storageArea get no value', t => {
    return storageArea.get('test5').then(data => {
        t.is(data, null);
    });
});

test('storageArea get with saved value', t => {
    storageAreaMock.set({'test6': {c: 3}});
    return storageArea.get('test6').then(data => {
        t.is(data.c, 3);
    });
});

test('storageArea set item', t => {
    return storageArea.set({'test7': {d: 4}}).then(() => {
        t.is(storageAreaMock.get('test7').d, 4);
    });
});

test('storageArea remove item', t => {
    storageAreaMock.set({'test8': {e: 5}});
    return storageArea.remove('test8').then(() => {
        t.is(storageAreaMock.get('test8'), null);
    });
});