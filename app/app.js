import Vue from 'vue';
import PasswordGenerator from './components/password-generator.vue';
import BootstrapHr from './components/bootstrap-hr.vue';

new Vue({
    el: 'body',
    components: {
        passwordGenerator: PasswordGenerator,
        bootstrapHr: BootstrapHr
    }
});