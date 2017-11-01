var assert = require("assert");
var chars = require("../src/chars");
var bigInt = require("big-integer");

describe("chars", function() {
  describe("getSetOfCharacters", function() {
    it("get default set of characters", function() {
      var setOfCharacters = chars.getSetOfCharacters();
      assert.equal(
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
        setOfCharacters
      );
      assert.equal(26 * 2 + 10 + 32, setOfCharacters.length);
    });
    it("get default set of characters concat rules in order", function() {
      var setOfCharacters = chars.getSetOfCharacters([
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
    it("get set of characters only lowercase", function() {
      var setOfCharacters = chars.getSetOfCharacters(["lowercase"]);
      assert.equal("abcdefghijklmnopqrstuvwxyz", setOfCharacters);
      assert.equal(26, setOfCharacters.length);
    });
    it("get set of characters only uppercase", function() {
      var setOfCharacters = chars.getSetOfCharacters(["uppercase"]);
      assert.equal("ABCDEFGHIJKLMNOPQRSTUVWXYZ", setOfCharacters);
      assert.equal(26, setOfCharacters.length);
    });
    it("get set of characters only digits", function() {
      var setOfCharacters = chars.getSetOfCharacters(["digits"]);
      assert.equal("0123456789", setOfCharacters);
      assert.equal(10, setOfCharacters.length);
    });
    it("get set of characters only symbols", function() {
      var setOfCharacters = chars.getSetOfCharacters(["symbols"]);
      assert.equal("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~", setOfCharacters);
      assert.equal(32, setOfCharacters.length);
    });

    it("characterSubsets can be imported", function() {
      assert.equal(
        chars.characterSubsets['lowercase'] + chars.characterSubsets['uppercase'] + chars.characterSubsets['digits'] + chars.characterSubsets['symbols'],
        chars.getSetOfCharacters()
      );
    });
  });
  describe("oneCharPerSetOfCharacters", function() {
    it("generate one char per rules", function() {
      var oneCharPerSetOfCharacters = chars.getOneCharPerRule(bigInt(26 * 26), [
        "lowercase",
        "uppercase"
      ]);
      assert.equal("aA", oneCharPerSetOfCharacters.value);
      assert.equal(2, oneCharPerSetOfCharacters.value.length);
      assert.equal(1, oneCharPerSetOfCharacters.entropy);
    });
  });
  describe("getRules", function() {
    it("get array of enabled rules", function() {
      assert.deepEqual(
        ["uppercase"],
        chars.getRules({ uppercase: true })
      );
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
        chars.getRules({lowercase: true, uppercase: true, symbols: true, digits: true})
      );
    });
  });
  describe("insertStringPseudoRandomly", function() {
    it("insert string in another string consuming entropy", function() {
      const password = chars.insertStringPseudoRandomly(
        "123456",
        bigInt(7 * 6 + 2),
        "uT"
      );
      assert.equal("T12u3456", password);
    });
  });
});
