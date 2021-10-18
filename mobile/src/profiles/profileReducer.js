const initialState = null;

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case "SET_PASSWORD_PROFILE":
      return {
        ...action.profile,
      };
    case "CLEAN_PASSWORD_PROFILE":
      return initialState
    case "LOG_OUT":
      return initialState
    default:
      return state;
  }
}
