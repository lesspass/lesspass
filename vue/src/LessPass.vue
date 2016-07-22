<style>
    * {
        border-radius: 0 !important;
    }

    .inner-addon {
        position: relative;
    }

    i {
        color: #555
    }

    .white {
        color: #FFFFFF;
    }

    #passwordGenerator {
        border: none;
    }

    @media (min-width: 768px) {
        #passwordGenerator {
            max-width: 500px;
            margin: 0 auto;
        }
    }

    /* style icon */
    .inner-addon i {
        position: absolute;
        padding: 10px;
        pointer-events: none;
        z-index: 10;
    }

    /* align icon */
    .left-addon i {
        left: 0;
    }

    .right-addon i {
        right: 0;
    }

    /* add padding  */
    .left-addon input {
        padding-left: 30px;
    }

    .right-addon input {
        padding-right: 30px;
    }

    @media (min-width: 768px) {
        body {
            padding-top: 5vh;
            background: #008ed6 fixed top;
            background-size: cover;
        }
    }

    .card-header-dark {
        background-color: #555;
        border-color: #555;
        color: #FFF;
    }

    .card-block {
        min-height: 397px;
    }

    .link {
        cursor: pointer;
    }
</style>
<template>
    <div id="app">
        <div id="passwordGenerator" class="card">
            <div class="card-header card-header-dark">
                <div class="row">
                    <div class="index-header" v-show="page === 'index'">
                        <div class="col-xs-6">
                            LessPass
                        </div>
                        <div class="col-xs-6 text-xs-right">
                            <button type="button" class="btn" @click="displayLoginPage"
                                    style="background-color:transparent; padding:0; color:white;">
                                <i class="fa fa-user-secret white" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                    <div class="login-header" v-show="page === 'login'">
                        <div class="col-xs-1">
                            <span class="link" @click="displayIndex">
                                <i class="fa fa-chevron-circle-left white" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div class="col-xs-10 text-xs-center">
                            Connect to LessPass App
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-block" v-show="page === 'login'">
                <login></login>
            </div>
            <div class="card-block" v-show="page === 'index'">
                <password-generator></password-generator>
            </div>
        </div>
    </div>
</template>
<script>
    import auth from './services/auth';
    import PasswordGenerator from './components/PasswordGenerator';
    import Login from './components/Login';

    auth.localStorage = localStorage;

    export default {
        data(){
            return {
                page: 'index'
            }
        },
        components: {
            'password-generator': PasswordGenerator,
            'login': Login
        },
        methods: {
            displayLoginPage(){
                this.page = 'login'
            },
            displayIndex(){
                this.page = 'index'
            }
        }
    }
</script>
