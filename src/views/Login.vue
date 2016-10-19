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
                           v-model="password">
                    <small class="form-text text-muted">
                        <span v-if="noErrors()" class="text-warning">Do not use your master password here</span>
                        <span v-if="errors.passwordRequired" class="text-danger">A password is required</span>
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
                        <span v-if="errors.baseURLRequired"
                              class="text-danger">A LessPass database url is required</span>
                    </small>
                </div>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-xs-12">
                <button id="loginButton" class="btn btn-primary" type="button" v-on:click="signIn">
                    Sign In
                </button>
                <button id="registerButton" class="btn btn-secondary" type="button" v-on:click="register">
                    Register
                </button>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-xs-12">
                <router-link :to="{ name: 'passwordReset'}">
                    Forgot you password ?
                </router-link>
            </div>
        </div>
    </form>
</template>
<script type="text/ecmascript-6">
    import Auth from '../api/auth';
    import Storage from '../api/storage';
    import {mapGetters} from 'vuex';

    const defaultErrors = {
        userNameAlreadyExist: false,
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
                showError: false,
                errorMessage: '',
                errors: {...defaultErrors}
            };
        },
        methods: {
            noErrors(){
                return !(this.errors.userNameAlreadyExist || this.errors.emailRequired || this.errors.passwordRequired || this.errors.baseURLRequired || this.showError);
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
                            .then(()=> {
                                this.storage.save({baseURL, email});
                                this.$store.dispatch('USER_AUTHENTICATED', {email});
                                this.$router.push({name: 'home'});
                            })
                            .catch(err => {
                                if (err.response === undefined) {
                                    if (baseURL === "https://lesspass.com") {
                                        this.showErrorMessage();
                                    } else {
                                        this.showErrorMessage('Your LessPass Database is not running');
                                    }
                                } else if (err.response.status === 400) {
                                    this.showErrorMessage('Your login or password is not good. Do you have an account ?');
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
                            .then(this.signIn)
                            .catch(err => {
                                if (err.response && (err.response.data.email[0].indexOf('already exists') !== -1)) {
                                    this.userNameAlreadyExist = true;
                                } else {
                                    this.showErrorMessage();
                                }
                            });
                }
            },
            showErrorMessage(errorMessage = 'Oops! Something went wrong. Retry in a few minutes.'){
                this.errorMessage = errorMessage;
                this.showError = true;
                setTimeout(() => {
                    this.cleanErrors();
                }, 6000);
            },
        },
        computed: {
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
        }
    }
</script>

