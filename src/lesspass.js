var hmac = require("./hmac");
var pbkdf2 = require("./pbkdf2");
var bigInt = require("big-integer");
var merge = require("lodash.merge");

var defaultProfile = {
  site: '',
  login: '',
  options: {
    uppercase: true,
    lowercase: true,
    digits: true,
    symbols: true,
    length: 16,
    counter: 1
  },
  crypto: {
    method: 'pbkdf2',
    iterations: 100000,
    keylen: 32,
    digest: "sha256"
  }
};

module.exports = {
  generatePassword: generatePassword,
  createFingerprint: createFingerprint,
  isSupported: isSupported,
  _calcEntropy: calcEntropy,
  _consumeEntropy: consumeEntropy,
  _getSetOfCharacters: getSetOfCharacters,
  _getConfiguredRules: getConfiguredRules,
  _insertStringPseudoRandomly: insertStringPseudoRandomly,
  _getOneCharPerRule: getOneCharPerRule,
  _renderPassword: renderPassword
};

function generatePassword(profile, masterPassword) {
  var _profile = merge({}, defaultProfile, profile);
  return calcEntropy(_profile, masterPassword)
    .then(function(entropy) {
      return renderPassword(entropy, _profile.options);
    });
}

function createFingerprint(str) {
  return hmac("sha256", str);
}

function isSupported() {
  try {
    var simpleProfile = merge({}, defaultProfile, {crypto: {iterations: 1}});
    return generatePassword(simpleProfile, 'LessPass')
      .then(function(generatedPassword) {
        return generatedPassword == "n'LTsjPA#3E$e*2'";
      });
  } catch (e) {
    console.error(e);
    return Promise.resolve(false);
  }
}

function calcEntropy(profile, masterPassword) {
  var salt = profile.site + profile.login + profile.options.counter.toString(16);
  return pbkdf2(
    masterPassword,
    salt,
    profile.crypto.iterations,
    profile.crypto.keylen,
    profile.crypto.digest
  );
}

var characterSubsets = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  digits: "0123456789",
  symbols: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
};

function getSetOfCharacters(rules) {
  if (typeof rules === "undefined") {
    return (
      characterSubsets.lowercase +
      characterSubsets.uppercase +
      characterSubsets.digits +
      characterSubsets.symbols
    );
  }
  var setOfChars = "";
  rules.forEach(function(rule) {
    setOfChars += characterSubsets[rule];
  });
  return setOfChars;
}

function consumeEntropy(generatedPassword,
                        quotient,
                        setOfCharacters,
                        maxLength) {
  if (generatedPassword.length >= maxLength) {
    return {value: generatedPassword, entropy: quotient};
  }
  var longDivision = quotient.divmod(setOfCharacters.length);
  generatedPassword += setOfCharacters[longDivision.remainder];
  return consumeEntropy(
    generatedPassword,
    longDivision.quotient,
    setOfCharacters,
    maxLength
  );
}

function insertStringPseudoRandomly(generatedPassword, entropy, string) {
  for (var i = 0; i < string.length; i++) {
    var longDivision = entropy.divmod(generatedPassword.length);
    generatedPassword =
      generatedPassword.slice(0, longDivision.remainder) +
      string[i] +
      generatedPassword.slice(longDivision.remainder);
    entropy = longDivision.quotient;
  }
  return generatedPassword;
}

function getOneCharPerRule(entropy, rules) {
  var oneCharPerRules = "";
  rules.forEach(function(rule) {
    var password = consumeEntropy("", entropy, characterSubsets[rule], 1);
    oneCharPerRules += password.value;
    entropy = password.entropy;
  });
  return {value: oneCharPerRules, entropy: entropy};
}

function getConfiguredRules(passwordProfile) {
  return ["lowercase", "uppercase", "digits", "symbols"].filter(function(rule) {
    return passwordProfile[rule];
  });
}

function renderPassword(entropy, passwordProfile) {
  var rules = getConfiguredRules(passwordProfile);
  var setOfCharacters = getSetOfCharacters(rules);
  var password = consumeEntropy(
    "",
    bigInt(entropy, 16),
    setOfCharacters,
    passwordProfile.length - rules.length
  );
  var charactersToAdd = getOneCharPerRule(password.entropy, rules);
  return insertStringPseudoRandomly(
    password.value,
    charactersToAdd.entropy,
    charactersToAdd.value
  );
}
