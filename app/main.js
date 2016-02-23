require('../node_modules/bootstrap/dist/css/bootstrap.css');
require('../node_modules/font-awesome/css/font-awesome.min.css');
require('../node_modules/bootstrap/dist/js/umd/collapse.js');

var Vue = require('vue');

Vue.config.debug = true;

require('./locales.js');
require('./router.js');

var Resource = require('vue-resource');
Vue.use(Resource);

require('offline-plugin/runtime').install();