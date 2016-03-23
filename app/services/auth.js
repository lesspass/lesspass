import logging from './logging.js';

module.exports = {
    user: {
        authenticated: false
    },

    login(context, credentials, callback) {
        var self = this;
        context.$http.post('/api/sessions/', credentials).then(
            function (response) {
                localStorage.setItem('token', response.data.token);
                self.user.authenticated = true;
                logging.success(this.$t('login.welcome'));
                if (callback) {
                    callback();
                }
            },
            function () {
                logging.error(this.$t('login.credentials_invalids'));
            }
        );
    },

    register(context, user, callback) {
        context.$http.post('/api/users/', user).then(
            function (response) {
                if (callback) {
                    callback();
                }
            },
            function (error) {
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
        var jwt = localStorage.getItem('token');
        this.user.authenticated = !!jwt;
    },

    getAuthHeader() {
        return {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }
};