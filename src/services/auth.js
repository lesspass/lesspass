import axios from 'axios';

const TOKEN_NAME = 'token';

export default {
  localStorage: null,
  user: {
    authenticated: false
  },
  getRequestConfig() {
    const token = this.localStorage.getItem('token');
    return {
      headers: {Authorization: `JWT ${token}`}
    };
  },
  login(user) {
    return axios.post('/api/tokens/auth/', user).then(response => {
      this.authUser(response.data.token);
      return response.data;
    });
  },
  getUser() {
    const config = this.getRequestConfig();
    return axios.get('/api/auth/me/', config).then(response => {
      Object.assign(this.user, response.data);
      return this.user;
    });
  },
  register(user) {
    return axios.post('/api/auth/register/', user).then(response => {
      return response.data;
    });
  },
  changePassword(credentials) {
    const config = this.getRequestConfig();
    return axios.post('/api/auth/password/', credentials, config).then(response => {
      return response;
    });
  },
  getToken(tokenName) {
    const self = this;
    return new Promise((resolve, reject) => {
      const token = self.localStorage.getItem(tokenName);
      if (token) {
        resolve(token);
      } else {
        reject(`${tokenName} not in local storage`);
      }
    });
  },
  logout() {
    this.localStorage.removeItem(TOKEN_NAME);
    this.user.authenticated = false;
  },
  refreshToken(token) {
    return axios
      .post('/api/tokens/refresh/', {token})
      .then(response => {
        return response.data.token;
      })
      .catch(err => {
        throw err;
      });
  },
  verifyToken(token) {
    return axios.post('/api/tokens/verify/', {token})
      .then(() => {
        return token;
      });
  },
  authUser(token) {
    this.localStorage.setItem(TOKEN_NAME, token);
    this.user.authenticated = true;
  },
  resetAuth(err) {
    this.localStorage.removeItem(TOKEN_NAME);
    this.user.authenticated = false;
    throw err;
  },
  checkAuth() {
    return this.getToken(TOKEN_NAME)
      .then(this.verifyToken)
      .then(this.authUser.bind(this))
      .catch(this.resetAuth.bind(this));
  }
};
