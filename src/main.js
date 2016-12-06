import Vue from 'vue';
import './LessPass.scss';
import LessPass from './LessPass.vue';
import store from './store';
import router from './router';

new Vue({
    el: '#lesspass',
    store,
    router,
    render: h => h(LessPass)
});
