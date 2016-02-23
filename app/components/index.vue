<template>
    <lesspass-headlines></lesspass-headlines>
    <password-generator></password-generator>
    <lesspass-how-it-works></lesspass-how-it-works>
    <lesspass-feedback></lesspass-feedback>
    <lesspass-faq></lesspass-faq>
    <lesspass-footer></lesspass-footer>
</template>


<script>
    import LesspassHeadlines from './headlines.vue';
    import PasswordGenerator from './password-generator.vue';
    import LesspassFeedback from './feedback.vue';
    import LesspassHowItWorks from './howitworks.vue';
    import LesspassFaq from './faq.vue';
    import LesspassFooter from './footer.vue';

    export default {
        data: function () {
            return {}
        },
        components: {
            LesspassHeadlines,
            PasswordGenerator,
            LesspassFeedback,
            LesspassHowItWorks,
            LesspassFaq,
            LesspassFooter
        }
    }
</script>
