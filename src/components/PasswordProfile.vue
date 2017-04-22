<style>
  .passwordProfile {
    display: flex;
    cursor: pointer;
  }

  .passwordProfile__site {
    font-weight: 600;
  }

  .passwordProfile__site, .passwordProfile__login, .passwordProfile__version {
    font-size: 0.8rem;
    line-height: 0.8rem;
  }

  .passwordProfile__meta {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: auto;
  }

  .passwordProfile__actions {
    line-height: 38px;
  }
</style>
<template>
  <div class="passwordProfile" v-on:click="selectPassword">
    <avatar v-bind:name="password.site"
            v-bind:selected="selected"
            class="passwordProfile__avatar"></avatar>
    <div class="passwordProfile__meta">
      <div class="passwordProfile__site">
        {{password.site}}
      </div>
      <div class="passwordProfile__login">
        {{password.login}}
      </div>
    </div>
    <div class="passwordProfile__actions">
      <span class="passwordProfile__version text-muted" v-if="password.version === 1 && !selected">
        v{{password.version}}
      </span>
      <button type="button" class="btn btn-outline-danger btn-sm"
              v-if="selected"
              v-on:click="deletePassword()">
        <i class="fa fa-trash fa-fw"></i>
      </button>
      <button type="button" class="btn btn-outline-primary btn-sm"
              v-on:click="setPassword()">
        <i class="fa fa-eye fa-fw"></i>
      </button>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Avatar from './Avatar.vue';
  import message from '../services/message';

  export default {
    name: 'password',
    props: {
      password: {
        type: Object,
        required: true
      }
    },
    components: {
      Avatar
    },
    data(){
      return {
        selected: false
      }
    },
    methods: {
      selectPassword(){
        this.selected = !this.selected;
      },
      deletePassword(){
        var r = confirm(this.$t('DeleteProfileConfirm', 'Are you sure you want to delete this password profile?'));
        if (r === true) {
          message.success(this.$t('PasswordProfileSuccessfullyDeleted', 'Your password profile has been successfully deleted!'));
          this.$emit('deleted');
          return this.$store.dispatch('deletePassword', {id: this.password.id});
        }
      },
      setPassword(){
          this.$store.dispatch('savePassword', {password: this.password});
          this.$router.push({name: 'home'});
      }
    }
  }
</script>

