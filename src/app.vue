<style lang="sass">
    @import '../node_modules/bootstrap/scss/bootstrap.scss';
    @import '../node_modules/ionicons/dist/css/ionicons.css';
    @import '../node_modules/toastr/build/toastr.css';

    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    body {
        background-image: url("data:image/gif;base64,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");
    }

    .form-control, .btn, .input-group-addon, .modal-content {
        border-radius: 0 !important;
    }

    .white-link {
        color: #ffffff;
        text-decoration: underline;
    }

    .white-link:hover {
        color: #ffffff;
        text-decoration: none;
    }

    .app {
        height: 100%;
        display: flex;
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
            Sidebar,
        }
    };
</script>
