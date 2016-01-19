<style>
    @import '../node_modules/bootstrap/dist/css/bootstrap.css';

    body {
        font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 14px;
        line-height: 1.5;
        color: #CFD2DA;
        background-color: #252830;
    }

    .blue {
        color: #0275D8;
    }
</style>

<template>
    <lesspass-header></lesspass-header>
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
    import LesspassHeader from './components/header.vue';
    import LesspassHeadlines from './components/headlines.vue';
    import LesspassJumbotron from './components/jumbotron.vue';
    import PasswordGenerator from './components/password-generator.vue';
    import LesspassFeatures from './components/features.vue';
    import LesspassFaq from './components/faq.vue';
    import BootstrapHr from './components/bootstrap-hr.vue';
    import LesspassFooter from './components/footer.vue';

    export default {
        data () {
            return {
                data: "hello"
            }
        },
        components: {
            LesspassHeader,
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

