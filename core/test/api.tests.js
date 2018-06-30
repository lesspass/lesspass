var assert = require("assert");
var LessPass = require("../src/lesspass");

describe("api", () => {
  it("generatePassword", () => {
    const profile = {
      site: "example.org",
      login: "contact@example.org",
      options: {
        lowercase: true,
        uppercase: true,
        digits: true,
        symbols: true,
        length: 16,
        counter: 1
      }
    };
    const masterPassword = "password";
    return LessPass
      .generatePassword(profile, masterPassword)
      .then(generatedPassword => {
        assert.equal("WHLpUL)e00[iHR+w", generatedPassword);
      });
  });
  it("generatePassword default options", () => {
    const profile = {
      site: "example.org",
      login: "contact@example.org"
    };
    const masterPassword = "password";
    return LessPass.generatePassword(profile, masterPassword).then(generatedPassword => {
      assert.equal("WHLpUL)e00[iHR+w", generatedPassword);
    });
  });
  it("generatedPassword different options", () => {
    const profile = {
      site: "example.org",
      login: "contact@example.org",
      options: {
        lowercase: true,
        uppercase: true,
        digits: true,
        symbols: false,
        length: 14,
        counter: 2
      }
    };
    const masterPassword = "password";
    return LessPass.generatePassword(profile, masterPassword).then(generatedPassword => {
      assert.equal("MBAsB7b1Prt8Sl", generatedPassword);
      assert.equal(14, generatedPassword.length);
    });
  });
  it("generatedPassword only digits", () => {
    const profile = {
      site: "example.org",
      login: "contact@example.org",
      options: {
        lowercase: false,
        uppercase: false,
        digits: true,
        symbols: false,
        length: 6,
        counter: 3
      }
    };
    const masterPassword = "password";
    return LessPass.generatePassword(profile, masterPassword).then(generatedPassword => {
      assert.equal("117843", generatedPassword);
    });
  });
  it("generatedPassword no digit", () => {
    const profile = {
      site: "example.org",
      login: "contact@example.org",
      options: {
        digits: false
      }
    };
    const masterPassword = "password";
    return LessPass.generatePassword(profile, masterPassword).then(generatedPassword => {
      assert.equal("s>{F}RwkN/-fmM.X", generatedPassword);
    });
  });
  it("createFingerprint", () => {
    return LessPass.createFingerprint("password").then(function(fingerprint) {
      assert.equal(
        "e56a207acd1e6714735487c199c6f095844b7cc8e5971d86c003a7b6f36ef51e",
        fingerprint
      );
    });
  });
  it("isSupported", () => {
    return LessPass.isSupported("password").then(function(isSupported) {
      assert(isSupported);
    });
  });
});
