// @or
// 09.09.09 pdf
// $("something").or("default").dothischain()
// some selector, if it returns zero results, use some other default selector instead
jQuery.fn.or = function(s) { return $(this).length ? $(this) : $(s); };


// @accessibilityReset
// 12.15.09 pdf
/*
	Remove all the image replacements if user has colors or images disabled
	Attaches a specified CSS file to head if needed.

	1. do resetBackgrounds(); in document ready statement
	2. validate against element known to contain a background image
	
	Example of what might be included in CSS:
	
	#nav a,.hdr,.btn,.ir { height: auto !important; text-indent: 0 !important; width: auto !important; }
	
	Recommended to include link in accessibility menu to also trigger inclusion of this stylesheet

*/
var resetBackgrounds = function() {
	if(!$j('#accessibility-reset-styles').length && $j('body').css("background-image") == "none") {
		$j('head').append('<link id="accessibility-reset-styles" rel="stylesheet" type="text/css" media="all" href="_resources/css/accessibility-reset.css" />');
	}
};

// end @accessibilityReset