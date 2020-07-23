<template>
  <div>
    <!-- Password Reset Form Here -->
    <button class="btn btn-primary btn-block" type="button" v-on:click="logout">
      {{ $t("Sign out") }}
    </button>
  </div>
</template>
<script type="text/ecmascript-6">
import message from "../services/message";

export default {
  methods: {
     logout() {
        this.$store.dispatch('logout');
        this.$router.push({name: 'home'}).catch(() => {});
      }
  }
};
</script>
