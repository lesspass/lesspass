export const passwords = state => state.passwords;
export const password = state => state.password;
export const isAuthenticated = state => state.authenticated;
export const isGuest = state => !state.authenticated;
export const passwordStatus = state => state.passwordStatus;
export const version = state => state.version;
