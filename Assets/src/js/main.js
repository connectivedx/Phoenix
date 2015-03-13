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

// classes for nth-child elements
$('.two-up:nth-child(n+2), .three-up:nth-child(n+2), .four-up:nth-child(n+2)').addClass('nth-child-np2');
$('.two-up:nth-child(2n+1), .four-up:nth-child(2n+1), .nav-tertiary-col:nth-child(2n+1)').addClass('nth-child-2np1');
$('.two-up:nth-child(n+3), .four-up:nth-child(n+3), .nav-tertiary-col:nth-child(n+3)').addClass('nth-child-np3');
$('.three-up:nth-child(3n+1)').addClass('nth-child-3np1');
$('.three-up:nth-child(n+4)').addClass('nth-child-np4');
$('.four-up:nth-child(4n+1)').addClass('nth-child-4np1');
$('.four-up:nth-child(n+5)').addClass('nth-child-np5');

// toggle buttons for test pages
$('.toggle-push-and-pull').on('click', function(e) {
	e.preventDefault();
	$('body').toggleClass('not-shifted shifted');
});
$('.toggle-gutters').on('click', function(e) {
	e.preventDefault();
	$('body').toggleClass('no-gutters gutters');
});