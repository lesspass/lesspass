<template>
    <div id="login-page">
        <div class="col-sm-4 col-sm-offset-4">
            <div class="card card-block">
                <h4 class="card-title">LessPass</h4>
                <p class="card-text">You must log in to continue.</p>
                <form @submit="login()">
                    <fieldset class="form-group">
                        <label for="email">Email</label>

                        <div class="input-group">
                            <span class="input-group-addon"><i class="icon ion-ios-person"></i></span>
                            <input type="text" class="form-control" id="email"
                                   placeholder="Enter your email"
                                   v-model="user.email" autofocus>
                        </div>
                    </fieldset>
                    <fieldset class="form-group">
                        <label for="password">Password</label>

                        <div class="input-group">
                            <span class="input-group-addon"><i class="icon ion-ios-key"></i></span>
                            <input type="password" class="form-control" id="password"
                                   v-model="user.password"
                                   placeholder="Enter your password">
                        </div>
                    </fieldset>
                    <button type="submit" class="btn btn-primary btn-block">Login</button>
                    <fieldset class="form-group row text-xs-center m-t-2">
                        <div class="col-xs-6">
                            <a v-link="{ path: '/sign_up/'}"><u>Sign Up</u></a>
                        </div>
                        <div class="col-xs-6">
                            <a v-link="{ path: '/reset/'}"><u>forget password?</u></a>
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
                            this.$router.go('/');
                        })
                        .catch(() => {
                            logging.error('Invalid login credentials');
                        });
            }
        }
    }
</script>

