import {router} from '../main'

export default {
    user: {
        authenticated: false
    },

    login(context, credentials, redirect) {
        context.$http.post('/api/sessions/', credentials).then(
            function (data) {
                localStorage.setItem('token', data.token);
                this.user.authenticated = true;
                if (redirect) {
                    router.go(redirect)
                }
            },
            function (error) {
                context.error = true;
            }
        );
    },

    register(context, user, redirect) {
        context.$http.post('/api/users/', user).then(
            function (data) {
                localStorage.setItem('token', data.token);
                this.user.authenticated = true;
                if (redirect) {
                    router.go(redirect)
                }
            },
            function (error) {
                context.error = true;
            }
        );
    },

    logout() {
        localStorage.removeItem('token');
        this.user.authenticated = false;
        router.go('/')
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
