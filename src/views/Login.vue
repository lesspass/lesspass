<style>
  #signInButton {
    border-right: none;
  }

  #registerButton {
    border-left: none;
  }
</style>
<template>
  <form v-on:submit.prevent="signIn">
    <div class="form-group">
      <div class="inner-addon left-addon">
        <i class="fa fa-globe"></i>
        <input id="baseURL"
               class="form-control"
               type="text"
               placeholder="https://lesspass.com"
               v-model="baseURL">
      </div>
    </div>
    <div class="form-group row">
      <div class="col-12">
        <div class="inner-addon left-addon">
          <i class="fa fa-user"></i>
          <input id="email"
                 class="form-control"
                 name="username"
                 type="email"
                 placeholder="Email"
                 required
                 v-model="email">
        </div>
      </div>
    </div>
    <div class="form-group mb-2">
      <master-password v-model="password"></master-password>
      <label class="custom-control custom-checkbox hint--top hint--medium mb-0"
             data-hint="Check me to generate encrypted password for lesspass.com">
        <input type="checkbox" class="custom-control-input" v-model="transformMasterPassword">
        <span class="custom-control-indicator"></span>
        <span class="custom-control-description text-muted">
                    encrypt before use
                </span>
      </label>
    </div>
    <div class="form-group row no-gutters mb-0">
      <div class="col">
        <button id="signInButton" class="btn btn-block" type="submit"
                v-bind:class="{ 'btn-warning': version===1, 'btn-primary': version===2 }">
          Sign In
        </button>
      </div>
      <div class="col">
        <button id="registerButton" class="btn btn-secondary btn-block" type="button" v-on:click="register">
          Register
        </button>
      </div>
    </div>
    <div class="form-group my-0">
      <router-link :to="{ name: 'passwordReset'}">
        <small>Forgot your password?</small>
      </router-link>
    </div>
  </form>
</template>
<script type="text/ecmascript-6">
  import LessPass from 'lesspass';
  import User from '../api/user';
  import {mapGetters} from 'vuex';
  import MasterPassword from '../components/MasterPassword.vue';
  import message from '../services/message';

  export default {
    data() {
      return {
        email: '',
        password: '',
        baseURL: 'https://lesspass.com',
        transformMasterPassword: false,
      };
    },
    components: {
      MasterPassword
    },
    computed: {
      ...mapGetters(['version'])
    },
    watch: {
      password: function() {
        this.transformMasterPassword = false;
      },
      transformMasterPassword: function(transformPassword) {
        if (!transformPassword) {
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
        return LessPass.generatePassword('lesspass.com', this.email, this.password, defaultPasswordProfile).then(generatedPassword => {
          this.password = generatedPassword;
        });
      }
    },
    methods: {
      formIsValid(){
        if (!this.email || !this.password || !this.baseURL) {
          message.error('LessPass URL, email and password are mandatory');
          return false;
        }
        return true;
      },
      signIn(){
        if (this.formIsValid()) {
          const baseURL = this.baseURL;
          User.login({email: this.email, password: this.password}, {baseURL})
            .then(response => {
              this.$store.dispatch('login', {token: response.token, baseURL});
              this.$router.push({name: 'home'});
            })
            .catch(err => {
              if (err.response === undefined && baseURL !== "https://lesspass.com") {
                message.error('Your LessPass Database is not running');
              } else if (err.response.status === 400) {
                message.error('The email and password you entered did not match our records. Please double-check and try again.');
              } else {
                message.displayGenericError();
              }
            });
        }
      },
      register(){
        if (this.formIsValid()) {
          const baseURL = this.baseURL;
          User.register({email: this.email, password: this.password}, {baseURL})
            .then(() => {
              message.success(`Welcome ${this.email}, thank you for signing up.`);
              this.signIn();
            })
            .catch(err => {
              if (err.response && typeof err.response.data.email !== 'undefined') {
                if (err.response.data.email[0].indexOf('already exists') !== -1) {
                  message.error('This email is already registered. Want to login or recover your password?');
                }
                if (err.response.data.email[0].indexOf('valid email') !== -1) {
                  message.error('Please enter a valid email');
                }
              } else {
                message.displayGenericError();
              }
            });
        }
      }
    }
  }
</script>

