(function () {
'use strict';

function utf8ToBinaryString(str) {
  var escstr = encodeURIComponent(str);
  // replaces any uri escape sequence, such as %0A,
  // with binary escape, such as 0x0A
  var binstr = escstr.replace(/%([0-9A-F]{2})/g, function(match, p1) {
    return String.fromCharCode(parseInt(p1, 16));
  });

  return binstr;
}

function utf8ToBuffer(str) {
  var binstr = utf8ToBinaryString(str);
  var buf = binaryStringToBuffer(binstr);
  return buf;
}

function utf8ToBase64(str) {
  var binstr = utf8ToBinaryString(str);
  return btoa(binstr);
}

function binaryStringToUtf8(binstr) {
  var escstr = binstr.replace(/(.)/g, function (m, p) {
    var code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = '0' + code;
    }
    return '%' + code;
  });

  return decodeURIComponent(escstr);
}

function bufferToUtf8(buf) {
  var binstr = bufferToBinaryString(buf);

  return binaryStringToUtf8(binstr);
}

function base64ToUtf8(b64) {
  var binstr = atob(b64);

  return binaryStringToUtf8(binstr);
}

function bufferToBinaryString(buf) {
  var binstr = Array.prototype.map.call(buf, function (ch) {
    return String.fromCharCode(ch);
  }).join('');

  return binstr;
}

function bufferToBase64(arr) {
  var binstr = bufferToBinaryString(arr);
  return btoa(binstr);
}

function binaryStringToBuffer(binstr) {
  var buf;

  if ('undefined' !== typeof Uint8Array) {
    buf = new Uint8Array(binstr.length);
  } else {
    buf = [];
  }

  Array.prototype.forEach.call(binstr, function (ch, i) {
    buf[i] = ch.charCodeAt(0);
  });

  return buf;
}

function base64ToBuffer(base64) {
  var binstr = atob(base64);
  var buf = binaryStringToBuffer(binstr);
  return buf;
}

window.Unibabel = {
  utf8ToBinaryString: utf8ToBinaryString
, utf8ToBuffer: utf8ToBuffer
, utf8ToBase64: utf8ToBase64
, binaryStringToUtf8: binaryStringToUtf8
, bufferToUtf8: bufferToUtf8
, base64ToUtf8: base64ToUtf8
, bufferToBinaryString: bufferToBinaryString
, bufferToBase64: bufferToBase64
, binaryStringToBuffer: binaryStringToBuffer
, base64ToBuffer: base64ToBuffer

// compat
, strToUtf8Arr: utf8ToBuffer
, utf8ArrToStr: bufferToUtf8
, arrToBase64: bufferToBase64
, base64ToArr: base64ToBuffer
};

}());

(function () {
'use strict';

function bufferToHex(arr) {
  var i;
  var len;
  var hex = '';
  var c;

  for (i = 0, len = arr.length; i < len; i += 1) {
    c = arr[i].toString(16);
    if (c.length < 2) {
      c = '0' + c;
    }
    hex += c;
  }

  return hex;
}

function hexToBuffer(hex) {
  // TODO use Uint8Array or ArrayBuffer or DataView
  var i;
  var byteLen = hex.length / 2;
  var arr;
  var j = 0;

  if (byteLen !== parseInt(byteLen, 10)) {
    throw new Error("Invalid hex length '" + hex.length + "'");
  }

  arr = new Uint8Array(byteLen);

  for (i = 0; i < byteLen; i += 1) {
    arr[i] = parseInt(hex[j] + hex[j + 1], 16);
    j += 2;
  }

  return arr;
}

// Hex Convenience Functions
window.Unibabel.hexToBuffer = hexToBuffer;
window.Unibabel.bufferToHex = bufferToHex;

}());

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

