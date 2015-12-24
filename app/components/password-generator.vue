<style>
    #passwordGenerator input {
        background-color: #434857;
        color: white;
        border: 1px solid #434857;
    }
</style>

<template>
    <div class="container">

        <form class="form-inline" id="passwordGenerator">
            <div class="m-t-1">
                <div class="form-group">
                    <label class="sr-only" for="email">Adresse email</label>
                    <input type="email" class="form-control" id="email" placeholder="Email" v-model="email">
                </div>
                <div class="form-group">
                    <label class="sr-only" for="password">Mot de passe</label>
                    <input type="password" class="form-control" id="password" placeholder="Mot de passe"
                           v-model="password">
                </div>
                <div class="form-group">
                    <label class="sr-only" for="site">Site</label>
                    <input type="text" class="form-control" id="site" placeholder="Site (ex: facebook)"
                           v-model="site">
                </div>
                <div class="form-group">
                    <label class="sr-only" for="generatedPassword">Mot de passe unique</label>
                    <div class="input-group">
                        <input type="text" id="generatedPassword" class="form-control" v-model="generatedPassword">
                    <span class="input-group-btn">
                        <button id="copyBtn" data-clipboard-target="#generatedPassword"
                                class="btn btn-primary" type="button">
                            Copier
                        </button>
                    </span>
                    </div>
                </div>
            </div>
            <div class="m-t-1">
                <div class="checkbox">
                    <label>
                        <input type="checkbox" v-model="showAdvancedOptions"> Options avancées
                    </label>
                </div>
            </div>
            <div class="m-t-1" v-if="showAdvancedOptions">
                <div class="form-group">
                    <label class="checkbox-inline">
                        <input type="checkbox" id="lowercaseCheckbox" value="lowercase" v-model="passwordTypes" checked>
                        minuscules (a-z)
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="uppercaseCheckbox" value="uppercase" v-model="passwordTypes" checked>
                        MAJUSCULES (A-Z)
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="numbersCheckbox" value="numbers" v-model="passwordTypes" checked>
                        nombres (0-9)
                    </label>
                    <label class="checkbox-inline">
                        <input type="checkbox" id="symbolsCheckbox" value="symbols" v-model="passwordTypes" checked>
                        caractères spéciaux (@&%?)
                    </label>
                </div>
            </div>
            <div class="m-t-1" v-if="showAdvancedOptions">
                <div class="form-group">
                    <label for="passwordLength">Longueur</label>
                    <input id="passwordLength" type="range" value="12" min="6" max="64" v-model="length"
                           class="form-control"> {{ length }}
                </div>
            </div>
        </form>

    </div>
</template>

<script lang="babel">
    import crypto from 'crypto';
    import lesspass from '../lesspass';

    import Clipboard from 'clipboard';


    export default {
        data: function () {
            return {
                email: '',
                password: '',
                site: '',
                length: 12,
                counter: 1,
                passwordTypes: ["lowercase", "uppercase", "numbers", "symbols"],
                showAdvancedOptions: false
            }
        },
        computed: {
            generatedPassword: function () {
                var generatedPassword;
                if (this.email && this.password && this.site) {
                    var masterPassword = crypto.pbkdf2Sync(this.email, this.password, 10, 64, 'sha256').toString('hex');

                    generatedPassword = lesspass.create_password(masterPassword, {
                        site_name: this.site,
                        password_length: this.length,
                        password_types: this.passwordTypes,
                        counter: this.counter
                    });
                }
                return generatedPassword;
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