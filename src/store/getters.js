export const passwords = state => state.passwords;

export const isAuthenticated = state => state.authenticated;

export const isGuest = state => !state.authenticated;

export const passwordStatus = state => state.passwordStatus;

export const password = state => {
    const tenMinutesAgo = new Date().getTime() - 10 * 60 * 1000;
    if (state.lastUse < tenMinutesAgo) {
        return Object.assign({}, state.defaultPassword);
    }
    return Object.assign({}, state.defaultPassword, state.password);
};

export const version = state => {
    if(state.password === null){
        return state.defaultPassword.version;
    }
    return state.password.version;
};
