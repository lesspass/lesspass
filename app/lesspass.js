import crypto from 'crypto';

export function make_password(key, text, length = 10) {
    var password = crypto.createHmac('sha256', key).update(text).digest('hex');
    return new Buffer(password).toString('base64').substring(0, length);
}

