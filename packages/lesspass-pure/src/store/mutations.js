import * as types from "./mutation-types";

function loadPasswordProfileMatchingSite(passwordProfiles, site) {
  let bestMatch = undefined;
  const siteWithoutWWW = site.replace(/^www./g, "");
  for (let i = 0; i < passwordProfiles.length; i++) {
    const password = passwordProfiles[i];
    if (site.endsWith(password.site)) {
      return password;
    } else if (password.site.endsWith(siteWithoutWWW)) {
      bestMatch = password;
    }
  }
  if (bestMatch) {
    return bestMatch;
  }
}

export default {
  [types.LOGIN](state) {
    state.isAuthenticated = true;
  },
  [types.SET_TOKENS](state, { refresh_token, access_token }) {
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);
  },
  [types.LOGOUT](state) {
    state.isAuthenticated = false;
    state.passwords = [];
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  },
  [types.RESET_PASSWORD](state) {
    state.password = { ...state.defaultPassword };
  },
  [types.SET_PASSWORD](state, { password }) {
    state.password = { ...password };
  },
  [types.SET_DEFAULT_OPTIONS](state, { options }) {
    state.defaultPassword = Object.assign({}, state.defaultPassword, options);
  },
  [types.SET_PASSWORDS](state, { passwords }) {
    if (state?.password?.site && !state.password.id) {
      const matchingPasswordProfile = loadPasswordProfileMatchingSite(
        passwords,
        state.password.site
      );
      if (matchingPasswordProfile) {
        state.password = {
          ...matchingPasswordProfile
        };
      }
    }
    state.passwords = passwords;
  },
  [types.DELETE_PASSWORD](state, { id }) {
    state.passwords = state.passwords.filter(password => {
      return password.id !== id;
    });
    if (state.password && state.password.id === id) {
      state.password = Object.assign({}, state.defaultPassword);
    }
  },
  [types.SET_SITE](state, { site }) {
    if (site && !state?.password?.id) {
      state.password.site = site;
    }
  },
  [types.SET_MESSAGE](state, { message }) {
    state.message = message;
  },
  [types.CLEAN_MESSAGE](state) {
    state.message = { text: "", status: "success" };
  }
};
