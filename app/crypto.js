export function string2Uint8Array(text) {
    var bytesPerChar = 2;
    var buffer = new ArrayBuffer(text.length * bytesPerChar);
    var uint8Array = new Uint8Array(buffer);
    for (let i = 0; i < text.length; i++) {
        uint8Array[i] = text.charCodeAt(i);
    }
    return uint8Array;
}

export function getTemplate(templates, index) {
    return templates[index % templates.length];
}

export function encode(template, indexes) {
    var encodedArray = indexes.map(index => template[index % template.length]);
    return encodedArray.join('');
}

export var passwordChars = {
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

export function getPasswordChar(charType, index) {
    var passwordChar = passwordChars[charType];
    return passwordChar[index % passwordChar.length];
}

