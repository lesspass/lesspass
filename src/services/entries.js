import request from 'axios';

export default {
  localStorage: null,
  getRequestConfig() {
    return {
      headers: {'Authorization': 'JWT ' + this.localStorage.getItem('token')}
    }
  },
  create(entry) {
    let config = this.getRequestConfig();
    return request.post('/api/entries/', entry, config)
      .then((response) => {
        return response.data;
      });
  },
  all(limit = 20, offset = 0, search = '', sorting = 'asc', ordering = '-created') {
    let config = this.getRequestConfig();
    config['params'] = {
      limit: limit,
      offset: offset,
      search: search,
      sorting: sorting,
      ordering: ordering
    };
    return request.get('/api/entries/', config)
      .then((response) => {
        return response;
      });
  },
  get(uuid) {
    let config = this.getRequestConfig();
    return request.get(`/api/entries/${uuid}/`, config)
      .then((response) => {
        return response.data;
      });
  },
  update(entry) {
    let config = this.getRequestConfig();
    return request.put(`/api/entries/${entry.id}/`, entry, config)
      .then((response) => {
        return response.data;
      });
  },
  delete(entry) {
    let config = this.getRequestConfig();
    return request.delete(`/api/entries/${entry.id}/`, config)
      .then((response) => {
        return response.data;
      });
  },
};
