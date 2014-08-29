// load dependencies
var $ = require('jquery');
require('./vendor/jquery.responsive-tabs');
require('./vendor/jquery.fancybox.pack');
require('./vendor/jquery.tipsy');
require('./vendor/jquery.placeholder.js');

// etc
$('.nav-handle').click(function() {
	$('.nav-list').toggleClass('expanded');
});

$('select').wrap('<div class="decorator-select"></div>');

$('.fancybox').fancybox();

$('.tooltip-tipsy').tipsy({
	gravity: 'w'
});

$('.custom-file-upload').click(function(e) {
	e.preventDefault();

	$(this).next('input[type="file"]').click();
});

$('input, textarea').placeholder();