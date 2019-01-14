import { NativeModules } from "react-native";
import { generatePassword } from "./passwordGenerator";

describe("generatePassword", () => {
  beforeEach(() => {
    NativeModules.LessPass = { calcEntropy: jest.fn().mockResolvedValue("03948309b088a53cdea276fa32a05988e9a6f2b57ef80aec664f668789b37711") };
  });

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
