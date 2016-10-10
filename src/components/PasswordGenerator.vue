<template>
    <form>
        <div class="form-group row">
            <div class="col-xs-12">
                <div class="inner-addon left-addon">
                    <i class="fa fa-globe"></i>
                    <input id="site"
                           name="site"
                           type="text"
                           class="form-control"
                           placeholder="Site"
                           list="savedSites"
                           autocorrect="off"
                           autocapitalize="none"
                           v-model="password.site">
                    <datalist id="savedSites">
                        <option v-bind:value="pwd.id" v-for="pwd in passwords">
                            {{pwd.site}} ({{pwd.login}})
                        </option>
                    </datalist>
                </div>
            </div>
        </div>
        <remove-auto-complete></remove-auto-complete>
        <div class="form-group row">
            <div class="col-xs-12">
                <div class="inner-addon left-addon">
                    <i class="fa fa-user"></i>
                    <label for="login" class="sr-only">Login</label>
                    <input id="login"
                           name="login"
                           type="text"
                           class="form-control"
                           placeholder="Login"
                           autocomplete="off"
                           autocorrect="off"
                           autocapitalize="none"
                           v-model="password.login">
                </div>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-xs-12">
                <div class="inner-addon left-addon input-group">
                    <label for="masterPassword" class="sr-only">Password</label>
                    <i class="fa fa-lock"></i>
                    <input id="masterPassword"
                           name="masterPassword"
                           ref="masterPassword"
                           type="password"
                           class="form-control"
                           placeholder="Master password"
                           autocorrect="off"
                           autocapitalize="none"
                           v-model="masterPassword">
                    <fingerprint :fingerprint="masterPassword"
                                 v-on:click.native="showMasterPassword"></fingerprint>
                </div>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-xs-12">
                <div class="input-group">
                    <label for="generatedPassword" class="sr-only">Password Generated</label>
                    <input id="generatedPassword"
                           name="generatedPassword"
                           type="text"
                           class="form-control"
                           tabindex="-1"
                           readonly
                           v-model="generatedPassword">
                    <span class="input-group-btn">
                          <button id="copyPasswordButton" class="btn-copy btn btn-primary"
                                  :disabled="!generatedPassword"
                                  v-on:click="generatePassword()"
                                  type="button"
                                  data-clipboard-target="#generatedPassword">
                            <i class="fa fa-clipboard white"></i> Copy
                          </button>
                        </span>
                </div>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-xs-12">
                Password options
                <hr style="margin:0;">
            </div>
        </div>
        <div class="form-group row">
            <div class="col-xs-12">
                <label class="form-check-inline">
                    <input class="form-check-input" type="checkbox" id="lowercase"
                           v-model="password.options.lowercase"> abc
                </label>
                <label class="form-check-inline">
                    <input class="form-check-input" type="checkbox" id="uppercase"
                           v-model="password.options.uppercase"> ABC
                </label>
                <label class="form-check-inline">
                    <input class="form-check-input" type="checkbox" id="numbers"
                           v-model="password.options.numbers">
                    123
                </label>
                <label class="form-check-inline">
                    <input class="form-check-input" type="checkbox" id="symbols"
                           v-model="password.options.symbols">
                    %!@
                </label>
            </div>
        </div>
        <div class="form-group row">
            <label for="passwordLength" class="col-xs-3 col-form-label">Length</label>
            <div class="col-xs-3 p-l-0">
                <input class="form-control" type="number" id="passwordLength" v-model="password.options.length">
            </div>
            <label for="passwordCounter" class="col-xs-3 col-form-label">Counter</label>
            <div class="col-xs-3 p-l-0">
                <input class="form-control" type="number" id="passwordCounter"
                       v-model="password.options.counter">
            </div>
        </div>
    </form>
</template>

<script type="text/ecmascript-6">
    import {mapGetters} from 'vuex';
    import RemoveAutoComplete from './RemoveAutoComplete';
    import Fingerprint from './Fingerprint';
    import lesspass from 'lesspass';
    import Clipboard from 'clipboard';
    import debounce from 'lodash.debounce';
    import {showTooltip} from '../api/tooltip';
    import Storage from '../api/storage';
    import HTTP from '../api/http';

    const storage = new Storage();
    const Passwords = new HTTP('passwords', storage);

    const defaultPassword = {
        site: '',
        login: '',
        options: {
            uppercase: true,
            lowercase: true,
            numbers: true,
            symbols: true,
            length: 12,
            counter: 1,
        }
    };

    export default {
        data(){
            return {
                passwords: [],
                password: defaultPassword,
                masterPassword: '',
                encryptedLogin: '',
                generatedPassword: ''
            }
        },
        components: {
            RemoveAutoComplete,
            Fingerprint
        },
        watch: {
            'password.site': function (siteId) {
                var passwords = this.passwords;
                for (let i = 0; i < passwords.length; i++) {
                    var password = passwords[i];
                    if (siteId === password.id) {
                        this.password = Object.assign({}, password);
                        this.masterPassword = '';
                        return password.site;
                    }
                }
            },
            'password.login': function () {
                this.encryptedLogin = '';
                this.encryptLogin();
            },
            'masterPassword': function () {
                this.encryptedLogin = '';
                this.encryptLogin();
            }
        },
        computed: Object.assign(mapGetters(['isAuthenticated']), {
            generatedPassword(){
                return this.generatePassword();
            }
        }),
        methods: {
            encryptLogin: debounce(function () {
                if (this.password.login && this.masterPassword) {
                    lesspass.encryptLogin(this.password.login, this.masterPassword).then(encryptedLogin => {
                        this.encryptedLogin = encryptedLogin;
                    });
                }
            }, 500),
            generatePassword(){
                if (!this.encryptedLogin || !this.password.site || !this.password.options.length) {
                    this.generatedPassword = '';
                    return;
                }
                return lesspass.renderPassword(this.encryptedLogin, this.password.site, this.password.options);
            },
            showMasterPassword(e){
                if (this.$refs.masterPassword.type === 'password') {
                    this.$refs.masterPassword.type = 'text';
                } else {
                    this.$refs.masterPassword.type = 'password';
                }
            },
            fetchPasswords(){
                Passwords.all().then(response => {
                    this.passwords = response.data.results;
                });
            },
            fetchPassword(id){
                Passwords.get({id}).then(response => {
                    this.password = response.data;
                });
            },
            clean(mutation, state){
                if (mutation.type == 'logout') {
                    this.password = Object.assign({}, defaultPassword);
                }
            }
        },
        created: function () {
            if (this.isAuthenticated) {
                const passwordId = this.$route.params.passwordId;
                if (passwordId) {
                    this.fetchPassword(passwordId);
                }
                this.fetchPasswords();
            }

            this.$store.subscribe(this.clean);

            var clipboard = new Clipboard('#copyPasswordButton');
            clipboard.on('success', function (e) {
                if (e.text) {
                    showTooltip(e.trigger, 'copied !');
                }
            });
        }
    }
</script>
