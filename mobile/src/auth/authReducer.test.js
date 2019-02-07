import reducer from "./authReducer";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      jwt: null
    });
  });
  it("SET_JWT", () => {
    expect(
      reducer(
        {
          jwt: null
        },
        {
          type: "SET_JWT",
          jwt: "jwt"
        }
      )
    ).toEqual({
      jwt: "jwt"
    });
  });
  it("CLEAR_JWT", () => {
    expect(
      reducer(
        {
          jwt: "jwt"
        },
        {
          type: "CLEAR_JWT"
        }
      )
    ).toEqual({
      jwt: null
    });
  });
});
