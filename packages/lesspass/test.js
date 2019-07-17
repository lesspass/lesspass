const LessPass = require("./index");

test("generatePassword", () => {
  const passwordProfile = {
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true,
    length: 16,
    counter: 1,
    version: 2
  };
  LessPass.generatePassword(
    "example.org",
    "contact@example.org",
    "password",
    passwordProfile
  ).then(passwordGenerated => {
    expect(passwordGenerated).toBe("WHLpUL)e00[iHR+w");
  });
});

test("createFingerprint", () => {
  LessPass.createFingerprint("password").then(fingerprint => {
    expect(fingerprint).toEqual([
      {
        color: "#FFB5DA",
        icon: "fa-flask"
      },
      {
        color: "#009191",
        icon: "fa-archive"
      },
      {
        color: "#B5DAFE",
        icon: "fa-beer"
      }
    ]);
  });
});
