var pbkdf2 = require('pbkdf2');
var createHmac = require('create-hmac');

module.exports = {
    encryptLogin: _encryptLogin,
    renderPassword: _renderPassword,
    createFingerprint: createFingerprint,
    _deriveEncryptedLogin,
    _getPasswordTemplate,
    _prettyPrint,
    _string2charCodes,
    _getCharType,
    _getPasswordChar,
    _createHmac
};

function _encryptLogin(login, masterPassword, {iterations = 8192, keylen = 32}={}) {
    return new Promise((resolve, reject) => {
        if (!login || !masterPassword) {
            reject('login and master password parameters could not be empty');
        }
        pbkdf2.pbkdf2(masterPassword, login, iterations, keylen, 'sha256', (error, key) => {
            if (error) {
                reject('error in pbkdf2');
            } else {
                resolve(key.toString('hex'));
            }
        });
    })
}

function _renderPassword(encryptedLogin, site, passwordOptions) {
    return _deriveEncryptedLogin(encryptedLogin, site, passwordOptions).then(function (derivedEncryptedLogin) {
        const template = passwordOptions.template || _getPasswordTemplate(passwordOptions);
        return _prettyPrint(derivedEncryptedLogin, template);
    });
}

function _createHmac(encryptedLogin, salt) {
    return new Promise(resolve => {
        resolve(createHmac('sha256', new Buffer(encryptedLogin)).update(salt).digest('hex'));
    });
}

function _deriveEncryptedLogin(encryptedLogin, site, passwordOptions = {length: 12, counter: 1}) {
    const salt = site + passwordOptions.counter.toString();
    return _createHmac(encryptedLogin, salt).then(derivedHash => {
        return derivedHash.substring(0, passwordOptions.length);
    });
}

function _getPasswordTemplate(passwordTypes) {
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
}

function _prettyPrint(hash, template) {
    let password = '';

    _string2charCodes(hash).forEach((charCode, index) => {
        const charType = _getCharType(template, index);
        password += _getPasswordChar(charType, charCode);
    });
    return password;
}

function _string2charCodes(text) {
    const charCodes = [];
    for (let i = 0; i < text.length; i++) {
        charCodes.push(text.charCodeAt(i));
    }
    return charCodes;
}

function _getCharType(template, index) {
    return template[index % template.length];
}

function _getPasswordChar(charType, index) {
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

function createFingerprint(str) {
    return new Promise(resolve => {
        resolve(createHmac('sha256', new Buffer(str)).digest('hex'))
    });
}