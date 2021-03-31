<template>
  <form v-on:submit.prevent="signIn">
    <div class="form-group row">
      <div class="col-12">
        <div class="inner-addon left-addon">
          <i class="fa fa-user"></i>
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
    </div>
    <div class="form-group">
      <master-password
        v-model="password"
        v-bind:label="$t('Master Password')"
      ></master-password>
    </div>
    <div class="form-group">
      <button
        id="registerButton"
        class="btn btn-primary btn-block"
        type="button"
        v-on:click="register"
      >
        {{ $t("Register") }}
      </button>
    </div>
    <div class="form-group mb-0">
      <button
        id="login__no-account-btn"
        type="button"
        class="btn btn-outline-dark btn-block"
        v-on:click="$router.push({ name: 'login' })"
      >
        {{ $t("AlreadyOnLessPass", "Already on LessPass? Sign In") }}
      </button>
    </div>
  </form>
</template>
<script>
import User from "../api/user";
import MasterPassword from "../components/MasterPassword.vue";
import message from "../services/message";
import { encryptPassword } from "../services/encryption";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  components: {
    MasterPassword
  },
  methods: {
    formIsValid() {
      if (!this.email || !this.password) {
        message.error(
          this.$t("LoginFormInvalid", "Email and password are mandatory")
        );
        return false;
      }
      return true;
    },
    register() {
      if (this.formIsValid()) {
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
              if (
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
