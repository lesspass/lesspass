var assert = require("assert");
var entropy = require("../src/entropy");
var bigInt = require("big-integer");

describe("entropy", function() {
  it("consume entropy", function() {
    var password = entropy.consumeEntropy("", bigInt(4 * 4 + 2), "abcd", 2);
    assert.equal("ca", password.value);
    assert.equal(1, password.entropy);
  });
});
