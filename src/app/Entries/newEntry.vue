<template>
    <div class="row">
        <div class="col-xs-12 col-md-8 col-lg-6 pull-xs-left pull-md-right">
            <button type="button" class="btn btn-primary btn-block" data-toggle="modal"
                    data-target="#newEntryModal">
                {{{ $t('entry.create_new_entry') }}}
            </button>
        </div>
    </div>
    <div class="modal fade" id="newEntryModal" tabindex="-1" role="dialog" aria-labelledby="newEntry"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title" id="newEntry">{{{ $t('entry.Create_new_entry') }}}</h4>
                </div>
                <div class="modal-body text-xs-left">
                    <entry-form :entry="entry" v-bind:prop.sync></entry-form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">
                        {{{ $t('entry.Cancel') }}}
                    </button>
                    <button type="button" class="btn btn-primary" @click="create()">
                        {{{ $t('entry.Create') }}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import http from '../../services/http';
    import logging from '../../services/logging';
    import EntryForm from './EntryForm';

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
        methods: {
            create() {
                http.entries.create(this.entry)
                        .then(() => {
                            $('#newEntryModal').modal('hide');
                            logging.success(this.$t('entries.entry_created'));
                        })
                        .catch((err) => {
                            logging.error(this.$t('entries.error_creation'));
                        });
            },
        },
    };
</script>
