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
                    <i class="icon ion-ios-heart"></i> Welcome on LessPass App
                </div>
                <div class="card-block">
                    <p class="card-text">
                        LessPass App helps you to store information about site with specials information like
                        you bank account. LessPass store information it needs to regenerate a password.
                        Here an example of the information we store on our database :
                    <pre>{{ demoEntry | json 4 }}</pre>
                    <p class="card-text">
                        No master password or generated password here.
                        To regenerate a password, LessPass ask your master password, an your browser rebuild the
                        password.
                    </p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="card">
                <div class="card-header">
                    <i class="icon ion-ios-star"></i> Tips
                </div>
                <div class="card-block">
                    <ul>
                        <li>
                            Keep your master password in your head.
                        </li>
                        <li>
                            Do not register on a site with your master password.
                        </li>
                        <li>
                            Use full qualified domain name for your site<br>https://mail.google.com ->
                            google.com<br>
                            The LessPass web extension pre-fill site field for you with this mecanism.
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
