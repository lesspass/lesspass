const initialState = {};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case "SET_PASSWORD_PROFILES":
      return action.profiles.reduce((acc, profile) => {
        acc[profile.id] = {
          ...profile,
        };
        return acc;
      }, {});
    case "ADD_PASSWORD_PROFILE":
      return {
        ...state,
        [action.profile.id]: {
          ...action.profile,
        },
      };
    case "REMOVE_PASSWORD_PROFILE":
      const newState = {
        ...state,
      };
      delete newState[action.profile.id];
      return newState;
    case "LOG_OUT":
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
