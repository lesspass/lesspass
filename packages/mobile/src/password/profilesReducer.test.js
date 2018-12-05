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
          profiles: [{ id: "p1" }, { id: "p2" }]
        }
      )
    ).toEqual({
      p1: { id: "p1" },
      p2: { id: "p2" }
    });
  });
  it("SET_PASSWORD_PROFILES numbers become digits", () => {
    expect(
      reducer(
        {},
        {
          type: "SET_PASSWORD_PROFILES",
          profiles: [{ id: "p1", numbers: true }, { id: "p2", numbers: false }]
        }
      )
    ).toEqual({
      p1: { id: "p1", numbers: true, digits: true },
      p2: { id: "p2", numbers: false, digits: false }
    });
  });
});
