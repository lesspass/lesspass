<style>
    #login-bar {
        background-color: #424242;
        height: 38px;
        color: #F5F5F5;
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
            <nav class="nav nav-inline pull-xs-right">
                <a class="nav-link bg-primary" v-link="{ path: '/entries/' }">
                    {{ $t('login.LOGIN') }}
                </a>
                <a class="nav-link" v-link="{ path: '/register/' }">
                    {{ $t('login.REGISTER') }}
                </a>
            </nav>
        </div>
    </div>
</template>
