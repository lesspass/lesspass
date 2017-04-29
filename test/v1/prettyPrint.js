var assert = require("assert");
var v1 = require("../../src/v1");

describe("prettyPrint", function() {
  it("should print different password if templates different", function() {
    var encryptedLogin =
      "78ae5892055ab59fdd54489ae30928d322841a27590b65cf875fcfdd083f7c32";
    assert.notEqual(
      v1._prettyPrint(encryptedLogin, "cv"),
      v1._prettyPrint(encryptedLogin, "vc")
    );
  });
  it("must return a string of the same length as the input", function() {
    var hash =
      "f5785e569ab5d38b02e2248c798ac17df90f57a85f34a9d5382408c2f0d9532d";
    assert.equal(hash.length, v1._prettyPrint(hash, "cv").length);
  });
  it("should return char inside a string based on modulo of the index", function() {
    var template = "cv";
    assert.equal("c", v1._getCharType(template, 0));
    assert.equal("v", v1._getCharType(template, 1));
    assert.equal("c", v1._getCharType(template, 10));
  });
  it("should convert a string into an array of char code", function() {
    var charCodes = v1._string2charCodes("ab40f6ee71");
    assert.equal(97, charCodes[0]);
    assert.equal(98, charCodes[1]);
    assert.equal(10, charCodes.length);
  });
  it("should get password char based on its type and index", function() {
    var typeVowel = "V";
    assert.equal("A", v1._getPasswordChar(typeVowel, 0));
  });
  it("should modulo if overflow", function() {
    var typeVowel = "V";
    assert.equal("E", v1._getPasswordChar(typeVowel, 1));
    assert.equal("E", v1._getPasswordChar(typeVowel, 7));
  });
});
