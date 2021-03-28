<style>
#menu .white-link,
#menu .text-white {
  color: inherit;
}

#menu .white-link:hover,
#menu .white-link:focus,
#menu .white-link:active {
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
    <div class="card-header" v-bind:class="{ 'text-white bg-dark': isGuest }">
      <div class="row">
        <div class="col-4">
          <span id="title" v-on:click="fullReload()" class="white-link pointer"
            >LessPass</span
          >
        </div>
        <div class="col-8 text-end">
          <router-link
            class="white-link ps-3"
            :to="{ name: 'passwords' }"
            v-if="isAuthenticated"
            :title="$t('Saved passwords')"
          >
            <i class="fa  fa-lg fa-key"></i>
          </router-link>
          <router-link
            class="white-link ps-3"
            :to="{ name: 'settings' }"
            :title="$t('Settings')"
          >
            <i class="fa fa-lg fa-cog"></i>
          </router-link>
          <router-link
            class="white-link ps-3"
            :to="{ name: 'myaccount' }"
            v-if="isAuthenticated"
            :title="$t('My Account')"
          >
            <i class="fa fa-lg fa-user pointer"></i>
          </router-link>
          <router-link
            class="white-link ps-3"
            :to="{ name: 'login' }"
            v-if="isGuest"
            :title="$t('Sign In')"
          >
            <i class="fa fa-lg fa-sign-in pointer"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    fullReload() {
      this.$store.dispatch("resetPassword");
      this.$router.push({ name: "home" }).catch(e => {});
    }
  },
  computed: {
    ...mapGetters(["isAuthenticated", "isGuest"])
  }
};
</script>
