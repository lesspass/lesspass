const { consumeEntropy } = require("./entropy");

const characterSubsets = {
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
  let setOfChars = "";
  rules.forEach(rule => {
    setOfChars += characterSubsets[rule];
  });
  return setOfChars;
}

function getOneCharPerRule(entropy, rules) {
  let oneCharPerRules = "";
  let consumedEntropy = entropy;
  rules.forEach(rule => {
    const password = consumeEntropy(
      "",
      consumedEntropy,
      characterSubsets[rule],
      1
    );
    oneCharPerRules += password.value;
    consumedEntropy = password.entropy;
  });
  return { value: oneCharPerRules, entropy: consumedEntropy };
}

function getRules(options) {
  return ["lowercase", "uppercase", "digits", "symbols"].filter(
    rule => options[rule]
  );
}

function insertStringPseudoRandomly(initialString, entropy, stringToInsert) {
  let consumedEntropy = entropy;
  let string = initialString;
  for (let i = 0; i < stringToInsert.length; i += 1) {
    const longDivision = consumedEntropy.divmod(string.length);
    string =
      string.slice(0, longDivision.remainder) +
      stringToInsert[i] +
      string.slice(longDivision.remainder);
    consumedEntropy = longDivision.quotient;
  }
  return string;
}

module.exports = {
  getSetOfCharacters,
  getOneCharPerRule,
  insertStringPseudoRandomly,
  getRules,
  characterSubsets
};
