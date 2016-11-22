var pbkdf2 = require('./pbkdf2');
var bigInt = require("big-integer");

module.exports = {
    generatePassword: generatePassword,
    _calcEntropy: calcEntropy,
    _consumeEntropy: consumeEntropy,
    _getSetOfCharacters: getSetOfCharacters,
    _getConfiguredRules: getConfiguredRules,
    _insertStringPseudoRandomly: insertStringPseudoRandomly,
    _getOneCharPerRule: getOneCharPerRule,
    _renderPassword: renderPassword
};

function generatePassword(site, login, masterPassword, passwordProfile) {
    return calcEntropy(site, login, masterPassword, passwordProfile).then(function (entropy) {
        return renderPassword(entropy, passwordProfile);
    });
}

function calcEntropy(site, login, masterPassword, passwordProfile) {
    var salt = site + login + passwordProfile.index.toString(16);
    return pbkdf2(masterPassword, salt, passwordProfile.iterations, passwordProfile.keylen, passwordProfile.digest);
}

var characterSubsets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    digits: '0123456789',
    symbols: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
};

function getSetOfCharacters(rules) {
    if (typeof rules === 'undefined') {
        return characterSubsets.lowercase + characterSubsets.uppercase + characterSubsets.digits + characterSubsets.symbols;
    }
    var setOfChars = '';
    rules.forEach(function (rule) {
        setOfChars += characterSubsets[rule];
    });
    return setOfChars;
}

function consumeEntropy(generatedPassword, quotient, setOfCharacters, maxLength) {
    if (generatedPassword.length >= maxLength) {
        return {value: generatedPassword, entropy: quotient};
    }
    var longDivision = quotient.divmod(setOfCharacters.length);
    generatedPassword += setOfCharacters[longDivision.remainder];
    return consumeEntropy(generatedPassword, longDivision.quotient, setOfCharacters, maxLength);
}

function insertStringPseudoRandomly(generatedPassword, entropy, string) {
    for (var i = 0; i < string.length; i++) {
        var longDivision = entropy.divmod(generatedPassword.length);
        generatedPassword = generatedPassword.slice(0, longDivision.remainder) + string[i] + generatedPassword.slice(longDivision.remainder);
        entropy = longDivision.quotient;
    }
    return generatedPassword;
}

function getOneCharPerRule(entropy, rules) {
    var oneCharPerRules = '';
    rules.forEach(function (rule) {
        var password = consumeEntropy('', entropy, characterSubsets[rule], 1);
        oneCharPerRules += password.value;
        entropy = password.entropy;
    });
    return {value: oneCharPerRules, entropy: entropy};
}

function getConfiguredRules(passwordProfile) {
    return ['lowercase', 'uppercase', 'digits', 'symbols'].filter(function (rule) {
        return passwordProfile[rule];
    });
}

function renderPassword(entropy, passwordProfile) {
    var rules = getConfiguredRules(passwordProfile);
    var setOfCharacters = getSetOfCharacters(rules);
    var password = consumeEntropy('', bigInt(entropy, 16), setOfCharacters, passwordProfile.length - rules.length);
    var charactersToAdd = getOneCharPerRule(password.entropy, rules);
    return insertStringPseudoRandomly(password.value, charactersToAdd.entropy, charactersToAdd.value);
}
