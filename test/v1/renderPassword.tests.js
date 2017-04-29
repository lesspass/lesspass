var assert = require("assert");
var v1 = require("../../src/v1");

describe("renderPassword", function() {
  it("renderPassword", function() {
    var site = "lesspass.com";
    var encryptedLogin =
      "63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0";
    var passwordOptions = {
      counter: 1,
      length: 12,
      lowercase: true,
      uppercase: true,
      numbers: true,
      symbols: true
    };
    return v1
      ._renderPassword(encryptedLogin, site, passwordOptions)
      .then(function(generatedPassword) {
        assert.equal("azYS7,olOL2]", generatedPassword);
      });
  });
  it("renderPassword with a custom template", function() {
    var site = "lesspass.com";
    var encryptedLogin =
      "63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0";
    var passwordOptions = {
      counter: 1,
      length: 12,
      lowercase: true,
      uppercase: true,
      numbers: true,
      symbols: true,
      template: "n"
    };
    return v1
      ._renderPassword(encryptedLogin, site, passwordOptions)
      .then(function(generatedPassword) {
        var i = generatedPassword.length;
        while (i--) {
          assert("0123456789".indexOf(generatedPassword[i]) !== -1);
        }
      });
  });
  it("renderPassword with a custom template too short", function() {
    var site = "lesspass.com";
    var encryptedLogin =
      "63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0";
    var passwordOptions = {
      counter: 1,
      length: 12,
      lowercase: true,
      uppercase: true,
      numbers: true,
      symbols: true,
      template: "CvcnCVsn"
    };
    return v1
      ._renderPassword(encryptedLogin, site, passwordOptions)
      .then(function(generatedPassword) {
        assert.equal("Sor4WU:8Wad5", generatedPassword);
      });
  });
  it("renderPassword with a custom template too long", function() {
    var site = "lesspass.com";
    var encryptedLogin =
      "63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0";
    var passwordOptions = {
      counter: 1,
      length: 6,
      lowercase: true,
      uppercase: true,
      numbers: true,
      symbols: true,
      template: "CvcnCVsn"
    };
    return v1
      ._renderPassword(encryptedLogin, site, passwordOptions)
      .then(function(generatedPassword) {
        assert.equal("Sor4WU", generatedPassword);
      });
  });
  it("renderPassword auto generated 0", function() {
    var site = "lesspass.com";
    var encryptedLogin =
      "63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0";
    var passwordOptions = {
      counter: 1,
      length: 12,
      lowercase: true,
      uppercase: true,
      numbers: true,
      symbols: true
    };
    return v1
      ._renderPassword(encryptedLogin, site, passwordOptions)
      .then(function(generatedPassword) {
        assert.equal("azYS7,olOL2]", generatedPassword);
      });
  });
  it("renderPassword auto generated 1", function() {
    var site = "lesspass.com";
    var encryptedLogin =
      "63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0";
    var passwordOptions = {
      counter: 1,
      length: 14,
      lowercase: true,
      uppercase: true,
      numbers: true,
      symbols: true
    };
    return v1
      ._renderPassword(encryptedLogin, site, passwordOptions)
      .then(function(generatedPassword) {
        assert.equal("azYS7,olOL2]iz", generatedPassword);
      });
  });
  it("renderPassword auto generated 2", function() {
    var site = "lesspass.com";
    var encryptedLogin =
      "63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0";
    var passwordOptions = {
      counter: 1,
      length: 12,
      lowercase: true,
      uppercase: false,
      numbers: false,
      symbols: false
    };
    return v1
      ._renderPassword(encryptedLogin, site, passwordOptions)
      .then(function(generatedPassword) {
        assert.equal("azyseqololat", generatedPassword);
      });
  });
  it("renderPassword auto generated 3", function() {
    var site = "lesspass.com";
    var encryptedLogin =
      "63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0";
    var passwordOptions = {
      counter: 1,
      length: 12,
      lowercase: false,
      uppercase: true,
      numbers: true,
      symbols: true
    };
    return v1
      ._renderPassword(encryptedLogin, site, passwordOptions)
      .then(function(generatedPassword) {
        assert.equal("AZ3[EQ7@OL2]", generatedPassword);
      });
  });
  it("renderPassword auto generated 4", function() {
    var site = "lesspass.com";
    var encryptedLogin =
      "63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0";
    var passwordOptions = {
      counter: 1,
      length: 12,
      lowercase: false,
      uppercase: false,
      numbers: true,
      symbols: true
    };
    return v1
      ._renderPassword(encryptedLogin, site, passwordOptions)
      .then(function(generatedPassword) {
        assert.equal("4?3[7,7@7@2]", generatedPassword);
      });
  });
  it("renderPassword auto generated 5", function() {
    var site = "lesspass.com";
    var encryptedLogin =
      "63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0";
    var passwordOptions = {
      counter: 1,
      length: 12,
      lowercase: false,
      uppercase: false,
      numbers: false,
      symbols: true
    };
    return v1
      ._renderPassword(encryptedLogin, site, passwordOptions)
      .then(function(generatedPassword) {
        assert.equal("[?=[&,:@:@[]", generatedPassword);
      });
  });
  it("renderPassword auto generated 6", function() {
    var site = "lesspass.com";
    var encryptedLogin =
      "63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0";
    var passwordOptions = {
      counter: 1,
      length: 12,
      lowercase: true,
      uppercase: true,
      numbers: true,
      symbols: false
    };
    return v1
      ._renderPassword(encryptedLogin, site, passwordOptions)
      .then(function(generatedPassword) {
        assert.equal("azYS7uwAW8at", generatedPassword);
      });
  });
  it("renderPassword auto generated 7", function() {
    var site = "lesspass.com";
    var encryptedLogin =
      "63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0";
    var passwordOptions = {
      counter: 1,
      length: 12,
      lowercase: true,
      uppercase: true,
      numbers: false,
      symbols: false
    };
    return v1
      ._renderPassword(encryptedLogin, site, passwordOptions)
      .then(function(generatedPassword) {
        assert.equal("azYSeqOLolAT", generatedPassword);
      });
  });
  it("renderPassword auto generated 8", function() {
    var site = "lesspass.com";
    var encryptedLogin =
      "63d850713d0b2f7f2c4396fe93f4ac0c6bc7485f9e7473c4b8c4a33ec12199c0";
    var passwordOptions = {
      counter: 2,
      length: 12,
      lowercase: true,
      uppercase: true,
      numbers: true,
      symbols: true
    };
    return v1
      ._renderPassword(encryptedLogin, site, passwordOptions)
      .then(function(generatedPassword) {
        assert.equal("obYT2=olOV9=", generatedPassword);
      });
  });
  it("renderPassword auto generated 9", function() {
    var site = "lesspass.com";
    var encryptedLogin =
      "7d05ee25597dcc3ac16d082aa910e7707f75be620ed8db5bef7245e2a8579116";
    var passwordOptions = {
      counter: 1,
      length: 12,
      lowercase: true,
      uppercase: true,
      numbers: true,
      symbols: true
    };
    return v1
      ._renderPassword(encryptedLogin, site, passwordOptions)
      .then(function(generatedPassword) {
        assert.equal("erOC1%imIW3,", generatedPassword);
      });
  });
  it("renderPassword auto generated 10", function() {
    var site = "lesspass.com";
    var encryptedLogin =
      "ce853092fc54fe88c281e38df97bd5826d64e6bee315dc94939cbba8930df0e4";
    var passwordOptions = {
      counter: 1,
      length: 12,
      lowercase: true,
      uppercase: true,
      numbers: true,
      symbols: true
    };
    return v1
      ._renderPassword(encryptedLogin, site, passwordOptions)
      .then(function(generatedPassword) {
        assert.equal("uvUM5_ucUP5=", generatedPassword);
      });
  });
});
