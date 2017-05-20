<template>
  <div id="encryptMasterPassword">
    <master-password
      v-model="password"
      showEncryptMasterPassword="true"
      v-on:input="$emit('input', password)"
      v-on:encryptMasterPassword="encryptMasterPassword"></master-password>
  </div>
</template>
<script type="text/ecmascript-6">
  import LessPass from 'lesspass';
  import MasterPassword from './MasterPassword.vue';
  import message from '../services/message';

  export default {
    components: {
      MasterPassword
    },
    props: ['value', 'email'],
    data(){
      return {
        password: this.value
      }
    },
    methods: {
      encryptMasterPassword(){
        if (!this.email) {
          message.error(this.$t('EmailRequired', 'An email is required'));
          return;
        }
        const defaultPasswordProfile = {
          lowercase: true,
          uppercase: true,
          numbers: true,
          symbols: true,
          length: 16,
          counter: 1,
          version: 2,
        };
        return LessPass
          .generatePassword('lesspass.com', this.email, this.password, defaultPasswordProfile)
          .then(generatedPassword => {
            this.password = generatedPassword;
          });
      }
    }
  }
</script>
