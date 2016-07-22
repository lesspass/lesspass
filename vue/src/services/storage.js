function _isWebExtensionStorage(storage) {
    try {
        storage.set({'test': 'test'});
        storage.remove('test');
        return true;
    } catch (e) {
        return false;
    }
}

module.exports = storage => {
    const isWebExtensionStorage = _isWebExtensionStorage(storage);
    return {
        get(key){
            return new Promise(resolve => {
                if (isWebExtensionStorage) {
                    resolve(storage.get(key));
                } else {
                    resolve(JSON.parse(storage.getItem(key)));
                }
            });
        },
        set(data){
            return new Promise(resolve => {
                if (isWebExtensionStorage) {
                    resolve(storage.set(data))
                } else {
                    const key = Object.keys(data)[0];
                    resolve(storage.setItem(key, JSON.stringify(data[key])));
                }
            });
        },
        remove(key){
            return new Promise(resolve => {
                if (isWebExtensionStorage) {
                    resolve(storage.remove(key))
                } else {
                    resolve(storage.removeItem(key));
                }
            });
        }
    };
};
