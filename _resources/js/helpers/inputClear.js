/**
 * @inputClear
 * apply automatic input clearing to the search input - add as needed
 * $("#searchform input").inputClear();
 * http://jsfiddle.net/HmKdj/
 */
jQuery.fn.inputClear = function() {
	return this.focus(function() {
		if( this.value == this.defaultValue ) {
			this.value = "";
		}
	}).blur(function() {
		if( !this.value.length ) {
			this.value = this.defaultValue;
		}
	});
};

// end inputClear