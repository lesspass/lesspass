require('../node_modules/bootstrap/dist/css/bootstrap.css');
require('../node_modules/font-awesome/css/font-awesome.min.css');

var Vue = require('vue');
var App = require('./App.vue');

require('./locales.js');

new Vue({
    el: 'body',
    components: {
        App
    }
});

