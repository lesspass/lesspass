import http from "./http";

export default {
  all() {
    return http.get("/passwords/");
  },
  create(resource) {
    return http.post("/passwords/", resource);
  },
  read(resource) {
    return http.get(`/passwords/${resource.id}/`);
  },
  update(resource) {
    return http.put(`/passwords/${resource.id}/`, resource);
  },
  delete(resource) {
    return http.delete(`/passwords/${resource.id}/`);
  }
};
