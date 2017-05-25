<template>
  <div id="masterPassword" class="input-group inner-addon left-addon">
    <label for="password" class="sr-only">{{ $t('Master Password') }}</label>
      <i class="fa fa-lock"></i>
      <input id="password"
             name="password"
             ref="password"
             type="password"
             class="form-control"
             autocorrect="off"
             autocapitalize="off"
             v-model="password"
             v-bind:placeholder="$t('Master Password')"
             v-on:input="updatePassword($event.target.value)"
             v-on:keyup.enter="triggerEnterMethod"
             v-on:blur="hidePassword($refs.password)">
    <fingerprint v-bind:fingerprint="fingerprint" v-on:click.native="togglePasswordType($refs.password)">
    </fingerprint>
  </div>
</template>
<script type="text/ecmascript-6">
  import debounce from 'lodash.debounce';
  import Fingerprint from './Fingerprint.vue';

  export default {
    components: {
      Fingerprint
    },
    props: ['value', 'keyupEnter'],
    data(){
      return {
        fingerprint: '',
        password: this.value
      }
    },
    watch: {
      'value': function(password) {
        this.password = password;
        this.updatePassword(password);
      }
    },
    methods: {
      updatePassword: function(password) {
        this.fingerprint = Math.random().toString(36).substring(7);
        this.showRealFingerprint(password);
        this.$emit('input', password)
      },
      showRealFingerprint: debounce(function(password) {
        this.fingerprint = password;
      }, 500),
      togglePasswordType(element){
        if (element.type === 'password') {
          element.type = 'text';
        } else {
          element.type = 'password';
        }
      },
      hidePassword(element){
        element.type = 'password';
      },
      triggerEnterMethod(){
        if (typeof this.keyupEnter !== 'undefined' && this.password) {
          this.keyupEnter()
        }
      }
    }
  }
</script>
