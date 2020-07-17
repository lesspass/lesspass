import axios from "axios";

export default {
  login({ email, password }, config) {
    return axios.post("/api/auth/jwt/create/", { email, password }, config);
  },
  register({ email, password }, config) {
    return axios.post("/api/auth/users/", { email, password }, config);
  },
  resetPassword({ email }, config) {
    return axios.post("/api/auth/users/reset_password/", { email }, config);
  },
  confirmResetPassword({ uid, token, password }, config) {
    return axios.post(
      "/api/auth/users/reset_password_confirm/",
      {
        uid,
        token,
        new_password: password,
        re_new_password: password
      },
      config
    );
  }
};
