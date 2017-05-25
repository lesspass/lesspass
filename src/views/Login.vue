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
               v-bind:placeholder="$t('LessPass Database Url')"
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
                 v-bind:placeholder="$t('Email')"
                 required
                 v-model="email">
        </div>
      </div>
    </div>
    <div class="form-group mb-2">
      <encrypt-master-password v-model="password" v-bind:email="email"></encrypt-master-password>
    </div>
    <div class="form-group row no-gutters mb-0">
      <div class="col">
        <button id="signInButton" class="btn btn-block" type="submit"
                v-bind:class="{ 'btn-warning': version===1, 'btn-primary': version===2 }">
          {{$t('Sign In')}}
        </button>
      </div>
      <div class="col">
        <button id="registerButton" class="btn btn-secondary btn-block" type="button" v-on:click="register">
          {{$t('Register')}}
        </button>
      </div>
    </div>
    <div class="form-group mb-0">
      <button type="button"
              class="btn btn-link btn-sm p-0"
              v-on:click="$router.push({name: 'passwordReset'})">
        <small>{{$t('ForgotPassword', 'Forgot your password?')}}</small>
      </button>
    </div>
  </form>
</template>
<script type="text/ecmascript-6">
  import User from '../api/user';
  import {mapGetters} from 'vuex';
  import EncryptMasterPassword from '../components/EncryptMasterPassword.vue';
  import message from '../services/message';

  export default {
    data() {
      return {
        email: '',
        password: '',
        baseURL: 'https://lesspass.com'
      };
    },
    components: {
      EncryptMasterPassword
    },
    computed: {
      ...mapGetters(['version'])
    },
    methods: {
      formIsValid(){
        if (!this.email || !this.password || !this.baseURL) {
          message.error(this.$t('LoginFormInvalid', 'LessPass URL, email, and password are mandatory'));
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
                message.error(this.$t('DBNotRunning', 'Your LessPass Database is not running'));
              } else if (err.response.status === 400) {
                message.error(this.$t('LoginIncorrectError', 'The email and password you entered did not match our records. Please double-check and try again.'));
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
              message.success(this.$t('WelcomeRegister', 'Welcome {email}, thank you for signing up.', {email: this.email}));
              this.signIn();
            })
            .catch(err => {
              if (err.response && typeof err.response.data.email !== 'undefined') {
                if (err.response.data.email[0].indexOf('already exists') !== -1) {
                  message.error(this.$t('EmailAlreadyExist', 'This email is already registered. Want to login or recover your password?'));
                }
                if (err.response.data.email[0].indexOf('valid email') !== -1) {
                  message.error(this.$t('EmailInvalid', 'Please enter a valid email'));
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

