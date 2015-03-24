// put jQuery on the global namespace to access via the console and allow plugins to be dropped-in
global.jQuery = require('jquery');
global.$ = global.jQuery;

// load plugins
require('./vendor/jquery.responsive-tabs');
require('./vendor/jquery.fancybox');
require('./vendor/jquery.tipsy');
require('./vendor/jquery.placeholder.js');

// execute plugins and jQuery bindings
$('.nav-handle').click(function() {
	$('.nav-list').toggleClass('expanded');
});

$('select:not([multiple])').wrap('<div class="decorator-select" />');
$('select[multiple]').wrap('<div class="decorator-select-multiple" />');

$('.fancybox').fancybox();

$('.tooltip-tipsy').tipsy({
	gravity: 'w'
});

$('.custom-file-upload').click(function(e) {
	e.preventDefault();

	$(this).next('input[type="file"]').click();
});

$('input, textarea').placeholder();

// toggle buttons for test pages
$('.toggle-push-and-pull').on('click', function(e) {
	e.preventDefault();
	$('body').toggleClass('not-shifted shifted');
});
$('.toggle-gutters').on('click', function(e) {
	e.preventDefault();
	$('body').toggleClass('no-gutters gutters');
});