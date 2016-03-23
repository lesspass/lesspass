import Vue from 'vue';
import Router from 'vue-router';

import App from './app.vue';
import LandingPage from './landing-page/index.vue';
import LessPassConnected from './lesspass/index.vue';
import LoginPage from './lesspass/login.vue';
import RegisterPage from './lesspass/register.vue';

Vue.use(Router);

var router = new Router();

router.map({
    '/': {
        auth: true,
        component: LessPassConnected
    },
    '/presentation/': {
        component: LandingPage
    },
    '/login/': {
        component: LoginPage
    },
    '/register/': {
        component: RegisterPage
    }
});

router.redirect({
    '*': '/'
});

router.start(App, '#app');

var Auth = require('./services/auth.js');

Auth.checkAuth();

router.beforeEach(function (transition) {
    if (transition.to.auth && !Auth.user.authenticated) {
        transition.redirect('/presentation/')
    } else {
        transition.next()
    }
});

module.exports = router;