<style>
  @media (min-width: 480px) {
    #header {
      padding: 15vh 0;
    }
  }
</style>
<template>
  <div id="landing-page">
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
  import LesspassNavbar from './Navbar/Navbar';
  import LesspassHeadlines from './Headlines/Headlines';
  import PasswordGenerator from './PasswordGenerator/PasswordGenerator';
  import LesspassFeatures from './Features/Features';
  import LesspassHowitworks from './HowItWorks/HowItWorks';
  import LesspassTestimonials from './Testimonials/Testimonials';
  import LesspassFooter from './Footer/Footer';

  export default {
    data() {
      return {};
    },
    components: {
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
