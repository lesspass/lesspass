module.exports = {
    _getCharType: _getCharType,
    _getPasswordChar: _getPasswordChar,
    _encode: _encode,
    _string2charCodes: _string2charCodes
};

function _getCharType(template, index) {
    return template[index % template.length];
}

function _getPasswordChar(charType, index) {
    var passwordsChars = {
        V: "AEIOUY",
        C: "BCDFGHJKLMNPQRSTVWXZ",
        v: "aeiouy",
        c: "bcdfghjklmnpqrstvwxz",
        A: "AEIOUYBCDFGHJKLMNPQRSTVWXZ",
        a: "AEIOUYaeiouyBCDFGHJKLMNPQRSTVWXZbcdfghjklmnpqrstvwxz",
        n: "0123456789",
        s: "@&%?,=[]_:-+*$#!'^~;()/.",
        x: "AEIOUYaeiouyBCDFGHJKLMNPQRSTVWXZbcdfghjklmnpqrstvwxz0123456789@&%?,=[]_:-+*$#!'^~;()/."
    };
    var passwordChar = passwordsChars[charType];
    return passwordChar[index % passwordChar.length];
}

function _encode(hash, template) {
    var password = '';
    _string2charCodes(hash).map(
        (charCode, index) => {
            let charType = _getCharType(template, index);
            password += _getPasswordChar(charType, charCode);
        }
    );
    return password;
}

function _string2charCodes(text) {
    var charCodes = [];
    for (let i = 0; i < text.length; i++) {
        charCodes.push(text.charCodeAt(i));
    }
    return charCodes;
}