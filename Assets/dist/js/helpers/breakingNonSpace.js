/*
	
	@breakingNonSpace
	
	Careful -- this seems broken with the latest jQuery...
	
	10.03.08 - pdf
	
	Breaking Non-Space
	
	Insert either &#8203; character or <wbr> tag for < IE7 to allow line
	break in the middle of email address, url, etc.
	
	apply bnsp to choosen elements.
	takes optional array of characters to break at which replaces the defaults,
	just be careful of regex special characters: $("a").bnsp(["$","domain"]);
	$(".bnsp a").bnsp();
	$(".bnsp li").bnsp(["sis","best","name"]);

*/

jQuery.fn.bnsp = function(options) {
	// if array of characters, use it. else use default set.
	var c = options || ["@","/"];
	// set bnsp entity based on browser support
	var b = jQuery.browser.msie && jQuery.browser.version < 7 ? "<wbr>" : "&#8203;";
	// loop and return
	return this.each(function() {
		var $this = jQuery(this); // store $(this) for use inside another function
		// loop through each item in character array
		jQuery.each(c, function() {
			var rx = new RegExp(this,'g'); // create new regex object with current character
			$this.html($this.html().replace(rx,this+b)); // replace character with itself + nbsp entity
		}); // end array loop
	});// end return
}; // end bnsp

// end breakingNonSpace