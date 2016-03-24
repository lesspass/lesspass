<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';
  @import '../node_modules/font-awesome/css/font-awesome.css';
  @import '../node_modules/toastr/build/toastr.css';

  body {
    background-color: #F5F5F5;
    color: #323232;
  }

  .form-control, .btn, .input-group-addon {
    border-radius: 0 !important;
  }

  .p-y-6 {
    padding-top: 6rem !important;
    padding-bottom: 6rem !important;
  }
</style>
<template>
  <div id="app">
    <login-bar></login-bar>
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import LoginBar from './landing-page/LoginBar/LoginBar';

  export default {
    components: {
      LoginBar,
    },
  };
</script>
