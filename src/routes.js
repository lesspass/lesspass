import Vue from 'vue';
import VueRouter from 'vue-router';

import PasswordGenerator from './components/PasswordGenerator';
import PasswordResetConfirm from './components/PasswordResetConfirm';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Passwords from './components/Passwords';

Vue.use(VueRouter);

const routes = [
    {path: '/', name: 'home', component: PasswordGenerator},
    {path: '/login', component: Login},
    {path: '/password/reset/confirm/:uid/:token', name: 'passwordResetConfirm', component: PasswordResetConfirm},
];

const router = new VueRouter({
    routes
});

export default router;