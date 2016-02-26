<style>
    body {
        font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 14px;
        line-height: 1.4;
        background: #D3D8E8;
        color: #252830;
    }

    .blue {
        color: #0275D8;
    }
</style>

<template>
    <div>
        <lesspass-header></lesspass-header>
        <lesspass-headlines></lesspass-headlines>
        <password-generator></password-generator>
        <lesspass-how-it-works></lesspass-how-it-works>
        <lesspass-feedback></lesspass-feedback>
        <lesspass-faq></lesspass-faq>
        <lesspass-footer></lesspass-footer>
    </div>
</template>
<script>
    import LesspassHeader from './components/header.vue';
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
            LesspassHeader,
            LesspassHeadlines,
            PasswordGenerator,
            LesspassFeedback,
            LesspassHowItWorks,
            LesspassFaq,
            LesspassFooter
        }
    }
</script>