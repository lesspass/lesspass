<template>
    <div class="container p-t-2">
        <div class="row">
            <div class="col-sm-12 col-md-10 col-lg-8 bg-card-white">
                <div class="row">
                    <div class="col-lg-9">
                        <h4>{{{ $t('entry.Update_new_entry') }}}</h4>
                    </div>
                    <div class="col-lg-3 text-xs-right">
                        <delete-button :entry="entry"></delete-button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <entry-form :entry="entry" v-bind:prop.sync></entry-form>
                        <button type="button" class="btn btn-primary" @click="update()">
                            {{{ $t('entry.Update') }}}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import EntryForm from './EntryForm';
    import DeleteButton from './DeleteEntryButton';
    import logging from '../../services/logging';
    import http from '../../services/http';

    export default {
        data() {
            return {
                entry: {
                    login: '',
                    site: '',
                    password: {
                        counter: 1,
                        length: 12,
                        settings: ["lowercase", "uppercase", "numbers", "symbols"]
                    },
                }
            };
        },
        components: {
            EntryForm,
            DeleteButton,
        },
        ready(){
            http.entries.get(this.$route.params.uuid).then((entry) => {
                this.entry = entry
            });
        },
        methods: {
            update() {
                http.entries.update(this.entry)
                        .then(() => {
                            logging.success(this.$t('entry.entry_update'));
                        })
                        .catch((err) => {
                            logging.error(this.$t('entry.error_update'));
                        });
            },
            delete(){

            }
        },
    };
</script>
