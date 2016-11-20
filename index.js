var v1 = require('./src/v1');
var v2 = require('./src/v2');

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

    generatePassword: v2.generatePassword,
    _calcEntropy: v2._calcEntropy,
    _consumeEntropy: v2._consumeEntropy,
    _getSetOfCharacters: v2._getSetOfCharacters,
    _numberSubsetsOfChars: v2._numberSubsetsOfChars,
    _includeOneCharPerSetOfCharacters: v2._includeOneCharPerSetOfCharacters,
    _generateOneCharPerSetOfCharacters: v2._generateOneCharPerSetOfCharacters,
    _renderPassword: v2._renderPassword,
};