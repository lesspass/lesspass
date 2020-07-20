const initialState = {
  jwt: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, jwt: action.jwt };
    case "LOG_OUT":
      return { ...initialState };
    default:
      return state;
  }
}
