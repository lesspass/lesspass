import defaultPasswordProfile from "./defaultPasswordProfile";

const initialState = {
  keepMasterPasswordLocally: false,
  baseURL: "https://api.lesspass.com",
  encryptMasterPassword: true,
  defaultPasswordProfileLogin: "",
  defaultGeneratedPasswordLength: defaultPasswordProfile.length,
  defaultLowercase: defaultPasswordProfile.lowercase,
  defaultUppercase: defaultPasswordProfile.uppercase,
  defaultDigits: defaultPasswordProfile.digits,
  defaultSymbols: defaultPasswordProfile.symbols,
  defaultCounter: defaultPasswordProfile.counter,
  copyPasswordAfterGeneration: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_SETTINGS":
      return { ...state, ...action.settings };
    default:
      return state;
  }
}
