<style>
    #lesspass .white-link {
        color: white;
    }

    #lesspass.card {
        border: none;
    }

    @media (min-width: 544px) {
        #lesspass.v1 {
            border: 1px solid #f0ad4e;
        }

        #lesspass.v2 {
            border: 1px solid #0275d8;
        }
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