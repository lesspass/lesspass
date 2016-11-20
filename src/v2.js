var Promise = require("bluebird");
var pbkdf2 = require('pbkdf2');
var bigInt = require("big-integer");
var objectAssign = require('object-assign');

module.exports = {
    generatePassword: generatePassword,
    _calcEntropy: calcEntropy,
    _consumeEntropy: consumeEntropy,
    _getSetOfCharacters: getSetOfCharacters,
    _validRules: validRules,
    _insertStringPseudoRandomly: insertStringPseudoRandomly,
    _getOneCharPerRule: getOneCharPerRule,
    _renderPassword: renderPassword
};

function generatePassword(site, login, masterPassword, passwordProfile) {
    return calcEntropy(site, login, masterPassword, passwordProfile).then(function (entropy) {
        return renderPassword(entropy, passwordProfile)
    });
}

var defaultPasswordProfile = {
    lowercase: true,
    uppercase: true,
    digits: true,
    symbols: true,
    length: 16,
    counter: 1,
    iterations: 100000,
    keylen: 32,
    digest: 'sha256'
};

function calcEntropy(site, login, masterPassword, passwordProfile) {
    var _passwordProfile = objectAssign({}, defaultPasswordProfile, passwordProfile);
    return new Promise(function (resolve, reject) {
        var salt = site + login + _passwordProfile.counter.toString(16);
        pbkdf2.pbkdf2(masterPassword, salt, _passwordProfile.iterations, _passwordProfile.keylen, _passwordProfile.digest, function (error, key) {
            if (error) {
                reject('error in pbkdf2');
            } else {
                resolve(key.toString('hex'));
            }
        });
    });
}

var subsetOfChars = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    digits: '0123456789',
    symbols: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
};

function getSetOfCharacters(rules) {
    if (typeof rules === 'undefined') {
        return subsetOfChars.lowercase + subsetOfChars.uppercase + subsetOfChars.digits + subsetOfChars.symbols;
    }
    var setOfChars = '';
    rules.forEach(function (rule) {
        setOfChars += subsetOfChars[rule]
    });
    return setOfChars;
}

function consumeEntropy(generatedPassword, quotient, setOfCharacters, maxLength) {
    if (generatedPassword.length >= maxLength) {
        return {value: generatedPassword, entropy: quotient}
    }
    var longDivision = quotient.divmod(setOfCharacters.length);
    generatedPassword += setOfCharacters[longDivision.remainder];
    return consumeEntropy(generatedPassword, longDivision.quotient, setOfCharacters, maxLength)
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
        var password = consumeEntropy('', entropy, subsetOfChars[rule], 1);
        oneCharPerRules += password.value;
        entropy = password.entropy;
    });
    return {value: oneCharPerRules, entropy: entropy};
}

function validRules(passwordProfile) {
    return ['lowercase', 'uppercase', 'digits', 'symbols'].filter(function (rule) {
        return passwordProfile[rule];
    });
}

function renderPassword(entropy, passwordProfile) {
    var _passwordProfile = objectAssign({}, defaultPasswordProfile, passwordProfile);
    var rules = validRules(_passwordProfile);
    var setOfCharacters = getSetOfCharacters(rules);
    var password = consumeEntropy('', bigInt(entropy, 16), setOfCharacters, _passwordProfile.length - rules.length);
    var charactersToAdd = getOneCharPerRule(password.entropy, rules);
    return insertStringPseudoRandomly(password.value, charactersToAdd.entropy, charactersToAdd.value);
}
