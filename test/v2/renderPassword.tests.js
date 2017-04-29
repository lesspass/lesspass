var assert = require("assert");
var v2 = require("../../src/v2");
var bigInt = require("big-integer");

describe("LessPass v2", function() {
  var defaultPasswordProfile = {
    length: 16,
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true
  };
  it("render password use remainder of long division beetween entropy and set of chars length as an index", function() {
    var entropy =
      "dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e";
    assert.equal("W", v2._renderPassword(entropy, defaultPasswordProfile)[0]);
  });
  it("render password use quotient as second entropy recursively", function() {
    var entropy =
      "dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e";
    assert.equal("H", v2._renderPassword(entropy, defaultPasswordProfile)[1]);
  });
  it("render password has default length of 16", function() {
    var entropy =
      "dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e";
    assert.equal(
      16,
      v2._renderPassword(entropy, defaultPasswordProfile).length
    );
  });
  it("render password can specify length", function() {
    var entropy =
      "dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e";
    var passwordProfile = {
      length: 20,
      lowercase: true,
      uppercase: true,
      numbers: true,
      symbols: true
    };
    assert.equal(20, v2._renderPassword(entropy, passwordProfile).length);
  });
  it("include one char per set of characters", function() {
    var password = v2._insertStringPseudoRandomly(
      "123456",
      bigInt(7 * 6 + 2),
      "uT"
    );
    assert.equal("T12u3456", password);
  });
  it("render password return at least one char in every characters set", function() {
    var entropy =
      "dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e";
    var passwordProfile = {
      length: 6,
      lowercase: true,
      uppercase: true,
      numbers: true,
      symbols: true
    };
    var generatedPassword = v2._renderPassword(entropy, passwordProfile);
    var passwordLength = generatedPassword.length;
    var lowercaseOk = false;
    var uppercaseOk = false;
    var numbersOk = false;
    var symbolsOk = false;
    while (passwordLength--) {
      if (
        "abcdefghijklmnopqrstuvwxyz".indexOf(
          generatedPassword[passwordLength]
        ) !== -1
      ) {
        lowercaseOk = true;
      }
      if (
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(
          generatedPassword[passwordLength]
        ) !== -1
      ) {
        uppercaseOk = true;
      }
      if ("0123456789".indexOf(generatedPassword[passwordLength]) !== -1) {
        numbersOk = true;
      }
      if (
        "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".indexOf(
          generatedPassword[passwordLength]
        ) !== -1
      ) {
        symbolsOk = true;
      }
    }
    assert.equal(6, generatedPassword.length);
    assert(
      lowercaseOk && uppercaseOk && numbersOk && symbolsOk,
      "there is no at least one char in every characters set"
    );
  });
});
