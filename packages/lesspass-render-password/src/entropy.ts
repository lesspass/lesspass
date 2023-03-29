import { BigInteger } from "big-integer";

export function consumeEntropy(
  generatedPassword:string,
  quotient:BigInteger,
  setOfCharacters:string,
  maxLength: number
):{value:string, entropy: BigInteger} {
  let passwordBuilt = generatedPassword;
  if (passwordBuilt.length >= maxLength) {
    return { value: passwordBuilt, entropy: quotient };
  }
  const longDivision = quotient.divmod(setOfCharacters.length);
  const remainder = longDivision.remainder as unknown as number
  passwordBuilt += setOfCharacters[remainder];
  return consumeEntropy(
    passwordBuilt,
    longDivision.quotient,
    setOfCharacters,
    maxLength
  );
}

export default {
  consumeEntropy
};
