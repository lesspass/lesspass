<template>
    <div id="login-page">
        <div class="col-sm-3 col-sm-offset-4">
            <div class="card card-block m-y-2">
                <div class="text-xs-center">
                    <img class="m-t-1 m-b-2" src="../images/logo.png" alt="logo">
                </div>
                <p>{{{ $t('login.RegisterInfo') }}}</p>
                <form @submit="register()">
                    <fieldset class="form-group">
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
                    <button type="submit" class="btn btn-primary btn-block">{{ $t('login.Register') }}</button>
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
                            }else{
                                logging.error(this.$t('login.registrationInvalid'));
                            }
                        });
            }
        }
    }
</script>

