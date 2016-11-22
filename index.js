var v1 = require('./src/v1');
var v2 = require('./src/v2');
var pbkdf2 = require('./src/pbkdf2');
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
    version: 1
};

function generatePassword(site, login, masterPassword, passwordProfile) {
    var _passwordProfile = objectAssign({}, defaultPasswordProfile, passwordProfile);
    if (_passwordProfile.version === 1) {
        var options = {
            counter: _passwordProfile.index,
            length: _passwordProfile.length,
            lowercase: _passwordProfile.lowercase,
            uppercase: _passwordProfile.uppercase,
            numbers: _passwordProfile.digits,
            symbols: _passwordProfile.symbols
        };
        return v1.encryptLogin(login, masterPassword)
            .then(function (encryptedLogin) {
                return v1.renderPassword(encryptedLogin, site, options).then(generatedPassword => {
                    return generatedPassword
                });
            });
    }
    if (_passwordProfile.version === 2) {
        return v2.generatePassword(site, login, masterPassword, passwordProfile);
    }
}