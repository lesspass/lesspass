const initialState = {
  jwt: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_JWT":
      return { ...state, jwt: action.jwt };
    case "CLEAR_JWT":
      return { ...initialState };
    default:
      return state;
  }
}
