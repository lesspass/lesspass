import btoa from "@oslab/btoa";

export const isAuthenticated = state => state.authenticated;

export const isGuest = state => !state.authenticated;

export const passwordURL = state => {
  const base64PasswordProfile = btoa(JSON.stringify(state.password));
  const encodedPasswordProfile = encodeURIComponent(base64PasswordProfile);
  return `${state.baseURL}/#/?passwordProfileEncoded=${encodedPasswordProfile}`;
};

export const isDefaultProfile = state => {
  for (let key in state.defaultPassword) {
    if (state.defaultPassword[key] !== state.password[key]) {
      return false;
    }
  }
  return true;
};
