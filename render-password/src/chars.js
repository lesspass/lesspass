var consumeEntropy = require('./entropy').consumeEntropy;

var _characterSubsets = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  digits: "0123456789",
  symbols: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
};

function getSetOfCharacters(rules) {
  if (typeof(rules) === "undefined") {
    return (
      _characterSubsets.lowercase +
      _characterSubsets.uppercase +
      _characterSubsets.digits +
      _characterSubsets.symbols
    );
  }
  var setOfChars = "";
  rules.forEach(function(rule) {
    setOfChars += _characterSubsets[rule];
  });
  return setOfChars;
}

function getOneCharPerRule(entropy, rules) {
  var oneCharPerRules = "";
  rules.forEach(function(rule) {
    var password = consumeEntropy("", entropy, _characterSubsets[rule], 1);
    oneCharPerRules += password.value;
    entropy = password.entropy;
  });
  return {value: oneCharPerRules, entropy: entropy};
}

function getRules(options) {
  return ["lowercase", "uppercase", "digits", "symbols"].filter(function(rule) {
    return options[rule];
  });
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

module.exports = {
  getSetOfCharacters: getSetOfCharacters,
  getOneCharPerRule: getOneCharPerRule,
  insertStringPseudoRandomly: insertStringPseudoRandomly,
  getRules: getRules,
  characterSubsets: _characterSubsets
};
