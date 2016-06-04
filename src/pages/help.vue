<style scoped>
    pre {
        font-size: .7em;
    }
</style>
<template>
    <div id="help-page">
        <div class="row m-y-1">
            <help-component></help-component>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import HelpComponent from '../components/help';
    export default {
        components: {
            HelpComponent
        }
    };
</script>
