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
                       class="form-control"
                       placeholder="Login"
                       autocomplete="off"
                       autocorrect="off"
                       autocapitalize="none"
                       v-model="password.login">
            </div>
        </div>
        <div class="form-group">
            <div class="inner-addon left-addon input-group">
                <label for="masterPassword" class="sr-only">Master Password</label>
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
                <fingerprint :fingerprint="fingerprint" v-on:click.native="showMasterPassword"></fingerprint>
            </div>
        </div>
        <div class="form-group">
            <button id="copyPasswordButton" type="button" class="btn" data-clipboard-text="" v-show="showCopyBtn"
                    v-bind:class="{ 'btn-warning': password.version===1, 'btn-primary': password.version===2 }">
                Copy to clipboard
            </button>
            <button type="button" class="btn btn-secondary" v-show="!showCopyBtn" v-on:click="renderPassword">
                Generate Password
            </button>
            <button type="button" class="btn btn-secondary" v-on:click="showOptions=!showOptions">
                <i class="fa fa-cog" aria-hidden="true"></i> Options
            </button>
        </div>
        <div class="form-group" v-if="showOptions">
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
        <div class="form-group row" v-if="showOptions">
            <div class="col-xs-12 col-sm-4 pb-1">
                <label for="passwordLength">
                    Password Length
                </label>
                <input class="form-control" type="number" id="passwordLength" v-model="password.length" min="4">
            </div>
            <div class="col-xs-12 col-sm-4 pb-1">
                <label for="passwordLength">
                    Counter
                </label>
                <input class="form-control" type="number" id="passwordCounter" v-model="password.counter" min="1">
            </div>
            <div class="col-xs-12 col-sm-4 pb-1">
                <label for="version">
                    Version
                </label>
                <select id="version" v-model="password.version" v-on:change="selectVersion" class="form-control">
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                </select>
            </div>
        </div>
        <div class="form-group" v-if="showError">
            <div class="alert alert-danger" role="alert">
                site, login and master password fields are mandatory
            </div>
        </div>
        <div class="form-group" v-if="version === 2 && password.version ===1 && !showError">
            <div class="alert alert-warning" role="alert">
                This is a password in version&nbsp;1.
                You should update your password and use version&nbsp;2
                <br>
               <a href="#" v-on:click.prevent="showOptions=!showOptions" v-if="!showOptions"> show me the options</a>
            </div>
        </div>
        <div class="form-group" v-if="version === 1 && !showError">
            <div class="alert alert-warning" role="alert">
                You are using LessPass <strong>version&nbsp;1</strong> which is deprecated.
                We will load the <strong>version&nbsp;2</strong> by default on january 1st, 2017.
                <br>You can still use version 1 in options after this period.
                <br> <a href="#" v-on:click.prevent="changeVersion(2)">Use version 2 now</a>
            </div>
        </div>
    </form>
</template>

<script type="text/ecmascript-6">
    import LessPass from 'lesspass';
    import {mapGetters} from 'vuex';
    import Clipboard from 'clipboard';
    import debounce from 'lodash.debounce';
    import {showTooltip} from '../api/tooltip';
    import Password from '../domain/password';
    import {getSite} from '../domain/url-parser';
    import RemoveAutoComplete from '../components/RemoveAutoComplete.vue';
    import Fingerprint from '../components/Fingerprint.vue';

    function fetchPasswords(store) {
        return store.dispatch('FETCH_PASSWORDS')
    }

    export default {
        name: 'password-generator-view',
        components: {
            RemoveAutoComplete,
            Fingerprint
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

            getSite().then(site => {
                if (site) {
                    this.$store.commit('UPDATE_SITE', {site})
                }
            });

            var clipboard = new Clipboard('#copyPasswordButton');
            clipboard.on('success', event => {
                if (event.text) {
                    showTooltip(event.trigger, 'copied !');
                    setTimeout(()=> {
                        this.showCopyBtn = false;
                        this.cleanFormInSeconds(8);
                    }, 2000);
                }
            });
        },
        data(){
            return {
                masterPassword: '',
                fingerprint: '',
                cleanTimeout: null,
                showOptions: false,
                showCopyBtn: false,
                showError: false
            }
        },
        watch: {
            'masterPassword': function () {
                this.showCopyBtn = false;
                this.showFingerprint();
            },
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
                }
            }
        },
        methods: {
            showFingerprint: debounce(function () {
                this.fingerprint = this.masterPassword;
            }, 3000),
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
                    this.$store.commit('PASSWORD_CLEAN');
                    this.masterPassword = '';
                    this.fingerprint = '';
                }, 1000 * seconds);
            },
            renderPassword(){
                clearTimeout(this.cleanTimeout);
                var site = this.password.site;
                var login = this.password.login;
                var masterPassword = this.masterPassword;

                if (!site || !login || !masterPassword) {
                    this.showError = true;
                    return;
                }

                this.showError = false;
                this.fingerprint = this.masterPassword;

                var passwordProfile = {
                    lowercase: this.password.lowercase,
                    uppercase: this.password.uppercase,
                    numbers: this.password.numbers,
                    symbols: this.password.symbols,
                    length: this.password.length,
                    counter: this.password.counter,
                    version: this.password.version || this.version,
                };
                return LessPass.generatePassword(site, login, masterPassword, passwordProfile).then(generatedPassword => {
                    window.document.getElementById('copyPasswordButton').setAttribute('data-clipboard-text', generatedPassword);
                    this.showCopyBtn = !this.showCopyBtn;
                    this.$store.dispatch('PASSWORD_GENERATED');
                }).catch(err => {
                    console.log(err)
                });
            },
            changeVersion(version){
                this.$store.commit('CHANGE_VERSION', {version});
            },
            selectVersion(event){
                this.password.version = parseInt(event.target.value);
            }
        }
    }
</script>
