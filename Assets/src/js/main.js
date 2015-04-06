// put jQuery on the global namespace to access via the console and allow plugins to be dropped-in
global.jQuery = require('jquery');
global.$ = global.jQuery;

// load plugins
require('./vendor/jquery.responsive-tabs');
require('./vendor/jquery.fancybox');
require('./vendor/jquery.tipsy');
require('./vendor/jquery.placeholder.js');

// execute plugins and jQuery bindings
require('./lib/documentReady.js');
require('./lib/applyClassnames.js');
require('./lib/triggerPlugins.js');