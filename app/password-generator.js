(function () {
    'use strict';

    var crypto = require('crypto');

    class PasswordGenerator {
        static make_password(key, text, length = 10) {
            var password = crypto.createHmac('sha1', key).update(text).digest('hex');
            return new Buffer(password).toString('base64').substring(0, length);
        }
    }

    module.exports = PasswordGenerator;
}());
