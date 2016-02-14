var text = require('./text');
var passwordGenerator = require('./password-generator');

module.exports = {
    createPassword: createPassword,
    createMasterPassword: passwordGenerator.createMasterPassword
};

function createPassword(masterPassword, entry) {
    var hash = passwordGenerator._createHash(masterPassword, entry);
    var template = passwordGenerator._getTemplate(entry.password.settings);
    return text._encode(hash, template);
}