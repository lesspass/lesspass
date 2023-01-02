import * as types from "./messagesActionsTypes";

export function readMessage(messageKey) {
  return {
    type: types.MESSAGE_READ,
    payload: {
      key: messageKey,
    },
  };
}
