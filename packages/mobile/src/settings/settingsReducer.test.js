import reducer from "./settingsReducer";

describe("settings reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      keepMasterPasswordLocally: false,
      lesspassDatabaseDefaultUrl: "https://lesspass.com",
      encryptMasterPassword: true,
      defaultPasswordProfileLogin: "",
      defaultGeneratedPasswordLength: 16,
      defaultLowercase: true,
      defaultUppercase: true,
      defaultDigits: true,
      defaultSymbols: true,
      defaultCounter: 1
    });
  });
  it("SET_SETTINGS", () => {
    expect(
      reducer(
        {
          keepMasterPasswordLocally: false
        },
        {
          type: "SET_SETTINGS",
          settings: {
            keepMasterPasswordLocally: true
          }
        }
      )
    ).toEqual({
      keepMasterPasswordLocally: true
    });
  });
  it("SET_SETTINGS keep existing settings", () => {
    expect(
      reducer(
        {
          setting1: false,
          setting2: false
        },
        {
          type: "SET_SETTINGS",
          settings: {
            setting1: true
          }
        }
      )
    ).toEqual({
      setting1: true,
      setting2: false
    });
  });
});
