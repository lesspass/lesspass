import { returnMatchingData } from "./filter";

test("returnMatchingData", () => {
  const matches = returnMatchingData(
    "exam",
    [
      { site: "example.org", login: "test@example.org" },
      { site: "exemple.org" }
    ],
    "site"
  );
  expect(matches).toEqual([
    {
      value: "example.org",
      element: { site: "example.org", login: "test@example.org" }
    }
  ]);
});

test("returnMatchingData no match", () => {
  const matches = returnMatchingData(
    "lesspass",
    [
      { site: "example.org", login: "test@example.org" },
      { site: "exemple.org" }
    ],
    "site"
  );
  expect(matches).toEqual([]);
});

test("returnMatchingData no data", () => {
  const matches = returnMatchingData("lesspass", [], "site");
  expect(matches).toEqual([]);
});

test("returnMatchingData no valid key", () => {
  const matches = returnMatchingData(
    "lesspass",
    [
      { site: "example.org", login: "test@example.org" },
      { site: "exemple.org" }
    ],
    "unknown key"
  );
  expect(matches).toEqual([]);
});

test("returnMatchingData no query", () => {
  const matches = returnMatchingData(
    "",
    [
      { site: "example.org", login: "test@example.org" },
      { site: "exemple.org" }
    ],
    "site"
  );
  expect(matches).toEqual([]);
});
