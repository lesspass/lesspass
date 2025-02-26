export function setPasswordProfile(profile) {
  return {
    type: "SET_PASSWORD_PROFILE",
    profile,
  };
}

export function cleanPasswordProfile() {
  return {
    type: "CLEAN_PASSWORD_PROFILE",
  };
}
