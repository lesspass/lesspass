import Vue from 'vue';
import Router from 'vue-router';

import App from './app.vue';
import LandingPage from './landing-page/index.vue';
import LessPass from './lesspass/index.vue';

Vue.use(Router);

var router = new Router();

router.map({
    '/': {
        auth: true,
        component: LessPass
    },
    '/presentation/': {
        component: LandingPage
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