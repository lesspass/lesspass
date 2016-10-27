<style>
    #password-generator {
        color: #555;
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
</style>
<template>
    <form id="password-generator">
        <div class="form-group row">
            <div class="col-xs-12">
                <div class="inner-addon left-addon">
                    <i class="fa fa-globe"></i>
                    <input id="site"
                           name="site"
                           type="text"
                           ref="site"
                           class="form-control"
                           placeholder="Site"
                           list="savedSites"
                           autocorrect="off"
                           autocapitalize="none"
                           v-model="password.site">
                    <datalist id="savedSites">
                        <option v-for="pwd in passwords">
                            {{pwd.site}} | {{pwd.login}}
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
                           autocomplete="new-password"
                           autocorrect="off"
                           autocapitalize="none"
                           v-model="masterPassword">
                    <fingerprint :fingerprint="masterPassword" v-on:click.native="showMasterPassword"></fingerprint>
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
                                 type="button"
                                 v-on:click="cleanFormInSeconds(10)"
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
                           v-model="password.lowercase"> abc
                </label>
                <label class="form-check-inline">
                    <input class="form-check-input" type="checkbox" id="uppercase"
                           v-model="password.uppercase"> ABC
                </label>
                <label class="form-check-inline">
                    <input class="form-check-input" type="checkbox" id="numbers"
                           v-model="password.numbers">
                    123
                </label>
                <label class="form-check-inline">
                    <input class="form-check-input" type="checkbox" id="symbols"
                           v-model="password.symbols">
                    %!@
                </label>
            </div>
        </div>
        <div class="form-group row">
            <label for="passwordLength" class="col-xs-3 col-form-label">Length</label>
            <div class="col-xs-3 pl-0">
                <input class="form-control" type="number" id="passwordLength" v-model="password.length"
                       min="6">
            </div>
            <label for="passwordCounter" class="col-xs-3 col-form-label">Counter</label>
            <div class="col-xs-3 pl-0">
                <input class="form-control" type="number" id="passwordCounter" v-model="password.counter" min="1">
            </div>
        </div>
    </form>
</template>

<script type="text/ecmascript-6">
    import LessPass from 'lesspass';
    import {mapGetters} from 'vuex';
    import RemoveAutoComplete from '../components/RemoveAutoComplete';
    import Fingerprint from '../components/Fingerprint';
    import Clipboard from 'clipboard';
    import debounce from 'lodash.debounce';
    import {showTooltip} from '../api/tooltip';
    import Password from '../domain/password';
    import {getSite} from '../domain/url-parser';

    function fetchPasswords(store) {
        return store.dispatch('FETCH_PASSWORDS')
    }

    export default {
        name: 'password-generator-view',
        components: {
            RemoveAutoComplete,
            Fingerprint
        },
        computed: mapGetters(['passwords', 'password']),
        preFetch: fetchPasswords,
        beforeMount () {
            const id = this.$route.params.id;
            if (id) {
                this.$store.dispatch('FETCH_PASSWORD', {id});
            } else {
                fetchPasswords(this.$store);
            }

            getSite().then(site => {
                if (site) {
                    this.$store.commit('UPDATE_SITE', {site})
                }
            });

            var clipboard = new Clipboard('#copyPasswordButton');
            clipboard.on('success', event => {
                if (event.text) {
                    showTooltip(event.trigger, 'copied !');
                }
            });
        },
        data(){
            return {
                masterPassword: '',
                encryptedLogin: '',
                generatedPassword: '',
                cleanTimeout: null
            }
        },
        watch: {
            'password.site': function (newValue) {
                const values = newValue.split(" | ");
                if (values.length === 2) {
                    const site = values[0];
                    const login = values[1];
                    const passwords = this.passwords;
                    for (var i = 0; i < passwords.length; i++) {
                        var password = passwords[i];
                        if (password.site === site && password.login === login) {
                            this.$store.dispatch('PASSWORD_CHANGE', {password: {...password}});
                            this.$refs.masterPassword.focus();
                            break;
                        }
                    }
                    return site;
                }
                return newValue;
            },
            'password.login': function () {
                this.encryptedLogin = '';
                this.encryptLogin();
            },
            'masterPassword': function () {
                this.encryptedLogin = '';
                this.encryptLogin();
            },
            'generatedPassword': function () {
                this.cleanFormInSeconds(30);
            },
            'encryptedLogin': function () {
                if (!this.encryptedLogin || !this.password.site) {
                    this.generatedPassword = '';
                    return;
                }
                const password = new Password(this.password);
                LessPass.renderPassword(this.encryptedLogin, this.password.site, password.options)
                        .then(generatedPassword => {
                            this.$store.dispatch('PASSWORD_GENERATED');
                            this.generatedPassword = generatedPassword;
                        });
            },
        },
        methods: {
            encryptLogin: debounce(function () {
                if (this.password.login && this.masterPassword) {
                    LessPass.encryptLogin(this.password.login, this.masterPassword).then(encryptedLogin => {
                        this.encryptedLogin = encryptedLogin;
                    });
                }
            }, 500),
            showMasterPassword(){
                if (this.$refs.masterPassword.type === 'password') {
                    this.$refs.masterPassword.type = 'text';
                } else {
                    this.$refs.masterPassword.type = 'password';
                }
            },
            cleanFormInSeconds(seconds){
                clearTimeout(this.cleanTimeout);
                this.cleanTimeout = setTimeout(() => {
                    this.masterPassword = '';
                    this.encryptedLogin = '';
                    this.generatedPassword = '';
                }, 1000 * seconds);
            }
        }
    }
</script>
