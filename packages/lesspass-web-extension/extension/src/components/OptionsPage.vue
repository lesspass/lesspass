<style>
  .full-width {
    width: 100%;
  }
</style>

<template>
  <form id="lesspass-options-form" novalidate @submit="saveOptions(defaultPassword.login)">
        <div class="form-group row full-width">
          <label for="login" class="col-sm-2 col-form-label">Default login</label>
          <div class="col-sm-10">
            <input
              id="login"
              type="text"
              name="login"
              ref="login"
              class="form-control"
              autocomplete="off"
              autocorrect="off"
              autocapitalize="none"
              v-model="defaultPassword.login"
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
        </div>
      </form>
</template>

<script>
  import { mapState } from "vuex";

  export default {
    computed: mapState(["defaultPassword"]),
    methods: {
      saveOptions(login) {
        this.$store.commit("updateDefaultLogin", login);
      }
    }
  }
</script>
