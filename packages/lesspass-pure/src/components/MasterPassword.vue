<style>
  #fingerprint {
    min-width: 90px;
    text-align: center;
    background-color: transparent;
    color: white;
  }

  #fingerprint i {
    color: black;
    position: relative;
    padding: 0;
    text-shadow: 1px 1px 0 white;
    font-size: 1.3em;
  }
</style>
<template>
  <div class="masterPassword">
    <div class="input-group inner-addon left-addon">
      <label for="passwordField" class="sr-only">
        {{ label }}
      </label>
      <i class="fa fa-lock"></i>
      <input id="passwordField"
             name="passwordField"
             ref="passwordField"
             type="password"
             class="form-control"
             autocorrect="off"
             autocapitalize="off"
             v-bind:value="value"
             v-bind:placeholder="label"
             v-on:input="updateValue($event.target.value)"
             v-on:keyup.enter="$emit('keyupEnter')">
      <span class="input-group-btn"
            v-if="fingerprint && value"
            v-on:click="togglePasswordType">
        <button id="fingerprint" class="btn" type="button" tabindex="-1">
            <small>
              <i class="fa fa-fw" v-bind:class="[icon1]" v-bind:style="{ color: color1 }"></i>
              <i class="fa fa-fw" v-bind:class="[icon2]" v-bind:style="{ color: color2 }"></i>
              <i class="fa fa-fw" v-bind:class="[icon3]" v-bind:style="{ color: color3 }"></i>
            </small>
        </button>
      </span>
    </div>
    <button id="encryptMasterPassword__btn"
            type="button"
            class="btn btn-link btn-sm p-0"
            v-if="showEncryptButton"
            v-on:click="encryptMasterPassword()"
            v-bind:class="{'disabled': email === ''}">
      <small>{{ EncryptButtonText }}</small>
    </button>
  </div>
</template>
<script>
  import LessPass from 'lesspass';
  import debounce from 'lodash.debounce';
  import defaultPasswordProfile from '../store/defaultPassword';

  export default {
    name: 'masterPassword',
    props: {
      value: String,
      label: String,
      email: String,
      showEncryptButton: {
        type: Boolean,
        default: false
      },
      EncryptButtonText: String
    },
    data(){
      return {
        fingerprint: '',
        icon1: '',
        icon2: '',
        icon3: '',
        color1: '',
        color2: '',
        color3: ''
      }
    },
    methods: {
      updateValue(newPassword){
        const fakePassword = Math.random().toString(36).substring(7);
        this.setFingerprint(fakePassword);
        this.showRealFingerprint(newPassword);
        this.$refs.passwordField.value = newPassword;
        this.$emit('input', newPassword);
      },
      togglePasswordType(){
        const element = this.$refs.passwordField;
        if (element.type === 'password') {
          element.type = 'text';
        } else {
          element.type = 'password';
        }
      },
      hidePassword(){
        this.$refs.passwordField.type = 'password';
      },
      getColor(color) {
        var colors = ['#000000', '#074750', '#009191', '#FF6CB6', '#FFB5DA', '#490092', '#006CDB', '#B66DFF', '#6DB5FE', '#B5DAFE', '#920000', '#924900', '#DB6D00', '#24FE23'];
        var index = parseInt(color, 16) % colors.length;
        return colors[index];
      },
      getIcon(hash) {
        var icons = ['fa-hashtag', 'fa-heart', 'fa-hotel', 'fa-university', 'fa-plug', 'fa-ambulance', 'fa-bus', 'fa-car', 'fa-plane', 'fa-rocket', 'fa-ship', 'fa-subway', 'fa-truck', 'fa-jpy', 'fa-eur', 'fa-btc', 'fa-usd', 'fa-gbp', 'fa-archive', 'fa-area-chart', 'fa-bed', 'fa-beer', 'fa-bell', 'fa-binoculars', 'fa-birthday-cake', 'fa-bomb', 'fa-briefcase', 'fa-bug', 'fa-camera', 'fa-cart-plus', 'fa-certificate', 'fa-coffee', 'fa-cloud', 'fa-coffee', 'fa-comment', 'fa-cube', 'fa-cutlery', 'fa-database', 'fa-diamond', 'fa-exclamation-circle', 'fa-eye', 'fa-flag', 'fa-flask', 'fa-futbol-o', 'fa-gamepad', 'fa-graduation-cap'];
        var index = parseInt(hash, 16) % icons.length;
        return icons[index];
      },
      setFingerprint(password){
        LessPass.createFingerprint(password).then(fingerprint => {
          this.fingerprint = fingerprint;

          const hash1 = fingerprint.substring(0, 6);
          this.icon1 = this.getIcon(hash1);
          this.color1 = this.getColor(hash1);

          const hash2 = fingerprint.substring(6, 12);
          this.icon2 = this.getIcon(hash2);
          this.color2 = this.getColor(hash2);

          const hash3 = fingerprint.substring(12, 18);
          this.icon3 = this.getIcon(hash3);
          this.color3 = this.getColor(hash3);
        });
      },
      showRealFingerprint: debounce(function(password) {
        this.setFingerprint(password);
      }, 500),
      encryptMasterPassword(){
        const password = this.$refs.passwordField.value;
        return LessPass
          .generatePassword('lesspass.com', this.email, password, defaultPasswordProfile)
          .then(generatedPassword => {
            this.updateValue(generatedPassword);
          });
      }
    }
  }
</script>
