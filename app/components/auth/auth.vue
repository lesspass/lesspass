<template>
    <div class="container">
        <div class="row m-y-2">
            <div class="col-lg-4 col-lg-offset-4">
                <router-view></router-view>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 col-lg-offset-4">
                <p v-if="$route.path=='/auth/login'">
                    {{$t('login.dont_have_an_account')}}
                    <a v-link="{ path: '/auth/register' }">{{$t('login.register')}}</a>
                </p>
                <p v-if="$route.path=='/auth/register'">
                    {{$t('login.already_have_an_account')}}
                    <a v-link="{ path: '/auth/login' }">{{$t('login.login')}}</a>
                </p>
            </div>
        </div>
    </div>
</template>
