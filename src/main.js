import 'babel-polyfill';
import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'hint.css/hint.css';
import App from './App';
import 'bootstrap/dist/js/bootstrap';
import Store from './store';
import Storage from './api/storage';
import router from './routes';

const storage = new Storage();
const store = Store(storage.json());

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
