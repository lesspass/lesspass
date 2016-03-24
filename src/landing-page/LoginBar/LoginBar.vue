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
      <nav class="nav nav-inline pull-right">
        <a class="nav-link" v-bind:class="{ 'bg-primary': $route.path=='/login/'}"
           v-link="{ path: '/app/' }">
          <i class="fa fa-lock"></i> {{ $t('login.login') }}
        </a>
        <a class="nav-link" v-bind:class="{ 'bg-primary': $route.path=='/register/' || $route.path=='/'}"
           v-link="{ path: '/register/' }">
          <i class="fa fa-user-plus"></i> {{ $t('login.register') }}
        </a>
      </nav>
    </div>
  </div>
</template>
