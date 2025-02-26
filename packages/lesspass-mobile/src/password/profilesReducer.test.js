import { expect, describe, it } from "vitest";
import reducer from "./profilesReducer";

describe("profiles reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({});
  });
  it("SET_PASSWORD_PROFILES", () => {
    expect(
      reducer(
        {},
        {
          type: "SET_PASSWORD_PROFILES",
          profiles: [{ id: "p1" }, { id: "p2" }],
        },
      ),
    ).toEqual({
      p1: { id: "p1" },
      p2: { id: "p2" },
    });
  });
  it("REMOVE_PASSWORD_PROFILE", () => {
    expect(
      reducer(
        {
          p1: { id: "p1", digits: true },
          p2: { id: "p2", digits: false },
        },
        {
          type: "REMOVE_PASSWORD_PROFILE",
          profile: { id: "p1" },
        },
      ),
    ).toEqual({
      p2: { id: "p2", digits: false },
    });
  });
  it("ADD_PASSWORD_PROFILE", () => {
    expect(
      reducer(
        {
          p1: { id: "p1" },
          p2: { id: "p2" },
        },
        {
          type: "ADD_PASSWORD_PROFILE",
          profile: { id: "p3" },
        },
      ),
    ).toEqual({
      p1: { id: "p1" },
      p2: { id: "p2" },
      p3: { id: "p3" },
    });
  });
});
