<template>
    <div id="login-page">
        <div class="col-sm-6 col-sm-offset-3 col-lg-4 col-lg-offset-4">
            <div class="card card-block m-y-2">
                <form v-on:submit.prevent="login" name="loginForm">
                    <fieldset class="form-group">
                        <img src="../images/logo.png" alt="logo" class="img-fluid">
                    </fieldset>
                    <fieldset class="form-group">
                        <p class="text-muted">
                            {{{ $t('login.LogInInfo') }}}
                        </p>
                        <label for="email" class="sr-only">{{ $t('login.Email') }}</label>

                        <input type="text" class="form-control" id="email" name="email"
                               placeholder="{{ $t('login.EmailPlaceholder') }}"
                               v-model="user.email" autofocus>
                    </fieldset>
                    <fieldset class="form-group">
                        <label for="password" class="sr-only">{{ $t('login.Password') }}</label>

                        <input type="password" class="form-control" id="password"
                               v-model="user.password" name="passwordField"
                               placeholder="{{ $t('login.PasswordPlaceholder') }}">
                    </fieldset>
                    <button id="buttonSubmit" name="buttonSubmit" type="submit" class="btn btn-primary btn-block">{{ $t('login.SignIn') }}</button>
                    <fieldset class="form-group p-t-1">
                        <a v-link="{ path: '/register/'}"><u>{{ $t('login.orRegister') }}</u></a>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import auth from '../services/auth';
    import logging from '../services/logging';

    export default {
        data() {
            return {
                user: {
                    email: '',
                    password: ''
                }
            };
        },
        methods: {
            login(){
                if (!this.user.email || !this.user.password) {
                    logging.error(this.$t('login.emailAndPasswordMandatory'));
                    return;
                }
                auth.login(this.user)
                        .then(()=> {
                            logging.success(this.$t('login.welcome'));
                            this.$router.go('/entries/');
                        })
                        .catch(() => {
                            logging.error(this.$t('login.credentialsInvalids'));
                        });
            }
        }
    }
</script>

