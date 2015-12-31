<style xmlns:v-on="http://www.w3.org/1999/xhtml">
    #passwordGenerator input {
        background-color: #434857;
        color: white;
        border: 1px solid #434857;
    }
</style>
 "Email":"Email",
        "Password":"Password",
        "Site": "Web site",
        "Copy": "Copy"

<template>
    <div class="container">
        <form class="form-inline" id="passwordGenerator">
            <div class="m-t-1">
                <div class="form-group">
                    <label class="sr-only" for="email">{{ $t('Email') }}</label>
                    <input type="email" class="form-control" id="email" placeholder="{{ $t('Email') }}" v-model="email"
                           v-on:blur="updateMasterPassword">
                </div>
                <div class="form-group">
                    <label class="sr-only" for="password">{{ $t('Password') }}</label>
                    <input type="password" class="form-control" id="password" placeholder="{{ $t('Password') }}"
                           v-model="password" v-on:blur="updateMasterPassword">
                </div>
                <div class="form-group">
                    <label class="sr-only" for="site">{{ $t('Site') }}</label>
                    <input type="text" class="form-control" id="site" placeholder="{{ $t('Site_placeholder') }}"
                           v-model="site">
                </div>
                <div class="form-group">
                    <label class="sr-only" for="generatedPassword">{{ $t('Unique_password') }}</label>
                    <div class="input-group">
                        <input type="text" id="generatedPassword" class="form-control" v-model="generatedPassword">
                    <span class="input-group-btn">
                        <button id="copyBtn" data-clipboard-target="#generatedPassword"
                                class="btn btn-primary" type="button">
                            {{ $t('Copy') }}
                        </button>
                    </span>
                    </div>
                </div>
            </div>
            <div class="m-t-1">
                <div class="checkbox">
                    <label>
                        <input type="checkbox" v-model="showAdvancedOptions"> {{ $t('Advanced_options') }}
                    </label>
                </div>
            </div>
            <div class="m-t-1" v-if="showAdvancedOptions">
                <div class="form-group">
                    <label class="checkbox-inline">
                        <input type="checkbox" id="lowercase" value="lowercase" v-model="passwordInfo.settings" checked>
                        {{ $t('lowercase_options') }}
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="uppercase" value="uppercase" v-model="passwordInfo.settings" checked>
                        {{ $t('uppercase_options') }}
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="numbers" value="numbers" v-model="passwordInfo.settings" checked>
                        {{ $t('numbers_options') }}
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="symbols" value="symbols" v-model="passwordInfo.settings" checked>
                        {{ $t('symbols_options') }}
                    </label>
                </div>
            </div>
            <div class="m-t-1" v-if="showAdvancedOptions">
                <div class="form-group">
                    <label for="passwordLength">{{ $t('Length') }}</label>
                    <input id="passwordLength" type="range" value="12" min="6" max="64" v-model="passwordInfo.length"
                           class="form-control"> {{ passwordInfo.length }}
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="babel">
    import Lesspass from '../lesspass';

    import Clipboard from 'clipboard';

    export default {
        data: function () {
            return {
                email: '',
                password: '',
                site: '',
                passwordInfo: {
                    counter: 1,
                    length: 12,
                    settings: ["lowercase", "uppercase", "numbers", "symbols"]
                },
                showAdvancedOptions: false
            }
        },
        methods: {
            updateMasterPassword: function (event) {
                var self = this;
                var email = this.email;
                var password = this.password;
                if (email && password) {
                    Lesspass.createMasterPassword(email, password).then(function (masterPassword) {
                        self.$set('masterPassword', masterPassword)
                    });
                }
            }
        },
        computed: {
            generatedPassword: function () {
                var masterPassword = this.masterPassword;
                var site = this.site;
                if (masterPassword && site) {
                    var entry = {
                        site: site,
                        password: this.passwordInfo
                    };
                    return Lesspass.createPassword(masterPassword, entry);
                }
            }
        }
    }


    var cb = new Clipboard('#copyBtn');
    cb.on('success', function (e) {
        e.clearSelection();
    });

    cb.on('error', function (e) {

    });
</script>