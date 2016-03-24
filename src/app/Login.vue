<style>
  #login {
    padding-top: 2rem;
  }
</style>
<template>
  <div id="login">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
          <form v-on:submit.prevent>
            <fieldset class="form-group">
              <label class="sr-only" for="email">{{$t('login.Email')}}</label>
              <input type="email" class="form-control form-control-sm" id="email"
                     placeholder="{{$t('login.Email')}}"
                     v-model="credentials.email">
            </fieldset>
            <fieldset class="form-group">
              <label class="sr-only" for="password">{{$t('login.Password')}}</label>
              <input type="password" class="form-control form-control-sm" id="password"
                     placeholder="{{$t('login.Password')}}"
                     v-model="credentials.password">
            </fieldset>
            <button type="submit" class="btn btn-primary btn-sm btn-block" @click="signin()">
              {{$t('login.Sign_in')}}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import auth from '../services/auth';
  import router from '../router';
  import logging from '../services/logging';

  export default {
    data() {
      return {
        user: auth.user,
        credentials: {
          email: '',
          password: '',
        },
      };
    },
    methods: {
      signin() {
        const credentials = {
          email: this.credentials.email,
          password: this.credentials.password,
        };
        auth.login(credentials)
          .then((data) => {
            console.log('Request succeeded with JSON response', data);
            router.go('/app/');
          }).catch((error) => {
          console.log('Request failed', error);
        });
      },
    },
  };
</script>
