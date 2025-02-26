import axios from "axios";
import { addError } from "../errors/errorsActions";

function addPasswordProfile(profile) {
  return {
    type: "ADD_PASSWORD_PROFILE",
    profile,
  };
}

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

export function replaceNumbersWithDigitsInProfile(profile) {
  if ("numbers" in profile) {
    const { numbers, ...profileWithoutNumbers } = profile;
    return {
      ...profileWithoutNumbers,
      digits: numbers,
    };
  }
  return profile;
}

export function getPasswordProfiles() {
  return (dispatch, getState) => {
    const { settings, auth } = getState();
    return axios
      .get(`${settings.baseURL}/passwords/`, {
        headers: { Authorization: `Bearer ${auth.accessToken}` },
      })
      .then((response) => {
        const profiles = response.data.results.map(
          replaceNumbersWithDigitsInProfile,
        );
        dispatch(setPasswordProfiles(profiles));
        return response;
      });
  };
}

export function addNumbersFieldInProfile(profile) {
  return {
    ...profile,
    numbers: profile.digits,
  };
}

export function savePasswordProfile(profile) {
  return (dispatch, getState) => {
    const { settings, auth } = getState();
    return axios
      .post(
        `${settings.baseURL}/passwords/`,
        addNumbersFieldInProfile(profile),
        {
          headers: { Authorization: `Bearer ${auth.accessToken}` },
        },
      )
      .then((response) => {
        dispatch(
          addPasswordProfile(
            replaceNumbersWithDigitsInProfile({ ...response.data }),
          ),
        );
        return response;
      })
      .catch(() =>
        dispatch(
          addError(
            "We cannot save your password profile. Retry in a few minutes or contact us.",
          ),
        ),
      );
  };
}

export function updatePasswordProfile(profile) {
  return (dispatch, getState) => {
    const { settings, auth } = getState();
    return axios
      .put(
        `${settings.baseURL}/passwords/${profile.id}/`,
        addNumbersFieldInProfile(profile),
        {
          headers: { Authorization: `Bearer ${auth.accessToken}` },
        },
      )
      .then((response) => {
        dispatch(
          addPasswordProfile(
            replaceNumbersWithDigitsInProfile({ ...response.data }),
          ),
        );
        return response;
      })
      .catch(() =>
        dispatch(
          addError(
            "We cannot update your password profile. Retry in a few minutes or contact us.",
          ),
        ),
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
            "We cannot delete your password profile. Retry in a few minutes or contact us.",
          ),
        ),
      );
  };
}
