export function addError(message) {
  const id = Date.now().toString();
  return {
    type: "ADD_ERROR",
    error: {
      id,
      message
    }
  };
}

export function deleteError(error) {
  return {
    type: "DELETE_ERROR",
    error
  };
}
