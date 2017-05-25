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
        <encrypt-master-password v-model="newPassword" v-bind:email="email"></encrypt-master-password>
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
  import EncryptMasterPassword from '../components/EncryptMasterPassword.vue';

  export default {
    computed: {
      ...mapGetters(['version'])
    },
    components: {
      EncryptMasterPassword
    },
    data() {
      return {
        email: '',
        newPassword: ''
      };
    },
    methods: {
      resetPasswordConfirm(){
        if (!this.newPassword) {
          message.error(this.$t('PasswordResetRequired', 'A password is required'));
          return;
        }
        User
          .confirmResetPassword({
            uid: this.$route.params.uid,
            token: this.$route.params.token,
            newPassword: this.newPassword
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
