<style>
    #lesspass .white-link {
        color: white;
    }

    #lesspass .white-link:hover, #lesspass .white-link:focus, #lesspass .white-link:active {
        text-decoration: none;
        color: white;
    }

    #lesspass * {
        border-radius: 0 !important;
    }
</style>
<template>
    <div id="lesspass" class="card" style="border:none;">
        <lesspass-menu></lesspass-menu>
        <div class="card-block" style="min-height: 400px;">
            <router-view></router-view>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import LessPassMenu from './Menu';

    export default {
        name: 'LessPass',
        components: {
            'lesspass-menu': LessPassMenu
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
