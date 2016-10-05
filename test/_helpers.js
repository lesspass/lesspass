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

    clear() {
        this.storage = {};
    }
}
