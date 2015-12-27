import crypto from 'crypto';

export default class lesspass {

    static createPassword(masterPassword, entry) {
        var hash = lesspass._createHash(masterPassword, entry);
        var template = lesspass._getTemplate(entry.password.settings);
        return lesspass._encode(hash, template);
    }

    static createMasterPassword(email, password) {
        return new Promise((resolve, reject) => {
            var iterations = 8192;
            var keylen = 32;
            crypto.pbkdf2(password, email, iterations, keylen, 'sha256', function (error, key) {
                if (error) {
                    reject('error in pbkdf2');
                } else {
                    resolve(key.toString('hex'));
                }
            });
        });
    }

    static _createHash(masterPassword, {site, password={length: 12}, counter=1}) {
        var salt = site + counter.toString();
        var hash = crypto.createHmac('sha256', masterPassword).update(salt).digest('hex');
        return hash.substring(0, password.length);
    }

    static _getTemplate(passwordTypes = ['strong']) {
        var passwordTypesInfo = {
            lowercase: {value: 'vc', order: 1},
            uppercase: {value: 'VC', order: 2},
            numbers: {value: 'n', order: 3},
            symbols: {value: 's', order: 4},
            strong: {value: 'Cvcvns', order: 5}
        };
        return passwordTypes
            .map(passwordType => passwordTypesInfo[passwordType])
            .sort((passwordType1, passwordType2) => passwordType1.order > passwordType2.order)
            .map(passwordType => passwordType.value)
            .join('');
    }

    static _string2charCodes(text) {
        var charCodes = [];
        for (let i = 0; i < text.length; i++) {
            charCodes.push(text.charCodeAt(i));
        }
        return charCodes;
    }

    static _getCharType(template, index) {
        return template[index % template.length];
    }

    static _getPasswordChar(charType, index) {
        var passwordsChars = {
            V: "AEIOUY",
            C: "BCDFGHJKLMNPQRSTVWXZ",
            v: "aeiouy",
            c: "bcdfghjklmnpqrstvwxz",
            A: "AEIOUYBCDFGHJKLMNPQRSTVWXZ",
            a: "AEIOUYaeiouyBCDFGHJKLMNPQRSTVWXZbcdfghjklmnpqrstvwxz",
            n: "0123456789",
            s: "@&%?,=[]_:-+*$#!'^~;()/.",
            x: "AEIOUYaeiouyBCDFGHJKLMNPQRSTVWXZbcdfghjklmnpqrstvwxz0123456789@&%?,=[]_:-+*$#!'^~;()/."
        };
        var passwordChar = passwordsChars[charType];
        return passwordChar[index % passwordChar.length];
    }

    static _encode(hash, template) {
        var password = '';
        this._string2charCodes(hash).map(
            (charCode, index) => {
                let charType = this._getCharType(template, index);
                password += this._getPasswordChar(charType, charCode);
            }
        );
        return password;
    }
}