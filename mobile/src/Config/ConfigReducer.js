const initialState = {
  keepMasterPasswordLocally: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_CONFIG":
      return { ...state, ...action.config };
    default:
      return state;
  }
}
