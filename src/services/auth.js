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
      .then(parseJSON)
      .then((data) => {
        localStorage.setItem('token', data.token);
        this.user.authenticated = true;
        return data;
      });
  },

  logout(callback) {
    localStorage.removeItem('token');
    this.user.authenticated = false;
    if (callback) {
      callback();
    }
  },

  checkAuth() {
    console.log('check auth');
    const jwt = localStorage.getItem('token');
    console.log(jwt);
    this.user.authenticated = !!jwt;
  },

  getAuthHeader() {
    const token = localStorage.getItem('token');
    return {
      Authorization: `Bearer ${token}!`,
    };
  },
};
