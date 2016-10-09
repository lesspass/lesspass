<style>
    .card-block {
        position: relative;
    }

    .alert {
        position: absolute;
        z-index: 20;
        width: 100%;
        top: 0;
        left: 0;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>
<template>
    <div>
        <div class="card-header card-header-dark">
            <div class="row">
                <div class="login-header">
                    <div class="col-xs-1">
                        <span class="link" v-on:click="go('index')">
                            <i class="fa fa-chevron-circle-left white" aria-hidden="true"></i>
                        </span>
                    </div>
                    <div class="col-xs-10 text-xs-center">
                        Connect to LessPass Database
                    </div>
                </div>
            </div>
        </div>
        <div class="card-block">
            <transition name="fade">
                <div class="alert alert-danger" role="alert" v-if="showError">
                    {{ errorMessage }}
                </div>
            </transition>
            <form v-on:submit.prevent="login">
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
                    </div>
                </div>
                <div class="form-group row">
                    <ul class="list-unstyled">
                        <li>
                            <button class="btn btn-link" v-on:click="go('register')">
                                Do not have an account ? Register
                            </button>
                        </li>
                        <li>
                            <button class="btn btn-link" v-on:click="go('forgotPassword')">
                                Forgot you password ?
                            </button>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import Auth from '../api/auth';
    import Storage from '../api/storage';
    import {mapGetters, mapActions} from 'vuex';

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

        methods: Object.assign(mapActions(['go']), {
            showErrorMessage(errorMessage){
                this.errorMessage = errorMessage;
                this.showError = true;
                setTimeout(() => {
                    this.showError = false;
                    this.errorMessage = '';
                }, 4000);
            },
            login(){
                var baseURL = this.baseURL;
                var email = this.user.email;
                if (!email || !this.user.password || !baseURL) {
                    this.showErrorMessage('email, password and url ');
                    return;
                }
                this.auth.login(this.user, baseURL)
                        .then(()=> {
                            this.storage.save({baseURL: baseURL, email: email});
                            this.$store.dispatch('userAuthenticated', {email: email});
                            this.$store.dispatch('go', 'index');
                            this.$store.dispatch('loadPasswords');
                        })
                        .catch(err => {
                            if (err.response === undefined) {
                                if (baseURL === "https://lesspass.com") {
                                    this.showErrorMessage('LessPass Database is not running. Sorry for the inconvenience.');
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
        }),
        computed: mapGetters([
            'baseURL'
        ])
    }
</script>

