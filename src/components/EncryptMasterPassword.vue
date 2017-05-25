<template>
  <div id="encryptMasterPassword">
    <master-password
      v-model="password"
      v-on:input="$emit('input', password)"></master-password>
    <button type="button"
            class="btn btn-link btn-sm hint--top hint--medium p-0"
            v-on:click="encryptMasterPassword()"
            v-bind:data-hint="$t('EncryptMasterPassword', 'Click me to encrypt this password before sending it to lesspass.com')">
      <small>{{$t('Encrypt my master password')}}</small>
    </button>
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
