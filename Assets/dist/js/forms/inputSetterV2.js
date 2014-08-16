/**
 * v2 does all that v1 does plus deals with password fields that need to show a default value
 * @version v2
 * http://jsfiddle.net/s8S3G/
 */
jQuery.fn.inputSetter = function(lower) {
	return this.each(function() {
		var $input = jQuery(this),
			$label = jQuery("label[for='"+$input.attr("id")+"']"),
			labeltext = lower && lower==1 ? $label.text().toLowerCase() : $label.text();
			
		$label.hide();
		
		if($input.is(':password')) {
			var $fake = jQuery('<input />',{ value:labeltext, className:$input.attr('class'), type:"text" });
			$input.hide().addClass('settered');
			$fake.focus(function() { jQuery(this).hide(); $input.show().focus(); }).insertBefore($input);
			$input.blur(function() { if (!this.value.length) { jQuery(this).hide(); $fake.show(); } });
		} else {
			$input.val(labeltext).addClass('settered');
			$input.focus(function() { if (this.value == labeltext) { this.value = ""; }	})
				.blur(function() { if (!this.value.length) { this.value = labeltext; } });
		}
	});
};
// end inputSetter