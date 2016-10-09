<style>
    .card-block {
        position: relative;
    }
</style>
<template>
    <div class="card-block">
        <form v-on:submit.prevent="register">
            <div class="form-group row" v-if="errorMessage">
                <div class="col-xs-12 text-muted text-danger">
                    Oops! Something went wrong. Retry in a few minutes.
                </div>
            </div>
            <div class="form-group row">
                <div class="col-xs-12">
                    <div class="inner-addon left-addon">
                        <i class="fa fa-user"></i>
                        <input id="email"
                               class="form-control"
                               name="email"
                               type="email"
                               placeholder="Email"
                               v-model="user.email">
                        <small class="form-text text-muted text-danger">
                            <span v-if="userNameAlreadyExist">Someone already use that username. Do you want to sign in ?</span>
                            <span v-if="emailRequired">An email is required</span>
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
                               placeholder="Password"
                               v-model="user.password">
                        <small class="form-text text-muted text-danger">
                            <span v-if="noErrors()">Do not use your master password here</span>
                            <span v-if="passwordRequired">A password is required</span>
                        </small>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-xs-12">
                    <button id="loginButton" class="btn btn-primary" type="submit">
                        Register
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>
<script type="text/ecmascript-6">
    import Auth from '../api/auth';
    import Storage from '../api/storage';
    import {mapActions} from 'vuex';

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
                userNameAlreadyExist: false,
                emailRequired: false,
                passwordRequired: false,
                errorMessage: false
            };
        },
        methods: Object.assign(mapActions(['go']), {
            cleanErrors(){
                this.userNameAlreadyExist = false;
                this.emailRequired = false;
                this.passwordRequired = false;
                this.errorMessage = false;
            },
            noErrors(){
                return !(this.userNameAlreadyExist || this.emailRequired || this.passwordRequired || this.errorMessage);
            },
            register(){
                this.cleanErrors();
                if (!this.user.email) {
                    this.emailRequired = true;
                    return;
                }
                if (!this.user.password) {
                    this.passwordRequired = true;
                    return;
                }
                this.auth.register(this.user, 'https://lesspass.com')
                        .then(()=> {
                            this.go('login');
                        })
                        .catch(err => {
                            if (err.response && (err.response.data.email[0].indexOf('already exists') !== -1)) {
                                this.userNameAlreadyExist = true
                            } else {
                                this.errorMessage = true;
                            }
                        });
            }
        })
    }
</script>

