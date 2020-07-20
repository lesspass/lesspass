const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_PASSWORD_PROFILES":
      return action.profiles.reduce((acc, profile) => {
        acc[profile.id] = {
          ...profile,
          ["digits"]: profile.numbers,
        };

        return acc;
      }, {});
    case "REMOVE_PASSWORD_PROFILE":
      delete state[action.profile.id];
      return {
        ...state,
      };
    case "LOG_OUT":
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
