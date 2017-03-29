<template>
  <div>
    <div class="form-group">
      <label for="login">Login</label>
      <div class="inner-addon left-addon">
        <i class="fa fa-user"></i>
        <input id="login"
               name="login"
               type="text"
               class="form-control"
               autocomplete="off"
               autocorrect="off"
               autocapitalize="none"
               v-bind:placeholder="$t('Login')"
               v-model="defaultOptions.login">
      </div>
    </div>
    <options v-bind:password="defaultOptions" v-on:optionsUpdated="optionsUpdated"></options>
    <div class="form-group pt-3">
      <button type="button" class="btn btn-sm btn-block hint--top hint--medium"
              v-bind:aria-label="$t('DefaultOptionLocalStorage', 'We use local storage to save default options locally. Each time you open the app, these options will be loaded by default.')"
              v-bind:class="{'btn-warning':defaultOptions.version===1,'btn-primary':defaultOptions.version!==1}"
              v-on:click="saveOptionsAsDefault">
        {{$t('Save default options locally')}}
      </button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Options from '../components/Options.vue';

  export default {
    name: 'configure-options-view',
    components: {
      Options
    },
    data(){
      return {
        defaultOptions: {}
      }
    },
    created(){
      this.defaultOptions = Object.assign({}, this.$store.state.defaultPassword);
    },
    methods: {
      optionsUpdated(options){
        this.defaultOptions = Object.assign({}, this.defaultOptions, options);
      },
      saveOptionsAsDefault(){
        this.$store.dispatch('saveDefaultPassword', {password: this.defaultOptions});
      },
    }
  }
</script>
