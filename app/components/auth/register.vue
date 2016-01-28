<!--<style>
    #register .form-control {
        background-color: #31353A;
        color: #8F9394;
        border: 1px solid #31353A;
    }
</style>-->
<template>
    <div id="register" class="p-y-2">
        <h2>{{$t('login.register')}}</h2>
        <div class="form-group m-t-2">
            <input type="text" class="form-control" placeholder="{{$t('login.enter_email')}}"
                   v-model="credentials.username">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" placeholder="{{$t('login.enter_password')}}"
                   v-model="credentials.password">
        </div>
        <button class="btn btn-primary" @click="submit()">{{$t('login.create_account')}}</button>
    </div>
</template>
<script>
    import auth from '../../services/auth'
    export default {
        data: function () {
            return {
                credentials: {
                    username: '',
                    password: ''
                },
                error: ''
            }
        },
        methods: {
            submit() {
                var credentials = {
                    username: this.credentials.username,
                    password: this.credentials.password
                };

            }
        }
    }
</script>