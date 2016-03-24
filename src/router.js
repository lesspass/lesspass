import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import App from './App';
import LandingPage from './landing-page/LandingPage';
import LoginPage from './app/Login';
import RegisterPage from './app/Register';
import LessPassConnected from './app/Index';
import Auth from './services/auth';

const router = new Router({
  history: true,
  hashbang: false,
});

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

Auth.checkAuth();

router.beforeEach(transition => {
  if (transition.to.path === '/' && Auth.user.authenticated) {
    transition.redirect('/app/');
  }

  if (transition.to.auth_required && !Auth.user.authenticated) {
    transition.redirect('/login/');
  }

  transition.next();
});


router.start(App, '#app');
