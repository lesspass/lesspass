import Vue from 'vue';
import i18n from 'vue-i18n';
import Header from './components/header.vue';
import Headlines from './components/headlines.vue';
import Jumbotron from './components/jumbotron.vue';
import PasswordGenerator from './components/password-generator.vue';
import BootstrapHr from './components/bootstrap-hr.vue';
import Features from './components/features.vue';
import Footer from './components/footer.vue';
import locales from './locales/locales';

var browserLanguage = (navigator.language || navigator.browserLanguage).split('-')[0];
var lang = browserLanguage in locales ? browserLanguage : 'en';

Vue.use(i18n, {
    lang: lang,
    locales: locales
});

new Vue({
    el: 'body',
    components: {
        lesspassHeader: Header,
        lesspassHeadlines: Headlines,
        lesspassJumbotron: Jumbotron,
        passwordGenerator: PasswordGenerator,
        lesspassFeatures: Features,
        lesspassFooter: Footer,
        bootstrapHr: BootstrapHr
    }
});