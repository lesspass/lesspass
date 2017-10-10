<style>
  .passwordProfile {
    display: flex;
    cursor: pointer;
  }

  .passwordProfile__site {
    font-weight: 600;
  }

  .passwordProfile__site, .passwordProfile__login {
    font-size: 0.8rem;
    line-height: 0.8rem;
  }

  .passwordProfile__meta {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-grow: 2;
  }

  .passwordProfile__actions {
    line-height: 38px;
  }

  .tooltip--undo {
    position: absolute;
    top: 49px;
    left: 0;
    right: 0;
    z-index: 20;
  }

  .tooltip__btn--undo{
    cursor: pointer;
  }

  .passwordProfile {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }

  .tooltip-fade-enter-active {
    transition: opacity 1s
  }

  .tooltip-fade-leave-active {
    transition: opacity 0s
  }

  .tooltip-fade-enter, .tooltip-fade-leave-to {
    opacity: 0
  }

</style>
<template>
  <div>
    <transition name="fade">
      <div class="passwordProfile" v-if="!undo">
        <avatar v-bind:name="password.site"></avatar>
        <div class="passwordProfile__meta" v-on:click="setPassword">
          <div class="passwordProfile__site">
            {{password.site}}
          </div>
          <div class="passwordProfile__login">
            {{password.login}}
          </div>
        </div>
        <div class="passwordProfile__actions">
          <button type="button" class="btn btn-outline-danger btn-sm"
                  v-on:click="deletePassword()">
            <i class="fa fa-trash fa-fw"></i>
          </button>
        </div>
      </div>
    </transition>
    <transition name="tooltip-fade">
      <div class="tooltip--undo card-inverse p-2" v-if="undo">
        <div class="row">
          <div class="col">
            <span class="text-white">{{ $t('Password profile deleted') }}</span>
            <span
              class="pull-right text-warning btn-link tooltip__btn--undo"
              v-on:click="cancelDeletion()">{{ $t('UNDO') }}</span>
          </div>
        </div>
      </div>
    </transition>
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
        undo: false,
        undoTimeout: null,
        deleted: true
      }
    },
    methods: {
      deletePassword(){
        this.undo = true;
        this.undoTimeout = setTimeout(() => {
          this.$emit('deleted');
          this.$store.dispatch('deletePassword', {id: this.password.id});
        }, 10000)
      },
      setPassword(){
        this.$store.dispatch('savePassword', {password: this.password});
        this.$router.push({name: 'home'});
      },
      cancelDeletion(){
        clearTimeout(this.undoTimeout);
        this.undo = false;
      }
    }
  }
</script>

