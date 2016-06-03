<template>
    <div id="login-page">
        <div class="col-sm-3 col-sm-offset-4">
            <div class="card card-block m-y-2">
                <div class="text-xs-center">
                    <img class="m-t-1 m-b-2" src="../images/logo.png" alt="logo">
                </div>
                <form @submit="login()">
                    <fieldset class="form-group">
                        <label for="email" class="sr-only">Email</label>

                        <input type="text" class="form-control" id="email"
                                   placeholder="Enter your email"
                                   v-model="user.email" autofocus>
                    </fieldset>
                    <fieldset class="form-group">
                        <label for="password" class="sr-only">Password</label>

                        <input type="password" class="form-control" id="password"
                                   v-model="user.password"
                                   placeholder="Enter your password">
                    </fieldset>
                    <button type="submit" class="btn btn-primary btn-block">Login</button>
                    <fieldset class="form-group row m-t-2">
                        <div class="col-xs-12">
                            help, I <a v-link="{ path: '/reset/'}"><u>forgot my password</u></a>
                        </div>
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
                auth.login(this.user)
                        .then(()=> {
                            logging.success('Welcome to LessPass');
                            this.$router.go('/entries/');
                        })
                        .catch(() => {
                            logging.error('Invalid login credentials');
                        });
            }
        }
    }
</script>

