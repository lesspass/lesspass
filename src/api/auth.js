import axios from 'axios';

export default class Auth {
    constructor(storage) {
        this.user = {
            authenticated: false
        };
        this.storage = storage;
    }

    isAuthenticated() {
        const token = this.storage.getToken();
        if (token.stillValid()) {
            this.user.authenticated = true;
            return true;
        }
        this.user.authenticated = false;
        return false;
    }

    isGuest() {
        return !this.isAuthenticated()
    }

    logout() {
        return new Promise(resolve => {
            this.storage.clear();
            this.user.authenticated = false;
            resolve();
        });
    }

    login(user, baseURL) {
        const config = this.storage.json();
        if (baseURL) {
            config.baseURL = baseURL;
        }
        return Auth._requestToken(user, config).then(token => {
            this.storage.saveToken(token)
        })
    }

    static _requestToken(user, config = {}) {
        return axios.post('/api/tokens/auth/', user, config).then(response => {
            return response.data.token;
        });
    }

    refreshToken() {
        const config = this.storage.json();
        const token = this.storage.getToken();
        return Auth._requestNewToken({token: token.name}, config).then(token => {
            this.storage.saveToken(token)
        })
    }

    static _requestNewToken(token, config = {}) {
        return axios.post('/api/tokens/refresh/', token, config).then(response => {
            return response.data.token;
        });
    }
}
