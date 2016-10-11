import Vue from 'vue';
import VueRouter from 'vue-router';

import PasswordGenerator from './views/PasswordGenerator';
import Login from './components/Login';
import Register from './components/Register';
import PasswordReset from './components/PasswordReset';
import PasswordResetConfirm from './components/PasswordResetConfirm';
import Passwords from './views/Passwords';

Vue.use(VueRouter);

const routes = [
    {path: '/', name: 'home', component: PasswordGenerator},
    {path: '/login', name: 'login', component: Login},
    {path: '/register', name: 'register', component: Register},
    {path: '/passwords/', name: 'passwords', component: Passwords},
    {path: '/passwords/:passwordId', name: 'password', component: PasswordGenerator},
    {path: '/password/reset', name: 'passwordReset', component: PasswordReset},
    {path: '/password/reset/confirm/:uid/:token', name: 'passwordResetConfirm', component: PasswordResetConfirm},
];

const router = new VueRouter({
    routes
});

export default router;