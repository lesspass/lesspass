<template>
    <button class="btn btn-danger btn-sm m-b-0" data-toggle="modal" data-target="#deleteEntryModal">
        <i class="fa fa-trash-o fa-lg"></i>
    </button>
    <div class="modal fade" id="deleteEntryModal" tabindex="-1" role="dialog" aria-labelledby="newEntry"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content text-xs-left">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title" id="newEntry">{{{ $t('entry.Delete_entry') }}}</h4>
                </div>
                <div class="modal-body text-xs-left">
                    {{{ $t('entry.delete_are_you_sure') }}}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">
                        {{{ $t('entry.Cancel') }}}
                    </button>
                    <button type="button" class="btn btn-danger" @click="deleteEntry()">
                        {{{ $t('entry.Confirm') }}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import http from '../../services/http';
    import logging from '../../services/logging';

    export default {
        data() {
            return {};
        },
        props: ['entry'],
        methods: {
            deleteEntry() {
                http.entries.delete(this.entry)
                        .then(() => {
                            $('#deleteEntryModal').modal('hide');
                            logging.success(this.$t('entry.entry_deleted'));
                            this.$router.go('/app/');
                        })
                        .catch((err) => {
                            logging.error(this.$t('entry.error_deletion'));
                        });
            },
        },
    };
</script>
