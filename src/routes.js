import Vue from 'vue';
import VueRouter from 'vue-router';

import PasswordGenerator from './components/PasswordGenerator';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Passwords from './components/Passwords';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: PasswordGenerator},
];

const router = new VueRouter({
    routes
});

export default router;