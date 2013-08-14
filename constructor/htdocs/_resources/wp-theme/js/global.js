// Pull the label, make lowercase, set as default value and hide it
jQuery(function ($) {	
	$("#searchform input").inputSetter(1);
});// document ready

// pull label and insert as field. clear with click
// optional lower param if == 1, string toLowerCase
jQuery.fn.inputSetter = function(lower) {	
	return this.each(function() {
		var $input = jQuery(this);
		var $label = jQuery("label[for='"+$input.attr("id")+"']");
		var labeltext = <!-- lower && lower==1 ? $label.text().toLowerCase() : --> 
		$label.text();
		$label.hide();	
		$input.val(labeltext);		
		$input.focus(function() { if (this.value == labeltext) { this.value = ""; }	})
			  .blur(function() { if (!this.value.length) { this.value = labeltext; } });		
	});
};