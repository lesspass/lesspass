var v1 = require('./v1');
var v2 = require('./v2');
var pbkdf2 = require('./pbkdf2');
var objectAssign = require('object-assign');

module.exports = {
  encryptLogin: v1.encryptLogin,
  renderPassword: v1.renderPassword,
  createFingerprint: v1.createFingerprint,
  _deriveEncryptedLogin: v1._deriveEncryptedLogin,
  _getPasswordTemplate: v1._getPasswordTemplate,
  _prettyPrint: v1._prettyPrint,
  _string2charCodes: v1._string2charCodes,
  _getCharType: v1._getCharType,
  _getPasswordChar: v1._getPasswordChar,
  _createHmac: v1._createHmac,

  generatePassword: generatePassword,
  _calcEntropy: v2._calcEntropy,
  _consumeEntropy: v2._consumeEntropy,
  _getSetOfCharacters: v2._getSetOfCharacters,
  _getConfiguredRules: v2._getConfiguredRules,
  _insertStringPseudoRandomly: v2._insertStringPseudoRandomly,
  _getOneCharPerRule: v2._getOneCharPerRule,
  _renderPassword: v2._renderPassword,

  pbkdf2: pbkdf2
};

var defaultPasswordProfile = {
  version: 2,
  lowercase: true,
  numbers: true,
  uppercase: true,
  symbols: true,
  keylen: 32,
  digest: 'sha256',
  length: 16,
  index: 1,
  iterations: 100000
};

function generatePassword(site, login, masterPassword, passwordProfile) {
  var _passwordProfile = objectAssign({}, defaultPasswordProfile, passwordProfile);
  if (_passwordProfile.version === 1) {
    var options = {
      counter: _passwordProfile.counter,
      length: _passwordProfile.length,
      lowercase: _passwordProfile.lowercase,
      uppercase: _passwordProfile.uppercase,
      numbers: _passwordProfile.numbers,
      symbols: _passwordProfile.symbols
    };
    return v1.encryptLogin(login, masterPassword)
      .then(function(encryptedLogin) {
        return v1.renderPassword(encryptedLogin, site, options).then(function(generatedPassword) {
          return generatedPassword
        });
      });
  }
  return v2.generatePassword(site, login, masterPassword, _passwordProfile);
}
