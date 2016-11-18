var Promise = require("bluebird");
var pbkdf2 = require('pbkdf2');
var bigInt = require("big-integer");

exports.generatePassword = generatePassword;

function generatePassword(site, login, masterPassword, passwordProfile) {
    return calcEntropy(site, login, masterPassword, passwordProfile).then(function (entropy) {
        var setOfCharacters = getSetOfCharacters(passwordProfile);
        return renderPassword(entropy, setOfCharacters, passwordProfile)
    });
}

exports._calcEntropy = calcEntropy;
exports._getSetOfCharacters = getSetOfCharacters;
exports._renderPassword = renderPassword;


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

function getSetOfCharacters(passwordProfile) {
    var subsetOfCharacters = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        digits: '0123456789',
        symbols: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
    };

    if (typeof passwordProfile === 'undefined') {
        return subsetOfCharacters.lowercase + subsetOfCharacters.uppercase + subsetOfCharacters.digits;
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
        return generatedPassword
    }
    var longDivision = quotient.divmod(setOfCharacters.length);
    generatedPassword += setOfCharacters[longDivision.remainder];
    return consumeEntropy(generatedPassword, longDivision.quotient, setOfCharacters, maxLength)
}

function renderPassword(entropy, setOfCharacters, passwordProfile) {
    var _passwordProfile = passwordProfile !== undefined ? passwordProfile : {};
    var length = _passwordProfile.length || 14;
    return consumeEntropy('', bigInt(entropy, 16), setOfCharacters, length);
}
