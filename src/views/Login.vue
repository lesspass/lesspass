<template>
    <form>
        <div class="form-group row" v-if="showError">
            <div class="col-xs-12 text-muted text-danger">
                {{ errorMessage }}
            </div>
        </div>
        <div class="form-group row">
            <div class="col-xs-12">
                <div class="inner-addon left-addon">
                    <i class="fa fa-user"></i>
                    <input id="email"
                           class="form-control"
                           name="login"
                           type="email"
                           placeholder="Email"
                           required
                           v-model="email">
                    <small class="form-text text-muted text-danger">
                        <span v-if="errors.userNameAlreadyExist">Someone already use that username. Do you want to sign in ?</span>
                        <span v-if="errors.emailInvalid">Please enter a valid email</span>
                        <span v-if="errors.emailRequired">An email is required</span>
                    </small>
                </div>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-xs-12">
                <div class="inner-addon left-addon">
                    <i class="fa fa-lock"></i>
                    <input id="password"
                           name="password"
                           type="password"
                           class="form-control"
                           required
                           placeholder="LessPass password"
                           v-model="password"
                           v-on:keyup.enter.prevent="signIn">
                    <small class="form-text text-muted">
                        <span v-if="errors.passwordRequired" class="text-danger">A password is required</span>
                        <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" v-model="useMasterPassword">
                            Check me if you want to use your master password here.
                            <span class="tag tag-warning"
                                  v-on:click.prevent="seeMasterPasswordHelp=!seeMasterPasswordHelp">
                                ?
                            </span>
                            <span class="text-warning" v-if="seeMasterPasswordHelp">
                                <br> Your master password <b>should not be saved</b> on a database even encrypted.
                                If you want to use your master password here, you can check the option.
                                It will replace your master password with a LessPass generated password.
                            </span>
                        </label>
                    </small>
                </div>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-xs-12 hint--bottom" aria-label="You can use your self hosted LessPass Database">
                <div class="inner-addon left-addon">
                    <i class="fa fa-globe"></i>
                    <input id="baseURL"
                           class="form-control"
                           type="text"
                           placeholder="LessPass Database (https://...)"
                           v-model="baseURL">
                    <small class="form-text text-muted">
                        <span v-if="noErrors()">You can use your self hosted LessPass Database</span>
                        <span v-if="errors.baseURLRequired" class="text-danger">
                            A LessPass database url is required
                        </span>
                    </small>
                </div>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-xs-12">
                <button id="signInButton" class="btn" type="button" v-on:click="signIn"
                        v-bind:class="{ 'btn-warning': version===1, 'btn-primary': version===2 }">
                    <span v-if="loadingSignIn"><i class="fa fa-spinner fa-pulse fa-fw"></i></span>
                    Sign In
                </button>
                <button id="registerButton" class="btn btn-secondary" type="button" v-on:click="register">
                    <span v-if="loadingRegister"><i class="fa fa-spinner fa-pulse fa-fw"></i></span>
                    Register
                </button>
            </div>
        </div>
        <div class="form-group mb-0">
            <router-link :to="{ name: 'passwordReset'}">
                Forgot your password?
            </router-link>
        </div>
    </form>
