var Promise = require("bluebird");
var pbkdf2 = require('pbkdf2');
var bigInt = require("big-integer");

module.exports = {
    generatePassword: generatePassword,
    _calcEntropy: calcEntropy,
    _consumeEntropy: consumeEntropy,
    _getSetOfCharacters: getSetOfCharacters,
    _numberSubsetsOfChars: numberSubsetsOfChars,
    _includeOneCharPerSetOfCharacters: includeOneCharPerSetOfCharacters,
    _generateOneCharPerSetOfCharacters: generateOneCharPerSetOfCharacters,
    _renderPassword: renderPassword
};

function generatePassword(site, login, masterPassword, passwordProfile) {
    return calcEntropy(site, login, masterPassword, passwordProfile).then(function (entropy) {
        var setOfCharacters = getSetOfCharacters(passwordProfile);
        return renderPassword(entropy, setOfCharacters, passwordProfile)
    });
}

function calcEntropy(site, login, masterPassword, passwordProfile) {
    return new Promise(function (resolve, reject) {
        var salt = site + login + passwordProfile.counter.toString(16);
        var iterations = passwordProfile.iterations || 100000;
        var keylen = passwordProfile.keylen || 32;
        var digest = passwordProfile.digest || 'sha256';
        pbkdf2.pbkdf2(masterPassword, salt, iterations, keylen, digest, function (error, key) {
            if (error) {
                reject('error in pbkdf2');
            } else {
                resolve(key.toString('hex'));
            }
        });
    });
}
var subsetOfCharacters = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    digits: '0123456789',
    symbols: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
};

function getSetOfCharacters(passwordProfile) {
    if (typeof passwordProfile === 'undefined') {
        return subsetOfCharacters.lowercase + subsetOfCharacters.uppercase + subsetOfCharacters.digits + subsetOfCharacters.symbols;
    }
    var setOfCharacters = '';
    ['lowercase', 'uppercase', 'digits', 'symbols'].forEach(function (subset) {
        if (passwordProfile.hasOwnProperty(subset) && passwordProfile[subset]) {
            setOfCharacters += subsetOfCharacters[subset]
        }
    });
    return setOfCharacters;
}

function consumeEntropy(generatedPassword, quotient, setOfCharacters, maxLength) {
    if (generatedPassword.length >= maxLength) {
        return {value: generatedPassword, entropy: quotient}
    }
    var longDivision = quotient.divmod(setOfCharacters.length);
    generatedPassword += setOfCharacters[longDivision.remainder];
    return consumeEntropy(generatedPassword, longDivision.quotient, setOfCharacters, maxLength)
}

function includeOneCharPerSetOfCharacters(generatedPassword, entropy, oneCharPerSetOfCharacters) {
    var finalPassword = generatedPassword;
    var quotient = entropy;
    for (var i = 0; i < oneCharPerSetOfCharacters.length; i++) {
        var longDivision = quotient.divmod(finalPassword.length);
        finalPassword = finalPassword.slice(0, longDivision.remainder) + oneCharPerSetOfCharacters[i] + finalPassword.slice(longDivision.remainder);
        quotient = longDivision.quotient;
    }
    return finalPassword;
}

function generateOneCharPerSetOfCharacters(entropy, passwordProfile) {
    var oneCharPerSetOfCharacters = '';
    var quotient = entropy;
    ['lowercase', 'uppercase', 'digits', 'symbols'].forEach(function (subset) {
        if (passwordProfile.hasOwnProperty(subset) && passwordProfile[subset]) {
            var alphabet = subsetOfCharacters[subset];
            var longDivision = quotient.divmod(alphabet.length);
            oneCharPerSetOfCharacters += alphabet[longDivision.remainder];
            quotient = longDivision.quotient;
        }
    });
    return {value: oneCharPerSetOfCharacters, entropy: quotient};
}

function numberSubsetsOfChars(passwordProfile) {
    var numberOfSubsets = 0;
    ['lowercase', 'uppercase', 'digits', 'symbols'].forEach(function (subset) {
        if (passwordProfile.hasOwnProperty(subset) && passwordProfile[subset]) {
            numberOfSubsets += 1;
        }
    });
    return numberOfSubsets;
}

function renderPassword(entropy, setOfCharacters, passwordProfile) {
    var _passwordProfile = passwordProfile !== undefined ? passwordProfile : {
        lowercase: true,
        uppercase: true,
        digits: true,
        symbols: true
    };
    var length = _passwordProfile.length || 14;
    var numberCharsWillBeAdded = numberSubsetsOfChars(_passwordProfile);
    var password = consumeEntropy('', bigInt(entropy, 16), setOfCharacters, length - numberCharsWillBeAdded);
    var oneCharPerSetOfCharacters = generateOneCharPerSetOfCharacters(password.entropy, _passwordProfile);
    return includeOneCharPerSetOfCharacters(password.value, oneCharPerSetOfCharacters.entropy, oneCharPerSetOfCharacters.value);
}
