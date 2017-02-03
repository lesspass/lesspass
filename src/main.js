import Vue from 'vue';
import LessPass from './LessPass.vue';
import {sync} from 'vuex-router-sync';
import store from './store';
import router from './router';

sync(store, router);

new Vue({
    el: '#lesspass',
    store,
    router,
    render: h => h(LessPass)
});
