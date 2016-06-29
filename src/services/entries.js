import axios from 'axios';

export default {
  localStorage: null,
  getRequestConfig() {
    const token = this.localStorage.getItem('token');
    return {
      headers: {Authorization: `JWT ${token}`}
    };
  },
  create(entry) {
    const config = this.getRequestConfig();
    return axios.post('/api/entries/', entry, config)
      .then(response => {
        return response.data;
      });
  },
  all(limit = 20, offset = 0, search = '', ordering = '-created') {
    const config = this.getRequestConfig();
    config.params = {
      limit,
      offset,
      search,
      ordering
    };
    return axios.get('/api/entries/', config)
      .then(response => {
        return response;
      });
  },
  get(uuid) {
    const config = this.getRequestConfig();
    return axios.get(`/api/entries/${uuid}/`, config)
      .then(response => {
        return response.data;
      });
  },
  update(entry) {
    const config = this.getRequestConfig();
    return axios.put(`/api/entries/${entry.id}/`, entry, config)
      .then(response => {
        return response.data;
      });
  },
  delete(entry) {
    const config = this.getRequestConfig();
    return axios.delete(`/api/entries/${entry.id}/`, config)
      .then(response => {
        return response.data;
      });
  }
};
