import Vue from 'vue';
import VueRouter from 'vue-router';

import PasswordGenerator from './views/PasswordGenerator.vue';
import Login from './views/Login.vue';
import PasswordReset from './views/PasswordReset.vue';
import PasswordResetConfirm from './views/PasswordResetConfirm.vue';
import Passwords from './views/Passwords.vue';

Vue.use(VueRouter);

const routes = [
    {path: '/', name: 'home', component: PasswordGenerator},
    {path: '/login', name: 'login', component: Login},
    {path: '/passwords/', name: 'passwords', component: Passwords},
    {path: '/passwords/:id', name: 'password', component: PasswordGenerator},
    {path: '/password/reset', name: 'passwordReset', component: PasswordReset},
    {path: '/password/reset/confirm/:uid/:token', name: 'passwordResetConfirm', component: PasswordResetConfirm},
];

const router = new VueRouter({
    routes
});

export default router;