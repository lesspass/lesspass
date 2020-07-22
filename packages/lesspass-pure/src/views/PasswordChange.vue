<template>
  <form v-on:submit.prevent="changePassword">
    <div class="form-group row">
      <div class="col-12">
        <div class="inner-addon left-addon">
          <i class="fa fa-user"></i>
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
    </div>
    <div class="form-group row">
      <div class="col-12">
        <master-password
          v-model="current_password"
          v-bind:label="$t('Current Master Password')"
          v-bind:email="email"
          v-bind:showEncryptButton="true"
          v-bind:EncryptButtonText="$t('Encrypt my master password')"
        ></master-password>
      </div>
    </div>
    <div class="form-group row">
      <div class="col-12">
        <master-password
          v-model="new_password"
          v-bind:label="$t('New Master Password')"
          v-bind:email="email"
          v-bind:showEncryptButton="true"
          v-bind:EncryptButtonText="$t('Encrypt my master password')"
        ></master-password>
      </div>
    </div>
    <div class="form-group row">
      <div class="col-12">
        <button id="loginButton" class="btn btn-primary">
          {{ $t("Change my password") }}
        </button>
      </div>
    </div>
  </form>
</template>
<script type="text/ecmascript-6">
import User from '../api/user';
import message from '../services/message';
import MasterPassword from '../components/MasterPassword.vue';
import { mapState } from "vuex";

export default {
  components: {
    MasterPassword
  },
  data() {
    return {
      email: '',
      new_password: '',
      current_password: ''
    };
  },
  methods: {
    changePassword(){
      if (!this.current_password ) {
        message.error(this.$t('PasswordRequired', 'A password is required'));
        return;
      }
      if (!this.new_password ) {
        message.error(this.$t('PasswordRequired', 'A password is required'));
        return;
      }
      User
        .changePassword(
          {
            current_password: this.current_password,
            new_password: this.new_password
          }
        )
        .then(() => {
          message.success(this.$t('ChangePasswordSuccessful', 'Your password was changed successfully.'));
          User
            .login({ email: this.email, password: this.new_password })
            .then(response => {
              this.$store.dispatch("login", response.data);
              this.$router.push({ name: "home" });
            })
            .catch(err => message.displayGenericError());
        })
        .catch(err => {
          message.displayGenericError();
        });
    }
  }
}
</script>
