import Vue from 'vue'
import Router from 'vue-router';
import Resource from 'vue-resource';
import i18n from 'vue-i18n';

import locales from './locales/locales';
import App from './app.vue';
import IndexView from './components/index.vue';
import Dashboard from './components/dashboard.vue';
import auth from './services/auth';
Vue.use(Resource);
Vue.use(Router);


var browserLanguage = (navigator.language || navigator.browserLanguage).split('-')[0];
var lang = browserLanguage in locales ? browserLanguage : 'en';
Vue.use(i18n, {
    lang: lang,
    locales: locales
});


Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

auth.checkAuth();

export var router = new Router();

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

router.beforeEach(function (transition) {
    if (transition.to.auth && !auth.user.authenticated) {
        transition.redirect('/presentation/')
    } else {
        transition.next()
    }
});