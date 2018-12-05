function consumeEntropy(
  generatedPassword,
  quotient,
  setOfCharacters,
  maxLength
) {
  let passwordBuilt = generatedPassword;
  if (passwordBuilt.length >= maxLength) {
    return { value: passwordBuilt, entropy: quotient };
  }
  const longDivision = quotient.divmod(setOfCharacters.length);
  passwordBuilt += setOfCharacters[longDivision.remainder];
  return consumeEntropy(
    passwordBuilt,
    longDivision.quotient,
    setOfCharacters,
    maxLength
  );
}

module.exports = {
  consumeEntropy
};
