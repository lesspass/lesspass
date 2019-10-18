<template>
  <form id="lesspass-options-form" novalidate v-on:submit.prevent="saveOptions">
    <div class="form-group">
      <label for="login">{{$t('Default login')}}</label>
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
    <button type="submit" class="btn btn-primary">{{$t('Save')}}</button>
  </form>
</template>

<script>
  import { mapState } from "vuex";
  import { SET_DEFAULT_OPTIONS } from "../store/mutation-types";

  export default {
    computed: mapState(["defaultPassword"]),
    methods: {
      saveOptions() {
        this.$store.commit(SET_DEFAULT_OPTIONS, this.defaultPassword);
      }
    }
  }
</script>
