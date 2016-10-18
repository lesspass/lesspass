export const LOCAL_STORAGE_KEY = 'lesspass';
export const TOKEN_KEY = 'jwt';
import Token from './token';

export default class Storage {
    constructor(storage = window.localStorage) {
        this.storage = storage;
    }

    _getLocalStorage() {
        return JSON.parse(this.storage.getItem(LOCAL_STORAGE_KEY) || '{}')
    }

    json() {
        const defaultStorage = {
            baseURL: 'https://lesspass.com'
        };
        const localStorage = this._getLocalStorage();
        return Object.assign(defaultStorage, localStorage);
    }

    save(data) {
        const newData = Object.assign(this._getLocalStorage(), data);
        this.storage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newData));
    }

    clear() {
        this.storage.clear();
    }

    getToken() {
        const storage = this.json();
        if (TOKEN_KEY in storage) {
            return new Token(storage[TOKEN_KEY]);
        }
        return new Token();
    }

    saveToken(token) {
        this.save({[TOKEN_KEY]: token})
    }
}
