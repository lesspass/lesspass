import { expect, test } from "vitest";
import { hmac, pbkdf2, calcEntropy } from ".";

test("Test hmac import", () =>
  hmac("sha256", "password").then((fingerprint) => {
    expect(
      "e56a207acd1e6714735487c199c6f095844b7cc8e5971d86c003a7b6f36ef51e",
    ).toBe(fingerprint);
  }));

test("Test pbkdf2 import", () =>
  pbkdf2("secret", "salt", 2, 32, "sha256").then((key) => {
    expect(
      "f92f45f9df4c2aeabae1ed3c16f7b64660c1f8e377fa9b4699b23c2c3a29f569",
    ).toBe(key);
  }));

test("Test calcEntropy import", () => {
  const profile = {
    site: "example.org",
    login: "contact@example.org",
    counter: 1,
  };
  const masterPassword = "password";
  return calcEntropy(profile, masterPassword).then((entropy) => {
    expect(
      "dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e",
    ).toBe(entropy);
  });
});
