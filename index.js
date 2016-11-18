var pbkdf2 = require('pbkdf2');
var createHmac = require('create-hmac');
var Promise = require("bluebird");
var v2 = require('./src/v2');

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
    _createHmac: _createHmac,
    generatePassword: v2.generatePassword,
    _calcEntropy: v2._calcEntropy,
    _getSetOfCharacters: v2._getSetOfCharacters,
    _renderPassword: v2._renderPassword,
};

function _encryptLogin(login, masterPassword, options) {
    var _options = options !== undefined ? options : {};
    var iterations = _options.iterations || 8192;
    var keylen = _options.keylen || 32;

    return new Promise(function (resolve, reject) {
        if (!login || !masterPassword) {
            reject('login and master password parameters could not be empty');
        }
        pbkdf2.pbkdf2(masterPassword, login, iterations, keylen, 'sha256', function (error, key) {
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
        var template = passwordOptions.template || _getPasswordTemplate(passwordOptions);
        return _prettyPrint(derivedEncryptedLogin, template);
    });
}

function _createHmac(encryptedLogin, salt) {
    return new Promise(function (resolve) {
        resolve(createHmac('sha256', new Buffer(encryptedLogin)).update(salt).digest('hex'));
    });
}

function _deriveEncryptedLogin(encryptedLogin, site, options) {
    var _options = options !== undefined ? options : {};
    var length = _options.length || 12;
    var counter = _options.counter || 1;

    var salt = site + counter.toString();
    return _createHmac(encryptedLogin, salt).then(function (derivedHash) {
        return derivedHash.substring(0, length);
    });
}

function _getPasswordTemplate(passwordTypes) {
    var templates = {
        lowercase: 'vc',
        uppercase: 'VC',
        numbers: 'n',
        symbols: 's',
    };
    var returnedTemplate = '';
    Object.keys(templates).forEach(function (template) {
        if (passwordTypes.hasOwnProperty(template) && passwordTypes[template]) {
            returnedTemplate += templates[template]
        }
    });
    return returnedTemplate;
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
        resolve(createHmac('sha256', new Buffer(str)).digest('hex'))
    });
}