import axios from 'axios';
import Token from './token';

export default class Auth {
    constructor(storage = {}) {
        this.user = {
            authenticated: false
        };
        this.storage = storage;
        this.tokenName = 'jwt';
    }

    isAuthenticated() {
        const token = new Token(this.storage.getItem(this.tokenName));
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
            this.storage.removeItem(this.tokenName);
            this.user.authenticated = false;
            resolve();
        });
    }

    login(user) {
        return Auth._requestToken(user).then(token => {
            this.storage.setItem(this.tokenName, token);
        })
    }

    static _requestToken(user) {
        return axios.post('/api/tokens/auth/', user).then(response => {
            return response.data.token;
        });
    }
}