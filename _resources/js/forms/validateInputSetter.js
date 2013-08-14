/**
 * @validateinputsetter
 * custom validation method for jquery.validation.js. use with inputSetter to validate fields as required but not equal to the label (default value)
 *  may need to change where to look for the label depending on particular html
 */
jQuery.validator.addMethod("notEqualTo", function(value, element, param) {
	return $(element).val()!=$(element).prev("label").text();
}, "error");

// end validation