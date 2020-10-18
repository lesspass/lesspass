import http from "./http";

export default {
  create(resource) {
    return http.post("/api/encrypted_password_profiles/", resource);
  },
  read(resource) {
    return http.get(`/api/encrypted_password_profiles/${resource.id}/`);
  },
  update(resource) {
    return http.put(`/api/encrypted_password_profiles/${resource.id}/`, resource);
  },
  delete(resource) {
    return http.delete(`/api/encrypted_password_profiles/${resource.id}/`);
  }
};
