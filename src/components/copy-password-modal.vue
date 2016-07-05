<template>
    <div class="modal fade" id="copyPasswordModal" tabindex="-1" role="dialog" aria-labelledby="copyPassword"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content text-xs-left">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title" id="copyPassword">{{{ $t('entries.CopyPassword') }}}</h4>
                </div>
                <div class="modal-body text-xs-left">
                    <form id="password-generator-form">
                        <!-- remove autofill for pg-masterpassword -->
                        <input type="text" id="login" style="display: none">
                        <input type="password" id="password" style="display: none">
                        <div class="form-group row">
                            <div class="col-lg-12 m-t-1">
                                <label for="pg-masterpassword" class="sr-only">
                                    login
                                </label>
                                <div class="input-group">
                                    <input id="pg-masterpassword"
                                           class="form-control"
                                           type="password"
                                           v-model="password"
                                           autocomplete="off">
                                    <span class="input-group-btn" tabindex="-1"
                                          @click="changeType('pg-masterpassword')">
                                        <button class="btn btn-secondary" tabindex="-1" type="button"
                                                v-bind:style="{ backgroundColor: passwordColor }">
                                            <i class="fa fa-eye" aria-hidden="true"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">
                        {{{ $t('entries.Cancel') }}}
                    </button>
                    <button type="button" class="btn btn-danger" @click="copyPassword()">
                        {{{ $t('entries.Copy') }}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import logging from '../services/logging';
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
                lesspass.encryptLogin(this.entry.login, this.password).then(hash => {
                    var options = {
                        counter: this.entry.password.counter,
                        password: {
                            length: this.entry.password.length,
                            settings: this.entry.password.settings
                        }
                    };
                    var password = lesspass.renderPassword(hash, this.entry.site, options);
                    $('#copyPasswordModal').modal('hide');
                    window.prompt(this.$t('entries.copyToClipboard'), password);
                });
            },
            changeType(id) {
                if (document.getElementById(id).type == 'password') {
                    document.getElementById(id).type = 'text';
                } else {
                    document.getElementById(id).type = 'password';
                }
            }
        }
    };
</script>