</template>
<script type="text/ecmascript-6">
    import LessPass from 'lesspass';
    import Auth from '../api/auth';
    import Storage from '../api/storage';
    import {mapGetters} from 'vuex';

    const defaultErrors = {
        userNameAlreadyExist: false,
        emailInvalid: false,
        baseURLRequired: false,
        emailRequired: false,
        passwordRequired: false,
    };

    export default {
        data() {
            const storage = new Storage();
            const auth = new Auth(storage);
            return {
                auth,
                storage,
                password: '',
                useMasterPassword: false,
                seeMasterPasswordHelp: false,
                showError: false,
                errorMessage: '',
                loadingRegister: false,
                loadingSignIn: false,
                errors: {...defaultErrors}
            };
        },
        methods: {
            noErrors(){
                return !(this.errors.userNameAlreadyExist || this.errors.emailInvalid || this.errors.emailRequired || this.errors.passwordRequired || this.errors.baseURLRequired || this.showError);
            },
            formIsValid(){
                this.cleanErrors();
                let formIsValid = true;
                if (!this.email) {
                    this.errors.emailRequired = true;
                    formIsValid = false;
                }
                if (!this.password) {
                    this.errors.passwordRequired = true;
                    formIsValid = false;
                }
                if (!this.baseURL) {
                    this.errors.baseURLRequired = true;
                    formIsValid = false;
                }
                return formIsValid;
            },
            cleanErrors(){
                this.loadingRegister = false;
                this.loadingSignIn = false;
                this.showError = false;
                this.errorMessage = '';
                this.errors = {...defaultErrors}
            },
            signIn(){
                if (this.formIsValid()) {
                    this.loadingSignIn = true;
                    const email = this.email;
                    const password = this.password;
                    const baseURL = this.baseURL;
                    this.auth.login({email, password}, baseURL)
                            .then(()=> {
                                this.loadingSignIn = false;
                                this.storage.save({baseURL, email});
                                this.$store.dispatch('USER_AUTHENTICATED', {email});
                                this.$router.push({name: 'home'});
                            })
                            .catch(err => {
                                this.cleanErrors();
                                if (err.response === undefined) {
                                    if (baseURL === "https://lesspass.com") {
                                        this.showErrorMessage();
                                    } else {
                                        this.showErrorMessage('Your LessPass Database is not running');
                                    }
                                } else if (err.response.status === 400) {
                                    this.showErrorMessage('Your email and/or password is not good. Do you have an account?');
                                } else {
                                    this.showErrorMessage()
                                }
                            });
                }
            },
            register(){
                if (this.formIsValid()) {
                    this.loadingRegister = true;
                    const email = this.email;
                    const password = this.password;
                    const baseURL = this.baseURL;
                    this.auth.register({email, password}, baseURL)
                            .then(()=> {
                                this.loadingRegister = false;
                                this.signIn()
                            })
                            .catch(err => {
                                this.cleanErrors();
                                if (err.response && typeof err.response.data.email !== 'undefined') {
                                    if (err.response.data.email[0].indexOf('already exists') !== -1) {
                                        this.errors.userNameAlreadyExist = true;
                                    }
                                    if (err.response.data.email[0].indexOf('valid email') !== -1) {
                                        this.errors.emailInvalid = true;
                                    }
                                } else {
                                    this.showErrorMessage();
                                }
                            });
                }
            },
            showErrorMessage(errorMessage = 'Oops! Something went wrong. Retry in a few minutes.'){
                this.errorMessage = errorMessage;
                this.showError = true;
            },
        },
        computed: {
            ...mapGetters(['version']),
            baseURL: {
                get () {
                    return this.$store.state.baseURL
                },
                set (baseURL) {
                    this.$store.commit('UPDATE_BASE_URL', {baseURL})
                }
            },
            email: {
                get () {
                    return this.$store.state.email
                },
                set (email) {
                    this.$store.commit('UPDATE_EMAIL', {email})
                }
            }
        },
        watch: {
            'useMasterPassword': function (useMasterPassword) {
                if (!this.email || !this.password) {
                    return;
                }

                if (!useMasterPassword) {
                    this.password = '';
                    return;
                }

                var site = 'lesspass.com';
                var options = {
                    counter: 1,
                    length: 12,
                    lowercase: true,
                    uppercase: true,
                    numbers: true,
                    symbols: true
                };

                LessPass.encryptLogin(this.email, this.password)
                        .then(encryptedLogin => {
                            LessPass.renderPassword(encryptedLogin, site, options).then(generatedPassword => {
                                this.password = generatedPassword;
                            });
                        });
            },
        }
    }
</script>

