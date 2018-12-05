const initialState = {
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
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_CONFIG":
      return { ...state, ...action.config };
    default:
      return state;
  }
}
