import axios from "axios";

export function setJWT(jwt) {
  return {
    type: "SET_JWT",
    jwt
  };
}

export function signIn(credentials) {
  return (dispatch, getState) => {
    const { config } = getState();
    return axios
      .post(
        `${config.lesspassDatabaseDefaultUrl}/api/tokens/auth/`,
        credentials
      )
      .then(response => {
        dispatch(setJWT(response.data.token));
        return response;
      });
  };
}

export function register(credentials) {
  return axios
    .post("/api/auth/register/", credentials)
    .then(response => response.data);
}

export function logout() {
  return {
    type: "CLEAR_JWT"
  };
}
