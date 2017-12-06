<style>
  .passwordProfile {
    display: flex;
    cursor: pointer;
    margin-bottom: 1em;
    justify-content: space-between;
    align-items: center;
  }

  .passwordProfile__info {
    display: flex;
    align-items: center;
    flex-grow: 1;
  }

  .passwordProfile__meta {
    font-size: 0.8em;
    line-height: 1.2em;
    flex-grow: 1;
  }

  .passwordProfile__delete-icon {
    margin: 0 1em;
  }
</style>
<template>
  <div class="passwordProfile">
    <div class="passwordProfile__info">
      <avatar v-bind:name="password.site"
              v-bind:selected="selected"
              v-on:click.native="selected=!selected"></avatar>
      <div class="passwordProfile__meta" v-on:click="setPassword()">
        <b>{{password.site}}</b>
        <br>
        {{password.login}}
      </div>
    </div>
    <div class="passwordProfile__actions">
      <i class="passwordProfile__delete-icon fa fa-trash fa-fw text-danger"
         v-if="selected"
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
    data() {
      return {
        selected: false
      }
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

