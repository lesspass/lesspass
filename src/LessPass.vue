<style>
    #lesspass .white-link {
        color: white;
    }

    #lesspass.card {
        border: none;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
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
    <div id="lesspass" class="card" style="max-width: 470px;"
         v-bind:class="{ 'v1': version===1, 'v2': version===2 }">
        <lesspass-menu></lesspass-menu>
        <div class="card-block">
            <router-view></router-view>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import Menu from './components/Menu.vue';
    import {mapGetters} from 'vuex';

    export default {
        name: 'LessPass',
        components: {
            'lesspass-menu': Menu
        },
        computed: mapGetters(['version']),
        created(){
            const fiveMinutes = 1000 * 60 * 5;
            this.$store.dispatch('REFRESH_TOKEN');
            setInterval(()=> {
                this.$store.dispatch('REFRESH_TOKEN');
            }, fiveMinutes);
        }
    }
</script>