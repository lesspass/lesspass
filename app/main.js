require('../node_modules/bootstrap/dist/css/bootstrap.css');
require('../node_modules/font-awesome/css/font-awesome.min.css');
require('../node_modules/bootstrap/dist/js/umd/collapse.js');

var Vue = require('vue');
var App = require('./app.vue');

require('./locales.js');

new Vue({
    el: 'body',
    components: {
        App
    }
});