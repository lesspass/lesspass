import http from "./http";

function addNumbersFieldInProfile(profile) {
  return {
    ...profile,
    numbers: profile.digits,
  };
}

function replaceNumbersWithDigitsInProfile(profile) {
  if ("numbers" in profile) {
    const { numbers, ...profileWithoutNumbers } = profile;
    return {
      ...profileWithoutNumbers,
      digits: numbers,
    };
  }
  return profile;
}

export default {
  all() {
    return http.get("/passwords/").then((response) => {
      response.data.results = response.data.results.map(
        replaceNumbersWithDigitsInProfile
      );
      return response;
    });
  },
  create(resource) {
    return http
      .post("/passwords/", addNumbersFieldInProfile(resource))
      .then((response) => {
        response.data = replaceNumbersWithDigitsInProfile(response.data);
        return response;
      });
  },
  read(resource) {
    return http.get(`/passwords/${resource.id}/`).then((response) => {
      response.data = replaceNumbersWithDigitsInProfile(response.data);
      return response;
    });
  },
  update(resource) {
    return http
      .put(`/passwords/${resource.id}/`, addNumbersFieldInProfile(resource))
      .then((response) => {
        response.data = replaceNumbersWithDigitsInProfile(response.data);
        return response;
      });
  },
  delete(resource) {
    return http.delete(`/passwords/${resource.id}/`);
  },
};
