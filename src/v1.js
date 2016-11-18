var pbkdf2 = require('pbkdf2');
var createHMAC = require('create-hmac');
var Promise = require("bluebird");


module.exports = {
    encryptLogin: encryptLogin,
    renderPassword: renderPassword,
    createFingerprint: createFingerprint,
    _deriveEncryptedLogin: deriveEncryptedLogin,
    _getPasswordTemplate: getPasswordTemplate,
    _prettyPrint: prettyPrint,
    _string2charCodes: string2charCodes,
    _getCharType: getCharType,
    _getPasswordChar: getPasswordChar,
    _createHmac: createHmac,
};


function encryptLogin(login, masterPassword, options) {
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

function renderPassword(encryptedLogin, site, passwordOptions) {
    return deriveEncryptedLogin(encryptedLogin, site, passwordOptions).then(function (derivedEncryptedLogin) {
        var template = passwordOptions.template || getPasswordTemplate(passwordOptions);
        return prettyPrint(derivedEncryptedLogin, template);
    });
}

function createHmac(encryptedLogin, salt) {
    return new Promise(function (resolve) {
        resolve(createHMAC('sha256', new Buffer(encryptedLogin)).update(salt).digest('hex'));
    });
}

function deriveEncryptedLogin(encryptedLogin, site, options) {
    var _options = options !== undefined ? options : {};
    var length = _options.length || 12;
    var counter = _options.counter || 1;

    var salt = site + counter.toString();
    return createHmac(encryptedLogin, salt).then(function (derivedHash) {
        return derivedHash.substring(0, length);
    });
}

function getPasswordTemplate(passwordTypes) {
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

function prettyPrint(hash, template) {
    var password = '';

    string2charCodes(hash).forEach(function (charCode, index) {
        var charType = getCharType(template, index);
        password += getPasswordChar(charType, charCode);
    });
    return password;
}

function string2charCodes(text) {
    var charCodes = [];
    for (var i = 0; i < text.length; i++) {
        charCodes.push(text.charCodeAt(i));
    }
    return charCodes;
}

function getCharType(template, index) {
    return template[index % template.length];
}

function getPasswordChar(charType, index) {
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
        resolve(createHMAC('sha256', new Buffer(str)).digest('hex'))
    });
}