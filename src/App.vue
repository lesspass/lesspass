<style>
    html, body {
        height: 100%;
        width: 100%;
    }

    body {
        margin: 0;
    }

    @media (min-width: 768px) {
        body {
            background: #008ed6 fixed top;
            background-size: cover;
        }
    }

    * {
        border-radius: 0 !important;
    }

    #app {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
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

    #lesspass {
        border: none;
    }

    @media (min-width: 768px) {
        #lesspass {
            width: 500px;
            height: 455px;

            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;

            max-width: 100%;
            max-height: 100%;
            overflow: auto;
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

    .link {
        cursor: pointer;
    }
</style>
<template>
    <div id="app">
        <div id="lesspass" class="card">
            <lesspass-menu></lesspass-menu>
            <login v-show="page === 'login'"></login>
            <register v-show="page === 'register'"></register>
            <forgot-password v-show="page === 'forgotPassword'"></forgot-password>
            <passwords v-show="page === 'passwords'"></passwords>
            <password-generator v-show="page === 'index'"></password-generator>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import PasswordGenerator from './components/PasswordGenerator';
    import Login from './components/Login';
    import Register from './components/Register';
    import ForgotPassword from './components/ForgotPassword';
    import Passwords from './components/Passwords';
    import LesspassMenu from './components/Menu';
    import {mapGetters} from 'vuex'

    export default {
        components: {
            PasswordGenerator,
            Login,
            Register,
            LesspassMenu,
            ForgotPassword,
            Passwords,
        },
        computed: mapGetters([
            'page'
        ])
    }
</script>
