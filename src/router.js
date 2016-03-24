import Vue from 'vue';
import Router from 'vue-router';
import App from './App';

Vue.use(Router);

const router = new Router();


import LandingPage from './landing-page/LandingPage';
import LoginPage from './app/Login';
import RegisterPage from './app/Register';
import LessPassConnected from './app/Index';

router.map({
  '/': {
    auth: true,
    component: LessPassConnected,
  },
  '/login/': {
    component: LoginPage,
  },
  '/register/': {
    component: RegisterPage,
  },
  '/welcome/': {
    component: LandingPage,
  },
});

router.redirect({
  '*': '/',
});

router.start(App, '#app');

import Auth from './services/auth';

Auth.checkAuth();

router.beforeEach(transition => {
  alert(transition.to.auth);
  if (transition.to.auth && !Auth.user.authenticated) {
    alert(Auth.user.authenticated);
    transition.redirect('/welcome/');
  } else {
    transition.next();
  }
});

module.exports = router;
