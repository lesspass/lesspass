(function () {
    'use strict';

    if (window.crypto && !window.crypto.subtle && window.crypto.webkitSubtle) {
        window.crypto.subtle = window.crypto.webkitSubtle;
    }
    if (!window.crypto || !window.crypto.subtle) {
        console.error("Your browser does not support the Web Cryptography API! LessPass will not work.");
        return;
    }

    function importKey(masterPassword, algo, usages) {
        var format = 'raw';
        var masterPasswordArrayBuffer = Unibabel.utf8ToBuffer(masterPassword);
        var extractable = false;
        return window.crypto.subtle.importKey(format, masterPasswordArrayBuffer, algo, extractable, usages);
    }

    function deriveKey(masterKey, salt, iterations, keylen) {
        var algo = {
            name: 'PBKDF2',
            salt: Unibabel.utf8ToBuffer(salt),
            iterations: iterations,
            hash: 'SHA-256',
        };
        var extractable = true;
        var derivedKeyAlgo = {name: 'AES-CTR', length: keylen * 8};
        var usages = ['encrypt', 'decrypt'];
        return window.crypto.subtle.deriveKey(algo, masterKey, derivedKeyAlgo, extractable, usages);
    }


    function exportKey(derivedKey) {
        return window.crypto.subtle.exportKey('raw', derivedKey).then(function (keyArrayBuffer) {
            return Unibabel.bufferToHex(new Uint8Array(keyArrayBuffer));
        });
    }

    function encryptLogin(login, masterPassword, options) {
        var _options = options !== undefined ? options : {};
        var iterations = _options.iterations || 8192;
        var keylen = _options.keylen || 32;

        return importKey(masterPassword, 'PBKDF2', ['deriveKey'])
            .then(function (key) {
                return deriveKey(key, login, iterations, keylen);
            })
            .then(exportKey);
    }

    function signKey(masterKey, salt) {
        var algo = {name: 'HMAC'};
        var saltArrayBuffer = Unibabel.utf8ToBuffer(salt);
        return window.crypto.subtle.sign(algo, masterKey, saltArrayBuffer);
    }

    function _createHmac(encryptedLogin, salt) {
        return importKey(encryptedLogin, {name: 'HMAC', hash: {name: 'SHA-256'}}, ['sign'])
            .then(function (key) {
                return signKey(key, salt);
            })
            .then(function (derivedHmacKey) {
                return Unibabel.bufferToHex(new Uint8Array(derivedHmacKey))
            });
    }

    function _deriveEncryptedLogin(encryptedLogin, site) {
        var passwordOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
            length: 12,
            counter: 1
        };

        var salt = site + passwordOptions.counter.toString();
        return _createHmac(encryptedLogin, salt).then(function (derivedHash) {
            return derivedHash.substring(0, passwordOptions.length);
        });
    }

    function createFingerprint(str) {
        return _createHmac(str, '');
    }

    function renderPassword(encryptedLogin, site, passwordOptions) {
        return _deriveEncryptedLogin(encryptedLogin, site, passwordOptions).then(function (derivedEncryptedLogin) {
            var template = passwordOptions.template || LessPass._getPasswordTemplate(passwordOptions);
            return LessPass._prettyPrint(derivedEncryptedLogin, template);
        });
    }

    function _getPasswordTemplate(passwordTypes) {
        var templates = {
            lowercase: 'vc',
            uppercase: 'VC',
            numbers: 'n',
            symbols: 's',
        };
        var template = '';
        for (var templateKey in templates) {
            if (passwordTypes.hasOwnProperty(templateKey) && passwordTypes[templateKey]) {
                template += templates[templateKey]
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

    window.LessPass = {
        encryptLogin: encryptLogin,
        renderPassword: renderPassword,
        createFingerprint: createFingerprint,
        _createHmac: _createHmac,
        _deriveEncryptedLogin: _deriveEncryptedLogin,
        _getPasswordTemplate: _getPasswordTemplate,
        _prettyPrint: _prettyPrint,
        _string2charCodes: _string2charCodes,
        _getCharType: _getCharType,
        _getPasswordChar: _getPasswordChar,
    };
}());

