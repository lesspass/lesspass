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
        <div class="form-group">
            <div class="inner-addon left-addon">
                <label for="site" class="sr-only">Site</label>
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
        <remove-auto-complete></remove-auto-complete>
        <div class="form-group">
            <div class="inner-addon left-addon">
                <label for="login" class="sr-only">Login</label>
                <i class="fa fa-user"></i>
                <input id="login"
                       name="login"
                       type="text"
                       ref="login"
                       class="form-control"
                       placeholder="Login"
                       autocomplete="off"
                       autocorrect="off"
                       autocapitalize="none"
                       v-model="password.login">
            </div>
        </div>
        <div class="form-group">
            <master-password v-model="masterPassword" :keyupEnter="generatePassword"></master-password>
        </div>
        <div class="form-group row">
            <div class="col-9" v-show="generatedPassword">
                <div class="input-group">
                    <span class="input-group-btn">
                        <button id="copyPasswordButton" type="button" data-clipboard-text="" class="btn"
                                ref="copyPasswordButton"
                                v-bind:class="{ 'btn-warning': password.version===1, 'btn-primary': password.version===2 }">
                            <i class="fa fa-clipboard" aria-hidden="true"></i>
                        </button>
                    </span>
                    <input type="password" class="form-control" tabindex="-1"
                           ref="generatedPassword" v-bind:value="generatedPassword"
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
            <div class="col-9" v-show="!generatedPassword">
                <div style="display: inline-block">
                    <button type="button" class="btn" v-on:click="generatePassword"
                            v-bind:class="{ 'btn-warning': password.version===1, 'btn-primary': password.version===2 }">
                        <span v-if="!generatingPassword">Generate</span>
                        <span v-if="generatingPassword">Generating...</span>
                    </button>
                </div>
                <version-button :version="password.version"></version-button>
            </div>
            <div class="col-3">
                <div class="btn-group float-right" role="group">
                    <button type="button" class="btn btn-secondary" v-on:click="showOptions=!showOptions">
                        <i class="fa fa-sliders" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="form-group pt-1 mb-0" v-if="showOptions">
            <label class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="lowercase" v-model="password.lowercase">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">abc</span>
            </label>

            <label class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="uppercase" v-model="password.uppercase">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">ABC</span>
            </label>

            <label class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="numbers" v-model="password.numbers">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">123</span>
            </label>

            <label class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="symbols" v-model="password.symbols">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">%!@</span>
            </label>
        </div>
        <div class="form-group row" v-if="showOptions">
            <div class="col-6 col-sm-4">
                <label for="passwordLength">
                    <small>Length</small>
                </label>
                <div class="input-group input-group-sm">
                    <span class="input-group-btn" v-on:click.prevent="decrementPasswordLength">
                    <button class="btn btn-secondary" type="button" tabindex="-1">
                        <i class="fa fa-minus" aria-hidden="true"></i>
                    </button>
                    </span>
                    <input class="form-control" type="number" id="passwordLength" v-model="password.length"
                           min="5" max="35">
                    <span class="input-group-btn" v-on:click.prevent="incrementPasswordLength">
                    <button class="btn btn-secondary" type="button" tabindex="-1">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </button>
                    </span>
                </div>
            </div>
            <div class="col-6 col-sm-4">
                <label for="passwordCounter">
                    <small>Counter</small>
                </label>
                <div class="input-group input-group-sm">
                    <span class="input-group-btn" v-on:click.prevent="decrementCounter">
                    <button class="btn btn-secondary" type="button" tabindex="-1">
                        <i class="fa fa-minus" aria-hidden="true"></i>
                    </button>
                    </span>
                    <input class="form-control" type="number" id="passwordCounter" v-model="password.counter" min="1">
                    <span class="input-group-btn" v-on:click.prevent="incrementCounter">
                    <button class="btn btn-secondary" type="button" tabindex="-1">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </button>
                    </span>
                </div>
            </div>
        </div>
        <div class="form-group" v-if="showOptions">
            <button type="button" class="btn btn-secondary btn-sm" v-on:click="saveDefault">
                save default
            </button>
            <span class="text-success" v-if="optionsSaved">
                <i class="fa fa-check" aria-hidden="true"></i>
            </span>
        </div>
        <div class="form-group" v-if="showError">
            <div class="alert alert-danger" role="alert">
                site, login and master password fields are mandatory
            </div>
        </div>
        <div class="form-group mb-0" v-if="version === 1 && !showError && !showOptions">
            <div class="alert alert-warning mb-0" role="alert">
                <small>
                    <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                    You are using a deprecated version of LessPass.
                    The default version will be version 2 in
                    <strong aria-label="10 jan 2017" class="hint--right">{{ getDayBeforeV2() }} days</strong>.
                    You can continue to use version 1, but we strongly advise you to migrate your passwords to
                    version 2.
                </small>
            </div>
        </div>
    </form>
</template>

