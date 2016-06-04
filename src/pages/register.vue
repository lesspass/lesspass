<template>
    <div id="login-page">
        <div class="col-sm-4 col-sm-offset-4">
            <div class="card card-block m-y-2">
                <form @submit="register()">
                    <fieldset class="form-group">
                        <img src="../images/logo.png" alt="logo">
                    </fieldset>
                    <fieldset class="form-group">
                        <p class="text-muted">
                            {{{ $t('login.RegisterInfo') }}}
                        </p>
                        <label for="email" class="sr-only">{{ $t('login.email') }}</label>

                        <input type="text" class="form-control" id="email"
                               placeholder="{{ $t('login.EmailPlaceholder') }}"
                               v-model="user.email" autofocus>
                    </fieldset>
                    <fieldset class="form-group">
                        <label for="password" class="sr-only">{{ $t('login.Password') }}</label>

                        <input type="password" class="form-control" id="password" v-model="user.password"
                               placeholder="{{ $t('login.PasswordPlaceholder') }}">
                        <small class="text-muted">{{ $t('login.registerPasswordHelp') }}</small>
                    </fieldset>
                    <button type="submit" class="btn btn-primary btn-block">{{ $t('login.Register') }}</button>
                    <fieldset class="form-group p-t-1">
                        <a v-link="{ path: '/login/'}"><u>{{ $t('login.orLogIn') }}</u></a>
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
            register(){
                if (!this.user.email || !this.user.password) {
                    logging.error(this.$t('login.emailAndPasswordMandatory'));
                    return;
                }
                auth.register(this.user)
                        .then(()=> {
                            logging.success(this.$t('login.registerSuccess'));
                            this.$router.go('/login/');
                        })
                        .catch(err => {
                            if (err.data.hasOwnProperty('email')) {
                                if (err.data.email[0] === 'Enter a valid email address.') {
                                    logging.error(this.$t('login.registrationInvalidNotAnEmail'));
                                }
                                if (err.data.email[0] === 'LessPassUser with this email address already exists.') {
                                    logging.error(this.$t('login.registrationInvalidUserAlreadyExists'));
                                }
                            } else {
                                logging.error(this.$t('login.registrationInvalid'));
                            }
                        });
            }
        }
    }
</script>

