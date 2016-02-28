<style>

</style>
<template>
    <div>
        <lesspass-navbar></lesspass-navbar>
        <!--<lesspass-header></lesspass-header>-->
        <!--<lesspass-headlines></lesspass-headlines>-->
        <!--<password-generator></password-generator>-->
        <!--<lesspass-how-it-works></lesspass-how-it-works>-->
        <!--<lesspass-feedback></lesspass-feedback>-->
        <!--<lesspass-faq></lesspass-faq>-->
        <!--<lesspass-footer></lesspass-footer>-->
    </div>
</template>
<script>
    import LesspassNavbar from './header/header.vue';
    import LesspassHeadlines from './components/headlines.vue';
    import PasswordGenerator from './components/password-generator.vue';
    import LesspassFeedback from './components/feedback.vue';
    import LesspassHowItWorks from './components/howitworks.vue';
    import LesspassFaq from './components/faq.vue';
    import LesspassFooter from './components/footer.vue';

    export default {
        data: function () {
            return {}
        },
        components: {
            LesspassNavbar,
            LesspassHeadlines,
            PasswordGenerator,
            LesspassFeedback,
            LesspassHowItWorks,
            LesspassFaq,
            LesspassFooter
        }
    }
</script>