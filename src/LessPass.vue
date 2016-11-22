<style>
    #lesspass .white-link {
        color: white;
    }

    #lesspass .white-link:hover, #lesspass .white-link:focus, #lesspass .white-link:active {
        text-decoration: none;
        color: white;
    }

    #lesspass, #lesspass * {
        border-radius: 0 !important;
    }
</style>
<template>
    <div id="lesspass" class="card" style="max-width: 475px;">
        <lesspass-menu></lesspass-menu>
        <div class="card-block">
            <router-view></router-view>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import Menu from './components/Menu.vue';

    export default {
        name: 'LessPass',
        components: {
            'lesspass-menu': Menu
        },
        created(){
            const fiveMinutes = 1000 * 60 * 5;
            this.$store.dispatch('REFRESH_TOKEN');
            setInterval(()=> {
                this.$store.dispatch('REFRESH_TOKEN');
            }, fiveMinutes);
        }
    }
</script>
