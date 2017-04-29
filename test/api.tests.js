var assert = require("assert");
var LessPass = require("../src/lesspass");

describe("api", function() {
  describe("v1", function() {
    it("generatedPassword", function() {
      var site = "example.org";
      var login = "contact@example.org";
      var masterPassword = "password";
      var options = {
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: true,
        length: 12,
        counter: 1,
        version: 1
      };
      return LessPass.generatePassword(
        site,
        login,
        masterPassword,
        options
      ).then(function(generatedPassword) {
        assert.equal("izIS5@ozYM2?", generatedPassword);
      });
    });
    it("generatedPassword", function() {
      var site = "lesspass.com";
      var login = "contact@lesspass.com";
      var masterPassword = "password";
      var options = {
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: true,
        length: 12,
        counter: 1,
        version: 1
      };
      return LessPass.generatePassword(
        site,
        login,
        masterPassword,
        options
      ).then(function(generatedPassword) {
        assert.equal("azYS7,olOL2]", generatedPassword);
      });
    });
    it("generatedPassword", function() {
      var site = "lesspass.com";
      var login = "contact@lesspass.com";
      var masterPassword = "password";
      var options = {
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: true,
        length: 14,
        counter: 1,
        version: 1
      };
      return LessPass.generatePassword(
        site,
        login,
        masterPassword,
        options
      ).then(function(generatedPassword) {
        assert.equal("azYS7,olOL2]iz", generatedPassword);
      });
    });
    it("generatedPassword", function() {
      var site = "lesspass.com";
      var login = "contact@lesspass.com";
      var masterPassword = "password";
      var options = {
        lowercase: true,
        uppercase: false,
        numbers: false,
        symbols: false,
        length: 12,
        counter: 1,
        version: 1
      };
      return LessPass.generatePassword(
        site,
        login,
        masterPassword,
        options
      ).then(function(generatedPassword) {
        assert.equal("azyseqololat", generatedPassword);
      });
    });
    it("generatedPassword", function() {
      var site = "lesspass.com";
      var login = "contact@lesspass.com";
      var masterPassword = "password";
      var options = {
        lowercase: false,
        uppercase: true,
        numbers: true,
        symbols: true,
        length: 12,
        counter: 1,
        version: 1
      };
      return LessPass.generatePassword(
        site,
        login,
        masterPassword,
        options
      ).then(function(generatedPassword) {
        assert.equal("AZ3[EQ7@OL2]", generatedPassword);
      });
    });
    it("generatedPassword", function() {
      var site = "lesspass.com";
      var login = "contact@lesspass.com";
      var masterPassword = "password";
      var options = {
        lowercase: false,
        uppercase: false,
        numbers: true,
        symbols: true,
        length: 12,
        counter: 1,
        version: 1
      };
      return LessPass.generatePassword(
        site,
        login,
        masterPassword,
        options
      ).then(function(generatedPassword) {
        assert.equal("4?3[7,7@7@2]", generatedPassword);
      });
    });
    it("generatedPassword", function() {
      var site = "lesspass.com";
      var login = "contact@lesspass.com";
      var masterPassword = "password";
      var options = {
        lowercase: false,
        uppercase: false,
        numbers: false,
        symbols: true,
        length: 12,
        counter: 1,
        version: 1
      };
      return LessPass.generatePassword(
        site,
        login,
        masterPassword,
        options
      ).then(function(generatedPassword) {
        assert.equal("[?=[&,:@:@[]", generatedPassword);
      });
    });
    it("generatedPassword", function() {
      var site = "lesspass.com";
      var login = "contact@lesspass.com";
      var masterPassword = "password";
      var options = {
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: false,
        length: 12,
        counter: 1,
        version: 1
      };
      return LessPass.generatePassword(
        site,
        login,
        masterPassword,
        options
      ).then(function(generatedPassword) {
        assert.equal("azYS7uwAW8at", generatedPassword);
      });
    });
    it("generatedPassword", function() {
      var site = "lesspass.com";
      var login = "contact@lesspass.com";
      var masterPassword = "password";
      var options = {
        lowercase: true,
        uppercase: true,
        numbers: false,
        symbols: false,
        length: 12,
        counter: 1,
        version: 1
      };
      return LessPass.generatePassword(
        site,
        login,
        masterPassword,
        options
      ).then(function(generatedPassword) {
        assert.equal("azYSeqOLolAT", generatedPassword);
      });
    });
    it("generatedPassword", function() {
      var site = "lesspass.com";
      var login = "contact@lesspass.com";
      var masterPassword = "password";
      var options = {
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: true,
        length: 12,
        counter: 2,
        version: 1
      };
      return LessPass.generatePassword(
        site,
        login,
        masterPassword,
        options
      ).then(function(generatedPassword) {
        assert.equal("obYT2=olOV9=", generatedPassword);
      });
    });
    it("generatedPassword", function() {
      var site = "lesspass.com";
      var login = "lesspass";
      var masterPassword = "password";
      var options = {
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: true,
        length: 12,
        counter: 1,
        version: 1
      };
      return LessPass.generatePassword(
        site,
        login,
        masterPassword,
        options
      ).then(function(generatedPassword) {
        assert.equal("erOC1%imIW3,", generatedPassword);
      });
    });
    it("generatedPassword", function() {
      var site = "lesspass.com";
      var login = "contact@lesspass.com";
      var masterPassword = "password2";
      var options = {
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: true,
        length: 12,
        counter: 1,
        version: 1
      };
      return LessPass.generatePassword(
        site,
        login,
        masterPassword,
        options
      ).then(function(generatedPassword) {
        assert.equal("uvUM5_ucUP5=", generatedPassword);
      });
    });
  });
  describe("v2", function() {
    it("generatedPassword", function() {
      this.timeout(10000);
      var site = "example.org";
      var login = "contact@example.org";
      var masterPassword = "password";
      var options = {
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: true,
        length: 16,
        counter: 1,
        version: 2
      };
      return LessPass.generatePassword(
        site,
        login,
        masterPassword,
        options
      ).then(function(generatedPassword) {
        assert.equal("WHLpUL)e00[iHR+w", generatedPassword);
      });
    });
    it("generatedPassword", function() {
      this.timeout(10000);
      var site = "example.org";
      var login = "contact@example.org";
      var masterPassword = "password";
      var options = {
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: false,
        length: 14,
        counter: 2,
        version: 2
      };
      return LessPass.generatePassword(
        site,
        login,
        masterPassword,
        options
      ).then(function(generatedPassword) {
        assert.equal("MBAsB7b1Prt8Sl", generatedPassword);
      });
    });
    it("generatedPassword", function() {
      this.timeout(10000);
      var site = "example.org";
      var login = "contact@example.org";
      var masterPassword = "password";
      var options = {
        lowercase: false,
        uppercase: false,
        numbers: true,
        symbols: false,
        length: 6,
        counter: 3,
        version: 2
      };
      return LessPass.generatePassword(
        site,
        login,
        masterPassword,
        options
      ).then(function(generatedPassword) {
        assert.equal("117843", generatedPassword);
      });
    });
    it("generatedPassword", function() {
      this.timeout(10000);
      var site = "example.org";
      var login = "contact@example.org";
      var masterPassword = "password";
      var options = {
        lowercase: true,
        uppercase: true,
        numbers: false,
        symbols: true,
        length: 14,
        counter: 1,
        version: 2
      };
      return LessPass.generatePassword(
        site,
        login,
        masterPassword,
        options
      ).then(function(generatedPassword) {
        assert.equal("sB>{qF}wN%/-fm", generatedPassword);
      });
    });
    it("generatedPassword", function() {
      this.timeout(10000);
      var site = "example.org";
      var login = "contact@example.org";
      var masterPassword = "password";
      return LessPass.generatePassword(
        site,
        login,
        masterPassword
      ).then(function(generatedPassword) {
        assert.equal("WHLpUL)e00[iHR+w", generatedPassword);
      });
    });
  });
  describe("fingerprint", function() {
    it("createFingerprint", function() {
      return LessPass.createFingerprint("password").then(function(fingerprint) {
        assert.equal(
          "e56a207acd1e6714735487c199c6f095844b7cc8e5971d86c003a7b6f36ef51e",
          fingerprint
        );
      });
    });
  });
});
