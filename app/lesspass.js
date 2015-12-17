import crypto from 'crypto';

export function create_hash(key, text, length = 10, counter = 1) {
    var password = crypto.createHmac('sha256', key).update(text + counter.toString()).digest('hex');
    return password.substring(0, length);
}

export function create_password(master_password, site, password_info) {
    var hash = create_hash(master_password,site,password_info.size);
    return encode(hash, password_info.type);
}

export function string2Uint8Array(text) {
    var buffer = new ArrayBuffer(text.length);
    var uint8Array = new Uint8Array(buffer);
    for (let i = 0; i < text.length; i++) {
        uint8Array[i] = text.charCodeAt(i);
    }
    return uint8Array;
}

export function getTemplate(passwordType) {
    var templates = {
        l: "cv",
        u: "CV",
        n: "n",
        s: "s",
        lu: "cvCV",
        ln: "cvn",
        ls: "cvs",
        un: "CVn",
        us: "CVs",
        ns: "ns",
        lun: "cvCVn",
        uns: "CVns",
        lns: "cvns",
        lus: "cvCVs",
        luns: "cvCVns"
    };
    return templates[passwordType];
}

export function encode(hash, passwordType) {
    var template = getTemplate(passwordType);
    var password = '';
    string2Uint8Array(hash).map(
        (charCode, index) => {
            var charType = getCharType(template, index);
            password += getPasswordChar(charType, charCode);
        }
    );
    return password;
}

function elements_with_index(elements) {
    return elements.map((element, index) => index + ':' + element);
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

export function getCharType(template, index) {
    return template[index % template.length];
}