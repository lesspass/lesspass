import http from "./http";

export default {
  all() {
    return http.get("/api/passwords/");
  },
  create(resource) {
    return http.post("/api/passwords/", resource);
  },
  read(resource) {
    return http.get(`/api/passwords/${resource.id}/`);
  },
  update(resource) {
    return http.put(`/api/passwords/${resource.id}/`, resource);
  },
  delete(resource) {
    return http.delete(`/api/passwords/${resource.id}/`);
  }
};
