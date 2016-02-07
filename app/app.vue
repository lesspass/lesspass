<style>
    @import '../node_modules/bootstrap/dist/css/bootstrap.css';
    @import '../node_modules/toastr/build/toastr.min.css';

    #toast-container > div {
        opacity: 1;
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
        filter: alpha(opacity=100);
    }

    body {
        font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 14px;
        line-height: 1.5;
        color: #cfd2da;
        background-color: #252830;
    }

    .blue {
        color: #0275D8;
    }
</style>

<template>
    <div>
        <lesspass-header></lesspass-header>
        <router-view></router-view>
    </div>
</template>
<script>
    var $ = require('jquery');
    window.jQuery = $;
    window.Tether = require('tether');
    window.$ = $;
    var bootstrap = require('bootstrap/dist/js/umd/collapse.js');

    import LesspassHeader from './components/header.vue';

    export default {
        data: function () {
            return {}
        },
        components: {
            LesspassHeader
        }
    }
</script>