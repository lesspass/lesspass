import bigInt from "big-integer";
import chars from "./chars";
import { consumeEntropy } from "./entropy";

export interface Options {
  uppercase: boolean;
  lowercase: boolean;
  digits: boolean;
  symbols: boolean;
  length: number;
}

export function renderPassword(entropy:string, options: Options) {
  const rules = chars.getRules(options);
  const setOfCharacters = chars.getSetOfCharacters(rules);
  const generatedPassword = consumeEntropy(
    "",
    bigInt(entropy, 16),
    setOfCharacters,
    options.length - rules.length
  );
  const charactersToAdd = chars.getOneCharPerRule(
    generatedPassword.entropy,
    rules
  );
  return chars.insertStringPseudoRandomly(
    generatedPassword.value,
    charactersToAdd.entropy,
    charactersToAdd.value
  );
}

export default {
  renderPassword,
};
