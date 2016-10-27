import jwtDecode from 'jwt-decode';

export const TOKEN_KEY = 'jwt';

export default class Token {
    constructor(tokenName) {
        this.name = tokenName
    }

    stillValid(now = new Date()) {
        try {
            return this._expirationDateSuperiorTo(now);
        }
        catch (err) {
            return false;
        }
    }

    expiresInMinutes(minutes, now = new Date()) {
        try {
            const nowPlusDuration = new Date(now.getTime() + minutes*60000);
            return this._expirationDateInferiorTo(nowPlusDuration);
        }
        catch (err) {
            return false;
        }
    }

    _expirationDateInferiorTo(date) {
        const expireDate = this._getTokenExpirationDate();
        return expireDate < date;
    }

    _expirationDateSuperiorTo(date) {
        return !this._expirationDateInferiorTo(date)
    }

    _getTokenExpirationDate() {
        const decodedToken = jwtDecode(this.name);
        return new Date(decodedToken.exp * 1000);
    }
}
