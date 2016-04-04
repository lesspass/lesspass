<template>
    <div class="row">
        <div class="col-lg-12">
            <button type="button" class="btn btn-primary pull-xs-right" data-toggle="modal"
                    data-target="#newEntryModal">
                create new password
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
                    <h4 class="modal-title" id="newEntry">Create new password</h4>
                </div>
                <div class="modal-body text-xs-left">
                    <form id="password-generator-form">
                        <div class="form-group row">
                            <div class="col-lg-6 m-t-1">
                                <label for="pg-email" class="sr-only">
                                    {{ $t('passwordgenerator.who_are_you') }}
                                </label>
                                <input id="pg-email"
                                       class="form-control"
                                       type="text"
                                       placeholder="{{ $t('passwordgenerator.who_are_you') }}"
                                       value="{{email}}"
                                       v-model="email"
                                       autofocus
                                       autocomplete="off"
                                       autocorrect="off"
                                       autocapitalize="none">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-12">
                                <label for="pg-site" class="sr-only">
                                    {{ $t('passwordgenerator.where_are_you_going') }}
                                </label>
                                <input id="pg-site"
                                       class="form-control"
                                       list="domains"
                                       type="text"
                                       placeholder="{{ $t('passwordgenerator.where_are_you_going') }}"
                                       v-model="site"
                                       autocorrect="off"
                                       autocapitalize="none">
                                <datalist id="domains">
                                    <option v-for="domain in domains" v-bind:value="domain">
                                </datalist>
                            </div>
                        </div>
                        <div class="form-group row m-b-0">
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="col-lg-5">
                                        <label class="c-input c-checkbox">
                                            <input type="checkbox" id="lowercase" value="lowercase"
                                                   v-model="passwordInfo.settings" checked>
                                            <span class="c-indicator"></span>
                                            {{ $t('passwordgenerator.lowercase_options') }}
                                        </label>
                                    </div>
                                    <div class="col-lg-7">
                                        <label class="c-input c-checkbox">
                                            <input type="checkbox" id="uppercase" value="uppercase"
                                                   v-model="passwordInfo.settings" checked>
                                            <span class="c-indicator"></span>
                                            {{ $t('passwordgenerator.uppercase_options') }}
                                        </label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-5">
                                        <label class="c-input c-checkbox">
                                            <input type="checkbox" id="numbers" value="numbers"
                                                   v-model="passwordInfo.settings"
                                                   checked>
                                            <span class="c-indicator"></span>
                                            {{ $t('passwordgenerator.numbers_options') }}
                                        </label>
                                    </div>
                                    <div class="col-lg-7">
                                        <label class="c-input c-checkbox">
                                            <input type="checkbox" id="symbols" value="symbols"
                                                   v-model="passwordInfo.settings"
                                                   checked>
                                            <span class="c-indicator"></span>
                                            {{ $t('passwordgenerator.symbols_options') }}
                                        </label>
                                    </div>
                                </div>
                                <div class="row m-t-1">
                                    <div class="col-lg-5 m-b-1">
                                        <label for="passwordLength" class="sr-only">
                                            {{ $t('passwordgenerator.length') }}
                                        </label>
                                        <div class="input-group input-group-sm">
                                                <span class="input-group-addon" id="passwordLengthAddon">
                                                    {{ $t('passwordgenerator.length') }}
                                                </span>
                                            <input type="number" class="form-control" id="passwordLength"
                                                   aria-describedby="passwordLengthAddon"
                                                   v-model="passwordInfo.length"
                                                   value="12" min="6" max="64">
                                        </div>
                                    </div>
                                    <div class="col-lg-4 m-b-1">
                                        <label for="passwordCounter" class="sr-only">
                                            {{ $t('passwordgenerator.counter') }}
                                        </label>
                                        <div class="input-group input-group-sm">
                                                <span class="input-group-addon" id="passwordCounterAddon">
                                                    {{ $t('passwordgenerator.counter') }}
                                                </span>
                                            <input type="number" class="form-control" id="passwordCounter"
                                                   aria-describedby="passwordCounterAddon"
                                                   v-model="passwordInfo.counter"
                                                   value="1" min="1" max="100">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" @click="create()">Create</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import 'bootstrap/dist/js/umd/modal';
    import topDomains from '../../landing-page/PasswordGenerator/top-domains.json';
    import http from '../../services/http';
    import logging from '../../services/logging';

    export default {
        data() {
            return {
                email: '',
                site: '',
                passwordInfo: {
                    counter: 1,
                    length: 12,
                    settings: ["lowercase", "uppercase", "numbers", "symbols"]
                },
                domains: topDomains.domains
            };
        },
        methods: {
            create() {
                var entry = {
                    email: this.email,
                    site: this.site,
                    password: {
                        counter: this.passwordInfo.counter,
                        length: this.passwordInfo.length,
                        settings: this.passwordInfo.settings,
                    }
                };
                if (entry.site === '') {
                    logging.error(this.$t('entries.site_mandatory'));
                    return;
                }
                http.entries.create(entry)
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
