<template>
    <div id="app">
        <lesspass-navbar></lesspass-navbar>
        <lesspass-header></lesspass-header>
        <lesspass-features></lesspass-features>
        <!--<lesspass-headlines></lesspass-headlines>-->
        <lesspass-howitworks></lesspass-howitworks>
        <lesspass-feedback></lesspass-feedback>
        <lesspass-image></lesspass-image>
        <lesspass-footer></lesspass-footer>
    </div>
</template>
<script>
    import LesspassNavbar from './navbar/navbar.vue';
    import LesspassHeader from './header/header.vue';
    import LesspassFeatures from './features/features.vue';
    import LesspassHowitworks from './howitworks/howitworks.vue';
    import LesspassFeedback from './feedback/feedback.vue';
    import LesspassImage from './image-separator/image-separator.vue';
    import LesspassFooter from './footer/footer.vue';

    export default {
        data: function () {
            return {}
        },
        components: {
            LesspassNavbar,
            LesspassHeader,
            LesspassFeatures,
            LesspassHowitworks,
            LesspassFeedback,
            LesspassImage,
            LesspassFooter
        }
    }
</script>