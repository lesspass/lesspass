var assert = require("assert");
var LessPass = require("../src/lesspass");

describe("entropy", function() {
  it("calc entropy pbkdf2 with default params (100000 iterations, 32 bytes length, sha256 digest)", function() {
    const profile = {
      site: "example.org",
      login: "contact@example.org",
      options: {
        counter: 1
      },
      crypto: {
        method: "pbkdf2",
        iterations: 100000,
        keylen: 32,
        digest: "sha256"
      }
    };
    const masterPassword = "password";
    return LessPass._calcEntropy(profile, masterPassword).then(function(
      entropy
    ) {
      assert.equal(
        "dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e",
        entropy
      );
    });
  });
  it("calc entropy pbkdf2 with unicode char", function() {
    const profile = {
      site: "example.org",
      login: "❤",
      options: {
        counter: 1
      },
      crypto: {
        method: "pbkdf2",
        iterations: 100000,
        keylen: 32,
        digest: "sha256"
      }
    };
    const masterPassword = "I ❤ LessPass";
    return LessPass._calcEntropy(profile, masterPassword).then(function(
      entropy
    ) {
      assert.equal(
        "4e66cab40690c01af55efd595f5963cc953d7e10273c01827881ebf8990c627f",
        entropy
      );
    });
  });
  it("calc entropy with different options (8192 iterations, 16 bytes length, sha512 digest)", function() {
    const profile = {
      site: "example.org",
      login: "contact@example.org",
      options: {
        counter: 1
      },
      crypto: {
        method: "pbkdf2",
        iterations: 8192,
        keylen: 16,
        digest: "sha512"
      }
    };
    const masterPassword = "password";
    return LessPass._calcEntropy(profile, masterPassword).then(function(
      entropy
    ) {
      assert.equal("fff211c16a4e776b3574c6a5c91fd252", entropy);
    });
  });
  it("calc entropy different if counter different 1", function() {
    const profile = {
      site: "example.org",
      login: "contact@example.org",
      options: {
        counter: 1
      },
      crypto: {
        method: "pbkdf2",
        iterations: 100000,
        keylen: 32,
        digest: "sha256"
      }
    };
    const profile2 = {
      site: "example.org",
      login: "contact@example.org",
      options: {
        counter: 2
      },
      crypto: {
        method: "pbkdf2",
        iterations: 100000,
        keylen: 32,
        digest: "sha256"
      }
    };
    const promises = [
      LessPass._calcEntropy(profile, "password"),
      LessPass._calcEntropy(profile2, "password")
    ];
    Promise.all(promises).then(values => {
      assert.notEqual(values[0], values[1]);
    });
  });
});
