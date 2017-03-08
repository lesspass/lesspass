<template>
    <div>
        <div class="form-group" v-if="defaultOptions.version===1">
            <div class="alert alert-danger">
                Version 1 is deprecated and will be removed in
                <strong aria-label="April, 10 2017" class="hint--right">{{ getDayBeforeOnlyV2() }} days</strong>.
                We strongly advise you to migrate your passwords to version 2.
            </div>
        </div>
        <div class="form-group">
            <label for="login">Login</label>
            <div class="inner-addon left-addon">
                <i class="fa fa-user"></i>
                <input id="login"
                       name="login"
                       type="text"
                       class="form-control"
                       placeholder="Login"
                       autocomplete="off"
                       autocorrect="off"
                       autocapitalize="none"
                       v-model="defaultOptions.login">
            </div>
        </div>
        <options v-bind:password="defaultOptions" v-on:optionsUpdated="optionsUpdated"></options>
        <div class="form-group pt-3">
            <button type="button" class="btn btn-sm btn-block hint--top hint--medium"
                    aria-label="We use local storage to save default options locally. Each time you open the app, those options will be loaded by default."
                    v-bind:class="{'btn-warning':defaultOptions.version===1,'btn-primary':defaultOptions.version!==1}"
                    v-on:click="saveOptionsAsDefault">
                Save default options locally
            </button>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Options from '../components/Options.vue';

    export default {
        name: 'configure-options-view',
        components: {
            Options
        },
        data(){
            return {
                defaultOptions: {}
            }
        },
        created(){
            this.defaultOptions = Object.assign({}, this.$store.state.defaultPassword);
        },
        methods: {
            optionsUpdated(options){
                this.defaultOptions = Object.assign({}, this.defaultOptions, options);
            },
            saveOptionsAsDefault(){
                this.$store.dispatch('saveDefaultPassword', {password: this.defaultOptions});
            },
            getDayBeforeOnlyV2(){
                const oneDay = 24 * 60 * 60 * 1000;
                const now = new Date();
                const onlyV2DefaultDate = new Date(2017, 4, 10);
                return Math.round(Math.abs((now.getTime() - onlyV2DefaultDate.getTime()) / (oneDay)));
            },
        }
    }
</script>
