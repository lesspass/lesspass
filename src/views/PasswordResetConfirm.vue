<template>
    <form v-on:submit.prevent="resetPasswordConfirm">
        <div class="form-group row" v-if="showError">
            <div class="col-xs-12 text-muted text-danger">
                {{errorMessage}}
            </div>
        </div>
        <div class="form-group row" v-if="successMessage">
            <div class="col-xs-12 text-muted text-success">
                You're password was reset successfully.
                <router-link :to="{ name: 'login'}">Do you want to login ?</router-link>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-xs-12">
                <div class="inner-addon left-addon">
                    <i class="fa fa-lock"></i>
                    <input id="new-password"
                           class="form-control"
                           name="new-password"
                           type="password"
                           autocomplete="new-password"
                           placeholder="New Password"
                           v-model="new_password">
                    <small class="form-text text-muted text-danger">
                        <span v-if="passwordRequired">A password is required</span>
                    </small>
                </div>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-xs-12">
                <button id="loginButton" class="btn btn-primary" type="submit">
                    Reset my password
                </button>
            </div>
        </div>
    </form>
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
                new_password: '',
                passwordRequired: false,
                showError: false,
                successMessage: false,
                errorMessage: 'Oops! Something went wrong. Retry in a few minutes.'
            };
        },
        methods: {
            cleanErrors(){
                this.passwordRequired = false;
                this.showError = false;
                this.successMessage = false;
            },
            noErrors(){
                return !(this.passwordRequired || this.showError);
            },
            resetPasswordConfirm(){
                this.cleanErrors();
                if (!this.new_password) {
                    this.passwordRequired = true;
                    return;
                }
                this.auth.confirmResetPassword({
                    uid: this.$route.params.uid,
                    token: this.$route.params.token,
                    new_password: this.new_password
                }).then(()=> {
                    this.successMessage = true
                }).catch(err => {
                    if(err.response.status === 400){
                        this.errorMessage = 'This password reset link become invalid.'
                    }
                    this.showError = true;
                });
            }
        }
    }
</script>