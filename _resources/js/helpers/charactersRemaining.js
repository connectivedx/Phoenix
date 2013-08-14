/*
	
	@charactersRemaining jQuery Plugin
	
	7.7.08 - pdf
	
	xtof wrote some character counting codes for QZ. Here's a plugin version of it.

	This attaches a count-down style character counter to any text area. There can be any number of
	these on a page as long as they are all uniquely id'd (which is as it should be). The "for"
	attribute must be specified, and the function takes the max limit information from the label -
	place it within the label, in a span, like this:
	
	<label class="charactersremaining" for="mytextareaid"><span>250</span> characters remaining</label>

	in your js:
	
	$(".charactersremaining").charactersRemaining();
	
	Note: an input/textarea can have more than one label. So the real label can be used for real labelness,
	plus a second label for character counting

	http://jsfiddle.net/TjWVw/

*/

jQuery.fn.charactersRemaining = function() {
	
	// prevent elem has no properties error
	if (this.length === 0) { return(this); }
	
	function cr($obj) {
		var counter = {
			$target		: $("#"+$obj.attr('for')),
			$span		: $obj.find("span:first"),
			maxvalue	: $obj.children('span:first').text(),
			remaining	: null,
			
			init : function() {
				counter.remaining = counter.maxvalue - counter.$target.val().length;
				counter.$span.text(counter.remaining);
				counter.$target.bind("keyup keydown",counter.tally);
			},
			
			tally : function() {
				if (counter.$target.val().length > counter.maxvalue) {
					counter.$target.val(counter.$target.val().substring(0, counter.maxvalue));
				}
				counter.$span.text(counter.maxvalue - counter.$target.val().length);
			}
		};
		// init the counter
		counter.init($obj);
	}
	// return jquery - create new cr instance
	return this.each(function() {
		new cr(jQuery(this));
	});
};

// end charactersRemaining