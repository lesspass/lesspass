var pbkdf2 = require("./pbkdf2");
var assign = require("lodash.assign");
var hmac = require("./hmac");

module.exports = {
  generatePassword: generatePassword,
  _renderPassword: renderPassword,
  _createHmac: createHmac,
  _deriveEncryptedLogin: deriveEncryptedLogin,
  _getPasswordTemplate: getPasswordTemplate,
  _prettyPrint: prettyPrint,
  _string2charCodes: string2charCodes,
  _getCharType: getCharType,
  _getPasswordChar: getPasswordChar
};

var defaultOptions = {
  version: 1,
  lowercase: true,
  numbers: true,
  uppercase: true,
  symbols: true,
  keylen: 32,
  digest: "sha256",
  length: 12,
  counter: 1,
  iterations: 8192
};

function generatePassword(site, login, masterPassword, options) {
  var _options = assign({}, defaultOptions, options);
  return pbkdf2(
    masterPassword,
    login,
    _options.iterations,
    _options.keylen,
    "sha256"
  ).then(function(encryptedLogin) {
    return renderPassword(encryptedLogin, site, _options).then(function(
      generatedPassword
    ) {
      return generatedPassword;
    });
  });
}

function renderPassword(encryptedLogin, site, passwordOptions) {
  return deriveEncryptedLogin(
    encryptedLogin,
    site,
    passwordOptions
  ).then(function(derivedEncryptedLogin) {
    var template =
      passwordOptions.template || getPasswordTemplate(passwordOptions);
    return prettyPrint(derivedEncryptedLogin, template);
  });
}

function createHmac(encryptedLogin, salt) {
  return new Promise(function(resolve) {
    resolve(hmac("sha256", encryptedLogin, salt));
  });
}

function deriveEncryptedLogin(encryptedLogin, site, options) {
  var _options = options !== undefined ? options : {};
  var length = _options.length || 12;
  var counter = _options.counter || 1;

  var salt = site + counter.toString();
  return createHmac(encryptedLogin, salt).then(function(derivedHash) {
    return derivedHash.substring(0, length);
  });
}

function getPasswordTemplate(passwordTypes) {
  var templates = {
    lowercase: "vc",
    uppercase: "VC",
    numbers: "n",
    symbols: "s"
  };
  var returnedTemplate = "";
  Object.keys(templates).forEach(function(template) {
    if (passwordTypes.hasOwnProperty(template) && passwordTypes[template]) {
      returnedTemplate += templates[template];
    }
  });
  return returnedTemplate;
}

function prettyPrint(hash, template) {
  var password = "";

  string2charCodes(hash).forEach(function(charCode, index) {
    var charType = getCharType(template, index);
    password += getPasswordChar(charType, charCode);
  });
  return password;
}

function string2charCodes(text) {
  var charCodes = [];
  for (var i = 0; i < text.length; i++) {
    charCodes.push(text.charCodeAt(i));
  }
  return charCodes;
}

function getCharType(template, index) {
  return template[index % template.length];
}

function getPasswordChar(charType, index) {
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
