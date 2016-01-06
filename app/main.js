import Vue from 'vue'
import i18n from 'vue-i18n';
import locales from './locales/locales';

var browserLanguage = (navigator.language || navigator.browserLanguage).split('-')[0];
var lang = browserLanguage in locales ? browserLanguage : 'en';

Vue.use(i18n, {
    lang: lang,
    locales: locales
});

import App from './app.vue'

new Vue({
    el: 'body',
    components: {App}
});