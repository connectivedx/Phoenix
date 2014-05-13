// load dependencies
var jQuery = require('jquery');
require('./tabs/jquery.responsive-tabs');
require('./lightboxes/jquery.fancybox.pack');
require('./tooltips/jquery.tipsy');

// etc
jQuery(function($) {
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
});