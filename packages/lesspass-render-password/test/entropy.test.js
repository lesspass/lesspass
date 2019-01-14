const assert = require("assert");
const bigInt = require("big-integer");
const entropy = require("../src/entropy");

test("consumeEntropy", () => {
  const password = entropy.consumeEntropy("", bigInt(4 * 4 + 2), "abcd", 2);
  assert.equal("ca", password.value);
  assert.equal(1, password.entropy);
});
