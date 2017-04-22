<style>
  #generated-password {
    font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, sans-serif;
  }

  .inner-addon i {
    position: absolute;
    padding: 10px;
    pointer-events: none;
    z-index: 10;
  }

  .inner-addon {
    position: relative;
  }

  .left-addon i {
    left: 0;
  }

  .right-addon i {
    right: 0;
  }

  .left-addon input {
    padding-left: 30px;
  }

  .right-addon input {
    padding-right: 30px;
  }

  div.awesomplete {
    display: block;
  }

  div.awesomplete > ul {
    z-index: 11;
  }
</style>
<template>
  <form id="password-generator">
    <div class="form-group">
      <div class="inner-addon left-addon">
        <label for="site" class="sr-only">{{ $t('Site') }}</label>
        <i class="fa fa-globe"></i>
        <input id="site"
               name="site"
               type="text"
               ref="site"
               class="form-control awesomplete"
               autocorrect="off"
               autocapitalize="none"
               v-bind:placeholder="$t('Site')"
               v-model="password.site">
      </div>
    </div>
    <remove-auto-complete></remove-auto-complete>
    <div class="form-group">
      <div class="inner-addon left-addon">
        <label for="login" class="sr-only">{{ $t('Login') }}</label>
        <i class="fa fa-user"></i>
        <input id="login"
               name="login"
               type="text"
               ref="login"
               class="form-control"
               autocomplete="off"
               autocorrect="off"
               autocapitalize="none"
               v-bind:placeholder="$t('Login')"
               v-model="password.login">
      </div>
    </div>
    <div class="form-group">
      <master-password ref="masterPassword" v-model="masterPassword"
                       :keyupEnter="generatePassword"></master-password>
    </div>
    <div class="form-group row justify-content-between no-gutters" v-bind:class="{'mb-0':showOptions===false}">
      <div class="col col-auto" v-show="!generatedPassword">
        <div style="display: inline-block">
          <button type="button" class="btn" v-on:click="generatePassword"
                  v-bind:class="{ 'btn-warning': password.version===1, 'btn-primary': password.version===2 }">
            <span v-if="!generatingPassword">{{ $t('Generate') }}</span>
            <span v-if="generatingPassword">{{ $t('Generating') }}...</span>
          </button>
        </div>
      </div>
      <div class="col-8" v-show="generatedPassword">
        <div class="input-group">
          <span class="input-group-btn">
            <button id="copyPasswordButton"
                    class="btn btn-copy"
                    type="button"
                    data-clipboard-text=""
                    ref="copyPasswordButton"
                    v-bind:class="{ 'btn-warning': password.version===1, 'btn-primary': password.version===2 }">
              <i class="fa fa-clipboard" aria-hidden="true"></i>
            </button>
          </span>
          <input id="generated-password"
                 type="password"
                 class="form-control"
                 tabindex="-1"
                 ref="generatedPassword"
                 v-bind:value="generatedPassword"
                 v-bind:class="{ 'btn-outline-warning': password.version===1, 'btn-outline-primary': password.version===2 }">
          <span class="input-group-btn">
            <button id="revealGeneratedPassword" type="button" class="btn"
                    v-on:click="togglePasswordType($refs.generatedPassword)"
                    v-bind:class="{ 'btn-outline-warning': password.version===1, 'btn-outline-primary': password.version===2 }">
              <i class="fa fa-eye" aria-hidden="true"></i>
            </button>
          </span>
        </div>
      </div>
      <div class="col col-auto">
        <button class="btn btn-copy btn-secondary hint--top"
                type="button"
                v-bind:data-clipboard-text="passwordURL"
                v-if="password.site !== ''">
          <i class="fa fa-share-alt pointer" aria-hidden="true"></i>
        </button>
        <button type="button" class="btn btn-secondary" v-on:click="showOptions=!showOptions">
          <i class="fa fa-sliders" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <options :password="password" v-on:optionsUpdated="optionsUpdated" v-if="showOptions"></options>
  </form>
</template>

