<template>
  <form v-on:submit.prevent="exportPasswords">
    <div class="mb-3">
      <h5>{{ $t("Export your passwords") }}</h5>
    </div>
    <div class="form-group">
      <master-password
        v-model="masterPassword"
        v-bind:label="$t('Master Password')"
      ></master-password>
    </div>
    <div class="form-group">
      <button id="signInButton" class="btn btn-primary btn-block">
        {{ $t("Export") }}
      </button>
    </div>
    <div class="form-group">
      <p class="text-danger">
        Be careful your passwords will be in clear text. Don't leave this file
        lying around for too long. Import it in your new password manager and
        delete it.
      </p>
      <p>
        The export is a csv file with the following header
        "name,url,username,password". It's similar to the Google Chrome export.
      </p>
    </div>
  </form>
</template>
<script>
import LessPass from "lesspass";
import MasterPassword from "../components/MasterPassword.vue";
import message from "../services/message";
import { mapState } from "vuex";
import { saveAs } from "file-saver";

export default {
  data() {
    return {
      masterPassword: "",
    };
  },
  components: {
    MasterPassword,
  },
  beforeMount() {
    this.$store.dispatch("getPasswords");
  },
  computed: mapState(["passwords"]),
  methods: {
    formIsValid() {
      if (!this.masterPassword) {
        message.error(
          this.$t("MasterPasswordRequired", "Your master password is required")
        );
        return false;
      }
      return true;
    },
    exportPasswords: async function () {
      if (this.formIsValid()) {
        let content = "name,url,username,password\n";
        for (let i = 0; i < this.passwords.length; i++) {
          const passwordProfile = this.passwords[i];
          passwordProfile["digits"] = passwordProfile["numbers"];
          console.log(JSON.stringify(passwordProfile, null, 2));
          console.log(this.masterPassword);
          const generatedPassword = await LessPass.generatePassword(
            passwordProfile,
            this.masterPassword
          );
          content += `${passwordProfile.site},https://${passwordProfile.site},${passwordProfile.login},${generatedPassword}\n`;
        }
        var blob = new Blob([content], { type: "text/csv;charset=utf-8" });
        saveAs(blob, "LessPass passwords.csv");
        message.success("Your passwords has been exported successfully.");
      }
    },
  },
};
</script>
