<style scoped>
    #passwordGenerator {
        color: #555555;
    }

    * {
        border-radius: 0 !important;
    }

    i {
        cursor: pointer;
    }

    .option-block, #autoLoginButton, #fingerprint {
        display: none;
    }

    #displayOptionsButton {
        cursor: pointer;
    }

    .card {
        border: none;
    }

    #passwordGenerator input {
        background-clip: padding-box
    }

    @media (max-width: 48em) {
        .option-block {
            display: block;
        }
    }
</style>
<template>
    <div id="passwordGenerator">
        <div class="card">
            <div id="password-block" class="card-block">
                <form id="generatedPasswordForm">
                    <fieldset class="form-group">
                        <label for="login" class="sr-only">Login</label>
                        <input id="login"
                               name="login"
                               type="text"
                               class="form-control"
                               placeholder="Login"
                               autofocus
                               autocomplete="off"
                               autocorrect="off"
                               autocapitalize="none">
                        <!-- remove autofill for masterPassword -->
                        <input type="password" id="password" style="display: none">
                    </fieldset>
                    <fieldset class="form-group">
                        <label for="masterPassword" class="sr-only">Password</label>
                        <div class="input-group">
                            <input id="masterPassword"
                                   name="masterPassword"
                                   type="password"
                                   class="form-control"
                                   placeholder="Master password"
                                   autocomplete="off"
                                   autocorrect="off"
                                   autocapitalize="none">
                        <span class="input-group-btn">
                            <a id="displayMasterPasswordButton" class="btn btn-secondary" type="button"
                               tabindex="-1">
                                <i class="fa fa-user-secret" aria-hidden="true"></i>
                                <small class="hint--top" id="fingerprint" aria-label="fingerprint"></small>
                            </a>
                        </span>
                        </div>
                    </fieldset>
                    <fieldset class="form-group">
                        <label for="site" class="sr-only">Site</label>
                        <input id="site"
                               name="site"
                               type="text"
                               class="form-control"
                               placeholder="Site"
                               autofocus
                               autocomplete="off"
                               autocorrect="off"
                               autocapitalize="none">
                    </fieldset>
                    <fieldset class="form-group">
                        <div class="input-group">
                        <span id="autoLoginButton" class="input-group-btn">
                            <button class="btn btn-secondary">
                                <i class="fa fa-magic" aria-hidden="true"></i>
                            </button>
                        </span>
                            <label for="generatedPassword" class="sr-only">Password Generated</label>
                            <input id="generatedPassword"
                                   name="generatedPassword"
                                   type="text"
                                   class="form-control"
                                   tabindex="-1"
                                   readonly>
                        <span class="input-group-btn">
                            <button id="copyPasswordButton" class="btn-copy btn btn-primary" type="button"
                                    data-clipboard-target="#generatedPassword">
                                <i class="fa fa-clipboard" aria-hidden="true"></i>
                            </button>
                        </span>
                        </div>
                    </fieldset>
                    <fieldset class="form-group m-b-0">
                     <span id="displayOptionsButton">
                        <i class="fa fa-gears"></i> Advanced options
                    </span>
                    </fieldset>
                    <fieldset class="form-group option-block m-t-1">
                        <div class="row">
                            <div class="col-xs-12">
                                <label>Password groups :</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <label class="c-input c-checkbox">
                                    <input type="checkbox" id="lowercase" value="lowercase" name="lowercase"
                                           checked>
                                    <span class="c-indicator"></span> Lower letters (a‑z)
                                </label>
                            </div>
                            <div class="col-sm-6">
                                <label class="c-input c-checkbox">
                                    <input type="checkbox" id="uppercase" value="uppercase" name="uppercase"
                                           checked>
                                    <span class="c-indicator"></span> Upper letters (A-Z)
                                </label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <label class="c-input c-checkbox">
                                    <input type="checkbox" id="numbers" value="numbers" name="numbers" checked>
                                    <span class="c-indicator"></span> Numbers (0-9)
                                </label>
                            </div>
                            <div class="col-sm-6">
                                <label class="c-input c-checkbox">
                                    <input type="checkbox" id="symbols" value="symbols" name="symbols" checked>
                                    <span class="c-indicator"></span> Special chars (@&%)
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset class="form-group option-block">
                        <div class="row">
                            <div class="col-xs-6">
                                <label for="passwordLength">Length :</label>
                                <input id="passwordLength"
                                       type="number"
                                       class="form-control"
                                       value="12"
                                       min="6"
                                       max="64"/>
                            </div>
                            <div class="col-xs-6">
                                <label for="passwordCounter">Counter :</label>
                                <input id="passwordCounter"
                                       type="number" class="form-control"
                                       value="1"
                                       min="1"
                                       max="1000"/>
                            </div>
                        </div>
                    </fieldset>
                    <!--
                    <fieldset class="form-group option-block">
                        <div class="row">
                            <div class="col-xs-12">
                                <label class="c-input c-checkbox">
                                    <input type="checkbox" id="saveLocally" value="saveLocally" name="saveLocally">
                                    <span class="c-indicator"></span> Save passwords info locally
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset class="form-group option-block">
                        <div class="row">
                            <div class="col-xs-6">
                                <button class="btn btn-success-outline btn-sm btn-block">
                                    <i class="fa fa-download" aria-hidden="true"></i> download passwords info
                                </button>
                            </div>
                            <div class="col-xs-6">
                                <button class="btn btn-primary-outline btn-sm btn-block">
                                    <i class="fa fa-upload" aria-hidden="true"></i> load passwords info
                                </button>
                            </div>
                        </div>
                    </fieldset>
                    -->
                </form>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import lesspass from 'lesspass'
    import Clipboard from 'clipboard';
    //    import topDomains from './top-domains.json';

    export default {
        data() {
            return {};
        },
        ready(){
            var encryptedLogin;

            function showTooltip(elem, msg) {
                var classNames = elem.className;
                elem.setAttribute('class', classNames + ' hint--top');
                elem.setAttribute('aria-label', msg);
                setTimeout(function () {
                    elem.setAttribute('class', classNames);
                }, 2000);
            }

            window.onload = function () {
                document.getElementById('generatedPassword').value = '';
            };

            function getColor(color) {
                var colors = ['EBBB56', '59E0EB', 'E8F464', 'D2B4ED', 'BBE96D', 'EF9FC8', '8EE083', 'DCBFD6', 'DDD15A', 'A1C8E8', 'C4D977', 'F1A49E', '79E8A0', 'E9A970', '60E3B4', 'D4C47D', '73DDCA', 'C4EAA7', 'A7D6D4', '9CC795'];
                var index = parseInt(color, 16) % colors.length;
                return '#' + colors[index];
            }

            document.getElementById('login').onblur = displayPasswordIndication;
            document.getElementById('masterPassword').onblur = displayPasswordIndication;
            function displayPasswordIndication() {
                var login = document.getElementById('login').value;
                var masterPassword = document.getElementById('masterPassword').value;
                var fingerprint = document.getElementById('fingerprint');
                var displayMasterPasswordButton = document.getElementById('displayMasterPasswordButton');
                if (!login || !masterPassword) {
                    fingerprint.innerText = '';
                    fingerprint.style.display = 'none';
                    displayMasterPasswordButton.style.backgroundColor = '#FFFFFF';
                    return;
                }
                lesspass.encryptLogin(login, masterPassword).then(function (secretHash) {
                    encryptedLogin = secretHash;
                    var color = secretHash.substring(0, 6);
                    var colorHex = getColor(color);
                    fingerprint.innerText = color;
                    fingerprint.style.display = 'inline';
                    displayMasterPasswordButton.style.backgroundColor = colorHex;
                });
            }

            document.getElementById('copyPasswordButton').addEventListener('click', generatePassword);
            document.getElementById('generatedPasswordForm').addEventListener('change', generatePassword);
            document.getElementById('passwordLength').addEventListener('input', generatePassword);
            document.getElementById('passwordCounter').addEventListener('input', generatePassword);
            document.getElementById('generatedPasswordForm').oninput = generatePassword;
            function getData() {
                const defaultOptions = {
                    login: document.getElementById('login').value,
                    counter: document.getElementById('passwordCounter').value,
                    password: {
                        length: document.getElementById('passwordLength').value,
                        settings: []
                    }
                };
                const options = ['lowercase', 'uppercase', 'numbers', 'symbols'];

                for (let i = 0; i < options.length; i++) {
                    if (document.getElementById(options[i]).checked) {
                        defaultOptions.password.settings.push(options[i]);
                    }
                }
                return defaultOptions;
            }

            function getFormData() {
                const initData = getData();
                initData.masterPassword = document.getElementById('masterPassword').value;
                initData.site = document.getElementById('site').value;
                return initData;
            }

            function generatePassword() {
                const data = getFormData();
                var generatedPasswordField = document.getElementById('generatedPassword');
                if (!encryptedLogin || !data.site || !data.password.settings.length) {
                    generatedPasswordField.value = '';
                    return;
                }
                generatedPasswordField.value = lesspass.renderPassword(encryptedLogin, data.site, data);
            }

            document.getElementById('displayMasterPasswordButton').addEventListener('click', toggleMasterPassword);
            function toggleMasterPassword() {
                if (document.getElementById('masterPassword').type === 'password') {
                    document.getElementById('masterPassword').type = 'text';
                } else {
                    document.getElementById('masterPassword').type = 'password';
                }
            }

            function cleanData() {
                setTimeout(function () {
                    document.getElementById('generatedPassword').value = '';
                    document.getElementById('masterPassword').value = '';
                }, 10000);
            }

            var clipboard = new Clipboard('.btn-copy');

            clipboard.on('success', function (e) {
                if (e.text) {
                    showTooltip(e.trigger, 'copied !');
                    cleanData();
                }
            });

            clipboard.on('error', function () {
                cleanData();
            });


            document.getElementById('displayOptionsButton').addEventListener('click', toggleBlocks);

            function toggleVisibility(className) {
                var elements = document.getElementsByClassName(className);
                for (var i = 0; i < elements.length; i++) {
                    var e = elements[i];
                    if (e.style.display === 'block') {
                        e.style.display = 'none';
                    } else {
                        e.style.display = 'block';
                    }
                }
            }

            function toggleBlocks() {
                toggleVisibility('option-block');
            }
        }
    }
</script>
