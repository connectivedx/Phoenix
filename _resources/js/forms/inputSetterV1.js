/**
 * 12.19.08 / 05.04.10 - pdf
 *
 * @inputSetter
 * Input Setter
 * pull label and insert as field. clear with click.
 * optional lower param if == 1, string toLowerCase
 *
 * ex: $("#sitesearch input").inputSetter(1); // makes default text lowercase
 * $("#sitesearch input").inputSetter(); // no lowercasing
 *
 * see custom validation for jquery.validation.js below
 *
 * v2 allows for use with a password field without ending up with only bullets in the field. Use one or the other, never both.
 *
 */

/**
 * v1, og, nice and clean
 * @version v1
 * http://jsfiddle.net/ePQWn/
 */
jQuery.fn.inputSetter = function(lower) {
	return this.each(function() {
		var $input = jQuery(this);
		var $label = jQuery("label[for='"+$input.attr("id")+"']");
		var labeltext = lower && lower==1 ? $label.text().toLowerCase() : $label.text();
		$label.hide();
		$input.val(labeltext).addClass('settered');
		$input.focus(function() { if (this.value == labeltext) { this.value = ""; }	})
			.blur(function() { if (!this.value.length) { this.value = labeltext; } });
	});
};