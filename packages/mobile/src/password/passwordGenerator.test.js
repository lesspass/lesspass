import { generatePassword } from "./passwordGenerator";

describe("generatePassword", () => {
  it("should return the initial state", () => {
    const passwordProfile = {
      site: "lesspass.com",
      login: "contact@lesspass.com",
      options: {
        counter: 1,
        length: 16,
        lowercase: true,
        uppercase: true,
        digits: true,
        symbols: true
      }
    };
    return generatePassword("password", passwordProfile).then(
      generatedPassword => {
        expect(generatedPassword).toBe("\\g-A1-.OHEwrXjT#");
      }
    );
  });
});
