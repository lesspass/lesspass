import moment from 'moment';
import jwtDecode from 'jwt-decode';

export const TOKEN_KEY = 'jwt';

export default class Token {
    constructor(tokenName) {
        this.name = tokenName
    }

    stillValid(now = moment()) {
        try {
            return this._expirationDateSuperiorTo(now);
        }
        catch (err) {
            return false;
        }
    }

    expiresIn(duration, unit, now = moment()) {
        try {
            const nowPlusDuration = now.add(duration, moment.normalizeUnits(unit));
            return this._expirationDateInferiorTo(nowPlusDuration);
        }
        catch (err) {
            return false;
        }
    }

    _expirationDateInferiorTo(date) {
        const expireDate = this._getTokenExpirationDate();
        return expireDate.diff(date) < 0;
    }

    _expirationDateSuperiorTo(date) {
        return !this._expirationDateInferiorTo(date)
    }

    _getTokenExpirationDate() {
        const decodedToken = jwtDecode(this.name);
        return moment(decodedToken.exp * 1000);
    }
}
