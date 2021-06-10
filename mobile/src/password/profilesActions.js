import axios from "axios";
import { addError } from "../errors/errorsActions";

function setPasswordProfiles(profiles) {
  return {
    type: "SET_PASSWORD_PROFILES",
    profiles,
  };
}

function removePasswordProfile(profile) {
  return {
    type: "REMOVE_PASSWORD_PROFILE",
    profile,
  };
}

export function getPasswordProfiles() {
  return (dispatch, getState) => {
    const { settings, auth } = getState();
    return axios
      .get(`${settings.baseURL}/passwords/`, {
        headers: { Authorization: `Bearer ${auth.accessToken}` },
      })
      .then((response) => {
        dispatch(setPasswordProfiles(response.data.results));
        return response;
      });
  };
}

export function savePasswordProfile(profile) {
  return (dispatch, getState) => {
    const { settings, auth } = getState();
    return axios
      .post(`${settings.baseURL}/passwords/`, profile, {
        headers: { Authorization: `Bearer ${auth.accessToken}` },
      })
      .then((response) => {
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
  };
}

export function deletePasswordProfile(profile) {
  return (dispatch, getState) => {
    const { settings, auth } = getState();
    return axios
      .delete(`${settings.baseURL}/passwords/${profile.id}/`, {
        headers: { Authorization: `Bearer ${auth.accessToken}` },
      })
      .then(() => dispatch(removePasswordProfile(profile)))
      .catch(() =>
        dispatch(
          addError(
            "We cannot delete your password profile. Retry in a few minutes or contact us."
          )
        )
      );
  };
}
