import axios from 'axios';

axios.defaults.baseURL = 'https://example.org';

export class LocalStorageMock {
    constructor(storage = {}) {
        this.storage = storage;
    }

    setItem(key, value) {
        this.storage[key] = value || '';
    }

    getItem(key) {
        return this.storage[key] || null;
    }

    removeItem(key) {
        delete this.storage[key];
    }

    key(i) {
        const keys = Object.keys(this.storage);
        return keys[i] || null;
    }
}

export class StorageAreaMock {
    constructor(storage = {}) {
        this.storage = storage;
    }

    set(data, callback) {
        Object.assign(this.storage, data);
        if (callback) {
            return callback();
        }
    }

    get(key, callback) {
        const value = this.storage[key] || null;
        if (callback) {
            return callback(value);
        }
        return value;
    }

    remove(key) {
        delete this.storage[key];
    }
}