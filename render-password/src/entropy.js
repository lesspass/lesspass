function _consumeEntropy(generatedPassword,
                         quotient,
                         setOfCharacters,
                         maxLength) {
  if (generatedPassword.length >= maxLength) {
    return {value: generatedPassword, entropy: quotient};
  }
  var longDivision = quotient.divmod(setOfCharacters.length);
  generatedPassword += setOfCharacters[longDivision.remainder];
  return _consumeEntropy(
    generatedPassword,
    longDivision.quotient,
    setOfCharacters,
    maxLength
  );
}

module.exports = {
  consumeEntropy: _consumeEntropy
};
