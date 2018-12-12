import axios from "axios";

function setPasswordProfiles(profiles) {
  return {
    type: "SET_PASSWORD_PROFILES",
    profiles
  };
}

export function getPasswordProfiles() {
  return (dispatch, getState) => {
    const { settings, auth } = getState();
    return axios
      .get(`${settings.lesspassDatabaseDefaultUrl}/api/passwords/`, {
        headers: { Authorization: `JWT ${auth.jwt}` }
      })
      .then(response => {
        dispatch(setPasswordProfiles(response.data.results));
        return response;
      });
  };
}
