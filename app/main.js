require('../node_modules/bootstrap/dist/css/bootstrap.css');
require('../node_modules/font-awesome/css/font-awesome.min.css');
require('../node_modules/bootstrap/dist/js/umd/collapse.js');

var Vue = require('vue');
var App = require('./App.vue');

require('./locales.js');

new Vue({
    el: 'body',
    components: {
        App
    }
});

    var lesspass = require('lesspass');

    var args = process.argv.slice(2);
    var entry = {
        site: args[0],
        password:{
            length: 10,
            settings: ['lowercase', 'uppercase', 'numbers', 'symbols'],
            counter: 1
        }
    };

    var email = args[1];
    var secret = args[2];

    lesspass.createMasterPassword(email, secret).then(function (masterPassword) {
        var generatedPassword = lesspass.createPassword(masterPassword, entry);
        console.log(generatedPassword)
    });
