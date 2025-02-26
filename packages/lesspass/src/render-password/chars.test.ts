import { expect, test } from "vitest";
import chars from "./chars";

test("getSetOfCharacters", () => {
  const setOfCharacters = chars.getSetOfCharacters();
  expect(
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
  ).toBe(setOfCharacters);
  expect(26 * 2 + 10 + 32).toBe(setOfCharacters.length);
  expect(
    chars.characterSubsets.lowercase +
      chars.characterSubsets.uppercase +
      chars.characterSubsets.digits +
      chars.characterSubsets.symbols,
  ).toBe(setOfCharacters);
});

test("getSetOfCharacters concat rules in order", () => {
  const setOfCharacters = chars.getSetOfCharacters([
    "lowercase",
    "uppercase",
    "digits",
  ]);
  expect("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789").toBe(
    setOfCharacters,
  );
  expect(26 * 2 + 10).toBe(setOfCharacters.length);
});

test("getSetOfCharacters only lowercase", () => {
  const setOfCharacters = chars.getSetOfCharacters(["lowercase"]);
  expect("abcdefghijklmnopqrstuvwxyz").toBe(setOfCharacters);
  expect(26).toBe(setOfCharacters.length);
});

test("getSetOfCharacters only uppercase", () => {
  const setOfCharacters = chars.getSetOfCharacters(["uppercase"]);
  expect("ABCDEFGHIJKLMNOPQRSTUVWXYZ").toBe(setOfCharacters);
  expect(26).toBe(setOfCharacters.length);
});

test("getSetOfCharacters only digits", () => {
  const setOfCharacters = chars.getSetOfCharacters(["digits"]);
  expect("0123456789").toBe(setOfCharacters);
  expect(10).toBe(setOfCharacters.length);
});

test("getSetOfCharacters only symbols", () => {
  const setOfCharacters = chars.getSetOfCharacters(["symbols"]);
  expect("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~").toBe(setOfCharacters);
  expect(32).toBe(setOfCharacters.length);
});

test("getOneCharPerRule", () => {
  const oneCharPerSetOfCharacters = chars.getOneCharPerRule(BigInt(26 * 26), [
    "lowercase",
    "uppercase",
  ]);
  expect("aA").toBe(oneCharPerSetOfCharacters.value);
  expect(2).toBe(oneCharPerSetOfCharacters.value.length);
  expect("1").toBe(oneCharPerSetOfCharacters.entropy.toString());
});

test("getRules", () => {
  expect(["uppercase"]).toEqual(chars.getRules({ uppercase: true }));
  expect(["lowercase", "uppercase"]).toEqual(
    chars.getRules({ uppercase: true, lowercase: true }),
  );
  expect(["lowercase"]).toEqual(
    chars.getRules({ lowercase: true, symbols: false }),
  );
  expect(["lowercase", "uppercase", "digits", "symbols"]).toEqual(
    chars.getRules({
      lowercase: true,
      uppercase: true,
      symbols: true,
      digits: true,
    }),
  );
});

test("insertStringPseudoRandomly", () => {
  const password = chars.insertStringPseudoRandomly(
    "123456",
    BigInt(7 * 6 + 2),
    "uT",
  );
  expect("T12u3456").toBe(password);
});
