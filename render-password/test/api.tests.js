var assert = require("assert");
var renderPassword = require("../src/index");

describe("api", function() {
  var options = {
    length: 16,
    lowercase: true,
    uppercase: true,
    digits: true,
    symbols: true
  };
  it("render password use remainder of long division between entropy and set of chars length as an index", function() {
    assert.equal("W", renderPassword("dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e", options)[0]);
  });
  it("render password use quotient as second entropy recursively", function() {
    assert.equal("H", renderPassword("dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e", options)[1]);
  });
  it("render password has default length of 16", function() {
    var password = renderPassword("dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e", options);
    assert.equal(16, password.length);
  });
  it("render password can specify length", function() {
    var options = {
      length: 20,
      lowercase: true,
      uppercase: true,
      digits: true,
      symbols: true
    };
    var password = renderPassword("dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e", options);
    assert.equal(20, password.length);
  });
  it("render password return at least one char in every characters set", function() {
    var entropy =
      "dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e";
    var passwordProfile = {
      length: 6,
      lowercase: true,
      uppercase: true,
      digits: true,
      symbols: true
    };
    var generatedPassword = renderPassword(entropy, passwordProfile);
    var passwordLength = generatedPassword.length;
    var lowercaseOk = false;
    var uppercaseOk = false;
    var digitsOk = false;
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
        digitsOk = true;
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
      lowercaseOk && uppercaseOk && digitsOk && symbolsOk,
      "there is no at least one char in every characters set"
    );
  });
});
