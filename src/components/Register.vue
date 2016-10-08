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
    <div class="card-block">
        <transition name="fade">
            <div class="alert alert-danger" role="alert" v-if="showError">
                {{ errorMessage }}
            </div>
        </transition>
        <form v-on:submit.prevent="register">
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
                        <input id="password1"
                               name="password1"
                               type="password"
                               class="form-control"
                               placeholder="Password"
                               v-model="user.password1">
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-xs-12">
                    <div class="inner-addon left-addon">
                        <i class="fa fa-lock"></i>
                        <input id="password2"
                               name="password2"
                               type="password"
                               class="form-control"
                               placeholder="Retype your password"
                               v-model="user.password2">
                        <small id="password2Help" class="form-text text-muted text-danger">Do not use your master password here</small>
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
                    password1: '',
                    password2: ''
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
                    this.showError = false;
                    this.errorMessage = '';
                }, 3000);
            },
            register(){
               console.log('register')
            }
        },
        computed: mapGetters([
            'baseURL'
        ])
    }
</script>

