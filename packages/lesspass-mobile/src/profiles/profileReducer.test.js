import { expect, describe, it } from "vitest";
import reducer from "./profileReducer";

describe("profile reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(null);
  });
  it("SET_PASSWORD_PROFILE", () => {
    expect(
      reducer(
        {},
        {
          type: "SET_PASSWORD_PROFILE",
          profile: { id: "p1" },
        },
      ),
    ).toEqual({ id: "p1" });
  });
  it("CLEAN_PASSWORD_PROFILE", () => {
    expect(
      reducer(
        { id: "p1" },
        {
          type: "CLEAN_PASSWORD_PROFILE",
        },
      ),
    ).toEqual(null);
  });
  it("LOG_OUT", () => {
    expect(
      reducer(
        { id: "p1" },
        {
          type: "LOG_OUT",
        },
      ),
    ).toEqual(null);
  });
});
