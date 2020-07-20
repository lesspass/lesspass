import http from "./http";

export default {
  login({ email, password }) {
    return http.post("/api/auth/jwt/create/", { email, password });
  },
  register({ email, password }) {
    return http.post("/api/auth/users/", { email, password });
  },
  resetPassword({ email }) {
    return http.post("/api/auth/users/reset_password/", { email });
  },
  confirmResetPassword({ uid, token, password }) {
    return http.post("/api/auth/users/reset_password_confirm/", {
      uid,
      token,
      new_password: password,
      re_new_password: password
    });
  }
};
