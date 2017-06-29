<template>
  <div class="login">
    <div class="form-group">
      <label for="email">Email</label>
    <input id="email" type="email" class="form-control" v-model="email">
    </div>
    <div class="form-group">
    <label for="password">Password</label>
    <master-password
      id="password"
      v-model="password"
      label="Master Password"
      v-bind:email="email"
      v-bind:showEncryptButton="true"
      EncryptButtonHelp="Click me to encrypt this password before sending it to lesspass.com"
      EncryptButtonText="Encrypt my master password"></master-password>
    </div>
  </div>
</template>
<script>
  import MasterPassword from 'lesspass-pure/src/components/MasterPassword.vue'

  export default {
    name: 'login',
    components: {
      MasterPassword
    },
    data(){
      return {
        email: '',
        password: ''
      }
    }
  }
</script>
