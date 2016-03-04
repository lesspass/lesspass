<template>
    <div>
        <lesspass-navbar></lesspass-navbar>
        <lesspass-header></lesspass-header>
        <!--<lesspass-headlines></lesspass-headlines>-->
        <!--<lesspass-how-it-works></lesspass-how-it-works>-->
        <!--<lesspass-feedback></lesspass-feedback>-->
        <!--<lesspass-faq></lesspass-faq>-->
        <!--<lesspass-footer></lesspass-footer>-->
    </div>
</template>
<script>
    import LesspassNavbar from './navbar/navbar.vue';
    import LesspassHeader from './header/header.vue';
    import LesspassHeadlines from './components/headlines.vue';
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
            LesspassHeader,
            LesspassHeadlines,
            LesspassFeedback,
            LesspassHowItWorks,
            LesspassFaq,
            LesspassFooter
        }
    }
</script>