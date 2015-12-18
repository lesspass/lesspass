import crypto from 'crypto';

export class lesspass {
    static create_password(master_password, site_information) {
        var hash = this._create_hash(master_password, site_information);
        var template = this._getTemplate(site_information.password_type);
        return this._encode(hash, template);
    }

    static _create_hash(master_password, {site_name, password_length=12, counter=1}) {
        var salt = site_name + counter.toString();
        var password = crypto.createHmac('sha256', master_password).update(salt).digest('hex');
        return password.substring(0, password_length);
    }

    static _string2charCodes(text) {
        var buffer = new ArrayBuffer(text.length);
        var charCodes = new Uint8Array(buffer);
        for (let i = 0; i < text.length; i++) {
            charCodes[i] = text.charCodeAt(i);
        }
        return charCodes;
    }

    static _getTemplate(passwordTypes = ['strong']) {
        var passwordTypesInfo = {
            lowercase: {value: 'vc', order: 1},
            uppercase: {value: 'VC', order: 2},
            number: {value: 'n', order: 3},
            symbols: {value: 's', order: 4},
            strong: {value: 'Cvcvns', order: 5}
        };
        return passwordTypes
            .map(passwordType => passwordTypesInfo[passwordType])
            .sort((pt1, pt2) => pt1.order > pt2.order)
            .map(passwordType => passwordType.value)
            .join('');
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