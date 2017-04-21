<style>
  #menu .white-link, #menu .text-white {
    color: inherit;
  }

  #menu .white-link:hover, #menu .white-link:focus, #menu .white-link:active {
    text-decoration: none;
    color: inherit;
  }

  .card-inverse {
    background-color: #333;
    border-color: #333;
  }
</style>
<template>
  <div id="menu">
    <div class="card-header" v-bind:class="{ 'card-inverse': isGuest}">
      <div class="row">
        <div class="col-3">
          <span v-on:click="fullReload()" class="white-link pointer">LessPass</span>
        </div>
        <div class="col-9 text-right">
          <span v-if="saved && isAuthenticated">
            <small><i class="fa fa-lg fa-check pl-3" aria-hidden="true"></i> saved</small>
          </span>
          <span v-on:click="saveOrUpdatePassword()" class="white-link"
                v-if="!saved && isAuthenticated && $store.state.password.site !== ''">
            <i class="fa fa-lg fa-save pointer"></i>
          </span>
          <router-link class="white-link pl-3" :to="{ name: 'passwords'}" v-if="isAuthenticated">
            <i class="fa  fa-lg fa-key" aria-hidden="true"></i>
          </router-link>
          <button class="white-link btn btn-link p-0 m-0 pl-3" type="button" v-if="isAuthenticated"
                  v-on:click="logout">
            <i class="fa fa-lg fa-sign-out" aria-hidden="true"></i>
          </button>
          <router-link class="white-link pl-3" :to="{ name: 'login'}" v-if="isGuest">
            <i class="fa fa-lg fa-sign-in pointer" aria-hidden="true"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex';

  export default {
    data(){
      return {
        saved: false
      }
    },
    methods: {
      fullReload(){
        this.$store.dispatch('savePassword', {password: this.defaultPassword});
        this.$router.push({name: 'home'});
      },
      logout(){
        this.$store.dispatch('logout');
        this.$router.push({name: 'home'});
      },
      saveOrUpdatePassword(){
        this.$store.dispatch('saveOrUpdatePassword');
        this.saved = true;
        setTimeout(() => {
          this.saved = false;
        }, 3000);
      }
    },
    computed: mapGetters([
      'isAuthenticated',
      'isGuest',
      'password',
      'defaultPassword'
    ])
  }
</script>
