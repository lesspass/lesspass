<template>
    <button type="button" class="btn btn-primary" data-toggle="modal"
            data-target="#newEntryModal">
        create new entry
    </button>
    <div class="modal fade" id="newEntryModal" tabindex="-1" role="dialog" aria-labelledby="newEntry"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title" id="newEntry">Create_new_entry</h4>
                </div>
                <div class="modal-body text-xs-left">
                    <entry-form :entry="entry" v-bind:prop.sync></entry-form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">
                        Cancel
                    </button>
                    <button type="button" class="btn btn-primary" @click="create()">
                        Create
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import Entries from '../services/entries';
    import logging from '../services/logging';
    import EntryForm from './entry-form';

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
        },
        ready(){
            $('#newEntryModal').on('shown.bs.modal', function () {
                document.getElementById("pg-login").focus();
            })
        },
        methods: {
            create() {
                Entries.create(this.entry)
                        .then(() => {
                            $('#newEntryModal').modal('hide');
                            location.reload();
                        })
                        .catch((err) => {
                            logging.error(this.$t('entry.error_creation'));
                        });
            },
        },
    };
</script>
