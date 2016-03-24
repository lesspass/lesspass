<style>
  #login-bar {
    background-color: #424242;
    height: 38px;
    color: #F5F5F5;
  }

  #login-bar .nav-link {
    padding-left: 1em;
    padding-right: 1em;
    color: inherit;
  }

  #login-bar .nav-link {
    line-height: 38px;
  }
</style>
<template>
  <div id="login-bar">
    <div class="container">
      <nav class="nav nav-inline pull-right" v-if="!user.authenticated">
        <a class="nav-link" v-bind:class="{ 'bg-primary': $route.path=='/login/'}"
           v-link="{ path: '/app/' }">
          <i class="fa fa-lock"></i> {{ $t('login.login') }}
        </a>
        <a class="nav-link" v-bind:class="{ 'bg-primary': $route.path=='/register/' || $route.path=='/'}"
           v-link="{ path: '/register/' }">
          <i class="fa fa-user-plus"></i> {{ $t('login.register') }}
        </a>
      </nav>
      <nav class="nav nav-inline pull-right" v-if="user.authenticated">
        <a href="/" class="nav-link" v-on:click.stop.prevent="logout()">
          <i class="fa fa-sign-out"></i> {{ $t('login.logout') }}
        </a>
      </nav>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import auth from '../../services/auth';
  import logging from '../../services/logging';


  export default {
    data() {
      return {
        user: auth.user,
      };
    },
    methods: {
      logout() {
        auth.logout(() => {
          logging.success(this.$t('login.logout_ok'));
          this.$router.go('/');
        });
      },
    },
  };
</script>

