import { expect, test } from "vitest";
import { createFingerprint } from ".";

test("fingerprint is length of 3", () => {
  expect(
    createFingerprint(
      "e56a207acd1e6714735487c199c6f095844b7cc8e5971d86c003a7b6f36ef51e",
    ).length,
  ).toBe(3);
});
test("fingerprint is length of 3", () => {
  const expectedFingerprint = [
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
  ];
  expect(
    createFingerprint(
      "e56a207acd1e6714735487c199c6f095844b7cc8e5971d86c003a7b6f36ef51e",
    ),
  ).toEqual(expectedFingerprint);
});
