import logging from './logging';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json();
}

module.exports = {
  user: {
    authenticated: false,
  },
  login(credential) {
    return fetch('/api/sessions/', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credential),
    }).then(checkStatus)
      .then(parseJSON);
  },
  login2(context, credentials, callback) {
    const self = this;

    fetch('/users.html');
    context.$http.post('/api/sessions/', credentials).then(
      response => {
        localStorage.setItem('token', response.data.token);
        self.user.authenticated = true;
        logging.success(this.$t('login.welcome'));
        if (callback) {
          callback();
        }
      },
      () => {
        logging.error(this.$t('login.credentials_invalids'));
      }
    );
  },

  register(context, user, callback) {
    context.$http.post('/api/users/', user).then(
      () => {
        if (callback) {
          callback();
        }
      },
      () => {
        logging.warning(this.$t('register.beta'));
      }
    );
  },

  logout(callback) {
    localStorage.removeItem('token');
    this.user.authenticated = false;
    if (callback) {
      callback();
    }
  },

  checkAuth() {
    const jwt = localStorage.getItem('token');
    this.user.authenticated = !!jwt;
  },

  getAuthHeader() {
    const token = localStorage.getItem('token');
    return {
      Authorization: `Bearer ${token}!`,
    };
  },
};
