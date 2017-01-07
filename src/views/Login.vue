<style>
    .passwordHelp {
        cursor: pointer;
    }
</style>
<template>
    <form v-on:submit.prevent="signIn">
        <div class="form-group row">
            <div class="col-12">
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
        <div class="form-group">
            <master-password v-model="password"></master-password>
            <small class="form-text text-muted passwordHelp">
                <span v-on:click="transformMasterPassword">click me to transform into a LessPass password</span>
                <span class="tag tag-default" v-on:click.prevent="showPasswordHelp=!showPasswordHelp">?</span>
            </small>
            <small class="form-text text-warning" v-if="showPasswordHelp">
                Your master password <b>should not be saved</b> on a database even encrypted.
                If you want to use your master password here, you can click the help to replace your master password
                with a LessPass generated password.
            </small>
        </div>
        <div class="form-group row">
            <div class="col-7">
                <button id="signInButton" class="btn" type="submit"
                        v-bind:class="{ 'btn-warning': version===1, 'btn-primary': version===2 }">
                    Sign In
                </button>
                <button id="registerButton" class="btn btn-secondary" type="button" v-on:click="register">
                    Register
                </button>
            </div>
            <div class="col-5 text-right">
                <version-button :version="version"></version-button>
                <button type="button" class="btn btn-secondary" v-on:click="showOptions=!showOptions">
                    <i class="fa fa-sliders" aria-hidden="true"></i>
                </button>
            </div>
        </div>
        <div class="form-group" v-if="showError">
            <div class="alert alert-danger" role="alert">
                {{ errorMessage }}
            </div>
        </div>
        <div class="form-group" v-if="showOptions">
            <label for="baseURL">Self Hosted Url</label>
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
        <div class="form-group mb-0">
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
    import VersionButton from '../components/VersionButton.vue';
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
                showPasswordHelp: false,
                showError: false,
                errorMessage: '',
                errors: {...defaultErrors},
                showOptions: false,
            };
        },
        components: {
            VersionButton,
            MasterPassword
        },
        computed: {
            ...mapGetters(['version']),
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
                            this.$store.commit('LOGIN');
                            this.$store.commit('UPDATE_BASE_URL', {baseURL});
                            this.$store.commit('UPDATE_EMAIL', {email});
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
            },
            transformMasterPassword(){
                const defaultPasswordProfile = {
                    lowercase: true,
                    uppercase: true,
                    numbers: true,
                    symbols: true,
                    length: this.version == 2 ? 16 : 12,
                    counter: 1,
                    version: this.version,
                };
                return LessPass.generatePassword('lesspass.com', this.email, this.password, defaultPasswordProfile).then(generatedPassword => {
                    this.password = generatedPassword;
                });
            }
        }
    }
</script>

