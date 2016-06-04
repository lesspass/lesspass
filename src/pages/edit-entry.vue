<template>
    <div id="edit-entry-page">
        <div class="row">
            <div class="col-lg-6">
                <div class="card card-block">
                    <div class="row">
                        <div class="col-lg-9">
                            <h4>{{{ $t('entries.UpdateNewEntry') }}}</h4>
                        </div>
                        <div class="col-lg-3 text-xs-right">
                            <delete-button :entry="entry"></delete-button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <entry-form :entry="entry" v-bind:prop.sync></entry-form>
                            <button type="button" class="btn btn-primary" @click="update()">
                                {{{ $t('entries.Update') }}}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import EntryForm from '../components/entry-form';
    import DeleteButton from '../components/delete-entry-button';
    import logging from '../services/logging';
    import Entries from '../services/entries';

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
            Entries.get(this.$route.params.uuid).then((entry) => {
                this.entry = entry
            });
        },
        methods: {
            update() {
                Entries.update(this.entry)
                        .then(() => {
                            logging.success(this.$t('entries.entryUpdated'));
                        })
                        .catch((err) => {
                            logging.error(this.$t('entries.errorUpdate'));
                        });
            },
            delete(){

            }
        },
    };
</script>
