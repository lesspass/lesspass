<style>
#generated-password {
  font-family: Consolas, Menlo, Monaco, Courier New, monospace, sans-serif;
}

div.awesomplete {
  display: block;
}

div.awesomplete > ul {
  z-index: 11;
}
</style>
<template>
  <form id="password-generator" v-on:submit.prevent="generatePassword" novalidate>
    <div class="form-group">
      <label for="login" class="sr-only">{{ $t('Login') }}</label>
      <div class="inner-addon left-addon">
        <i class="fa fa-user"></i>
        <input id="login"
               type="text"
               name="login"
               ref="login"
               class="form-control"
               autocomplete="off"
               autocorrect="off"
               autocapitalize="none"
               v-bind:placeholder="$t('Default login')"
               v-model="defaultPassword.login">
      </div>
    </div>
  </form>
</template>
<script type="text/ecmascript-6">
import { mapState } from "vuex";
import InputSite from "../../../components/InputSite.vue";
import { showTooltip, hideTooltip } from "../services/tooltip";

export default {
  name: "password-generator-view",
  components: {
    InputSite,
  },
  computed: {
    ...mapState(["defaultPassword"])
  },
  methods: {
    cleanErrors() {
      clearTimeout(this.cleanTimeout);
      this.passwordGenerated = "";
      this.$refs.masterPassword.hidePassword();
    }
  }
};
</script>
