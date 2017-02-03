<style>
    #signInButton {
        border-right: none;
    }
    #registerButton {
        border-left: none;
    }
</style>
<template>
    <form v-on:submit.prevent="signIn">
        <div class="form-group">
            <div class="inner-addon left-addon">
                <i class="fa fa-globe"></i>
                <input id="baseURL"
                       class="form-control"
                       type="text"
                       placeholder="https://lesspass.com"
                       v-model="baseURL">
                <small class="form-text text-danger" v-if="errors.baseURLRequired">
                    A LessPass database url is required
                </small>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-12">
                <div class="inner-addon left-addon">
                    <i class="fa fa-user"></i>
                    <input id="email"
                           class="form-control"
                           name="username"
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
        <div class="form-group mb-2">
            <master-password v-model="password"></master-password>
            <label class="custom-control custom-checkbox hint--top hint--medium mb-0"
                   data-hint="Check me to generate encrypted password for lesspass.com">
                <input type="checkbox" class="custom-control-input" v-model="transformMasterPassword">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description text-muted">
                    encrypt before use
                </span>
            </label>
        </div>
        <div class="form-group row no-gutters mb-0">
            <div class="col">
                <button id="signInButton" class="btn btn-block" type="submit"
                        v-bind:class="{ 'btn-warning': version===1, 'btn-primary': version===2 }">
                    Sign In
                </button>
            </div>
            <div class="col">
                <button id="registerButton" class="btn btn-secondary btn-block" type="button" v-on:click="register">
                    Register
                </button>
            </div>
        </div>
        <div class="form-group" v-if="showError">
            <div class="alert alert-danger" role="alert">
                {{ errorMessage }}
            </div>
        </div>
        <div class="form-group my-0">
            <router-link :to="{ name: 'passwordReset'}">
                <small>Forgot your password?</small>
            </router-link>
        </div>
    </form>
</template>
<script type="text/ecmascript-6">
    import LessPass from 'lesspass';
    import Auth from '../api/auth';
    import Storage from '../api/storage';
    import {mapGetters} from 'vuex';
    import MasterPassword from '../components/MasterPassword.vue';

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
                email: '',
                password: '',
                baseURL: 'https://lesspass.com',
                transformMasterPassword: false,
                showError: false,
                errorMessage: '',
                errors: {...defaultErrors},
                showOptions: false
            };
        },
        components: {
            MasterPassword
        },
        computed: {
            ...mapGetters(['version'])
        },
        watch: {
            password: function () {
                this.transformMasterPassword = false;
            },
            transformMasterPassword: function (transformPassword) {
                if (!transformPassword) {
                    return;
                }
                const defaultPasswordProfile = {
                    lowercase: true,
                    uppercase: true,
                    numbers: true,
                    symbols: true,
                    length: 16,
                    counter: 1,
                    version: 2,
                };
                return LessPass.generatePassword('lesspass.com', this.email, this.password, defaultPasswordProfile).then(generatedPassword => {
                    this.password = generatedPassword;
                });
            }
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
                this.showError = false;
                this.errorMessage = '';
                this.errors = {...defaultErrors}
            },
            signIn(){
                if (this.formIsValid()) {
                    const email = this.email;
                    const password = this.password;
                    const baseURL = this.baseURL;
                    this.auth.login({email, password}, baseURL)
                        .then(() => {
                            this.storage.save({baseURL});
                            this.$store.dispatch('login');
                            this.$store.dispatch('saveBaseURL', {baseURL});
                            this.$router.push({name: 'home'});
                        })
                        .catch(err => {
                            this.cleanErrors();
                            if (err.response === undefined && baseURL !== "https://lesspass.com") {
                                this.showErrorMessage('Your LessPass Database is not running');
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
                    const email = this.email;
                    const password = this.password;
                    const baseURL = this.baseURL;
                    this.auth.register({email, password}, baseURL)
                        .then(() => {
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
            }
        }
    }
</script>

