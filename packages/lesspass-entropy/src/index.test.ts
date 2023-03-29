import { calcEntropy, isSupported } from ".";

describe("entropy", () => {
  it("calc entropy without crypto use default options and crypto", () => {
    const profile = {
      site: "example.org",
      login: "contact@example.org",
      counter: 1,
    };
    const masterPassword = "password";
    return calcEntropy(profile, masterPassword).then((entropy) => {
      expect(
        "dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e"
      ).toBe(entropy);
    });
  });
  it("calc entropy pbkdf2 with default params (100000 iterations, 32 bytes length, sha256 digest)", () => {
    const profile = {
      site: "example.org",
      login: "contact@example.org",
      counter: 1,
    };
    const masterPassword = "password";
    const crypto = {
      iterations: 100000,
      keylen: 32,
      digest: "sha256",
    };
    return calcEntropy(profile, masterPassword, crypto).then((entropy) => {
      expect(
        "dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e"
      ).toBe(entropy);
    });
  });
  it("calc entropy pbkdf2 with unicode char", () => {
    const profile = {
      site: "example.org",
      login: "❤",
      counter: 1,
    };
    const masterPassword = "I ❤ LessPass";
    const crypto = {
      iterations: 100000,
      keylen: 32,
      digest: "sha256",
    };
    return calcEntropy(profile, masterPassword, crypto).then((entropy) => {
      expect(
        "4e66cab40690c01af55efd595f5963cc953d7e10273c01827881ebf8990c627f"
      ).toBe(entropy);
    });
  });
  it("calc entropy with different options (8192 iterations, 16 bytes length, sha512 digest)", () => {
    const profile = {
      site: "example.org",
      login: "contact@example.org",
      counter: 1,
    };
    const masterPassword = "password";
    const crypto = {
      method: "pbkdf2",
      iterations: 8192,
      keylen: 16,
      digest: "sha512",
    };
    return calcEntropy(profile, masterPassword, crypto).then((entropy) => {
      expect("fff211c16a4e776b3574c6a5c91fd252").toBe(entropy);
    });
  });
  it("calc entropy are different if counter are different", () => {
    const profile = {
      site: "example.org",
      login: "contact@example.org",
      counter: 1,
    };
    const profile2 = {
      site: "example.org",
      login: "contact@example.org",
      counter: 2,
    };
    const promises = [
      calcEntropy(profile, "password"),
      calcEntropy(profile2, "password"),
    ];
    Promise.all(promises).then((values) => {
      expect(values[0]).not.toEqual(values[1]);
    });
  });
});

describe("isSupported", () => {
  it("isSupported", () =>
    isSupported().then((supported) => {
      expect(supported).toBe(true);
    }));
});
