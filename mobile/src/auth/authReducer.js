const initialState = {
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        isAuthenticated: true,
        accessToken: action.payload.access,
        refreshToken: action.payload.refresh,
      };
    case "LOG_OUT":
      return { ...initialState };
    default:
      return state;
  }
}
