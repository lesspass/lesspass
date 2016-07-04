<style>
    .icon-2x{
        font-size: 1.2em;
    }
</style>
<template>
    <button class="btn btn-danger btn-sm m-b-0" data-toggle="modal" data-target="#deleteEntryModal">
        <i class="fa fa-trash icon-2x" aria-hidden="true"></i>
    </button>
    <div class="modal fade" id="deleteEntryModal" tabindex="-1" role="dialog" aria-labelledby="deleteEntry"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content text-xs-left">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title" id="deleteEntry">{{{ $t('entries.DeleteEntry') }}}</h4>
                </div>
                <div class="modal-body text-xs-left">
                    {{{ $t('entries.deleteAreYouSure') }}}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">
                        {{{ $t('entries.Cancel') }}}
                    </button>
                    <button type="button" class="btn btn-danger" @click="deleteEntry()">
                        {{{ $t('entries.Confirm') }}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import Entries from '../services/entries';
    import logging from '../services/logging';

    export default {
        data() {
            return {};
        },
        props: ['entry'],
        methods: {
            deleteEntry() {
                Entries.delete(this.entry)
                        .then(() => {
                            $('#deleteEntryModal').modal('hide');
                            logging.success(this.$t('entries.entryDeleted'));
                            this.$router.go('/entries/');
                        })
                        .catch(() => {
                            logging.error(this.$t('entries.errorDeletion'));
                        });
            },
        },
    };
</script>
