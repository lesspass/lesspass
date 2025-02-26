import * as types from "./messagesActionsTypes";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.MESSAGE_READ:
      return { ...state, [action.payload.key]: true };
    default:
      return state;
  }
}
