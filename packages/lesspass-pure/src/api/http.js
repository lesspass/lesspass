import axios from "axios";
import { getBaseURL } from "./baseURL";

axios.interceptors.request.use(config => {
  const baseURL = getBaseURL();
  config.baseURL = baseURL;
  const access_token = localStorage.getItem("access_token");
  if (access_token) {
    config.headers["Authorization"] = `Bearer ${access_token}`;
  }
  return config;
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const refresh = localStorage.getItem("refresh_token");
    if (
      (error.response && error.response.status !== 401) ||
      (error.config && error.config.url.includes("/api/auth/jwt/")) ||
      refresh === null
    ) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
    const baseURL = getBaseURL()
    return axios
      .post("/api/auth/jwt/refresh/", { refresh }, { baseURL })
      .then(response => {
        const access_token = response.data.access;
        localStorage.setItem("access_token", access_token);
        const config = error.config;
        config.headers["Authorization"] = `Bearer ${access_token}`;
        return new Promise((resolve, reject) => {
          axios
            .request(config)
            .then(response => {
              resolve(response);
            })
            .catch(error => {
              reject(error);
            });
        });
      })
      .catch(error => {
        Promise.reject(error);
      });
  }
);

export default axios;
