import { expect, test } from "vitest";
import { generatePassword, createFingerprint } from ".";

test("generatePassword", () => {
  const passwordProfile = {
    site: "example.org",
    login: "contact@example.org",
    lowercase: true,
    uppercase: true,
    digits: true,
    symbols: true,
    length: 16,
    counter: 1,
    version: 2,
  };
  generatePassword(passwordProfile, "password").then((passwordGenerated) => {
    expect(passwordGenerated).toBe("WHLpUL)e00[iHR+w");
  });
});

test("createFingerprint", () => {
  createFingerprint("password").then((fingerprint) => {
    expect(fingerprint).toEqual([
      {
        color: "#FFB5DA",
        icon: "fa-flask",
      },
      {
        color: "#009191",
        icon: "fa-archive",
      },
      {
        color: "#B5DAFE",
        icon: "fa-beer",
      },
    ]);
  });
});
