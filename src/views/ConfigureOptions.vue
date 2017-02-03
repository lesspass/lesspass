<template>
    <div>
        <h4>Default Options</h4>
        <small class="help-text">default options are saved locally</small>
        <options v-bind:password="defaultPassword" v-on:optionsUpdated="updatePassword"></options>
        <div class="form-group">
            <button type="button" class="btn btn-primary" v-on:click="saveDefault">
                <span v-if="optionsSaved">
                   <i class="fa fa-check" aria-hidden="true"></i> saved
                </span>
                <span v-else>
                  Save
                </span>
            </button>
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
                options: null,
                optionsSaved: false
            }
        },
        methods: {
            saveDefault(){
                if (this.options !== null) {
                    this.$store.dispatch('saveDefaultPassword', {password: this.options});
                }
                this.optionsSaved = true;
                setTimeout(() => {
                    this.optionsSaved = false;
                }, 3000);
            },
            updatePassword(password){
                this.options = password;
            }
        }
    }
</script>
