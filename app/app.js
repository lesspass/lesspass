import Vue from 'vue';
import PasswordGenerator from './components/password-generator.vue';
import BootstrapHr from './components/bootstrap-hr.vue';
import LesspassFeatures from './components/lesspass-features.vue';
import Footer from './components/footer.vue';

new Vue({
    el: 'body',
    components: {
        passwordGenerator: PasswordGenerator,
        lesspassFeatures: LesspassFeatures,
        lesspassFooter: Footer,
        bootstrapHr: BootstrapHr
    }
});