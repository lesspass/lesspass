<template>
  <form v-on:submit.prevent="resetPasswordConfirm">
    <div class="form-group row">
      <div class="col-12">
        <div class="inner-addon left-addon">
          <i class="fa fa-lock"></i>
          <input id="new-password"
                 class="form-control"
                 name="new-password"
                 type="password"
                 autocomplete="new-password"
                 v-bind:placeholder="$t('New Password')"
                 v-model="new_password">
        </div>
      </div>
    </div>
    <div class="form-group row">
      <div class="col-12">
        <button id="loginButton" class="btn" type="submit"
                v-bind:class="{ 'btn-warning': version===1, 'btn-primary': version===2 }">
          {{$t('Reset my password')}}
        </button>
      </div>
    </div>
  </form>
</template>
<script type="text/ecmascript-6">
  import User from '../api/user';
  import {mapActions, mapGetters} from 'vuex';
  import message from '../services/message';

  export default {
    data() {
      return {
        new_password: ''
      };
    },
    methods: {
      resetPasswordConfirm(){
        if (!this.new_password) {
          message.success($t('PasswordResetRequired', 'A password is required'));
          return;
        }
        User
          .confirmResetPassword({
            uid: this.$route.params.uid,
            token: this.$route.params.token,
            new_password: this.new_password
          })
          .then(() => {
            message.success($t('PasswordResetSuccessful', 'Your password was reset successfully.'));
          })
          .catch(err => {
            if (err.response.status === 400) {
              message.error($t('ResetLinkExpired', 'This password reset link has expired.'));
            } else {
              message.displayGenericError();
            }
          });
      }
    },
    computed: {
      ...mapGetters(['version'])
    },
  }
</script>
