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
                           autocorrect="off"
                           autocapitalize="none"
                           v-model="password.site">
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
            <div class="col-xs-3 p-l-0">
                <input class="form-control" type="number" id="passwordLength" v-model="password.length"
                       min="6">
            </div>
            <label for="passwordCounter" class="col-xs-3 col-form-label">Counter</label>
            <div class="col-xs-3 p-l-0">
                <input class="form-control" type="number" id="passwordCounter"
                       v-model="password.counter" min="1">
            </div>
        </div>
    </form>
</template>

<script type="text/ecmascript-6">
    import {mapGetters} from 'vuex';
    import RemoveAutoComplete from '../components/RemoveAutoComplete';
    import Fingerprint from '../components/Fingerprint';
    import lesspass from 'lesspass';
    import Clipboard from 'clipboard';
    import debounce from 'lodash.debounce';
    import {showTooltip} from '../api/tooltip';
    import Password from '../domain/password';

    function fetchPasswords(store) {
        return store.dispatch('FETCH_PASSWORDS')
    }

    function fetchPassword(store, id) {
        return store.dispatch('FETCH_PASSWORD', {id})
    }

    export default {
        name: 'password-generator-view',
        components: {
            RemoveAutoComplete,
            Fingerprint
        },
        computed: {
            ...mapGetters(['passwords', 'password']),
            generatedPassword(){
                const password = new Password(this.password);
                if (!this.encryptedLogin || !this.password.site) {
                    this.generatedPassword = '';
                    return;
                }
                return lesspass.renderPassword(this.encryptedLogin, this.password.site, password.options);
            }
        },
        preFetch: fetchPasswords,
        beforeMount () {
            const passwordId = this.$route.params.passwordId;
            if (passwordId) {
                fetchPassword(this.$store, passwordId);
            } else {
                fetchPasswords(this.$store);
            }
            var clipboard = new Clipboard('#copyPasswordButton');
            clipboard.on('success', function (e) {
                if (e.text) {
                    showTooltip(e.trigger, 'copied !');
                }
            });
        },
        data(){
            return {
                masterPassword: '',
                encryptedLogin: '',
                generatedPassword: ''
            }
        },
        watch: {
            'password.login': function () {
                this.encryptedLogin = '';
                this.encryptLogin();
            },
            'masterPassword': function () {
                this.encryptedLogin = '';
                this.encryptLogin();
            },
            'generatedPassword': function (newPassword) {
                const password = new Password(this.password);

                if (password.isNewPassword(this.passwords)) {
                    this.$store.dispatch('newPassword', password.json());
                }
                else {
                    this.$store.dispatch('existingPassword');
                }
            }
        },
        methods: {
            encryptLogin: debounce(function () {
                if (this.password.login && this.masterPassword) {
                    lesspass.encryptLogin(this.password.login, this.masterPassword).then(encryptedLogin => {
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
            }
        }
    }
</script>
