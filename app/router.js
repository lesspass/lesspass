var Vue = require('vue');
var Router = require('vue-router');

var App = require('./app.vue');
var IndexView = require('./components/index.vue');
var Dashboard = require('./components/dashboard.vue');

Vue.use(Router);

var router = new Router();

router.map({
    '/': {
        auth: true,
        component: Dashboard
    },
    '/presentation/': {
        component: IndexView
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



