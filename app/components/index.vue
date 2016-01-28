<template>
    <lesspass-headlines></lesspass-headlines>
    <bootstrap-hr class="hidden-xs-down"></bootstrap-hr>
    <lesspass-jumbotron></lesspass-jumbotron>
    <bootstrap-hr id="passwordGeneratorHr"></bootstrap-hr>
    <password-generator></password-generator>
    <lesspass-features></lesspass-features>
    <lesspass-faq></lesspass-faq>
    <lesspass-footer></lesspass-footer>
</template>


<script>
    import LesspassHeadlines from './headlines.vue';
    import LesspassJumbotron from './jumbotron.vue';
    import PasswordGenerator from './password-generator.vue';
    import LesspassFeatures from './features.vue';
    import LesspassFaq from './faq.vue';
    import BootstrapHr from './bootstrap-hr.vue';
    import LesspassFooter from './footer.vue';

    export default {
        data: function () {
            return {}
        },
        components: {
            LesspassHeadlines,
            LesspassJumbotron,
            PasswordGenerator,
            LesspassFeatures,
            LesspassFaq,
            LesspassFooter,
            BootstrapHr
        }
    }
</script>
