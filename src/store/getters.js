export const passwords = state => state.passwords;

export const password = state => state.password;

export const isAuthenticated = state => state.authenticated;

export const isGuest = state => !state.authenticated;

export const passwordStatus = state => state.passwordStatus;

export const version = state => state.version;

export const getCurrentPassword = state => {
    const tenMinutesAgo = new Date().getTime() - 10 * 60 * 1000;
    if (state.lastUse < tenMinutesAgo) {
        return Object.assign({}, state.defaultPassword);
    }
    return Object.assign({}, state.defaultPassword, state.currentPassword);
};

export const getVersion = state => {
    if(state.currentPassword === null){
        return state.defaultPassword.version;
    }
    return state.currentPassword.version;
};
