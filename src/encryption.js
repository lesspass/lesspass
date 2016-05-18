import crypto from 'crypto';
import render from './render';

module.exports = {
  createPassword: _createPassword,
  generatePassword: _generatePassword,
  encryptLogin: _encryptLogin,
  deriveHash: _deriveHash
};

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

function _createPassword(hash, entry) {
  // createPassword is deprecated use generatePassword instead
  const options = {
    counter: entry.password.counter || 1,
    password: entry.password
  };
  const site = entry.site;
  const derivedHash = _deriveHash(hash, site, options);
  const template = render.getTemplate(options.password.settings);
  return render.prettyPrint(derivedHash, template);
}

function _generatePassword(login, masterPassword, site, options) {
  return new Promise((resolve, reject) => {
    if (!login || !masterPassword || !site) {
      reject('generatePassword invalid parameter');
    }

    _encryptLogin(login, masterPassword).then(hash => {
      const derivedHash = _deriveHash(hash, site, options);
      const template = render.getTemplate(options.password.settings);
      resolve(render.prettyPrint(derivedHash, template));
    });
  });
}
