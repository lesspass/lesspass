import {
  isProfileValid,
  isLengthValid,
  isCounterValid,
  areOptionsValid
} from "./validations";

describe("validation", () => {
  describe("isLengthValid", () => {
    it("inferior to 0", () => {
      expect(isLengthValid(-10)).toBe(false);
    });
    it("inferior to 5", () => {
      expect(isLengthValid(2)).toBe(false);
    });
    it("equal to 5", () => {
      expect(isLengthValid(5)).toBe(true);
    });
    it("between 5 and 35", () => {
      expect(isLengthValid(16)).toBe(true);
    });
    it("superior to 35", () => {
      expect(isLengthValid(56)).toBe(false);
    });
    it("equal to 35", () => {
      expect(isLengthValid(35)).toBe(true);
    });
    it("is not a number", () => {
      expect(isLengthValid(parseInt(","))).toBe(false);
    });
    it("is empty", () => {
      expect(isLengthValid("")).toBe(false);
    });
    it("is null", () => {
      expect(isLengthValid(null)).toBe(false);
    });
    it("is undefined", () => {
      expect(isLengthValid()).toBe(false);
    });
  });
  describe("isCounterValid", () => {
    it("inferior to 0", () => {
      expect(isCounterValid(-10)).toBe(false);
    });
    it("equal to 0", () => {
      expect(isCounterValid(0)).toBe(false);
    });
    it("equal to 1", () => {
      expect(isCounterValid(1)).toBe(true);
    });
    it("superior to 1", () => {
      expect(isCounterValid(100)).toBe(true);
    });
    it("is empty", () => {
      expect(isCounterValid("")).toBe(false);
    });
    it("is null", () => {
      expect(isCounterValid(null)).toBe(false);
    });
    it("is undefined", () => {
      expect(isCounterValid()).toBe(false);
    });
  });
  describe("areOptionsValid", () => {
    it("at least one option", () => {
      expect(
        areOptionsValid({
          lowercase: true,
          uppercase: false,
          digits: false,
          symbols: false
        })
      ).toBe(true);
    });
    it("no option", () => {
      expect(
        areOptionsValid({
          lowercase: false,
          uppercase: false,
          digits: false,
          symbols: false
        })
      ).toBe(false);
    });
  });
  describe("isProfileValid", () => {
    it("default password profile", () => {
      expect(
        isProfileValid({
          site: "",
          login: "",
          options: {
            length: 16,
            counter: 1,
            lowercase: true,
            uppercase: true,
            digits: true,
            symbols: true
          }
        })
      ).toBe(true);
    });
    it("no options", () => {
      expect(
        isProfileValid({
          site: "",
          login: "",
          options: {
            length: 16,
            counter: 1,
            lowercase: false,
            uppercase: false,
            digits: false,
            symbols: false
          }
        })
      ).toBe(false);
    });
    it("length not good", () => {
      expect(
        isProfileValid({
          site: "",
          login: "",
          options: {
            length: 40,
            counter: 1,
            lowercase: true,
            uppercase: true,
            digits: true,
            symbols: true
          }
        })
      ).toBe(false);
    });
  });
});
