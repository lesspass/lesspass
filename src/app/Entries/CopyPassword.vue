<template>
    <div class="modal fade" id="copyPasswordModal" tabindex="-1" role="dialog" aria-labelledby="copyPassword"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content text-xs-left">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title" id="copyPassword">{{{ $t('entry.copy_password') }}}</h4>
                </div>
                <div class="modal-body text-xs-left">
                    <form id="password-generator-form">
                        <!-- remove autofill for pg-masterpassword -->
                        <input type="text" id="login" style="display: none">
                        <input type="password" id="password" style="display: none">
                        <div class="form-group row">
                            <div class="col-lg-12 m-t-1">
                                <label for="pg-masterpassword" class="sr-only">
                                    {{ $t('passwordgenerator.what_is_your_secret') }}
                                </label>
                                <div class="input-group">
                                    <input id="pg-masterpassword"
                                           class="form-control"
                                           type="password"
                                           placeholder="{{ $t('passwordgenerator.what_is_your_secret') }}"
                                           v-model="password"
                                           autocomplete="off">
                                    <span class="input-group-btn" tabindex="-1"
                                          @click="changeType('pg-masterpassword')">
                                        <button class="btn btn-secondary" tabindex="-1" type="button"
                                                v-bind:style="{ backgroundColor: passwordColor }">
                                            <i class="fa fa-eye"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">
                        {{{ $t('entry.Cancel') }}}
                    </button>
                    <button type="button" class="btn btn-danger" @click="copyPassword()">
                        {{{ $t('entry.Copy') }}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import http from '../../services/http';
    import logging from '../../services/logging';
    import lesspass from 'lesspass'

    export default {
        data() {
            return {
                password: ''
            };
        },
        props: ['entry'],
        ready(){
            $('#copyPasswordModal').on('shown.bs.modal', function () {
                document.getElementById("pg-masterpassword").focus();
            })
        },
        methods: {
            copyPassword() {
                lesspass.createMasterPassword(this.entry.login, this.password).then((masterPassword) => {
                    var entry = {
                        site: this.entry.site,
                        password: this.entry.password
                    };
                    $('#copyPasswordModal').modal('hide');
                    window.prompt(this.$t('entry.copy_to_clipboard'), lesspass.createPassword(masterPassword, entry));
                });
            },
            changeType(id) {
                if (document.getElementById(id).type == 'password') {
                    document.getElementById(id).type = 'text';
                } else {
                    document.getElementById(id).type = 'password';
                }
            }
        },
    };
</script>
