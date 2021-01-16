import http from "./http";

export default {
  login({ email, password }) {
    return http.post("/api/auth/jwt/create/", { email, password });
  },
  getLoggedUserInformation() {
    return http.get('/api/auth/users/me');
  },
  patch({ key }) {
    return http.patch('/api/auth/users/me', { key });
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
  },
  changePassword({ current_password, new_password }) {
    return http.post("/api/auth/users/set_password/", {
      current_password: current_password,
      new_password: new_password,
      re_new_password: new_password
    });
  }
};