<script type="text/ecmascript-6">
  import LessPass from 'lesspass';
  import {mapGetters} from 'vuex';
  import Clipboard from 'clipboard';
  import {getSite, getPasswordFromUrlQuery} from '../services/url-parser';
  import RemoveAutoComplete from '../components/RemoveAutoComplete.vue';
  import MasterPassword from '../components/MasterPassword.vue';
  import Options from '../components/Options.vue';
  import {showTooltip} from '../services/tooltip';
  import message from '../services/message';
  import Awesomplete from 'awesomplete';

  export default {
    name: 'password-generator-view',
    components: {
      RemoveAutoComplete,
      MasterPassword,
      Options
    },
    computed: mapGetters(['passwords', 'password', 'passwordURL']),
    beforeMount () {
      const query = this.$route.query;
      if (Object.keys(query).length >= 9) {
        this.$store.dispatch('savePassword', {password: getPasswordFromUrlQuery(query)});
      }

      this.$store.dispatch('getPasswords');

      getSite().then(site => {
        if (site) {
          this.$store.dispatch('loadPasswordForSite', site);
        }
      });

      const clipboard = new Clipboard('.btn-copy');
      clipboard.on('success', event => {
        if (event.text) {
          showTooltip(event.trigger, this.$t('Copied', 'copied !'));
          setTimeout(() => {
            this.cleanFormInSeconds(10);
          }, 2000);
        }
      });
    },
    mounted(){
      setTimeout(() => {
        this.focusBestInputField();
      }, 500);
    },
    data(){
      return {
        masterPassword: '',
        fingerprint: '',
        generatedPassword: '',
        cleanTimeout: null,
        showOptions: this.$store.getters.optionsDifferentFromDefault,
        generatingPassword: false
      }
    },
    watch: {
      'passwords': function(passwords) {
        var site = this.$refs.site;
        const self = this;
        if (site !== null && passwords.length > 0) {
          new Awesomplete(site, {
            list: passwords.map(password => {
              return {label: password.site + ' ' + password.login, value: password}
            }),
            replace: function(password) {
              self.$store.dispatch('savePassword', {password: password.value});
              this.input.value = password.value.site;
              self.focusBestInputField();
            }
          });
        }
      },
      'password.site': function() {
        this.cleanErrors();
      },
      'password.login': function() {
        this.cleanErrors();
      },
      'generatedPassword': function() {
        this.cleanFormInSeconds(30);
      },
      'masterPassword': function() {
        this.cleanErrors();
        this.cleanFormInSeconds(30);
      }
    },
    methods: {
      togglePasswordType(element){
        if (element.type === 'password') {
          element.type = 'text';
        } else {
          element.type = 'password';
        }
      },
      cleanErrors(){
        clearTimeout(this.cleanTimeout);
        this.generatedPassword = '';
      },
      cleanFormInSeconds(seconds){
        clearTimeout(this.cleanTimeout);
        this.cleanTimeout = setTimeout(() => {
          this.masterPassword = '';
          this.generatedPassword = '';
          this.fingerprint = '';
        }, 1000 * seconds);
      },
      generatePassword(){
        const site = this.password.site;
        const login = this.password.login;
        const masterPassword = this.masterPassword;

        if (!site && !login || !masterPassword) {
          message.error(this.$t('SiteLoginMasterPasswordMandatory', 'Site, login, and master password fields are mandatory.'));
          return;
        }

        this.generatingPassword = true;
        this.cleanErrors();
        this.fingerprint = this.masterPassword;

        const passwordProfile = {
          lowercase: this.password.lowercase,
          uppercase: this.password.uppercase,
          numbers: this.password.numbers,
          symbols: this.password.symbols,
          length: this.password.length,
          counter: this.password.counter,
          version: this.password.version,
        };
        return LessPass.generatePassword(site, login, masterPassword, passwordProfile).then(generatedPassword => {
          this.generatingPassword = false;
          this.generatedPassword = generatedPassword;
          this.$store.dispatch('savePassword', {password: this.password});
          this.$store.dispatch('passwordGenerated');
          window.document.getElementById('copyPasswordButton').setAttribute('data-clipboard-text', generatedPassword);
        });
      },
      optionsUpdated(options){
        this.cleanErrors();
        const password = Object.assign({}, this.password, options);
        this.$store.dispatch('savePassword', {password});
      },
      focusBestInputField(){
        const site = this.$refs.site;
        const login = this.$refs.login;
        const masterPassword = this.$refs.masterPassword.$refs.password;
        site.value ? (login.value ? masterPassword.focus() : login.focus()) : site.focus();
      }
    }
  }
</script>
