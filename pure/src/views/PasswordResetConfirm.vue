<template>
  <form v-on:submit.prevent="resetPasswordConfirm">
    <div class="form-group row">
      <div class="col-12">
        <div class="inner-addon left-addon">
          <i class="fa fa-user"></i>
          <input id="email"
                 class="form-control"
                 name="email"
                 type="email"
                 placeholder="Email"
                 v-model="email">
        </div>
      </div>
    </div>
    <div class="form-group row">
      <div class="col-12">
        <master-password
          v-model="password"
          v-bind:label="$t('Master Password')"
          v-bind:email="email"
          v-bind:showEncryptButton="true"
          v-bind:EncryptButtonText="$t('Encrypt my master password')"></master-password>
      </div>
    </div>
    <div class="form-group row">
      <div class="col-12">
        <button id="loginButton" class="btn btn-primary">
          {{$t('Reset my password')}}
        </button>
      </div>
    </div>
  </form>
</template>
<script type="text/ecmascript-6">
  import User from '../api/user';
  import message from '../services/message';
  import MasterPassword from '../components/MasterPassword.vue';

  export default {
    components: {
      MasterPassword
    },
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      resetPasswordConfirm(){
        if (!this.password) {
          message.error(this.$t('PasswordResetRequired', 'A password is required'));
          return;
        }
        User
          .confirmResetPassword({
            uid: this.$route.params.uid,
            token: this.$route.params.token,
            new_password: this.password
          })
          .then(() => {
            message.success(this.$t('PasswordResetSuccessful', 'Your password was reset successfully.'));
          })
          .catch(err => {
            if (err.response.status === 400) {
              message.error(this.$t('ResetLinkExpired', 'This password reset link has expired.'));
            } else {
              message.displayGenericError();
            }
          });
      }
    }
  }
</script>
