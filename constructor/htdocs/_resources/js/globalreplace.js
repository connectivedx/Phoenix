/* global replace function

By Christoph Saxe - ISITE Design

Searches all text nodes in an HTML document and a string with another. Includes options to control the context for replacement, the replacement or instertion mode, and different replacement values for different browsers.

syntax:

globalReplace(options, mode);

options: object with the following properties:

	context:			DOM object or CSS selector cast as string. document context for initial text search.  defaults to document.body.
	search_string:		String. Actual string being searched. defaults to ''.
	filter:				RegExp to filter context of search string. defaults to / /.
	insert:				String. Controls insertion mode: before, after, or replace.  defaults to before.
	replacement:		String. Value to insert.
	browsercheck:		Boolean. True checks the browser and changes the value of replacement accordingly.  If you set to true, you'll also need to specify at least one browser-specific replacement.
	ielow_replacement:	String. If browsercheck is true, this value will be used for IE6 and lower.
	iehigh_replacement: String. If browsercheck is true, this value will be used for IE7 and higher.
	mo_replacement:		String. If browsercheck is true, this value will be used for Mozilla browsers.
	sf_replacement:		String. If browsercheck is true, this value will be used for Safari.
	op_replacement:		String. If browsercheck is true, this value will be used for Opera.


*/

globalReplace = function(settings, mode){
	
	//global constants.  Different presets can be added to this object and then called as a mode.  Currently only email mode is defined.
	var CONSTANTS = {
		base: {
				DEFAULT_CONTEXT: document.body,
				DEFAULT_SEARCH: '',
				DEFAULT_FILTER: / /,
				DEFAULT_INSERT: 'before',
				DEFAULT_REPLACEMENT: '',
				DEFAULT_BROWSERCHECK: false
		},
		email: {
				DEFAULT_CONTEXT: document.body,
				DEFAULT_SEARCH: '@',
				DEFAULT_FILTER: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/,
				DEFAULT_INSERT: 'before',
				DEFAULT_REPLACEMENT: '&#8203;',
				DEFAULT_BROWSERCHECK: true,
				DEFAULT_IELOWREPLACEMENT: "<wbr />"
		}
	};
	
	//global vars
	var selector = "*:contains(REPLACE)";
	mode = (mode)?mode:'base'; //we default to harmless values, ie., nothing happens.
	
	//settings object overridable by user
	settings = jQuery.extend({
		context:			CONSTANTS[mode].DEFAULT_CONTEXT,
		search_string:		CONSTANTS[mode].DEFAULT_SEARCH,
		filter:				CONSTANTS[mode].DEFAULT_FILTER,
		insert:				CONSTANTS[mode].DEFAULT_INSERT,
		replacement:		CONSTANTS[mode].DEFAULT_REPLACEMENT,
		browsercheck:		CONSTANTS[mode].DEFAULT_BROWSERCHECK,
		ielow_replacement:	(CONSTANTS[mode].DEFAULT_IELOWREPLACEMENT)?CONSTANTS.email.DEFAULT_IELOWREPLACEMENT:CONSTANTS.email.DEFAULT_REPLACEMENT,
		iehigh_replacement: (CONSTANTS[mode].DEFAULT_IEHIGHREPLACEMENT)?CONSTANTS.email.DEFAULT_IEHIGHREPLACEMENT:CONSTANTS.email.DEFAULT_REPLACEMENT,
		mo_replacement:		(CONSTANTS[mode].DEFAULT_MOREPLACEMENT)?CONSTANTS.email.DEFAULT_MOREPLACEMENT:CONSTANTS.email.DEFAULT_REPLACEMENT,
		sf_replacement:		(CONSTANTS[mode].DEFAULT_SFREPLACEMENT)?CONSTANTS.email.DEFAULT_SFREPLACEMENT:CONSTANTS.email.DEFAULT_REPLACEMENT,
		op_replacement:		(CONSTANTS[mode].DEFAULT_OPREPLACEMENT)?CONSTANTS.email.DEFAULT_OPREPLACEMENT:CONSTANTS.email.DEFAULT_REPLACEMENT
	}, settings);
	
	// here we set the actual selector using the search value in the settings object.
	selector = selector.replace(/REPLACE/, settings.search_string);

	// browser check and set the replacement value appropriately.
	if (settings.browsercheck){
		if (jQuery.browser.msie) {
			if(jQuery.browser.version < 7.0) { settings.replacement = settings.ielow_replacement; }
			else { settings.replacement = settings.iehigh_replacement; }
		}
		else if (jQuery.browser.mozilla) { settings.replacement = settings.mo_replacement; }
		else if (jQuery.browser.safari) { settings.replacement = settings.sf_replacement; }
		else if (jQuery.browser.opera) { settings.replacement = settings.op_replacement; }
	}
	
	// check the insert mode - before, after, or replace.  defaults to replace.
	switch(settings.insert) {
		case 'before'	: settings.replacement = settings.replacement+settings.search_string;
			break;
		case 'after'	: settings.replacement = settings.search_string + settings.replacement;
			break;
		default			:	settings.replacement = settings.replacement;
	}

	$(selector, settings.context).contents().each(function() {
			if (this.nodeType == 3 && this.nodeValue.match(settings.filter)) {
			$(this).replaceWith(this.nodeValue.replace(RegExp(settings.search_string), settings.replacement));
		}
	});
};