<template>
  <form v-on:submit.prevent="signIn">
    <div class="form-group">
      <div class="inner-addon left-addon">
        <i class="fa fa-globe"></i>
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
    <div class="form-group mb-2">
      <master-password
        v-model="password"
        v-bind:label="$t('Master Password')"
        v-bind:email="email"
        v-bind:showEncryptButton="true"
        v-bind:EncryptButtonText="$t('Encrypt my master password')"
      ></master-password>
    </div>
    <div class="form-group">
      <button id="signInButton" class="btn btn-primary btn-block">
        {{ $t("Sign In") }}
      </button>
    </div>
    <div class="form-group">
      <button
        id="login__forgot-password-btn"
        type="button"
        class="btn btn-link btn-sm p-0"
        v-on:click="$router.push({ name: 'passwordReset' })"
      >
        <small>{{ $t("ForgotPassword", "Forgot your password?") }}</small>
      </button>
    </div>
    <div class="form-group mb-0">
      <button
        id="login__no-account-btn"
        type="button"
        class="btn btn-light btn-block"
        v-on:click="$router.push({ name: 'register' })"
      >
        <small>{{
          $t(
            "NewToLessPassCreateAnAccount",
            "New to LessPass? Create an account"
          )
        }}</small>
      </button>
    </div>
  </form>
</template>
<script type="text/ecmascript-6">
import User from "../api/user";
import { defaultbaseURL } from "../api/default";
import MasterPassword from "../components/MasterPassword.vue";
import message from "../services/message";
import LessPassVue from "lesspass-pure/src/LessPass.vue";
import LessPassEntropy from "lesspass-entropy";
import LessPassCrypto from "lesspass-crypto";
import { random } from "lodash";

export default {
  data() {
    return {
      email: "",
      password: "",
      baseURL: localStorage.getItem("baseURL") || defaultbaseURL
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
    signIn() {
      if (this.formIsValid()) {
        const baseURL = this.baseURL;
        this.$store.dispatch("setBaseURL", { baseURL });
        User.login({ email: this.email, password: this.password })
          .then(response => {
            User.getLoggedUserInformation().then(response => {
              if (response.data.encrypted_key === null) {
                LessPassEntropy.generateUserKey().then(key => {
                  const encrypted_key = LessPassCrypto.encryptKey(
                    key,
                    this.password
                  );
                  Password.all().then(passwords => {
                    allPasswords = passwords.map(password => {
                      return {
                        login: password.login,
                        site: password.site,
                        lowercase: password.lowercase,
                        uppercase: password.uppercase,
                        symbols: password.symbols,
                        numbers: password.numbers,
                        length: password.length
                      };
                    });
                    console.log(allPasswords);
                  });
                });
              } else {
                console.log("user has encrypted key");
              }
            });
            this.$store.dispatch("login", response.data);
            this.$store.dispatch("cleanMessage");
            this.$router.push({ name: "home" });
          })
          .catch(err => {
            if (err.response === undefined && baseURL !== defaultbaseURL) {
              message.error(
                this.$t("DBNotRunning", "Your LessPass Database is not running")
              );
            } else if (err.response && err.response.status === 401) {
              message.error(
                this.$t(
                  "LoginIncorrectError",
                  "The email and password you entered did not match our records. Please double-check and try again."
                )
              );
            } else {
              message.displayGenericError();
            }
          });
      }
    }
  }
};
</script>
