<template>
  <form id="lesspass-options-form" novalidate v-on:submit.prevent="saveOptions">
        <div class="form-group">
          <label for="login" class="sr-only">{{$t('Default login')}}</label>
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
        <options v-bind:title="$t('Default password options')" v-bind:password="defaultPassword" />
        <div class="form-group">
          <button type="submit" class="btn btn-primary">{{$t('Save')}}</button>
        </div>
      </form>
</template>

<script>
  import { mapState } from "vuex";
  import { SET_DEFAULT_OPTIONS } from "../store/mutation-types";
  import Options from "../components/Options.vue";

  export default {
    components: {
      Options
    },
    computed: mapState(["defaultPassword"]),
    methods: {
      saveOptions() {
        this.$store.commit(SET_DEFAULT_OPTIONS, this.defaultPassword);
      }
    }
  }
</script>
