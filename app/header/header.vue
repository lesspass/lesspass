<template>
    <div id="header">
        <lesspass-login></lesspass-login>
        <lesspass-navbar></lesspass-navbar>
    </div>
</template>
<script>
    import LesspassLogin from './login.vue';
    import LesspassNavbar from './navbar.vue';

    export default {
        data: function () {
            return {}
        },
        components: {
            LesspassLogin,
            LesspassNavbar
        }
    }
</script>