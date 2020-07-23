<template>
  <form v-on:submit.prevent="resetPassword">
    <div class="form-group row">
      <div class="col-12">
        <label for="email">{{ $t("Email") }}</label>
        <div class="inner-addon left-addon">
          <i class="fa fa-user"></i>
          <input
            id="email"
            class="form-control"
            name="email"
            type="email"
            v-bind:placeholder="$t('Email')"
            v-model="email"
          />
        </div>
        <small id="emailHelp" class="form-text text-muted">{{
          $t(
            "ResetPasswordHelpText",
            "Enter your user account's verified email address and we will send you a password reset link."
          )
        }}</small>
      </div>
    </div>
    <div class="form-group row">
      <div class="col-12">
        <button
          id="password-reset__reset-password-btn"
          class="btn btn-primary btn-block"
        >
          {{ $t("Reset my password") }}
        </button>
      </div>
    </div>
  </form>
</template>
<script type="text/ecmascript-6">
import User from '../api/user';
import {mapState} from 'vuex';
import message from '../services/message';

export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    resetPassword() {
      if (!this.email) {
        message.error(this.$t('EmailRequiredError', 'We need an email to find your account.'));
        return;
      }

      User.resetPassword({email: this.email})
        .then(() => {
          const successMessage = this.$t(
            'resetPasswordSuccess',
            'If the email address {email} is associated with a LessPass account, you will shortly receive an email from LessPass with instructions on how to reset your password.',
            {email: this.email}
          );
          message.success(successMessage);
        })
        .catch(() => {
          message.displayGenericError();
        });
    }
  }
}
</script>
