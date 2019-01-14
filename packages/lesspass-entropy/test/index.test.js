const assert = require("assert");
const { calcEntropy, isSupported } = require("../src");

describe("entropy", () => {
  it("calc entropy without crypto use default options and crypto", () => {
    const profile = {
      site: "example.org",
      login: "contact@example.org"
    };
    const masterPassword = "password";
    return calcEntropy(profile, masterPassword).then(entropy => {
      assert.equal(
        "dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e",
        entropy
      );
    });
  });
  it("calc entropy pbkdf2 with default params (100000 iterations, 32 bytes length, sha256 digest)", () => {
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
    return calcEntropy(profile, masterPassword).then(entropy => {
      assert.equal(
        "dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e",
        entropy
      );
    });
  });
  it("calc entropy pbkdf2 with unicode char", () => {
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
    return calcEntropy(profile, masterPassword).then(entropy => {
      assert.equal(
        "4e66cab40690c01af55efd595f5963cc953d7e10273c01827881ebf8990c627f",
        entropy
      );
    });
  });
  it("calc entropy with different options (8192 iterations, 16 bytes length, sha512 digest)", () => {
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
    return calcEntropy(profile, masterPassword).then(entropy => {
      assert.equal("fff211c16a4e776b3574c6a5c91fd252", entropy);
    });
  });
  it("calc entropy different if counter different 1", () => {
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
      calcEntropy(profile, "password"),
      calcEntropy(profile2, "password")
    ];
    Promise.all(promises).then(values => {
      assert.notEqual(values[0], values[1]);
    });
  });
});

describe("isSupported", () => {
  it("isSupported", () =>
    isSupported().then(supported => {
      assert(supported);
    }));
});
