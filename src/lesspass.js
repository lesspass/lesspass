import crypto from 'crypto';

export default {
    encryptLogin(login, masterPassword) {
        return new Promise((resolve, reject) => {
            if (!login || !masterPassword) {
                reject('login and master password parameters could not be empty');
            }
            const iterations = 8192;
            const keylen = 32;
            crypto.pbkdf2(masterPassword, login, iterations, keylen, 'sha256', (error, key) => {
                if (error) {
                    reject('error in pbkdf2');
                } else {
                    resolve(key.toString('hex'));
                }
            });
        })
    },

    deriveEncryptedLogin(encryptedLogin, site, passwordOptions) {
        const derivedHash = this._deriveEncryptedLogin(encryptedLogin, site, passwordOptions);
        const template = this._getPasswordTemplate(passwordOptions);
        return this._prettyPrint(derivedHash, template);
    },

    _deriveEncryptedLogin(encryptedLogin, site, passwordOptions = {length: 12, counter: 1}) {
        const salt = site + passwordOptions.counter.toString();
        const derivedHash = crypto.createHmac('sha256', encryptedLogin).update(salt).digest('hex');
        return derivedHash.substring(0, passwordOptions.length);
    },

    _getPasswordTemplate(passwordTypes) {
        const templates = {
            lowercase: 'vc',
            uppercase: 'VC',
            numbers: 'n',
            symbols: 's',
        };
        let template = '';
        for (let templateKey in templates) {
            if (passwordTypes.hasOwnProperty(templateKey) && passwordTypes[templateKey]) {
                template += templates[templateKey]
            }
        }
        return template;
    },

    _prettyPrint(hash, template) {
        let password = '';

        this._string2charCodes(hash).forEach((charCode, index) => {
            const charType = this._getCharType(template, index);
            password += this._getPasswordChar(charType, charCode);
        });
        return password;
    },

    _string2charCodes(text) {
        const charCodes = [];
        for (let i = 0; i < text.length; i++) {
            charCodes.push(text.charCodeAt(i));
        }
        return charCodes;
    },

    _getCharType(template, index) {
        return template[index % template.length];
    },

    _getPasswordChar(charType, index) {
        const passwordsChars = {
            V: 'AEIOUY',
            C: 'BCDFGHJKLMNPQRSTVWXZ',
            v: 'aeiouy',
            c: 'bcdfghjklmnpqrstvwxz',
            A: 'AEIOUYBCDFGHJKLMNPQRSTVWXZ',
            a: 'AEIOUYaeiouyBCDFGHJKLMNPQRSTVWXZbcdfghjklmnpqrstvwxz',
            n: '0123456789',
            s: '@&%?,=[]_:-+*$#!\'^~;()/.',
            x: 'AEIOUYaeiouyBCDFGHJKLMNPQRSTVWXZbcdfghjklmnpqrstvwxz0123456789@&%?,=[]_:-+*$#!\'^~;()/.'
        };
        const passwordChar = passwordsChars[charType];
        return passwordChar[index % passwordChar.length];
    }
}
