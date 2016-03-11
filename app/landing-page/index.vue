<template>
    <div id="app">
        <lesspass-header></lesspass-header>
        <lesspass-features></lesspass-features>
        <lesspass-howitworks></lesspass-howitworks>
        <lesspass-feedback></lesspass-feedback>
        <lesspass-image></lesspass-image>
        <lesspass-footer></lesspass-footer>
    </div>
</template>
<script>
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
            LesspassHeader,
            LesspassFeatures,
            LesspassHowitworks,
            LesspassFeedback,
            LesspassImage,
            LesspassFooter
        }
    }
</script>