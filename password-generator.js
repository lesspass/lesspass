var crypto = require('crypto');

module.exports = {
    createMasterPassword: createMasterPassword,
    _getTemplate: _getTemplate,
    _createHash:_createHash
};


function createMasterPassword(email, password) {
    return new Promise((resolve, reject) => {
        var iterations = 8192;
        var keylen = 32;
        crypto.pbkdf2(password, email, iterations, keylen, 'sha256', function (error, key) {
            if (error) {
                reject('error in pbkdf2');
            } else {
                resolve(key.toString('hex'));
            }
        });
    });
}

function _getTemplate(passwordTypes = ['strong']) {
    var passwordTypesInfo = {
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


function _createHash(masterPassword, {site, password={length: 12, counter: 1}}) {
    var salt = site + password.counter.toString();
    var hash = crypto.createHmac('sha256', masterPassword).update(salt).digest('hex');
    return hash.substring(0, password.length);
}