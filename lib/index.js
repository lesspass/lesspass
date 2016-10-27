'use strict';

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    encryptLogin: _encryptLogin,
    renderPassword: _renderPassword,
    createFingerprint: createFingerprint,
    _deriveEncryptedLogin: _deriveEncryptedLogin,
    _getPasswordTemplate: _getPasswordTemplate,
    _prettyPrint: _prettyPrint,
    _string2charCodes: _string2charCodes,
    _getCharType: _getCharType,
    _getPasswordChar: _getPasswordChar,
    _createHmac: _createHmac
};

function _encryptLogin(login, masterPassword) {
    return new Promise(function (resolve, reject) {
        if (!login || !masterPassword) {
            reject('login and master password parameters could not be empty');
        }
        var iterations = 8192;
        var keylen = 32;
        _crypto2.default.pbkdf2(masterPassword, login, iterations, keylen, 'sha256', function (error, key) {
            if (error) {
                reject('error in pbkdf2');
            } else {
                resolve(key.toString('hex'));
            }
        });
    });
}

function _renderPassword(encryptedLogin, site, passwordOptions) {
    return _deriveEncryptedLogin(encryptedLogin, site, passwordOptions).then(function (derivedEncryptedLogin) {
        var template = _getPasswordTemplate(passwordOptions);
        return _prettyPrint(derivedEncryptedLogin, template);
    });
}

function _createHmac(encryptedLogin, salt) {
    return new Promise(function (resolve) {
        resolve(_crypto2.default.createHmac('sha256', encryptedLogin).update(salt).digest('hex'));
    });
}

function _deriveEncryptedLogin(encryptedLogin, site) {
    var passwordOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { length: 12, counter: 1 };

    var salt = site + passwordOptions.counter.toString();
    return _createHmac(encryptedLogin, salt).then(function (derivedHash) {
        return derivedHash.substring(0, passwordOptions.length);
    });
}

function _getPasswordTemplate(passwordTypes) {
    var templates = {
        lowercase: 'vc',
        uppercase: 'VC',
        numbers: 'n',
        symbols: 's'
    };
    var template = '';
    for (var templateKey in templates) {
        if (passwordTypes.hasOwnProperty(templateKey) && passwordTypes[templateKey]) {
            template += templates[templateKey];
        }
    }
    return template;
}

function _prettyPrint(hash, template) {
    var password = '';

    _string2charCodes(hash).forEach(function (charCode, index) {
        var charType = _getCharType(template, index);
        password += _getPasswordChar(charType, charCode);
    });
    return password;
}

function _string2charCodes(text) {
    var charCodes = [];
    for (var i = 0; i < text.length; i++) {
        charCodes.push(text.charCodeAt(i));
    }
    return charCodes;
}

function _getCharType(template, index) {
    return template[index % template.length];
}

function _getPasswordChar(charType, index) {
    var passwordsChars = {
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
    var passwordChar = passwordsChars[charType];
    return passwordChar[index % passwordChar.length];
}

function createFingerprint(str) {
    return new Promise(function (resolve) {
        resolve(_crypto2.default.createHmac('sha256', str).digest('hex'));
    });
}