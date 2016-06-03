<style>
    .icon-2x{
        font-size: 1.2em;
    }
</style>
<template>
    <button class="btn btn-danger btn-sm m-b-0" data-toggle="modal" data-target="#deleteEntryModal">
        <i class="icon icon-2x ion-md-trash"></i>
    </button>
    <div class="modal fade" id="deleteEntryModal" tabindex="-1" role="dialog" aria-labelledby="deleteEntry"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content text-xs-left">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title" id="deleteEntry">Delete_entry</h4>
                </div>
                <div class="modal-body text-xs-left">
                    delete_are_you_sure
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">
                        Cancel
                    </button>
                    <button type="button" class="btn btn-danger" @click="deleteEntry()">
                        Confirm
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
                            logging.success('entry.entry_deleted');
                            this.$router.go('/entries/');
                        })
                        .catch((err) => {
                            logging.error('entry.error_deletion');
                        });
            },
        },
    };
</script>
