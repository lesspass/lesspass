import Vue from "vue";
import OptionsPage from "./components/OptionsPage.vue"
import store from "./store";

new Vue({
  el: "#lesspass-options",
  render: (h) => h(OptionsPage),
  store
});
