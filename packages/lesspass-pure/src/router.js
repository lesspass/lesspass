import Vue from "vue";
import VueRouter from "vue-router";

import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import MyAccount from "./views/MyAccount.vue";
import PasswordGenerator from "./views/PasswordGenerator.vue";
import PasswordReset from "./views/PasswordReset.vue";
import PasswordResetConfirm from "./views/PasswordResetConfirm.vue";
import Passwords from "./views/Passwords.vue";
import SettingsPage from "./views/Settings.vue";
import WhatsNewPage from "./views/WhatsNew.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: PasswordGenerator },
  { path: "/login", name: "login", component: Login },
  { path: "/register", name: "register", component: Register },
  { path: "/myaccount", name: "myaccount", component: MyAccount },
  { path: "/whatsnew", name: "whatsnew", component: WhatsNewPage },
  { path: "/settings", name: "settings", component: SettingsPage },
  { path: "/passwords/", name: "passwords", component: Passwords },
  { path: "/password/reset", name: "passwordReset", component: PasswordReset },
  {
    path: "/password/reset/confirm/:uid/:token",
    name: "passwordResetConfirm",
    component: PasswordResetConfirm
  },
  { path: "*", redirect: "/" }
];

const router = new VueRouter({
  routes
});

export default router;
