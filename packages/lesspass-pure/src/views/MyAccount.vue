<template>
  <div>
    <div class="mb-3">
      <h5>{{ $t("Change my password") }}</h5>
    </div>
    <form v-on:submit.prevent="changePassword">
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
          v-model="current_password"
          v-bind:label="$t('Current Master Password')"
        ></master-password>
      </div>
      <div class="mb-3">
        <master-password
          v-model="new_password"
          v-bind:label="$t('New Master Password')"
        ></master-password>
      </div>
      <div class="mb-3">
        <button id="changeMyPasswordButton" class="btn btn-primary">
          {{ $t("Change my password") }}
        </button>
      </div>
    </form>
    <hr />
    <div>
      <button
        id="signOutButton"
        class="btn btn-success"
        type="button"
        v-on:click="logout"
      >
        {{ $t("Sign out") }}
      </button>
    </div>
  </div>
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
      new_password: "",
      current_password: ""
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "home" }).catch(() => {});
    },
    changePassword: async function() {
      if (!this.email) {
        message.error(this.$t("EmailRequiredError", "Email is required"));
        return;
      }
      if (!this.current_password || !this.new_password) {
        message.error(
          this.$t(
            "MasterPasswordsRequired",
            "Old master password and new master password are required."
          )
        );
        return;
      }
      if (this.current_password === this.new_password) {
        message.error(
          this.$t(
            "MasterPasswordsEqualsNoNeedToChange",
            "Old master password and new master password are the same. No need to change it!"
          )
        );
        return;
      }
      const current_password = await encryptPassword(
        this.email,
        this.current_password
      );
      const new_password = await encryptPassword(this.email, this.new_password);
      User.changePassword({
        current_password,
        new_password
      })
        .then(() => {
          message.success(
            this.$t(
              "ChangePasswordSuccessful",
              "Your password was changed successfully."
            )
          );
          User.login({ email: this.email, password: new_password })
            .then(response => {
              this.$store.dispatch("login", response.data);
              this.$router.push({ name: "home" });
            })
            .catch(err => message.displayGenericError());
        })
        .catch(err => {
          message.error(
            this.$t(
              "ChangePasswordError",
              "We cannot change your password with the information provided."
            )
          );
        });
    }
  }
};
</script>
