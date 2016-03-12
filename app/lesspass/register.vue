<template>
    <div id="login">
        <div class="container">
            {{$t('register.beta')}}
        </div>
    </div>
</template>
<script>
    import auth from '../services/auth.js';
    import router from '../routes.js';

    export default {
        data: function () {
            return {
                user: auth.user,
                credentials: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            register() {
                var credentials = {
                    email: this.credentials.email,
                    password: this.credentials.password
                };
                auth.register(this, credentials, function () {
                    router.go('/login/');
                })
            }
        }
    }
</script>