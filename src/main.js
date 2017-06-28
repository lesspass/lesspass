import Vue from 'vue'
import App from './App.vue'
import 'lesspass-pure/dist/lesspass.min.css'
import router from './router'
import Polyglot from 'vue-polyglot';

Vue.use(Polyglot);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
