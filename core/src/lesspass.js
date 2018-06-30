var hmac = require("./hmac");
var pbkdf2 = require("./pbkdf2");
var merge = require("lodash.merge");
var renderPassword = require("lesspass-render-password");

var defaultProfile = {
  site: "",
  login: "",
  options: {
    uppercase: true,
    lowercase: true,
    digits: true,
    symbols: true,
    length: 16,
    counter: 1
  },
  crypto: {
    method: "pbkdf2",
    iterations: 100000,
    keylen: 32,
    digest: "sha256"
  }
};

module.exports = {
  generatePassword: generatePassword,
  createFingerprint: createFingerprint,
  isSupported: isSupported,
  _calcEntropy: _calcEntropy
};

function generatePassword(profile, masterPassword) {
  var _profile = merge({}, defaultProfile, profile);
  return _calcEntropy(_profile, masterPassword).then(function(entropy) {
    return renderPassword(entropy, _profile.options);
  });
}

function createFingerprint(str) {
  return hmac("sha256", str);
}

function isSupported() {
  try {
    var simpleProfile = merge({}, defaultProfile, {
      crypto: { iterations: 1 }
    });
    return generatePassword(simpleProfile, "LessPass").then(function(
      generatedPassword
    ) {
      return generatedPassword === "n'LTsjPA#3E$e*2'";
    });
  } catch (e) {
    console.error(e);
    return Promise.resolve(false);
  }
}

function _calcEntropy(profile, masterPassword) {
  var salt =
    profile.site + profile.login + profile.options.counter.toString(16);
  return pbkdf2(
    masterPassword,
    salt,
    profile.crypto.iterations,
    profile.crypto.keylen,
    profile.crypto.digest
  );
}
