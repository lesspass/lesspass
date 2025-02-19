import { expect, it } from "vitest";
import { sortByNewestFirst } from "./sort";

it("sortByNewestFirst", () => {
  expect(
    sortByNewestFirst([
      {
        id: "1",
        created: "2021-10-16T10:00:00.000000Z",
      },
      {
        id: "2",
        created: "2021-10-17T09:00:00.000000Z",
      },
    ]),
  ).toEqual([
    {
      id: "2",
      created: "2021-10-17T09:00:00.000000Z",
    },
    {
      id: "1",
      created: "2021-10-16T10:00:00.000000Z",
    },
  ]);
});
