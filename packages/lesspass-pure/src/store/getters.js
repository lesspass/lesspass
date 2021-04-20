import btoa from "@oslab/btoa";

export const isAuthenticated = state => state.isAuthenticated;

export const isGuest = state => !state.isAuthenticated;

export const passwordURL = state => {
  const base64PasswordProfile = btoa(JSON.stringify(state.password));
  const encodedPasswordProfile = encodeURIComponent(base64PasswordProfile);
  return `${state.settings.baseURL}/#/?passwordProfileEncoded=${encodedPasswordProfile}`;
};

export const shouldAutoFillSite = state => !state.settings.noAutoFillSite;

export const shouldRemoveSubdomain = state =>
  state.settings.removeSiteSubdomain;
