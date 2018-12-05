const assert = require("assert");
const bigInt = require("big-integer");
const chars = require("../src/chars");

test("getSetOfCharacters", () => {
  const setOfCharacters = chars.getSetOfCharacters();
  assert.equal(
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
    setOfCharacters
  );
  assert.equal(26 * 2 + 10 + 32, setOfCharacters.length);
  assert.equal(
    chars.characterSubsets.lowercase +
      chars.characterSubsets.uppercase +
      chars.characterSubsets.digits +
      chars.characterSubsets.symbols,
    setOfCharacters
  );
});

test("getSetOfCharacters concat rules in order", () => {
  const setOfCharacters = chars.getSetOfCharacters([
    "lowercase",
    "uppercase",
    "digits"
  ]);
  assert.equal(
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    setOfCharacters
  );
  assert.equal(26 * 2 + 10, setOfCharacters.length);
});

test("getSetOfCharacters only lowercase", () => {
  const setOfCharacters = chars.getSetOfCharacters(["lowercase"]);
  assert.equal("abcdefghijklmnopqrstuvwxyz", setOfCharacters);
  assert.equal(26, setOfCharacters.length);
});

test("getSetOfCharacters only uppercase", () => {
  const setOfCharacters = chars.getSetOfCharacters(["uppercase"]);
  assert.equal("ABCDEFGHIJKLMNOPQRSTUVWXYZ", setOfCharacters);
  assert.equal(26, setOfCharacters.length);
});

test("getSetOfCharacters only digits", () => {
  const setOfCharacters = chars.getSetOfCharacters(["digits"]);
  assert.equal("0123456789", setOfCharacters);
  assert.equal(10, setOfCharacters.length);
});

test("getSetOfCharacters only symbols", () => {
  const setOfCharacters = chars.getSetOfCharacters(["symbols"]);
  assert.equal("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~", setOfCharacters);
  assert.equal(32, setOfCharacters.length);
});

test("getOneCharPerRule", () => {
  const oneCharPerSetOfCharacters = chars.getOneCharPerRule(bigInt(26 * 26), [
    "lowercase",
    "uppercase"
  ]);
  assert.equal("aA", oneCharPerSetOfCharacters.value);
  assert.equal(2, oneCharPerSetOfCharacters.value.length);
  assert.equal(1, oneCharPerSetOfCharacters.entropy);
});

test("getRules", () => {
  assert.deepEqual(["uppercase"], chars.getRules({ uppercase: true }));
  assert.deepEqual(
    ["lowercase", "uppercase"],
    chars.getRules({ uppercase: true, lowercase: true })
  );
  assert.deepEqual(
    ["lowercase"],
    chars.getRules({ lowercase: true, symbols: false })
  );
  assert.deepEqual(
    ["lowercase", "uppercase", "digits", "symbols"],
    chars.getRules({
      lowercase: true,
      uppercase: true,
      symbols: true,
      digits: true
    })
  );
});

test("insertStringPseudoRandomly", () => {
  const password = chars.insertStringPseudoRandomly(
    "123456",
    bigInt(7 * 6 + 2),
    "uT"
  );
  assert.equal("T12u3456", password);
});
