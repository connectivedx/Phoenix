/*
	
	Project Name Global Javascript Functions
	Includes shims for IE6 hover, abbr and sprite flicker.
	Auhthor: ISITE Design

*/

// globals set for jsLint
/*globals $,jQuery,window,setTimeout,document,console */

// jquery no conflict. use $j or jQuery outside of ready function
var $j = jQuery.noConflict();


// jQuery document ready
jQuery(function ($) {

	// JS enabled
	//$('html').addClass('js');
	
	$('.input-setter').inputSetter();
	
	// Few setups for IE6
	if (document.all) {
		//add class to drop downs and buttons
		$('#nav li, button').hover(
			function () {
				$(this).addClass('over');
			},
			function () {
				$(this).removeClass('over');
			}
		);
	}// if document.all
	
});// document ready


// application logic


// jQuery plugins
// Input setter - pulls label sets as default value on related input.  If no label, looks for default value.
jQuery.fn.inputSetter = function(lower) {
	return this.each(function() {
		var $input = jQuery(this),
			$label = jQuery("label[for='"+$input.attr("id")+"']"),
			hideLabel = true,
			labelText, defaultText;
		if (($label.length && !this.value) || (this.value === $label.text())){
			labelText =  $label.text();
		} else {
			hideLabel = false;
			labelText = this.value ? this.value : false;
		}
		if (labelText) {
			defaultText = lower && lower==1 ? labelText.toLowerCase() : labelText;
			if (hideLabel) { $label.hide(); }
			if ($input.is('input')) {
				$input.val(defaultText).addClass('settered');
			}
			else {
				$input.text(defaultText).addClass('settered');
			}
			$input.focus(function() { if (this.value == defaultText) { this.value = ""; } })
				.blur(function() { if (!this.value.length) { this.value = defaultText; } });
		}
	});
};


// etc

// clean console.log
function cl() {
	if (window.console && window.console.firebug) {
		var args = [].splice.call(arguments, 0);
		console.log(args.join(" "));
	}
}//cl()
// example: cl("If you use cl() instead of console.log(), it won't break IE when you forget to take it out.");


// IE6 fixes (slated for removal)
// make sure IE has the abbr and acronym tag
if (document.all) {
	document.createElement("abbr");
}
// prevent IE6 flicker
try {
	document.execCommand('BackgroundImageCache', false, true);
} catch (e) {}