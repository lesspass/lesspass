<template>
    <div id="login-page">
        <div class="col-sm-4 col-sm-offset-4">
            <div class="card card-block m-y-2">
                <form @submit="login()">
                    <fieldset class="form-group">
                        <img src="../images/logo.png" alt="logo">
                    </fieldset>
                    <fieldset class="form-group">
                        <p class="text-muted">
                            {{{ $t('login.LogInInfo') }}}
                        </p>
                        <label for="email" class="sr-only">{{ $t('login.email') }}</label>

                        <input type="text" class="form-control" id="email"
                               placeholder="{{ $t('login.EmailPlaceholder') }}"
                               v-model="user.email" autofocus>
                    </fieldset>
                    <fieldset class="form-group">
                        <label for="password" class="sr-only">{{ $t('login.Password') }}</label>

                        <input type="password" class="form-control" id="password"
                               v-model="user.password"
                               placeholder="{{ $t('login.PasswordPlaceholder') }}">
                    </fieldset>
                    <button type="submit" class="btn btn-primary btn-block">{{ $t('login.SignIn') }}</button>
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

