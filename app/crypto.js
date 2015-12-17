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
    return string2Uint8Array(hash).map(
        (charCode, index) => {
            var charType = getCharType(template, index);
            return getPasswordChar(charType, charCode);
        }
    );
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