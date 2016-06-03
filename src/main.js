import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './app';
import LandingPage from './landing-page/LandingPage';
import LoginPage from './pages/login';
import SettingsPage from './pages/settings';
import EntriesPage from './pages/entries';
import EditEntryPage from './pages/edit-entry';
import auth from './services/auth';

Vue.use(VueRouter);

const router = new VueRouter();

router.map({
  '/': {
    component: LandingPage,
  },
  '/login/': {
    component: LoginPage
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
      transition.next();
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
