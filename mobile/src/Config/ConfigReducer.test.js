import reducer from "./ConfigReducer";

describe("config reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {
      keepMasterPasswordLocally: false
    })).toEqual({});
  });
  it("SET_CONFIG", () => {
    expect(
      reducer(
        {
          keepMasterPasswordLocally: false
        },
        {
          type: "SET_CONFIG",
          config: {
            keepMasterPasswordLocally: true
          }
        }
      )
    ).toEqual({
      keepMasterPasswordLocally: true
    });
  });
  it("SET_CONFIG keep existing config", () => {
    expect(
      reducer(
        {
          config1: false,
          config2: false
        },
        {
          type: "SET_CONFIG",
          config: {
            config1: true
          }
        }
      )
    ).toEqual({
      config1: false,
      config2: false
    });
  });
});
