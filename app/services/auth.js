import {router} from '../main'
import logging from './logging'

export default {
    user: {
        authenticated: false
    },

    login(context, credentials, callback) {
        var self = this;
        context.$http.post('/api/sessions/', credentials).then(
            function (response) {
                localStorage.setItem('token', response.data.token);
                self.user.authenticated = true;
                if (callback) {
                    logging.success(this.$t('login.welcome'));
                    callback();
                }
            },
            function () {
                logging.error(this.$t('login.credentials_invalids'));
            }
        );
    },

    register(context, user) {
        var self = this;
        context.$http.post('/api/users/', user).then(
            function (response) {
                localStorage.setItem('token', response.data.token);
                router.go('/');
            },
            function (error) {
                context.error = true;
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
}
