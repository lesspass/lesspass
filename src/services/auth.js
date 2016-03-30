var Promise = require('es6-promise').Promise;
import request from 'axios';

export default {
  user: {
    authenticated: false,
  },

  login(credentials) {
    return request.post('/api/sessions/', credentials)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        this.user.authenticated = true;
        return response;
      });
  },

  logout() {
    return new Promise((resolve, reject) => {
      try {
        localStorage.removeItem('token');
        this.user.authenticated = false;
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  },

  checkAuth() {
    const jwt = localStorage.getItem('token');
    this.user.authenticated = !!jwt;
  },
};
