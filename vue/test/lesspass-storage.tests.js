import test from 'ava';

import LesspassStorage from '../src/services/lesspass-storage';
import {LocalStorageMock} from './_helpers';


const localStorage = new LocalStorageMock();
const lesspassStorage = LesspassStorage(localStorage);

test('first get return default options', t => {
    return lesspassStorage.get().then(data => {
        t.deepEqual(
            data.defaultOptions,
            {counter: 1, password: {length: 12, settings: ['lowercase', 'uppercase', 'numbers', 'symbols']}}
        );
    })
});

test('set should save password info for one site', t => {
    const passwordInfo = {
        login: 'contact@lesspass.com',
        site: 'lesspass.com',
        options: {counter: 1, password: {length: 12, settings: ['lowercase', 'uppercase', 'numbers', 'symbols']}}
    };
    return lesspassStorage.setPasswordInfo(passwordInfo).then(()=> {
        return lesspassStorage.get().then(data => {
            t.is(data.passwordsInfo['contact@lesspass.com:lesspass.com'].login, 'contact@lesspass.com');
            t.is(data.passwordsInfo['contact@lesspass.com:lesspass.com'].site, 'lesspass.com');
            t.is(Object.keys(data.passwordsInfo).length, 1);
        })
    });
});

test('set should not save master password', t => {
    const passwordInfo = {
        login: 'contact@lesspass.com',
        masterPassword: 'password',
        site: 'lesspass.com',
        options: {counter: 1, password: {length: 12, settings: ['lowercase', 'uppercase', 'numbers', 'symbols']}}
    };
    return lesspassStorage.setPasswordInfo(passwordInfo).then(()=> {
        return lesspassStorage.get().then(data => {
            t.false('masterPassword' in data.passwordsInfo['contact@lesspass.com:lesspass.com']);
        })
    });
});


test('should merge local storage with default storage', t => {
    localStorage.setItem('lesspass', JSON.stringify({version: 1}));
    return lesspassStorage.get().then(data => {
        t.deepEqual(data.version, 1);
        t.deepEqual(data.passwordsInfo, {});
    });
});
