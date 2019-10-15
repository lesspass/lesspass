<template>
  <form id="lesspass-options-form" novalidate v-on:submit.prevent="saveOptions">
    <div class="form-group">
      <label for="login" class="sr-only">{{ $t('Default login') }}</label>
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
          v-bind:placeholder="$t('Default login')"
          v-model="defaultPassword.login"
        />
      </div>
    </div>
    <div class="form-group row">
      <div class="col-sm-10">
        <button type="submit" class="btn btn-primary">{{$t('Save')}}</button>
      </div>
    </div>
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
