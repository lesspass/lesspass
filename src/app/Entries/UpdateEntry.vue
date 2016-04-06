<template>
    <div class="container p-t-2">
        <div class="row">
            <div class="col-lg-12 bg-card-white">
                <div class="row">
                    <div class="col-sm-12 col-md-10 col-lg-8">
                        <h4 class="modal-title" id="newEntry">{{{ $t('entry.Update_new_entry') }}}</h4>
                        <hr>
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
    import logging from '../../services/logging';
    import http from '../../services/http';

    export default {
        data() {
            return {
                entry: {}
            };
        },
        components: {
            EntryForm,
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
                            logging.success(this.$t('entries.entry_update'));
                        })
                        .catch((err) => {
                            logging.error(this.$t('entries.error_update'));
                        });
            },
        },
    };
</script>
