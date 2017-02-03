<template>
    <div>
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
                       v-model="defaultPassword.login">
            </div>
        </div>
        <options v-bind:password="defaultPassword" v-on:optionsUpdated="updatePassword"></options>
        <div class="form-group">
            <div class="alert alert-info" v-if="defaultPassword.version===2">
                Default options are automatically saved <strong>locally</strong></small>
            </div>
            <div class="alert alert-danger" v-if="defaultPassword.version===1">
                Version 1 is deprecated and will be removed in
                <strong aria-label="April, 10 2017" class="hint--right">{{ getDayBeforeOnlyV2() }} days</strong>.
                We strongly advise you to migrate your passwords to version 2.
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapGetters} from 'vuex';
    import Options from '../components/Options.vue';

    export default {
        name: 'configure-options-view',
        components: {
            Options
        },
        computed: mapGetters(['defaultPassword']),
        data(){
            return {
                optionsSaved: false
            }
        },
        methods: {
            updatePassword(password){
                this.$store.dispatch('saveDefaultPassword', {password});
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
