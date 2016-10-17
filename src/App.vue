<template>
    <div>
        <navigation-bar></navigation-bar>
        <hero></hero>
        <features class="m-t-3 m-b-2"></features>
        <lesspass-footer class="m-y-2"></lesspass-footer>
    </div>
</template>
<script type="text/ecmascript-6">
    import NavigationBar from './components/NavigationBar';
    import Hero from './components/Hero';
    import Features from './components/Features';
    import Footer from './components/Footer';

    export default {
        components: {
            'navigation-bar': NavigationBar,
            'hero': Hero,
            'features': Features,
            'lesspass-footer': Footer,
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
