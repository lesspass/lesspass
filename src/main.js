import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';

import App from './app';
import LandingPage from './pages/index';
import LoginPage from './pages/login';
import HelpPage from './pages/help';
import RegisterPage from './pages/register';
import SettingsPage from './pages/settings';
import EntriesPage from './pages/entries';
import DownloadPage from './pages/download';
import EditEntryPage from './pages/edit-entry';
import auth from './services/auth';
import locales from './locales';

Vue.use(VueI18n);
const browserLanguage = (navigator.language || navigator.browserLanguage).split('-')[0];
const lang = browserLanguage in locales ? browserLanguage : 'en';
Vue.config.lang = lang;
Object.keys(locales).forEach(lang => {
  Vue.locale(lang, locales[lang]);
});

Vue.use(VueRouter);
const router = new VueRouter();

router.map({
  '/': {
    component: LandingPage
  },
  '/login/': {
    component: LoginPage
  },
  '/help/': {
    component: HelpPage
  },
  '/download/': {
    component: DownloadPage
  },
  '/register/': {
    component: RegisterPage
  },
  '/settings/': {
    component: SettingsPage,
    authRequired: true
  },
  '/entries/': {
    component: EntriesPage,
    authRequired: true
  },
  '/entries/:uuid/': {
    component: EditEntryPage,
    authRequired: true
  }
});

auth.localStorage = localStorage;

router.beforeEach(transition => {
  auth.checkAuth()
    .then(() => {
      if (transition.to.path === '/') {
        transition.redirect('/entries/');
      } else {
        transition.next();
      }
    })
    .catch(() => {
      if (transition.to.authRequired) {
        transition.redirect('/login/');
      } else {
        transition.next();
      }
    });
});

router.redirect({
  '*': '/'
});

router.start(App, 'app');