<script type="text/ecmascript-6">
    import LessPass from 'lesspass';
    import {mapGetters} from 'vuex';
    import Clipboard from 'clipboard';
    import {showTooltip} from '../api/tooltip';
    import Password from '../domain/password';
    import {getSite} from '../domain/url-parser';
    import RemoveAutoComplete from '../components/RemoveAutoComplete.vue';
    import MasterPassword from '../components/MasterPassword.vue';
    import VersionButton from '../components/VersionButton.vue';

    function fetchPasswords(store) {
        return store.dispatch('FETCH_PASSWORDS')
    }

    export default {
        name: 'password-generator-view',
        components: {
            RemoveAutoComplete,
            MasterPassword,
            VersionButton
        },
        computed: mapGetters(['passwords', 'password', 'version']),
        preFetch: fetchPasswords,
        beforeMount () {
            const id = this.$route.params.id;
            if (id) {
                this.$store.dispatch('FETCH_PASSWORD', {id});
            } else {
                fetchPasswords(this.$store);
            }

            getSite(this.version).then(site => {
                if (site) {
                    this.$store.commit('UPDATE_SITE', {site});
                }
            });

            const clipboard = new Clipboard('#copyPasswordButton');
            clipboard.on('success', event => {
                if (event.text) {
                    showTooltip(event.trigger, 'copied !');
                    setTimeout(() => {
                        this.cleanFormInSeconds(10);
                    }, 2000);
                }
            });
        },
        mounted(){
            if (this.password.site) {
                this.$refs.login.focus();
            } else {
                this.$refs.site.focus();
            }
        },
        data(){
            return {
                masterPassword: '',
                fingerprint: '',
                generatedPassword: '',
                cleanTimeout: null,
                showOptions: false,
                showError: false,
                generatingPassword: false,
                optionsSaved: false
            }
        },
        watch: {
            'password.site': function (newValue) {
                this.cleanErrors();
                const values = newValue.split(" | ");
                if (values.length === 2) {
                    const site = values[0];
                    const login = values[1];
                    const passwords = this.passwords;
                    for (let i = 0; i < passwords.length; i++) {
                        const password = passwords[i];
                        if (password.site === site && password.login === login) {
                            this.$store.commit('SET_PASSWORD', {password});
                            break;
                        }
                    }
                }
            },
            'password.login': function () {
                this.cleanErrors();
            },
            'password.uppercase': function () {
                this.cleanErrors();
            },
            'password.lowercase': function () {
                this.cleanErrors();
            },
            'password.numbers': function () {
                this.cleanErrors();
            },
            'password.symbols': function () {
                this.cleanErrors();
            },
            'password.length': function () {
                this.cleanErrors();
            },
            'password.counter': function () {
                this.cleanErrors();
            },
            'generatedPassword': function () {
                this.cleanFormInSeconds(30);
            },
            'masterPassword': function () {
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
                this.showError = false;
            },
            cleanFormInSeconds(seconds){
                clearTimeout(this.cleanTimeout);
                this.cleanTimeout = setTimeout(() => {
                    this.masterPassword = '';
                    this.generatedPassword = '';
                    this.fingerprint = '';
                    this.$store.commit('PASSWORD_CLEAN');
                }, 1000 * seconds);
            },
            generatePassword(){
                const site = this.password.site;
                const login = this.password.login;
                const masterPassword = this.masterPassword;

                if (!site && !login || !masterPassword) {
                    this.showOptions = false;
                    this.showError = true;
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
                    version: this.password.version || this.version,
                };
                return LessPass.generatePassword(site, login, masterPassword, passwordProfile).then(generatedPassword => {
                    this.generatingPassword = false;
                    this.generatedPassword = generatedPassword;
                    window.document.getElementById('copyPasswordButton').setAttribute('data-clipboard-text', generatedPassword);
                    this.$store.commit('CHANGE_PASSWORD_STATUS', 'DIRTY');
                });
            },
            setDefaultVersion(version){
                this.$store.commit('CHANGE_VERSION', {version});
            },
            getDayBeforeV2(){
                const oneDay = 24 * 60 * 60 * 1000;
                const now = new Date();
                const v2DefaultDate = new Date(2017, 1, 10);
                return Math.round(Math.abs((now.getTime() - v2DefaultDate.getTime()) / (oneDay)));
            },
            decrementPasswordLength(){
                if (this.password.length > 4) {
                    this.password.length -= 1
                }
            },
            incrementPasswordLength(){
                this.password.length += 1
            },
            decrementCounter(){
                if (this.password.counter > 1) {
                    this.password.counter -= 1
                }
            },
            incrementCounter(){
                this.password.counter += 1
            },
            saveDefault(){
                this.$store.commit('SAVE_DEFAULT_OPTIONS');
                this.optionsSaved = true;
                setTimeout(() => {
                    this.optionsSaved = false;
                }, 3000);
            }
        }
    }
</script>
