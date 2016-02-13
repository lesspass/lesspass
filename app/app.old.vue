<style>
    #toast-container > div {
        opacity: 1;
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
        filter: alpha(opacity=100);
    }

    body {
        font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 14px;
        line-height: 1.4;
        background: #D3D8E8;
        color: #252830;
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