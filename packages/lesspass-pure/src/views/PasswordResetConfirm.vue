<template>
  <form v-on:submit.prevent="resetPasswordConfirm">
    <div class="mb-3">
      <div class="input-group">
        <span class="input-group-text"><i class="fa fa-user"></i></span>
        <input
          id="email"
          class="form-control"
          name="email"
          type="email"
          placeholder="Email"
          v-model="email"
        />
      </div>
    </div>
    <div class="mb-3">
      <master-password
        v-model="password"
        v-bind:label="$t('Master Password')"
      ></master-password>
    </div>
    <div class="mb-3 d-grid">
      <button id="resetMyPasswordButton" class="btn btn-primary">
        {{ $t("Reset my password") }}
      </button>
    </div>
  </form>
</template>
<script>
import User from "../api/user";
import message from "../services/message";
import MasterPassword from "../components/MasterPassword.vue";
import { encryptPassword } from "../services/encryption";

export default {
  components: {
    MasterPassword
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    resetPasswordConfirm() {
      if (!this.password) {
        message.error(
          this.$t("PasswordResetRequired", "A password is required")
        );
        return;
      }

      encryptPassword(this.email, this.password).then(encryptedPassword => {
        User.confirmResetPassword({
          uid: this.$route.params.uid,
          token: this.$route.params.token,
          password: encryptedPassword
        })
          .then(() => {
            message.success(
              this.$t(
                "PasswordResetSuccessful",
                "Your password was reset successfully."
              )
            );
            User.login({ email: this.email, password: encryptedPassword })
              .then(response => {
                this.$store.dispatch("login", response.data);
                this.$router.push({ name: "home" });
              })
              .catch(err => message.displayGenericError());
          })
          .catch(err => {
            if (err.response.status === 400) {
              message.error(
                this.$t(
                  "ResetLinkExpired",
                  "This password reset link has expired."
                )
              );
            } else {
              message.displayGenericError();
            }
          });
      });
    }
  }
};
</script>
