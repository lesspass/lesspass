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
            <master-password ref="masterPassword" v-model="masterPassword"
                             :keyupEnter="generatePassword"></master-password>
        </div>
        <div class="form-group row justify-content-between no-gutters" v-bind:class="{'mb-0':showOptions===false}">
            <div class="col col-auto" v-show="!generatedPassword">
                <div style="display: inline-block">
                    <button type="button" class="btn" v-on:click="generatePassword"
                            v-bind:class="{ 'btn-warning': password.version===1, 'btn-primary': password.version===2 }">
                        <span v-if="!generatingPassword">Generate</span>
                        <span v-if="generatingPassword">Generating...</span>
                    </button>
                </div>
            </div>
            <div class="col-9" v-show="generatedPassword">
                <div class="input-group">
                    <span class="input-group-btn">
                        <button id="copyPasswordButton" type="button" data-clipboard-text="" class="btn btn-copy"
                                ref="copyPasswordButton"
                                v-bind:class="{ 'btn-warning': password.version===1, 'btn-primary': password.version===2 }">
                            <i class="fa fa-clipboard" aria-hidden="true"></i>
                        </button>
                    </span>
                    <input type="password" id="generated-password" class="form-control" tabindex="-1"
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
            <div class="col col-auto">
                <button type="button" class="btn btn-secondary" v-on:click="showOptions=!showOptions">
                    <i class="fa fa-sliders" aria-hidden="true"></i>
                </button>
            </div>
        </div>
        <options :password="password" v-on:optionsUpdated="updatePassword" v-if="showOptions"></options>
        <div class="form-group mt-3" v-if="showError">
            <div class="alert alert-danger" role="alert">
                site, login and master password fields are mandatory
            </div>
        </div>
    </form>
</template>

<script type="text/ecmascript-6">
    import LessPass from 'lesspass';
    import {mapGetters} from 'vuex';
    import Clipboard from 'clipboard';
    import {getSite, getPasswordFromUrlQuery} from '../domain/url-parser';
    import RemoveAutoComplete from '../components/RemoveAutoComplete.vue';
    import MasterPassword from '../components/MasterPassword.vue';
    import Options from '../components/Options.vue';
    import {showTooltip} from '../services/tooltip';

    function fetchPasswords(store) {
        return store.dispatch('getPasswords')
    }

    export default {
        name: 'password-generator-view',
        components: {
            RemoveAutoComplete,
            MasterPassword,
            Options
        },
        computed: mapGetters(['passwords', 'password', 'passwordURL']),
        preFetch: fetchPasswords,
        beforeMount () {
            const query = this.$route.query;
            if (Object.keys(query).length >= 9) {
                this.$store.dispatch('savePassword', {password: getPasswordFromUrlQuery(query)});
            }

            const id = this.$route.params.id;
            if (id) {
                this.$store.dispatch('getPassword', {id});
            } else {
                fetchPasswords(this.$store);
            }

            getSite().then(site => {
                if (site) {
                    this.$store.dispatch('loadPasswordForSite', site);
                }
            });

            const clipboard = new Clipboard('.btn-copy');
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
                generatingPassword: false
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
                            this.$store.dispatch('savePassword', {password});
                            break;
                        }
                    }
                }
            },
            'password.login': function () {
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
            updatePassword(password){
                this.cleanErrors();
                this.$store.dispatch('savePassword', {password: password});
            }
        }
    }
</script>
