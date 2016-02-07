<style>
    .header {
        background-color: #D8E4EA;
        height: 86px;
    }

    .header {
        color: #252830;
    }

    .navbar {
        padding: 1.5rem 0;
    }
</style>
<template>
    <div class="collapse" id="SignInCollapseNavbar">
        <div class="bg-inverse p-a-1">
            <div class="container">
                <div class="col-lg-12">
                    <form class="form-inline pull-md-right">
                        <div class="form-group form">
                            <label class="sr-only" for="email">{{$t('header.Email')}}</label>
                            <input type="email" class="form-control form-control-sm" id="email"
                                   placeholder="{{$t('header.Email')}}"
                                   v-model="credentials.email">
                        </div>
                        <div class="form-group">
                            <label class="sr-only" for="password">{{$t('header.Password')}}</label>
                            <input type="password" class="form-control form-control-sm" id="password"
                                   placeholder="{{$t('header.Password')}}"
                                   v-model="credentials.password">
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-12">
                                <button type="submit" class="btn btn-primary btn-sm btn-block" @click="signin()">
                                    {{$t('header.Sign_in')}}
                                </button>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-12">
                                <button type="submit" class="btn btn-primary-outline btn-sm btn-block"
                                        @click="register()">
                                    {{$t('header.Register')}}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="header">
        <nav class="navbar">
            <div class="container">
                <ul class="nav navbar-nav">
                    <li class="nav-item">
                        <a class="" href="#">
                            <img src="../assets/images/logo_text.png" alt="logo">
                        </a>
                    </li>
                </ul>
                <ul class="nav navbar-nav pull-xs-right">
                    <li class="nav-item" v-if="!user.authenticated">
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#SignInCollapseNavbar">
                            &#9776;
                        </button>
                    </li>
                    <li class="nav-item" v-if="user.authenticated">
                        <a class="btn btn-primary" @click="logout()">
                            logout
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
    import auth from '../services/auth'
    import {router} from '../main'

    export default {
        data: function () {
            return {
                user: auth.user,
                credentials: {
                    email: '',
                    password: ''
                },
                error: ''
            }
        },
        methods: {
            signin() {
                var credentials = {
                    email: this.credentials.email,
                    password: this.credentials.password
                };
                auth.login(this, credentials, function(){
                    $('#SignInCollapseNavbar').collapse('hide');
                    router.go('/');
                });
            },
            register() {
                var credentials = {
                    email: this.credentials.email,
                    password: this.credentials.password
                };
                auth.register(this, credentials)
            },
            logout() {
                auth.logout(function(){
                    router.go('/presentation/');
                })
            }
        }
    }
</script>