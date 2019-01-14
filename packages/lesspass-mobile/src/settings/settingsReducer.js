const initialState = {
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
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_SETTINGS":
      return { ...state, ...action.settings };
    default:
      return state;
  }
}
