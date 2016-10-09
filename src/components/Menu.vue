<style>
    .card-header-dark {
        background-color: #555;
        border-color: #555;
        color: #FFF;
    }

    #title {
        cursor: pointer;
    }
</style>
<template>
    <div>
        <div class="card-header" v-show="isAuthenticated">
            <div class="row">
                <div class="col-xs-6">
                    <span id="title" v-on:click="go('index')">LessPass</span>
                </div>
                <div class="col-xs-6 text-xs-right">
                    <div class="btn-group">
                        <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false" style="background-color:transparent; padding:0;">
                            {{email}}
                        </button>
                        <div class="dropdown-menu dropdown-menu-right">
                            <button class="dropdown-item" type="button" v-on:click="go('passwords')">Passwords</button>
                            <button class="dropdown-item" type="button">Help</button>
                            <div class="dropdown-divider"></div>
                            <button class="dropdown-item" type="button" v-on:click="logout">Log out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-header card-header-dark" v-show="isGuest">
            <div class="row">
                <div class="index-header" v-show="page === 'index'">
                    <div class="col-xs-6">
                        LessPass
                    </div>
                    <div class="col-xs-6 text-xs-right">
                        <button type="button" class="btn" v-on:click="go('login')"
                                style="background-color:transparent; padding:0; color:white;">
                            <i class="fa fa-user-secret white" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
                <div class="login-header" v-show="page === 'login'">
                    <div class="col-xs-1">
                        <span class="link" v-on:click="go('index')">
                            <i class="fa fa-chevron-circle-left white" aria-hidden="true"></i>
                        </span>
                    </div>
                    <div class="col-xs-10 text-xs-center">
                        Connect to LessPass Database
                    </div>
                </div>
                <div class="login-header" v-show="page === 'register'">
                    <div class="col-xs-1">
                        <span class="link" v-on:click="go('login')">
                            <i class="fa fa-chevron-circle-left white" aria-hidden="true"></i>
                        </span>
                    </div>
                    <div class="col-xs-10 text-xs-center">
                        Create a LessPass Database Account
                    </div>
                </div>
                <div class="login-header" v-show="page === 'forgotPassword'">
                    <div class="col-xs-1">
                        <span class="link" v-on:click="go('login')">
                            <i class="fa fa-chevron-circle-left white" aria-hidden="true"></i>
                        </span>
                    </div>
                    <div class="col-xs-10 text-xs-center">
                        Forgot Password
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import {mapGetters, mapActions} from 'vuex';

    export default {
        methods: mapActions([
            'go',
            'logout'
        ]),
        computed: mapGetters([
            'page',
            'isAuthenticated',
            'isGuest',
            'email'
        ])
    }
</script>
