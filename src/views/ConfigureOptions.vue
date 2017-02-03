<template>
    <div>
        <div class="form-group">
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
        <options v-bind:password="defaultPassword" v-on:optionsUpdated="updatePassword"></options>
        <div class="form-group">
            <div class="alert alert-info" role="alert">
                Default options are saved <strong>locally</strong></small>
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
            }
        }
    }
</script>
