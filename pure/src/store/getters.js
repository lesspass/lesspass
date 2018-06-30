import btoa from "@oslab/btoa";
import { defaultOptions } from "./defaultPassword";

export const isAuthenticated = state => state.authenticated;

export const isGuest = state => !state.authenticated;

export const passwordURL = state => {
  const base64PasswordProfile = btoa(JSON.stringify(state.password));
  const encodedPasswordProfile = encodeURIComponent(base64PasswordProfile);
  return `${state.baseURL}/#/?passwordProfileEncoded=${encodedPasswordProfile}`;
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
