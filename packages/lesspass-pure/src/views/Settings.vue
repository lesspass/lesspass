<template>
  <div>
    <div class="mb-3">
      <h5>{{ $t("Options by default") }}</h5>
    </div>
    <form
      id="lesspass-options-form"
      novalidate
      v-on:submit.prevent="saveAndExit"
    >
      <div class="mb-3">
        <label for="login">{{ $t("Username") }}</label>
        <div class="input-group">
          <span class="input-group-text"><i class="fa fa-user"></i></span>
          <input
            id="login"
            type="text"
            name="login"
            ref="login"
            class="form-control"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="none"
            v-bind:placeholder="$t('Username')"
            v-model="defaultPassword.login"
          />
        </div>
      </div>
      <options v-bind:options="defaultPassword"></options>
      <div>
        <button
          type="submit"
          id="btn-submit-settings"
          class="btn btn-primary mt-4"
        >
          {{ $t("Save") }}
        </button>
      </div>
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
