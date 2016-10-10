<template>
    <form v-on:submit.prevent="login">
        <div class="form-group row" v-if="showError">
            <div class="col-xs-12 text-muted text-danger">
                {{ errorMessage }}
            </div>
        </div>
        <div class="form-group row">
            <div class="col-xs-12">
                <div class="inner-addon left-addon">
                    <i class="fa fa-user"></i>
                    <input id="login"
                           class="form-control"
                           name="login"
                           type="email"
                           placeholder="Email"
                           v-model="user.email">
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
                           placeholder="Password"
                           v-model="user.password">
                </div>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-xs-12">
                <div class="inner-addon left-addon">
                    <i class="fa fa-globe"></i>
                    <input class="form-control" type="text" id="baseURL" v-model="$store.state.baseURL">
                    <small id="siteHelp" class="form-text text-muted">You can use your self hosted LessPass
                        Database
                    </small>
                </div>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-xs-12">
                <button id="loginButton" class="btn btn-primary" type="submit">
                    Sign In
                </button>
                <router-link class="btn btn-secondary" :to="{ name: 'register'}">
                    Register
                </router-link>
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

    export default {
        data() {
            const storage = new Storage();
            const auth = new Auth(storage);
            return {
                auth,
                storage,
                user: {
                    email: '',
                    password: ''
                },
                errorMessage: '',
                showError: false
            };
        },

        methods: {
            showErrorMessage(errorMessage){
                this.errorMessage = errorMessage;
                this.showError = true;
                setTimeout(() => {
                    this.cleanErrors();
                }, 6000);
            },
            cleanErrors(){
                this.showError = false;
                this.errorMessage = '';
            },
            login(){
                this.cleanErrors();
                var baseURL = this.baseURL;
                var email = this.user.email;
                if (!email || !this.user.password || !baseURL) {
                    this.showErrorMessage('email, password and url are mandatory');
                    return;
                }
                this.auth.login(this.user, baseURL)
                        .then(()=> {
                            this.storage.save({baseURL: baseURL, email: email});
                            this.$store.dispatch('userAuthenticated', {email: email});
                            this.$store.dispatch('loadPasswords');
                            this.$router.push({name: 'home'});
                        })
                        .catch(err => {
                            if (err.response === undefined) {
                                if (baseURL === "https://lesspass.com") {
                                    this.showErrorMessage('Oops! Something went wrong. Retry in a few minutes.');
                                } else {
                                    this.showErrorMessage('Your LessPass Database is not running');
                                }
                            } else if (err.response.status === 400) {
                                this.showErrorMessage('Your login or password is not good. Do you have an account ?');
                            } else {
                                this.showErrorMessage('Oops! Something went wrong. Retry in a few minutes.')
                            }
                        });
            }
        },
        computed: mapGetters([
            'baseURL'
        ])
    }
</script>

