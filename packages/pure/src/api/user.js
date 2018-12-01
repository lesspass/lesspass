import axios from "axios";

export default {
  login(user, config) {
    return axios.post("/api/tokens/auth/", user, config).then(response => {
      return response.data;
    });
  },
  register(user, config) {
    return axios.post("/api/auth/register/", user, config).then(response => {
      return response.data;
    });
  },
  resetPassword(email, config) {
    return axios.post("/api/auth/password/reset/", email, config);
  },
  confirmResetPassword(password, config) {
    return axios.post("/api/auth/password/reset/confirm/", password, config);
  },
  requestNewToken(token, config) {
    return axios.post("/api/tokens/refresh/", token, config).then(response => {
      return response.data.token;
    });
  }
};
