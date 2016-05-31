import request from 'axios';

export default {
  localStorage: null,
  user: {
    authenticated: false,
  },
  login(credentials) {
    return request.post('/api/token-auth/', credentials)
      .then((response) => {
        this.authUser(response.data.token);
        return response;
      });
  },
  refreshToken(token) {
    return request
      .post('/api/token-refresh/', {token: token})
      .then((response) => {
        return response.data.token;
      })
      .catch((err) => {
        throw err;
      });
  },
  getToken(token_name){
    return new Promise((resolve, reject) => {
      const token = this.localStorage.getItem(token_name);
      if (token) {
        resolve(token);
      } else {
        reject();
      }
    });
  },
  verifyToken(token){
    return request.post('/api/token-verify/', {token: token})
      .then(() => {
        return token
      });
  },
  authUser(token){
    this.localStorage.setItem('token', token);
    this.user.authenticated = true;
  },
  resetAuth(err){
    this.localStorage.removeItem('token');
    this.user.authenticated = false;
    throw err;
  },
  checkAuth() {
    return this.getToken('token')
      .then(this.verifyToken)
      .then(this.authUser.bind(this))
      .catch(this.resetAuth.bind(this));
  },
  logout() {
    return new Promise((resolve, reject) => {
      try {
        this.localStorage.removeItem('token');
        this.user.authenticated = false;
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }
};