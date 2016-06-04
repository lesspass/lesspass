<style scoped>
    pre {
        font-size: .7em;
    }
</style>
<template>
    <div id="help">
        <div class="col-lg-4 col-md-6">
            <div class="card">
                <div class="card-header">
                    <i class="icon ion-ios-heart"></i> {{ $t('help.Welcome') }} LessPass App
                </div>
                <div class="card-block">
                    <p class="card-text">
                        {{ $t('help.help1') }}
                    <pre>{{ demoEntry | json 4 }}</pre>
                    <p class="card-text">
                        {{ $t('help.help2') }}
                    </p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="card">
                <div class="card-header">
                    <i class="icon ion-ios-star"></i> {{ $t('help.Tips') }}
                </div>
                <div class="card-block">
                    <ul>
                        <li>
                            {{{ $t('help.tip1') }}}
                        </li>
                        <li>
                            {{{ $t('help.tip2') }}}
                        </li>
                        <li>
                            {{{ $t('help.tip3') }}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import Auth from '../services/auth';
    export default {
        data() {
            return {
                demoEntry: {
                    "id": "0cf8a11b-2375-4f3c-ad15-3194a64bb516",
                    "site": "lesspass.com",
                    "login": "demo@lesspass.com",
                    "password": {
                        "counter": 1,
                        "settings": [
                            "lowercase",
                            "uppercase",
                            "numbers",
                            "symbols"
                        ],
                        "length": 12
                    },
                    "created": "2016-06-04T10:32:43.872900",
                    "modified": "2016-06-04T10:32:43.872920"
                }
            };
        },
        ready(){
            Auth.getUser().then(user=> {
                this.demoEntry.login = user.email;
            });
        }
    };
</script>
