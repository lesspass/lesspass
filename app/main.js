import Vue from 'vue'
import Router from 'vue-router';
import i18n from 'vue-i18n';
import locales from './locales/locales';
import App from './app.vue';
import IndexView from './components/index.vue';
import LoginView from './components/login.vue';

var browserLanguage = (navigator.language || navigator.browserLanguage).split('-')[0];
var lang = browserLanguage in locales ? browserLanguage : 'en';

Vue.use(i18n, {
    lang: lang,
    locales: locales
});

Vue.use(Router);

var router = new Router();

router.map({
    '/': {
        component: IndexView
    },
    '/login/': {
        component: LoginView
    }
});

router.beforeEach(function () {
    window.scrollTo(0, 0)
});

router.redirect({
    '*': '/'
});

router.start(App, '#app');