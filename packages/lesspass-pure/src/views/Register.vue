<template>
  <form v-on:submit.prevent="signIn">
    <div class="mb-3">
      <div class="input-group">
        <span class="input-group-text"><i class="fa fa-globe"></i></span>
        <input
          id="baseURL"
          type="text"
          class="form-control"
          autocapitalize="none"
          v-bind:placeholder="$t('LessPass Database Url')"
          v-model="baseURL"
        />
      </div>
    </div>
    <div class="mb-3">
      <div class="input-group">
        <span class="input-group-text"><i class="fa fa-user"></i></span>
        <input
          id="email"
          class="form-control"
          name="username"
          type="email"
          autocapitalize="none"
          v-bind:placeholder="$t('Email')"
          required
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
      <button
        id="registerButton"
        class="btn btn-primary"
        type="button"
        v-on:click="register"
      >
        {{ $t("Register") }}
      </button>
    </div>
    <div class="mb-0 d-grid">
      <button
        id="login__no-account-btn"
        type="button"
        class="btn btn-outline-dark"
        v-on:click="$router.push({ name: 'login' })"
      >
        <small>{{
          $t("SignInInstead", "Already have an account? Sign In instead")
        }}</small>
      </button>
    </div>
  </form>
</template>
<script>
import User from "../api/user";
import { getBaseURL, defaultBaseURL } from "../api/baseURL";
import MasterPassword from "../components/MasterPassword.vue";
import message from "../services/message";
import { encryptPassword } from "../services/encryption";

export default {
  data() {
    return {
      email: "",
      password: "",
      baseURL: getBaseURL()
    };
  },
  components: {
    MasterPassword
  },
  methods: {
    formIsValid() {
      if (!this.email || !this.password || !this.baseURL) {
        message.error(
          this.$t(
            "LoginFormInvalid",
            "LessPass URL, email, and password are mandatory"
          )
        );
        return false;
      }
      return true;
    },
    register() {
      if (this.formIsValid()) {
        const baseURL = this.baseURL;
        this.$store.dispatch("setBaseURL", { baseURL });

        encryptPassword(this.email, this.password).then(encryptedPassword => {
          User.register({ email: this.email, password: encryptedPassword })
            .then(() => {
              message.success(
                this.$t(
                  "WelcomeRegister",
                  "Welcome {email}, thank you for signing up.",
                  { email: this.email }
                )
              );
              return User.login({
                email: this.email,
                password: encryptedPassword
              })
                .then(response => {
                  this.$store.dispatch("login", response.data);
                  this.$router.push({ name: "home" });
                })
                .catch(() => message.displayGenericError());
            })
            .catch(err => {
              if (err.response === undefined && baseURL !== defaultBaseURL) {
                message.error(
                  this.$t(
                    "DBNotRunning",
                    "Your LessPass Database is not running"
                  )
                );
              } else if (
                err.response &&
                err.response.data &&
                typeof err.response.data.email !== "undefined"
              ) {
                if (
                  err.response.data.email[0].indexOf("already exists") !== -1
                ) {
                  message.error(
                    this.$t(
                      "EmailAlreadyExist",
                      "This email is already registered. Want to login or recover your password?"
                    )
                  );
                }
                if (err.response.data.email[0].indexOf("valid email") !== -1) {
                  message.error(
                    this.$t("EmailInvalid", "Please enter a valid email")
                  );
                }
              } else if (
                err.response &&
                err.response.data &&
                typeof err.response.data.password !== "undefined"
              ) {
                if (err.response.data.password[0].indexOf("too short") !== -1) {
                  message.error(
                    this.$t(
                      "PasswordTooShort",
                      "This password is too short. It must contain at least 8 characters."
                    )
                  );
                }
                if (
                  err.response.data.password[0].indexOf("too common") !== -1
                ) {
                  message.error(
                    this.$t("PasswordTooCommon", "This password is too common.")
                  );
                }
              } else {
                message.displayGenericError();
              }
            });
        });
      }
    }
  }
};
</script>
