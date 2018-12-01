const bigInt = require("big-integer");
const chars = require("./chars");
const { consumeEntropy } = require("./entropy");

module.exports = function renderPassword(entropy, options) {
  const rules = chars.getRules(options);
  const setOfCharacters = chars.getSetOfCharacters(rules);
  const generatedPassword = consumeEntropy(
    "",
    bigInt(entropy, 16),
    setOfCharacters,
    options.length - rules.length
  );
  const charactersToAdd = chars.getOneCharPerRule(generatedPassword.entropy, rules);
  return chars.insertStringPseudoRandomly(
    generatedPassword.value,
    charactersToAdd.entropy,
    charactersToAdd.value
  );
};
