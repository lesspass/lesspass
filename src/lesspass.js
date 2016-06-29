import crypto from 'crypto';

(function () {
  const lesspass = {
    generatePassword: _generatePassword,
    _encryptLogin,
    _deriveHash,
    _prettyPrint,
    _getTemplate,
    _getCharType,
    _getPasswordChar,
    _string2charCodes
  };

  if (typeof window === 'undefined') {
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
      module.exports = lesspass;
    } else {
      console.error('cannot load properly lesspass');
    }
  } else {
    window.lesspass = lesspass;
  }

  function _generatePassword(login, masterPassword, site, options) {
    return new Promise((resolve, reject) => {
      if (!login || !masterPassword || !site) {
        reject('generatePassword invalid parameter');
      }

      _encryptLogin(login, masterPassword).then(hash => {
        const derivedHash = _deriveHash(hash, site, options);
        const template = _getTemplate(options.password.settings);
        resolve(_prettyPrint(derivedHash, template));
      });
    });
  }

  function _encryptLogin(login, masterPassword) {
    return new Promise((resolve, reject) => {
      if (!login || !masterPassword) {
        reject('encryptLogin parameter could not be empty');
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
    });
  }

  function _deriveHash(hash, site, {password = {length: 12}, counter = 1} = {}) {
    const salt = site + counter.toString();
    const derivedHash = crypto.createHmac('sha256', hash).update(salt).digest('hex');
    return derivedHash.substring(0, password.length);
  }

  function _getTemplate(passwordTypes = ['strong']) {
    const passwordTypesInfo = {
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
})();
