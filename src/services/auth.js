import request from 'axios';

export default class Auth {
  constructor(localStorage = global.localStorage) {
    this.localStorage = localStorage;
    this.user = {
      authenticated: false,
    }
  }

  login(credentials) {
    var self = this;
    return request.post('/api/token-auth/', credentials)
      .then((response) => {
        self.localStorage.setItem('token', response.data.token);
        self.user.authenticated = true;
        return response;
      });
  }

  refreshToken(token) {
    return request
      .post('/api/token-refresh/', {token: token})
      .then((response) => {
        return response.data.token;
      })
      .catch((err) => {
        throw err;
      });
  }

  checkAuth() {
    var self = this;
    const token = self.localStorage.getItem('token');
    if (token) {
      return request
        .post('/api/token-verify/', {token: token})
        .then((response) => {
          self.user.authenticated = true;
          return response;
        })
        .catch(() => {
          self.user.authenticated = false;
          self.localStorage.removeItem('token');
          throw err;
        });
    }
  }

  logout() {
    var self = this;
    return new Promise((resolve, reject) => {
      try {
        self.localStorage.removeItem('token');
        self.user.authenticated = false;
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }
}