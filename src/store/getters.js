import { defaultOptions } from "./defaultPassword";

export const isAuthenticated = state => state.authenticated;

export const isGuest = state => !state.authenticated;

export const version = state => {
  if (state.password === null) {
    return state.defaultPassword.version;
  }
  return state.password.version;
};

export const passwordURL = state => {
  return `${state.baseURL}/#/?login=${state.password.login}&site=${state
    .password.site}&uppercase=${state.password.uppercase}&lowercase=${state
    .password.lowercase}&numbers=${state.password.numbers}&symbols=${state
    .password.symbols}&length=${state.password.length}&counter=${state.password
    .counter}&version=${state.password.version}`;
};

export const isDefaultProfile = state => {
  let defaultProfile = true;
  for (let key in defaultOptions) {
    if (defaultOptions[key] !== state.password[key]) {
      defaultProfile = false;
    }
  }
  return defaultProfile;
};
