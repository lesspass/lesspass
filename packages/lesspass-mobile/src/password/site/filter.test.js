import { returnMatchingData } from "./filter";

test("returnMatchingData", () => {
  const matches = returnMatchingData(
    "exam",
    [
      { site: "example.org", login: "test@example.org" },
      { site: "lesspass.com" }
    ],
    "site"
  );
  expect(matches).toEqual([
    {
      item: {
        site: "example.org",
        login: "test@example.org"
      },
      matches: [
        {
          indices: [[0, 3]],
          value: "example.org",
          key: "site",
          arrayIndex: 0
        }
      ]
    }
  ]);
});

test("returnMatchingData substring", () => {
  const matches = returnMatchingData(
    "exam",
    [
      { site: "www.example.org", login: "test@example.org" },
      { site: "lesspass.com" }
    ],
    "site"
  );
  expect(matches).toEqual([
    {
      item: {
        site: "www.example.org",
        login: "test@example.org"
      },
      matches: [
        {
          indices: [[4, 7]],
          value: "www.example.org",
          key: "site",
          arrayIndex: 0
        }
      ]
    }
  ]);
});

test("returnMatchingData typo", () => {
  const matches = returnMatchingData(
    "exem",
    [
      { site: "www.example.org", login: "test@example.org" },
      { site: "lesspass.com" }
    ],
    "site"
  );
  expect(matches).toEqual([
    {
      item: {
        site: "www.example.org",
        login: "test@example.org"
      },
      matches: [
        {
          indices: [[4, 5]],
          value: "www.example.org",
          key: "site",
          arrayIndex: 0
        }
      ]
    }
  ]);
});

test("returnMatchingData max length is 3", () => {
  const matches = returnMatchingData(
    "exam",
    [
      { site: "example.org" },
      { site: "www.example.org" },
      { site: "https://www.example.org" },
      { site: "example" }
    ],
    "site"
  );
  expect(matches.length).toBe(3);
});

test("returnMatchingData ignore one char match", () => {
  const matches = returnMatchingData(
    "exemp",
    [
      { site: "www.example.org", login: "test@example.org" },
      { site: "lesspass.com" }
    ],
    "site"
  );
  expect(matches).toEqual([
    {
      item: {
        site: "www.example.org",
        login: "test@example.org"
      },
      matches: [
        {
          indices: [[4, 5], [7, 8]],
          value: "www.example.org",
          key: "site",
          arrayIndex: 0
        }
      ]
    }
  ]);
});

test("returnMatchingData no match", () => {
  const matches = returnMatchingData(
    "no match",
    [
      { site: "example.org", login: "test@example.org" },
      { site: "lesspass.com" }
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
      { site: "lesspass.com" }
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
      { site: "lesspass.com" }
    ],
    "site"
  );
  expect(matches).toEqual([]);
});
