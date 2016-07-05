<style lang="sass">
    @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
    @import '../node_modules/font-awesome/css/font-awesome.min.css';
    @import '../node_modules/notie/dist/notie.css';
    @import '../node_modules/hint.css/hint.min.css';

    * {
        border-radius: 0 !important;
    }

    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    body {
        background: #008ed6 fixed top center;
        background-size: cover;
        color: #FFFFFF;
    }

    .white-link {
        color: #ffffff;
    }

    .white-link:hover {
        color: #ffffff;
    }

    .app {
        height: 100%;
        display: flex;
        color: #555;
    }

    .content {
        height: 100%;
        width: 100%;
        padding-top: 5em;
    }

    .content.no-sidebar, .content.no-sidebar .container-fluid {
        padding: 0;
    }

    @media (min-width: 48em) {
        .content {
            padding-top: 1em;
            padding-left: 64px;
        }
    }
</style>
<template>
    <div class="app">
        <div class="sidebar-wrapper" v-show="user.authenticated">
            <sidebar></sidebar>
        </div>
        <div class="content" v-bind:class="{ 'no-sidebar': !user.authenticated }">
            <div class="container-fluid">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import 'bootstrap/dist/js/umd/collapse.js';
    import Sidebar from './components/sidebar';
    import auth from './services/auth';

    export default {
        data() {
            return {
                user: auth.user
            };
        },
        components: {
            Sidebar
        }
    };
</script>
