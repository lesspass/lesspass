import axios from "axios";
import { addError } from "../errors/errorsActions";

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

export function saveOrUpdatePasswordProfile(profile) {
  return (dispatch, getState) => {
    const { settings, auth } = getState();

    if (profile.id) {
      return axios
        .put(
          `${settings.lesspassDatabaseDefaultUrl}/api/passwords/${profile.id}`,
          profile,
          {
            headers: { Authorization: `JWT ${auth.jwt}` }
          }
        )
        .then(response => {
          dispatch(setPasswordProfiles([response.data]));
          return response;
        })
        .catch(() =>
          dispatch(
            addError(
              "We cannot update your password profile. Retry in a few minutes or contact us."
            )
          )
        );
    } else {
      return axios
        .post(
          `${settings.lesspassDatabaseDefaultUrl}/api/passwords/`,
          profile,
          {
            headers: { Authorization: `JWT ${auth.jwt}` }
          }
        )
        .then(response => {
          dispatch(setPasswordProfiles([response.data]));
          return response;
        })
        .catch(() =>
          dispatch(
            addError(
              "We cannot save your password profile. Retry in a few minutes or contact us."
            )
          )
        );
    }
  };
}
