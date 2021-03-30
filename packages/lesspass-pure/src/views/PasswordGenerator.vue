<style>
#generated-password {
  font-family: Consolas, Menlo, Monaco, Courier New, monospace, sans-serif;
}
</style>
<template>
  <form
    id="password-generator"
    v-on:submit.prevent="generatePassword"
    novalidate
  >
    <div class="mb-3">
      <label for="site" class="sr-only">{{ $t("Site") }}</label>
      <div class="input-group">
        <span class="input-group-text"><i class="fa fa-globe"></i></span>
        <input
          id="site"
          type="text"
          name="site"
          ref="site"
          class="form-control"
          tabindex="0"
          autocorrect="off"
          autocapitalize="none"
          v-bind:placeholder="$t('Site')"
          v-model="password.site"
        />
      </div>
    </div>
    <remove-auto-complete></remove-auto-complete>
    <div class="mb-3">
      <label for="login" class="sr-only">{{ $t("Username") }}</label>
      <div class="input-group">
        <span class="input-group-text"><i class="fa fa-user"></i></span>
        <input
          id="login"
          type="text"
          name="login"
          ref="login"
          class="form-control"
          tabindex="0"
          autocomplete="off"
          autocorrect="off"
          autocapitalize="none"
          v-bind:placeholder="$t('Username')"
          v-model="password.login"
        />
      </div>
    </div>
    <div class="mb-3">
      <master-password
        ref="masterPassword"
        v-model="masterPassword"
        v-bind:label="$t('Master Password')"
      ></master-password>
    </div>
    <div class="mb-4">
      <options v-bind:options="password"></options>
    </div>
    <div class="mb-0 d-grid">
      <button
        id="generatePassword__btn"
        type="submit"
        tabindex="0"
        class="btn btn-primary"
        v-if="!passwordGenerated"
      >
        {{ $t("Generate") }}
      </button>
    </div>
    <div class="input-group" v-show="passwordGenerated">
      <button
        id="copyPasswordButton"
        class="btn btn-primary"
        tabindex="0"
        type="button"
        v-on:click="copyPassword()"
      >
        <i class="fa fa-clipboard"></i>
      </button>
      <input
        id="generated-password"
        type="password"
        class="form-control"
        tabindex="-1"
        ref="passwordGenerated"
        v-bind:value="passwordGenerated"
      />
      <button
        id="revealGeneratedPassword"
        type="button"
        class="btn btn-secondary"
        tabindex="0"
        v-on:click="togglePasswordType($refs.passwordGenerated)"
      >
        <i class="fa fa-eye"></i>
      </button>
      <button
        id="sharePasswordProfileButton"
        type="button"
        class="btn btn-secondary"
        tabindex="0"
        v-on:click="sharePasswordProfile()"
      >
        <i class="fa fa-share-alt"></i>
      </button>
    </div>
  </form>
</template>
<script>
import LessPass from "lesspass";
import { mapGetters, mapState } from "vuex";
import copy from "copy-text-to-clipboard";
import RemoveAutoComplete from "../components/RemoveAutoComplete.vue";
import MasterPassword from "../components/MasterPassword.vue";
import Options from "../components/Options.vue";
import { showTooltip, hideTooltip } from "../services/tooltip";
import message from "../services/message";
import * as urlParser from "../services/url-parser";

export default {
  name: "password-generator-view",
  components: {
    RemoveAutoComplete,
    MasterPassword,
    Options
  },
  computed: {
    ...mapState(["password", "passwords"]),
    ...mapGetters(["passwordURL"])
  },
  beforeMount() {
    urlParser.getSite().then(site => {
      this.$store.dispatch("loadPasswordProfile", { site });
    });
    this.$store.dispatch("getPasswordFromUrlQuery", {
      query: this.$route.query
    });
  },
  mounted() {
    setTimeout(() => {
      this.focusBestInputField();
    }, 500);
  },
  data() {
    return {
      masterPassword: "",
      passwordGenerated: "",
      cleanTimeout: null
    };
  },
  watch: {
    password: {
      handler: function() {
        this.cleanErrors();
      },
      deep: true
    },
    masterPassword: function(newMasterPassword) {
      this.masterPassword = newMasterPassword;
      this.cleanErrors();
    }
  },
  methods: {
    togglePasswordType(element) {
      if (element.type === "password") {
        element.type = "text";
      } else {
        element.type = "password";
      }
    },
    cleanErrors() {
      clearTimeout(this.cleanTimeout);
      this.passwordGenerated = "";
      this.$refs.masterPassword.hide();
    },
    cleanFormIn30Seconds() {
      const thirtySecondsInMillisecond = 30 * 1000;
      this.cleanTimeout = setTimeout(() => {
        this.masterPassword = "";
        this.passwordGenerated = "";
        this.$refs.masterPassword.hide();
      }, thirtySecondsInMillisecond);
    },
    generatePassword() {
      const site = this.password.site;
      const login = this.password.login;
      const masterPassword = this.masterPassword;
      if ((!site && !login) || !masterPassword) {
        message.error(
          this.$t(
            "SiteLoginMasterPasswordMandatory",
            "Site, login, and master password fields are mandatory."
          )
        );
        return;
      }
      const lowercase = this.password.lowercase;
      const uppercase = this.password.uppercase;
      const numbers = this.password.numbers;
      const symbols = this.password.symbols;
      if (!lowercase && !uppercase && !numbers && !symbols) {
        message.error(
          this.$t(
            "AtLeastOneOptionShouldBeSelected",
            "You must select at least one option among lowercase, uppercase, numbers or symbols."
          )
        );
        return;
      }
      const length = this.password.length;
      if (length > 35) {
        message.warning(
          this.$t(
            "LengthDeprecationWarning",
            "The maximum length of a password is 35 characters."
          )
        );
      }
      this.cleanErrors();
      const passwordProfile = {
        lowercase,
        uppercase,
        numbers,
        symbols,
        length: this.password.length,
        counter: this.password.counter,
        version: this.password.version
      };
      return LessPass.generatePassword(
        site,
        login,
        masterPassword,
        passwordProfile
      ).then(passwordGenerated => {
        this.passwordGenerated = passwordGenerated;
        this.cleanFormIn30Seconds();
      });
    },
    focusBestInputField() {
      try {
        const site = this.$refs.site;
        const login = this.$refs.login;
        const masterPassword = this.$refs.masterPassword;
        if (site && !site.value) return void site.focus();
        if (login && !login.value) return void login.focus();
        masterPassword.$refs.passwordField.focus();
      } catch (err) {
        console.error("Can't focus password field");
      }
    },
    copyPassword() {
      const copied = copy(this.passwordGenerated);
      if (copied) {
        const element = document.getElementById("copyPasswordButton");
        showTooltip(element, this.$t("Copied", "copied !"));
        setTimeout(() => hideTooltip(element), 2000);
      } else {
        message.warning(
          this.$t("SorryCopy", "Sorry, copying only works in modern browsers.")
        );
      }
    },
    sharePasswordProfile() {
      const copied = copy(this.passwordURL);
      if (copied) {
        const copySuccessMessage = this.$t(
          "PasswordProfileCopied",
          "Your password profile has been copied"
        );
        const element = document.getElementById("sharePasswordProfileButton");
        showTooltip(element, copySuccessMessage, "left");
        setTimeout(() => hideTooltip(element), 2000);
      } else {
        message.warning(
          this.$t("SorryCopy", "Sorry, copying only works in modern browsers.")
        );
      }
    },
    setSite(site) {
      this.password.site = site;
    }
  }
};
</script>
