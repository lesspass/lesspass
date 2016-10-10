<template>
    <form v-on:submit.prevent="resetPassword">
        <div class="form-group row" v-if="showError">
            <div class="col-xs-12 text-muted text-danger">
                Oops! Something went wrong. Retry in a few minutes.
            </div>
        </div>
        <div class="form-group row" v-if="successMessage">
            <div class="col-xs-12 text-muted text-success">
                If a matching account was found an email was sent to allow you to reset your password.
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
                           v-model="email">
                    <small class="form-text text-muted text-danger">
                        <span v-if="emailRequired">An email is required</span>
                    </small>
                </div>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-xs-12">
                <button id="loginButton" class="btn btn-primary" type="submit">
                    Send me a reset link
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
                email: '',
                emailRequired: false,
                showError: false,
                successMessage: false,
            };
        },
        methods: {
            cleanErrors(){
                this.emailRequired = false;
                this.showError = false;
                this.successMessage = false;
            },
            noErrors(){
                return !(this.emailRequired || this.showError);
            },
            resetPassword(){
                this.cleanErrors();
                if (!this.email) {
                    this.emailRequired = true;
                    return;
                }
                this.auth.resetPassword({email: this.email}).then(()=> {
                    this.successMessage = true
                }).catch(err => {
                    this.showError = true;
                });
            }
        }
    }
</script>

