<style>
#menu .menu-link,
#menu .text-white {
  color: inherit;
}

#menu .menu-link:hover,
#menu .menu-link:focus,
#menu .menu-link:active {
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
          <span id="title" v-on:click="fullReload()" class="menu-link pointer"
            >LessPass</span
          >
        </div>
        <div class="col-8 text-right">
          <span v-if="saved && isAuthenticated">
            <small><i class="fa fa-lg fa-check pl-3"></i> saved</small>
          </span>
          <span
            class="menu-link"
            v-on:click="saveOrUpdatePassword()"
            v-if="
              !saved &&
                isAuthenticated &&
                $store.state.password.site !== '' &&
                $store.state.route.path === '/'
            "
            :title="$t('Save')"
          >
            <i class="fa fa-lg fa-save pointer"></i>
          </span>
          <router-link
            class="menu-link pl-3"
            :to="{ name: 'passwords' }"
            v-if="isAuthenticated"
            :title="$t('Saved passwords')"
          >
            <i class="fa  fa-lg fa-key"></i>
          </router-link>
          <router-link
            class="menu-link pl-3"
            :to="{ name: 'whatsnew' }"
            :title="$t('What is new?')"
          >
            <i class="fa fa-lg fa-info-circle"></i>
          </router-link>
          <router-link
            class="menu-link pl-3"
            :to="{ name: 'settings' }"
            :title="$t('Settings')"
          >
            <i class="fa fa-lg fa-cog"></i>
          </router-link>
          <router-link
            class="menu-link pl-3"
            :to="{ name: 'myaccount' }"
            v-if="isAuthenticated"
            :title="$t('My Account')"
          >
            <i class="fa fa-lg fa-user pointer"></i>
          </router-link>
          <router-link
            class="menu-link pl-3"
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
  data() {
    return {
      saved: false
    };
  },
  methods: {
    fullReload() {
      this.$store.dispatch("resetPassword");
      this.$router.push({ name: "home" }).catch(e => {});
    },
    saveOrUpdatePassword() {
      this.$store.dispatch("saveOrUpdatePassword");
      this.saved = true;
      setTimeout(() => {
        this.saved = false;
      }, 3000);
    }
  },
  computed: {
    ...mapGetters(["isAuthenticated", "isGuest"])
  }
};
</script>
