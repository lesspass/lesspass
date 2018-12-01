import reducer from "./configReducer";

describe("config reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      keepMasterPasswordLocally: false,
      lesspassDatabaseDefaultUrl: "https://lesspass.com",
      lesspassDatabaseEncryptMasterPassword: true,
      defaultPasswordProfileLogin: "",
      defaultGeneratedPasswordLength: 16,
      defaultLowercase: true,
      defaultUppercase: true,
      defaultDigits: true,
      defaultSymbols: true,
      defaultCounter: 1
    });
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
      config1: true,
      config2: false
    });
  });
});
