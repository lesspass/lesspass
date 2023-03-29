import { BigInteger } from "big-integer";
import { consumeEntropy } from "./entropy";

export type Rule = "lowercase" | "uppercase" | "digits" | "symbols";

const characterSubsets: { [k in Rule]: string } = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  digits: "0123456789",
  symbols: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

export function getSetOfCharacters(rules?: Rule[]) {
  if (typeof rules === "undefined") {
    return (
      characterSubsets.lowercase +
      characterSubsets.uppercase +
      characterSubsets.digits +
      characterSubsets.symbols
    );
  }
  let setOfChars = "";
  rules.forEach((rule) => {
    setOfChars += characterSubsets[rule];
  });
  return setOfChars;
}

export function getOneCharPerRule(entropy: BigInteger, rules: Rule[]) {
  let oneCharPerRules = "";
  let consumedEntropy = entropy;
  rules.forEach((rule) => {
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

export function getRules(options: { [k in Rule]?: boolean }) {
  const rules: Rule[] = ["lowercase", "uppercase", "digits", "symbols"];
  return rules.filter((rule) => options[rule]);
}

export function insertStringPseudoRandomly(
  initialString: string,
  entropy: BigInteger,
  stringToInsert: string
) {
  let consumedEntropy = entropy;
  let string = initialString;
  for (let i = 0; i < stringToInsert.length; i += 1) {
    const longDivision = consumedEntropy.divmod(string.length);
    const remainder = longDivision.remainder as unknown as number;
    string =
      string.slice(0, remainder) + stringToInsert[i] + string.slice(remainder);
    consumedEntropy = longDivision.quotient;
  }
  return string;
}

export default {
  getSetOfCharacters,
  getOneCharPerRule,
  insertStringPseudoRandomly,
  getRules,
  characterSubsets,
};
