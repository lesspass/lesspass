<style>
    #login-bar {
        background-color: #1a1a1a;
        height: 38px;
        color: #ffffff;
    }

    #login-bar .nav-link {
        padding-left: 1em;
        padding-right: 1em;
        color: inherit;
    }

    #login-bar .nav-link {
        line-height: 38px;
    }
</style>
<template>
    <div id="login-bar">
        <div class="container">
            <nav class="nav nav-inline pull-right">
                <a class="nav-link" v-bind:class="{ 'bg-primary': $route.path=='/login/'}"
                   v-link="{ path: '/login/' }">
                    <i class="fa fa-lock"></i> {{ $t('login.login') }}
                </a>
                <a class="nav-link" v-bind:class="{ 'bg-primary': $route.path=='/register/'}"
                   v-link="{ path: '/register/' }">
                    <i class="fa fa-user-plus"></i> {{ $t('login.register') }}
                </a>
            </nav>
        </div>
    </div>
</template>