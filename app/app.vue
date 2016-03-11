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