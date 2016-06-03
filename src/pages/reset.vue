<template>
    <div id="login-page">
        <div class="col-sm-4 col-sm-offset-4">
            <div class="card card-block">
                <h4 class="card-title">Reset Password</h4>
                <p class="card-text">Enter your email to received an email with password reset link.</p>
                <form @submit="sendResetEmail()">
                    <fieldset class="form-group">
                        <label for="email">Email</label>

                        <div class="input-group">
                            <span class="input-group-addon"><i class="icon ion-ios-person"></i></span>
                            <input type="text" class="form-control" id="email" placeholder="Enter your email"
                                   v-model="email" autofocus>
                        </div>
                    </fieldset>
                    <button type="submit" class="btn btn-primary btn-block">Send Email</button>
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
                email: ''
            };
        },
        methods: {
            sendResetEmail(){
                auth.reset(this.email).then(()=> {
                    logging.success('If your email are in our database, you will received an email shortly');
                });
            }
        }
    }
</script>

