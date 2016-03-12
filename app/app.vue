<style>
    body{
        background-color: #f7f7f7;
        color: #1a1a1a;
    }
</style>
<template>
    <div id="app">
        <lesspass-header></lesspass-header>
        <router-view></router-view>
    </div>
</template>
<script>
    import LesspassHeader from './header/header.vue';

    export default {
        data: function () {
            return {}
        },
        components: {
            LesspassHeader
        }
    }
</script>