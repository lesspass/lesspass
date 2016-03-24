import Vue from 'vue';
import Router from 'vue-router';
import App from './App';

Vue.use(Router);

const router = new Router({
  history: true,
  hashbang: false,
});

import LandingPage from './landing-page/LandingPage';
import LoginPage from './app/Login';
import RegisterPage from './app/Register';
import LessPassConnected from './app/Index';

router.map({
  '/': {
    component: LandingPage,
  },
  '/login/': {
    component: LoginPage,
  },
  '/register/': {
    component: RegisterPage,
  },
  '/app/': {
    auth_required: true,
    component: LessPassConnected,
  },
});

router.redirect({
  '*': '/',
});

router.start(App, '#app');

import Auth from './services/auth';

Auth.checkAuth();

router.beforeEach(transition => {
  if (transition.to.auth_required && !Auth.user.authenticated) {
    transition.redirect('/login/');
  } else {
    transition.next();
  }
});

export default router;
