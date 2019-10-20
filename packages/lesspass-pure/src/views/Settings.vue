<template>
  <div>
    <h5>{{$t('Options by default')}}</h5>
    <form id="lesspass-options-form" novalidate v-on:submit.prevent="saveAndExit">
      <div class="form-group">
        <label for="login">{{ $t('Login') }}</label>
        <div class="inner-addon left-addon">
          <i class="fa fa-user"></i>
          <input
            id="login"
            type="text"
            name="login"
            ref="login"
            class="form-control"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="none"
            v-bind:placeholder="$t('Login')"
            v-model="defaultPassword.login"
          />
        </div>
      </div>
      <options v-bind:options="defaultPassword"></options>
      <button type="submit" class="btn btn-primary btn-block mt-4">{{$t('Save')}}</button>
    </form>
  </div>
</template>

<script>
import Options from "../components/Options.vue";
import { mapState } from "vuex";

export default {
  computed: mapState(["defaultPassword"]),
  components: {
    Options
  },
  methods: {
    saveAndExit() {
      this.$store
        .dispatch("saveDefaultOptions", this.defaultPassword)
        .then(this.$store.dispatch("resetPassword"))
        .then(() => this.$router.push({ name: "home" }));
    }
  }
};
</script>
