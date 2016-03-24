<style>
  @media (max-width: 480px) {
    #password-generator {
      padding: 1em;
      margin-top: 1em;
      margin-bottom: 2em;
    }
  }

  #password-generator .c-input, #password-generator a {
    color: inherit;
  }
</style>
<template>
  <div id="password-generator" class="bg-card-white" v-bind:style="{ borderLeft: '5px solid ' + passwordColor }">
    <form>
      <div class="form-group row">
        <div class="col-lg-6 m-t-1">
          <label for="pg-email" class="sr-only">
            {{ $t('passwordgenerator.who_are_you') }}
          </label>
          <input id="pg-email"
                 class="form-control"
                 type="text"
                 placeholder="{{ $t('passwordgenerator.who_are_you') }}"
                 value="{{email}}"
                 v-model="email"
                 v-on:blur="updateMasterPassword"
                 autofocus>
        </div>
        <div class="col-lg-6 m-t-1">
          <label for="pg-masterpassword" class="sr-only">
            {{ $t('passwordgenerator.what_is_your_secret') }}
          </label>
          <input id="pg-masterpassword"
                 class="form-control"
                 type="password"
                 placeholder="{{ $t('passwordgenerator.what_is_your_secret') }}"
                 v-model="password"
                 v-on:blur="updateMasterPassword">

        </div>
      </div>
      <div class="form-group row">
        <div class="col-lg-12">
          <label for="pg-site" class="sr-only">
            {{ $t('passwordgenerator.where_are_you_going') }}
          </label>
          <input id="pg-site"
                 class="form-control"
                 type="text"
                 placeholder="{{ $t('passwordgenerator.where_are_you_going') }}"
                 v-model="site">
        </div>
      </div>
      <div class="form-group row">
        <div class="col-lg-12">
          <label for="generatedPassword" class="sr-only">
            {{ $t('passwordgenerator.generated_password') }}
          </label>
          <div class="input-group">
            <input type="text" id="generatedPassword" class="form-control hint--bottom"
                   placeholder="{{ $t('passwordgenerator.generated_password') }}"
                   v-model="generatedPassword"
                   v-bind:disabled="!generatedPassword">
            <span class="input-group-btn">
                <button id="copyBtn" data-clipboard-target="#generatedPassword"
                        class="btn btn-primary" type="button">
                  {{ $t('passwordgenerator.copy') }}
                </button>
            </span>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-lg-12">
          <i class="fa fa-cog"></i>
          <a data-toggle="collapse" data-parent="#accordion" href="#advancedOptions"
             aria-expanded="true" aria-controls="advancedOptions">
            {{ $t('passwordgenerator.advanced_options') }}
          </a>
          <div id="advancedOptions" class="panel-collapse collapse m-t-1" role="tabpanel"
               aria-labelledby="advancedOptions">
            <div class="row">
              <div class="col-lg-5">
                <label class="c-input c-checkbox">
                  <input type="checkbox" id="lowercase" value="lowercase"
                         v-model="passwordInfo.settings" checked>
                  <span class="c-indicator"></span>
                  {{ $t('passwordgenerator.lowercase_options') }}
                </label>
              </div>
              <div class="col-lg-7">
                <label class="c-input c-checkbox">
                  <input type="checkbox" id="uppercase" value="uppercase"
                         v-model="passwordInfo.settings" checked>
                  <span class="c-indicator"></span>
                  {{ $t('passwordgenerator.uppercase_options') }}
                </label>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-5">
                <label class="c-input c-checkbox">
                  <input type="checkbox" id="numbers" value="numbers"
                         v-model="passwordInfo.settings"
                         checked>
                  <span class="c-indicator"></span>
                  {{ $t('passwordgenerator.numbers_options') }}
                </label>
              </div>
              <div class="col-lg-7">
                <label class="c-input c-checkbox">
                  <input type="checkbox" id="symbols" value="symbols"
                         v-model="passwordInfo.settings"
                         checked>
                  <span class="c-indicator"></span>
                  {{ $t('passwordgenerator.symbols_options') }}
                </label>
              </div>
            </div>
            <div class="row m-t-1">
              <div class="col-lg-5 m-b-1">
                <label for="passwordLength" class="sr-only">
                  {{ $t('passwordgenerator.length') }}
                </label>
                <div class="input-group input-group-sm">
                                    <span class="input-group-addon" id="passwordLengthAddon">
                                        {{ $t('passwordgenerator.length') }}
                                    </span>
                  <input type="number" class="form-control" id="passwordLength"
                         aria-describedby="passwordLengthAddon" v-model="passwordInfo.length"
                         value="12" min="6" max="64">
                </div>
              </div>
              <div class="col-lg-4 m-b-1">
                <label for="passwordCounter" class="sr-only">
                  {{ $t('passwordgenerator.counter') }}
                </label>
                <div class="input-group input-group-sm">
                                    <span class="input-group-addon" id="passwordCounterAddon">
                                        {{ $t('passwordgenerator.counter') }}
                                    </span>
                  <input type="number" class="form-control" id="passwordCounter"
                         aria-describedby="passwordCounterAddon"
                         v-model="passwordInfo.counter"
                         value="1" min="1" max="100">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script type="text/ecmascript-6">
  import lesspass from 'lesspass'
  import Clipboard from 'clipboard';
  import 'bootstrap/dist/js/umd/collapse';

  export default {
    data() {
      return {
        passwordColor: 'white',
        email: '',
        password: '',
        site: '',
        passwordInfo: {
          counter: 1,
          length: 12,
          settings: ["lowercase", "uppercase", "numbers", "symbols"]
        },
        masterPassword: ''
      };
    },
    methods: {
      updateMasterPassword(event) {
        var self = this;
        var email = this.email;
        var password = this.password;
        if (email && password) {
          lesspass.createMasterPassword(email, password).then(function (masterPassword) {
            self.$set('masterPassword', masterPassword);
            self.$set('passwordColor', '#' + masterPassword.substring(0, 6))
          });
        }
      },
      changeType(id) {
        if (document.getElementById(id).type == 'password') {
          document.getElementById(id).type = 'text';
        } else {
          document.getElementById(id).type = 'password';
        }
      }
    },
    computed: {
      generatedPassword() {
        var masterPassword = this.masterPassword;
        var site = this.site;
        if (masterPassword && site) {
          var entry = {
            site: site,
            password: this.passwordInfo
          };
          return lesspass.createPassword(masterPassword, entry);
        }
        return '';
      }
    }
  }

  var cb = new Clipboard('#copyBtn');
  cb.on('success', function (e) {
    e.clearSelection();
  });

  cb.on('error', function (e) {
  });
</script>
