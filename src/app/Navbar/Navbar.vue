<style>
    #navbar {
        background-color: white;
        border-bottom: 1px solid #e8e8e8;
        margin: 0;
    }

    #navbar #navbar__logo {
        height: 36px;
    }

    #navbar .navbar {
        padding: 1em 0;
    }
</style>
<template>
    <div id="navbar">
        <div class="container">
            <nav class="navbar">
                <ul class="nav navbar-nav">
                    <li class="nav-item">
                        <a v-link="{ path: '/' }">
                            <img id="navbar__logo" src="logo.png" alt="logo">
                        </a>
                    </li>
                </ul>
                <ul class="nav navbar-nav pull-xs-right">
                    <li class="nav-item" v-if="user.authenticated">
                        <a class="nav-link" v-on:click.stop.prevent="logout()">
                            <i class="fa fa-sign-out"></i> {{ $t('login.logout') }}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import http from '../../services/http';
    import logging from '../../services/logging';


    export default {
        data() {
            return {
                user: http.auth.user,
            };
        },
        methods: {
            logout() {
                http.auth.logout().then(() => {
                    logging.success(this.$t('login.logout_ok'));
                    this.$router.go('/');
                });
            },
        },
    };
</script>
