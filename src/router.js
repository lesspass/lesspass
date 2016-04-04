import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import App from './App';
import LandingPage from './landing-page/LandingPage';
import LoginPage from './app/Login';
import RegisterPage from './app/Register';
import LessPassConnected from './app/Index';
import http from './services/http';

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

router.beforeEach(transition => {
  if (transition.to.auth_required) {
    http.auth.checkAuth()
      .then(() => {
        if (transition.to.path === '/') {
          transition.redirect('/app/');
        } else {
          transition.next();
        }
      })
      .catch(() => {
        transition.redirect('/login/');
      });
  } else {
    transition.next();
  }
});


router.start(App, '#app');
