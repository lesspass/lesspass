<style>
    #lesspass .white-link {
        color: white;
    }

    #lesspass.card {
        border: none;
    }

    #lesspass .card-block {
        border: 1px solid rgba(0, 0, 0, 0.125);
        border-top: none;
    }

    @media (max-width: 470px) {
        #lesspass .card-block {
            border: none;
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
    import './LessPass.scss';
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
            setInterval(() => {
                this.$store.dispatch('REFRESH_TOKEN');
            }, fiveMinutes);
        }
    }
</script>