var assert = require("assert");
var v1 = require("../../src/v1");

describe("deriveEncryptedLogin", function() {
  it("should createHmac", function() {
    var encryptedLogin =
      "9f505f3a95fe0485da3242cb81c9fe25c2f400d8399737655a8dad2b52778d88";
    var salt = "lesspass.com1";
    return v1._createHmac(encryptedLogin, salt).then(function(hmac) {
      assert.equal(
        "be00f942fc8aa67d8e76fc2456862b9d66d166ebfdd3dc2f0116e278209532ed",
        hmac
      );
    });
  });
  it("should derive encrypted login with default options 1", function() {
    const encryptedLogin =
      "90cff82b8847525370a8f29a59ecf45db62c719a535788ad0df58d32304e925d";
    const site = "lesspass.com";
    return v1
      ._deriveEncryptedLogin(encryptedLogin, site)
      .then(function(generatedPassword) {
        assert.equal("ecd16aefc7e5", generatedPassword);
      });
  });
  it("should derive encrypted login with default options 2", function() {
    const encryptedLogin =
      "90cff82b8847525370a8f29a59ecf45db62c719a535788ad0df58d32304e925d";
    const site = "lesspass.com";
    const option = {
      counter: 1,
      length: 12,
      lowercase: true,
      uppercase: true,
      numbers: true,
      symbols: true
    };
    return v1
      ._deriveEncryptedLogin(encryptedLogin, site, option)
      .then(function(generatedPassword) {
        assert.equal("ecd16aefc7e5", generatedPassword);
      });
  });
  it("should derive encrypted login with defined length", function() {
    var encryptedLogin =
      "d79d8482f708122288af7b259393a58fe05840f4555cc935cdd3f062b9aa75ed";
    var site = "lesspass.com";
    var option = {
      counter: 1,
      length: 10
    };
    return v1
      ._deriveEncryptedLogin(encryptedLogin, site, option)
      .then(function(generatedPassword) {
        assert.equal(10, generatedPassword.length);
      });
  });
  it("should return two different passwords if site different 1", function() {
    const encryptedLogin =
      "f4fd3885fb70085f2285c3382e2d9adb4c2553285fc45dd896791aa5e79070a9";
    const site = "google.com";
    return v1
      ._deriveEncryptedLogin(encryptedLogin, site)
      .then(function(derivedEncryptedLogin) {
        assert.equal("a957c3a459ec", derivedEncryptedLogin);
      });
  });
  it("should return two different passwords if site different 2", function() {
    const encryptedLogin =
      "f4fd3885fb70085f2285c3382e2d9adb4c2553285fc45dd896791aa5e79070a9";
    const site = "facebook.com";
    return v1
      ._deriveEncryptedLogin(encryptedLogin, site)
      .then(function(derivedEncryptedLogin) {
        assert.equal("d9f3a918c34b", derivedEncryptedLogin);
      });
  });
  it("should return two different passwords if counter different 1", function() {
    const encryptedLogin =
      "dfba06278c9aa24d992bc2d390a53efef482788859455875f72015335d085fcd";
    const site = "lesspass.com";
    const option = { counter: 1 };
    return v1
      ._deriveEncryptedLogin(encryptedLogin, site, option)
      .then(function(derivedEncryptedLogins) {
        assert.equal("bb2e0b34036d", derivedEncryptedLogins);
      });
  });
  it("should return two different passwords if counter different 2", function() {
    const encryptedLogin =
      "dfba06278c9aa24d992bc2d390a53efef482788859455875f72015335d085fcd";
    const site = "lesspass.com";
    const option2 = { counter: 2 };
    return v1
      ._deriveEncryptedLogin(encryptedLogin, site, option2)
      .then(function(derivedEncryptedLogins) {
        assert.equal("67fe8c05a248", derivedEncryptedLogins);
      });
  });
  it("should derive encrypted login with sha 256", function() {
    const encryptedLogin =
      "9f505f3a95fe0485da3242cb81c9fe25c2f400d8399737655a8dad2b52778d88";
    const site = "lesspass.com";
    v1
      ._deriveEncryptedLogin(encryptedLogin, site)
      .then(function(encryptedLogin) {
        assert.equal("be00f942fc8a", encryptedLogin);
      });
  });
});
