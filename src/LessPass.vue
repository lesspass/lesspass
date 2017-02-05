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
            this.$store.dispatch('loadPasswordFirstTime');
        }
    }
</script>