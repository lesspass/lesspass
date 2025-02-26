import { expect, it } from "vitest";
import {
  replaceNumbersWithDigitsInProfile,
  addNumbersFieldInProfile,
} from "./profilesActions";

it("replaceNumbersWithDigitsInProfile numbers become digits", () => {
  expect(
    replaceNumbersWithDigitsInProfile({ id: "p2", numbers: false }),
  ).toEqual({ id: "p2", digits: false });
  expect(
    replaceNumbersWithDigitsInProfile({ id: "p1", numbers: true }),
  ).toEqual({ id: "p1", digits: true });
});

it("addNumbersFieldInProfile add numbers with digits", () => {
  expect(addNumbersFieldInProfile({ id: "p1", digits: true })).toEqual({
    id: "p1",
    digits: true,
    numbers: true,
  });
  expect(addNumbersFieldInProfile({ id: "p2", digits: false })).toEqual({
    id: "p2",
    digits: false,
    numbers: false,
  });
});
