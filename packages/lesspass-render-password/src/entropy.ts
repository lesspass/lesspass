export function divMod(dividend: bigint, divisor: bigint) {
  return {
    quotient: divisor > 0 ? dividend / divisor : BigInt(0),
    remainder: dividend % divisor,
  };
}
export function consumeEntropy(
  generatedPassword: string,
  quotient: bigint,
  setOfCharacters: string,
  maxLength: number
): { value: string; entropy: bigint } {
  let passwordBuilt = generatedPassword;
  if (passwordBuilt.length >= maxLength) {
    return { value: passwordBuilt, entropy: quotient };
  }
  const longDivision = divMod(quotient, BigInt(setOfCharacters.length));
  passwordBuilt += setOfCharacters[Number(longDivision.remainder)];
  return consumeEntropy(
    passwordBuilt,
    longDivision.quotient,
    setOfCharacters,
    maxLength
  );
}

export default {
  consumeEntropy,
};
