import 'babel-polyfill';
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome-webpack';
import 'hint.css/hint.css';
import LessPass from './App.vue'
import 'bootstrap/dist/js/bootstrap.min';
import Store from './store'
import Storage from './api/storage';

const storage = new Storage();
const store = Store(storage.json());

new Vue({
    el: '#app',
    store,
    render: h => h(LessPass)
});
