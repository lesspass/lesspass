<style>
    @media (min-width: 480px) {
        #header {
            padding: 15vh 0;
        }
    }
</style>
<template>
    <div id="landing-page">
        <lesspass-login-bar></lesspass-login-bar>
        <lesspass-navbar></lesspass-navbar>
        <div id="header" class="container">
            <div class="row">
                <div class="col-md-5">
                    <lesspass-headlines></lesspass-headlines>
                </div>
                <div class="col-md-7">
                    <password-generator></password-generator>
                </div>
            </div>
        </div>
        <lesspass-features></lesspass-features>
        <lesspass-testimonials></lesspass-testimonials>
        <lesspass-howitworks></lesspass-howitworks>
        <lesspass-footer></lesspass-footer>
    </div>
</template>
<script type="text/ecmascript-6">
    import LesspassLoginBar from '../landing-page/LoginBar/LoginBar';
    import LesspassNavbar from '../landing-page/Navbar/Navbar';
    import LesspassHeadlines from '../landing-page/Headlines/Headlines';
    import PasswordGenerator from '../landing-page/PasswordGenerator/PasswordGenerator';
    import LesspassFeatures from '../landing-page/Features/Features';
    import LesspassHowitworks from '../landing-page/HowItWorks/HowItWorks';
    import LesspassTestimonials from '../landing-page/Testimonials/Testimonials';
    import LesspassFooter from '../landing-page/Footer/Footer';

    export default {
        data() {
            return {};
        },
        components: {
            LesspassLoginBar,
            LesspassNavbar,
            LesspassHeadlines,
            PasswordGenerator,
            LesspassFeatures,
            LesspassHowitworks,
            LesspassTestimonials,
            LesspassFooter
        },
    };
</script>
