<template>
    <div id="login">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                    <form>
                        <fieldset class="form-group">
                            <label class="sr-only" for="email">{{$t('header.Email')}}</label>
                            <input type="email" class="form-control form-control-sm" id="email"
                                   placeholder="{{$t('header.Email')}}"
                                   v-model="credentials.email">
                        </fieldset>
                        <fieldset class="form-group">
                            <label class="sr-only" for="password">{{$t('header.Password')}}</label>
                            <input type="password" class="form-control form-control-sm" id="password"
                                   placeholder="{{$t('header.Password')}}"
                                   v-model="credentials.password">
                        </fieldset>
                        <button type="submit" class="btn btn-primary btn-sm btn-block" @click="signin()">
                            {{$t('header.Sign_in')}}
                        </button>
                    </form>
                </div>
            </div>
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
            signin() {
                var credentials = {
                    email: this.credentials.email,
                    password: this.credentials.password
                };
                auth.login(this, credentials, function () {
                    router.go('/');
                });
            }
        }
    }
</script>