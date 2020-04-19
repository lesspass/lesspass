import reducer from "./authReducer";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      jwt: null,
    });
  });
  it("LOG_IN", () => {
    expect(
      reducer(
        {
          jwt: null,
        },
        {
          type: "LOG_IN",
          jwt: "jwt",
        }
      )
    ).toEqual({
      jwt: "jwt",
    });
  });
  it("LOG_OUT", () => {
    expect(
      reducer(
        {
          jwt: "jwt",
        },
        {
          type: "LOG_OUT",
        }
      )
    ).toEqual({
      jwt: null,
    });
  });
});
