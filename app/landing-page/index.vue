<template>
    <div id="app">
        <lesspass-navbar></lesspass-navbar>
        <lesspass-hero></lesspass-hero>
        <lesspass-features></lesspass-features>
        <lesspass-testimonials></lesspass-testimonials>
        <lesspass-howitworks></lesspass-howitworks>
        <lesspass-footer></lesspass-footer>
    </div>
</template>
<script>
    import LesspassNavbar from './navbar/navbar.vue';
    import LesspassHero from './hero/hero.vue';
    import LesspassFeatures from './features/features.vue';
    import LesspassHowitworks from './howitworks/howitworks.vue';
    import LesspassTestimonials from './testimonials/testimonials.vue';
    import LesspassFooter from './footer/footer.vue';

    export default {
        data: function () {
            return {}
        },
        components: {
            LesspassNavbar,
            LesspassHero,
            LesspassFeatures,
            LesspassHowitworks,
            LesspassTestimonials,
            LesspassFooter
        }
    }
</script>