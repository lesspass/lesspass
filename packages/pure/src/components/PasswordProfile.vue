<style>
  .passwordProfile {
    display: flex;
    cursor: pointer;
    margin-bottom: 1rem;
    justify-content: space-between;
    align-items: center;
  }

  .passwordProfile__info {
    display: flex;
    align-items: center;
    flex-grow: 1;
  }

  .passwordProfile__meta {
    font-size: 0.8rem;
    line-height: 1rem;
    flex-grow: 1;
  }
</style>
<template>
  <div class="passwordProfile">
    <div class="passwordProfile__info" v-on:click="setPassword()">
      <avatar v-bind:name="password.site"></avatar>
      <div class="passwordProfile__meta">
        <b>{{password.site}}</b>
        <br>
        {{password.login}}
      </div>
    </div>
    <div class="passwordProfile__actions">
      <i class="passwordProfile__delete-icon fa fa-trash fa-fw text-danger"
         v-on:click="deletePassword()"></i>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Avatar from './Avatar.vue';

  export default {
    name: 'passwordProfile',
    props: {
      password: {
        type: Object,
        required: true
      }
    },
    components: {
      Avatar
    },
    methods: {
      deletePassword() {
        this.$store.dispatch('deletePassword', {id: this.password.id});
      },
      setPassword() {
        this.$store.dispatch('savePassword', {password: this.password});
        this.$router.push({name: 'home'});
      }
    }
  }
</script>

