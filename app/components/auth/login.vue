<template>
    <div class="panel-heading">
        Sign in to your account
    </div>
    <div class="panel-body">
        <form class="form-horizontal" role="form">

            <div id="alerts" v-if="messages.length > 0">
                <div v-for="message in messages" class="alert alert-{{ message.type }} alert-dismissible" role="alert">
                    {{ message.message }}
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label">E-Mail Address</label>
                <div class="col-md-6">
                    <input type="email" class="form-control" v-model="email">
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label">Password</label>
                <div class="col-md-6">
                    <input type="password" class="form-control" v-model="password">
                </div>
            </div>

            <div class="form-group">
                <div class="col-md-6 col-md-offset-4">
                    <button type="submit" class="btn btn-primary" v-on:click="login">
                        <i class="fa fa-btn fa-sign-in"></i>Login
                    </button>

                    <!--<a class="btn btn-link" v-link="{ path: '/auth/forgot' }">Forgot Your Password?</a>-->
                </div>
            </div>
        </form>
    </div>
    <!--<input type="text" name="email" v-model="email">
    <input type="password" name="password" v-model="password">
    <button class="btn btn-primary" v-on:click="login">se connecter</button>-->
</template>
<script>
    export default {
        data: function () {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            login: function () {
                var email = this.email;
                var password = this.password;


                this.$http.get('http://localhost:8000/api/').then(function (response) {
                    console.log('success');
                    console.log(response);
                }, function (response) {
                    console.log('error');
                    console.log(response)
                });


            }
        }
    }
</script>