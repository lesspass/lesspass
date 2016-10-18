import 'babel-polyfill';
import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'hint.css/hint.css';
import LessPass from './LessPass';
import 'bootstrap/dist/js/bootstrap';
import store from './store';
import router from './router';

new Vue({
    el: '#lesspass',
    store,
    router,
    render: h => h(LessPass)
});
