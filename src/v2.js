var Promise = require("bluebird");
var pbkdf2 = require('pbkdf2');

exports.calcEntropy = function (site, login, masterPassword, passwordProfile) {
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
    })
};