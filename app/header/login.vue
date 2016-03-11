<style>
    #login-bar {
        background-color: #1a1a1a;
        height: 38px;
        color: #ffffff;
    }

    #login-bar .nav-link {
        padding-left: 1em;
        padding-right: 1em;
    }

    #login-bar .nav-link {
        line-height: 38px;
    }
</style>
<template>
    <div id="login-bar">
        <div class="container">
            <nav class="nav nav-inline pull-right">
                <a class="nav-link" href="#">
                    <i class="fa fa-lock"></i> {{ $t('login.login') }}
                </a>
                <a class="nav-link bg-primary" href="#">
                    <i class="fa fa-user-plus"></i> {{ $t('login.register') }}
                </a>
            </nav>
        </div>
    </div>
</template>