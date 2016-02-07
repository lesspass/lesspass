<template>
    <lesspass-headlines></lesspass-headlines>
    <password-generator></password-generator>
    <lesspass-features></lesspass-features>
    <lesspass-faq></lesspass-faq>
    <lesspass-footer></lesspass-footer>
</template>


<script>
    import LesspassHeadlines from './headlines.vue';
    import PasswordGenerator from './password-generator.vue';
    import LesspassFeatures from './features.vue';
    import LesspassFaq from './faq.vue';
    import LesspassFooter from './footer.vue';

    export default {
        data: function () {
            return {}
        },
        components: {
            LesspassHeadlines,
            PasswordGenerator,
            LesspassFeatures,
            LesspassFaq,
            LesspassFooter
        }
    }
</script>
