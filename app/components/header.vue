<style>
    #navbar {
        height: 86px;
        padding: 1.5rem 0;
    }
</style>
<template>
    <div id="header">
        <div id="SignInCollapseNavbar" class="bg-inverse collapse">
            <div class="container p-t-1">
                <form>
                    <div class="form-group row">
                        <div class="col-lg-2 col-lg-offset-4 m-b-1">
                            <label class="sr-only" for="email">{{$t('header.Email')}}</label>
                            <input type="email" class="form-control form-control-sm" id="email"
                                   placeholder="{{$t('header.Email')}}"
                                   v-model="credentials.email">
                        </div>
                        <div class="col-lg-2 m-b-1">
                            <label class="sr-only" for="password">{{$t('header.Password')}}</label>
                            <input type="password" class="form-control form-control-sm" id="password"
                                   placeholder="{{$t('header.Password')}}"
                                   v-model="credentials.password">
                        </div>
                        <div class="col-lg-2 m-b-1">
                            <button type="submit" class="btn btn-primary btn-sm btn-block" @click="signin()">
                                {{$t('header.Sign_in')}}
                            </button>
                        </div>
                        <div class="col-lg-2 m-b-1">
                            <button type="submit" class="btn btn-primary-outline btn-sm btn-block"
                                    @click="register()">
                                {{$t('header.Register')}}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="container">
            <nav id="navbar" class="navbar">
                <div class="container">
                    <ul class="nav navbar-nav">
                        <li class="nav-item">
                            <a class="" href="#">
                                <img src="../assets/images/logo_text.png" alt="logo">
                            </a>
                        </li>
                    </ul>
                    <!--<ul class="nav navbar-nav pull-xs-right">
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
                    </ul>-->
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
    var auth = require('../services/auth.js');
    var router = require('../router.js');

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
                auth.login(this, credentials, function () {
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
                auth.logout(function () {
                    router.go('/presentation/');
                })
            }
        }
    }
</script>