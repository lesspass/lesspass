var bigInt = require("big-integer");
var chars = require("./chars");
var consumeEntropy = require("./entropy").consumeEntropy;

module.exports = function renderPassword(entropy, options) {
  var rules = chars.getRules(options);
  var setOfCharacters = chars.getSetOfCharacters(rules);
  var password = consumeEntropy(
    "",
    bigInt(entropy, 16),
    setOfCharacters,
    options.length - rules.length
  );
  var charactersToAdd = chars.getOneCharPerRule(password.entropy, rules);
  return chars.insertStringPseudoRandomly(
    password.value,
    charactersToAdd.entropy,
    charactersToAdd.value
  );
};
