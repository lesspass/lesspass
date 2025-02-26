import chars from "./chars";
import { consumeEntropy } from "./entropy";

export interface PasswordOptions {
  uppercase: boolean;
  lowercase: boolean;
  digits: boolean;
  symbols: boolean;
  length: number;
}

export function renderPassword(entropy: string, options: PasswordOptions) {
  const rules = chars.getRules(options);
  const setOfCharacters = chars.getSetOfCharacters(rules);
  const generatedPassword = consumeEntropy(
    "",
    BigInt(`0x${entropy}`),
    setOfCharacters,
    options.length - rules.length,
  );
  const charactersToAdd = chars.getOneCharPerRule(
    generatedPassword.entropy,
    rules,
  );
  return chars.insertStringPseudoRandomly(
    generatedPassword.value,
    charactersToAdd.entropy,
    charactersToAdd.value,
  );
}
