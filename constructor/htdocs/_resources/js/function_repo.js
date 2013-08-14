/**

	ISITE Function Library
	
	Don't use this file as is. Take the parts you want and either paste into your global.js	or
	create a separate script file if need be. Including in global.js is likely the better solution.

	Seriously. Don't use this whole file. But add to it as you see fit.

	Three parts:
	
		1. @jQuery snippets and plugins
			
			- @getScript dev_utils
			- @inputClear Plugin
				- http://jsfiddle.net/HmKdj/
			- @inputSetter Plugin -- inputClear using the label as value + options
				- http://jsfiddle.net/ePQWn/ (v1)
				- http://jsfiddle.net/s8S3G/ (v2)
			- @validateinputsetter -- validatation extension for use with inputSetter
			- @minHeight -- $.support.minHeight extension plugin
			- @charactersRemaining Plugin
				- http://jsfiddle.net/TjWVw/
			- @breakingNonSpace Plugin
			- @external -- open external links not on current domain in new window
				- http://jsfiddle.net/UPhwk/
			- @foreignLinks -- bullet proof way to return array of external links and or class them
			- @printer -- empower print link - fire browser print dialog
				- http://jsfiddle.net/phtMe/
			- @sitemapexpander -- expand/collapse uls and trees and such with an added button for doing it
			- @tableHovers plugin -- makes row and column hovering on tables
			- @tableHovers plugin v2 -- lightweight version of #tableHovers v1
				- http://jsfiddle.net/SDbQY/
			- @tabs -- generic tab style nav
			- @tabs v2 -- lightweight version of v1 with same options + rolled up url hash feature of @tabs v1
				- - http://jsfiddle.net/KaBmy/
			- @shuffler -- shuffle the contents of a container to fake ajax/db interactions
			- @changeText -- update text somewhere else.
			- @or -- $("something").or("default").dothischain()
			- @accessibilityReset -- remove all the image replacement if user has images or colors disabled in browser
			- @maxHeight -- get the max height of a set of elements
			- @faq -- basic expand/collapse dl
				- http://jsfiddle.net/p8aDM/
			- @scoundrels -- email deobfuscation from ROT13
			- @selectTabs -- creates select dropdown to reveal different sub-options in a form
				- http://jsfiddle.net/tghgg/
			- @selectTabs v2 -- little more lightweight + rolled up url hash feature of @tabs v1
				- http://jsfiddle.net/zjHCW/
			- @fileUpload -- generate a fake input/button combination to normalize appearance of input[type="file"] across browsers.
				- http://jsfiddle.net/aZeHz/
			- @filmstrip -- horizontal 'carousel' scroller, expects a list and assumes you want only one 'frame' per scroll
				- http://jsfiddle.net/SyaDj/
			- @filmstrip v2 -- a more generic lightweight horizontal / vertical 'carousel' of v1. (no pager needs, no animation needs)
			
			
		2. @Misc. useful both with or without jQuery
		
			- @cookie functions
			- @flicker -- prevent ie6 flicker background
			- @remotefileload -- load files in IE without an ajax request, ex: bgiframe loading
			- @isValidEmailAddress -- email validation
			
		3. @non-jQuery related items
		
			- @DOMutils
			- @getElementsByClass
			- @toggle on/off
			- @insertAfter
			- @inArray
			- @document.ready
			- @extend - extend one object with one or more other objects

*/


/**
 * 1. @jQuery -------------------------------------------------------------------------------------------------
 */


/**
 * @getScript
 * external holder of all things dev utilizeable. remove for production
 * this is a nice bit for development or testing things without actually adding a script tag to the HTML head element
 */
$.getScript("_resources/js/dev_utils.js",function(){ /* stuff to do once this is loaded, call a function in it for example */ });
// end getScript


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


/**
 * @validateinputsetter
 * custom validation method for jquery.validation.js. use with inputSetter to validate fields as required but not equal to the label (default value)
 *  may need to change where to look for the label depending on particular html
 */
jQuery.validator.addMethod("notEqualTo", function(value, element, param) {
	return $(element).val()!=$(element).prev("label").text();
}, "error");

// end validation


/*

	@minHeight
	03.10.09 - pdf
	
	Extend $.support to test for minHeight
	
	Seems to be working. Be sure to test in the required browsers just to be sure.
	
	returns boolean
	
	Usage:
	$.support.minHeight();
	
	Note that is slightly different than the other $.support objects which do not require the ().

*/

jQuery.extend(jQuery.support, {
	minHeight : function() {
		var id = "minheightsupport" + (new Date()).getTime();
		$("<div></div>").attr("id",id).css({height:"1px",minHeight:"2px",overflow:"hidden",border:"none",padding:"0",margin:"0"}).appendTo("body");
		var correctheight = document.getElementById(id).offsetHeight==2;
		$("#"+id).remove();
		return correctheight;
	}
});

//. end support.minHeight



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



// @external
// External link popper
// checks href against current domain. If not matching and href contains http://, target blank it
// http://jsfiddle.net/UPhwk/

$('a[href^="http://"]').not('[href*='+window.location.host+']').attr('target','_blank');

// end External link popper




// @foreignLinks external link unility jQuery Plugin
// Bullet proof method to hunt for external links and return an array if needed.
//	This is a more bullet proof method that elminates the possibility of any problem with relativly pathed links
//	5.27.12 - D.O.
//	GET LINKS = $.forignLinks(); || SET CLASS = $.forignLinks({setClass:'ixExternal'}); *

jQuery.foreignLinks = function(options) {
	var defaults = { setClass:'', target:'' };
	var o = $.extend(defaults, options);

	//Build restore array (rA)
	var rA = [];
	var $l = jQuery('a');
	
	for(var h = 0; h < $l.length; h++){
		rA.push({'hrf':$l.eq(h).attr('href')});
		$l[h].href = $l[h].href;
	}
	//add all external links to external array (eA)
	var eA = jQuery('a:not([href*="'+window.location.host+'"])');
	
	//set class if option is set.
	eA.addClass((o.setClass !== '')?o.setClass:'');

	//retore sanitized links back to normal state from restor array (rA)
	for(var i = 0; i < rA.length; i++){
		jQuery('a').eq(i).attr('href',rA[i].hrf);
	}
	
	//setup targets
	for(var j = 0; j < eA.length; j++){
		if(!eA[j].target && o.target){
			eA[j].target = o.target;
		}
	}
	
	//return external array (eA)
	return eA;
};
// end foreignLinks



// @printer
// empower print
// http://jsfiddle.net/phtMe/
$("a.print").click(function(){ window.print(); return false; });



// @sitemapexpander
// 07.01.09 pdf
// expand/collapse ul tree. nice for sitemappy situations. See example here:
// http://fed.isitedesign.us/content/pacificorp/pacificpower/ut-13.html
// Two parts:

// in yer document.ready():
$("div.sitemap ul").enableTree();

// elsewhere with all your program logic/functions:
// create open/close tree. receives ul.
jQuery.fn.enableTree = function() {

	var obj = jQuery(this);
	
	// hide children and set up css
	obj.addClass("expander").find("li li ul").hide();
		
	// insert the button to open/close and attach click event
	$("li li",obj).each(function(){
		if(jQuery("li",this).length>0) {
			jQuery(this).prepend('<a class="btn" href="#">+</a>');
			jQuery("a.btn",this).click(function(){
				var textinsert = jQuery(this).text() == "+" ? "-" : "+";
				jQuery(this).text(textinsert).toggleClass("open").parent("li").find("ul:first").slideToggle("fast");
				return false;
			});
		}
	});

	return this;
};




// @tableHovers Plugin
// 07.13.09 pdf
// makes row and column hovering for tables
// usage: $('table').tableHovers();
// all the functions are public so can be customized. bad?

(function($) {

	// plugin definition
	$.fn.tableHovers = function(options) {
		// return and iterate
		return this.each(function() {
			if(this.tagName == "TABLE") {
				// row hover
				$('tbody tr',this).bind('mouseenter mouseleave', $.fn.tableHovers.rowHover);
				// row focus
				$('tbody th a',this).bind('focus blur', $.fn.tableHovers.rowFocus);
				// column hover
				$('td,th',this).bind('mouseenter', $.fn.tableHovers.columnHover);
				// clear table
				$(this).bind('mouseleave', $.fn.tableHovers.clearTable);
				$('tbody th',this).bind('mouseenter', $.fn.tableHovers.clearTable);
			}
		});
	};
	
	$.fn.tableHovers.cache = {};
	
	$.fn.tableHovers.rowHover = function(e) {
		$(this)[((e.type == 'mouseenter') ? 'add' : 'remove') + 'Class']('over');
	};
	
	$.fn.tableHovers.rowFocus = function(e) {
		$(this).parents('tr')[((e.type == 'focus') ? 'add' : 'remove') + 'Class' ]('over');
	};

	$.fn.tableHovers.columnHover = function(e) {
		var $this	= $(this),
			$tr		= $this.parents('tr'),
			$table	= $this.parents('table'),
			td_i	= $('td,th',$tr).index($this),
			table_i = $('table',$("body")).index($table);
		if($.fn.tableHovers.cache.index!=td_i) {
			// remove current "over" classes
			$('td,th',$table).removeClass('over');
			// reset index
			$.fn.tableHovers.cache.index = td_i;
			// class the index
			if($.fn.tableHovers.cache["$"+table_i+"_"+td_i]){
				$.fn.tableHovers.cache["$"+table_i+"_"+td_i].addClass('over');
			} else {
				$.fn.tableHovers.cache["$"+table_i+"_"+td_i] = $();
				$('tr',$table).each(function(i){
					$.fn.tableHovers.cache["$"+table_i+"_"+td_i] = $.fn.tableHovers.cache["$"+table_i+"_"+td_i].add($('td:eq('+(td_i-1)+'),th:eq('+td_i+')',this));
				});
				$.fn.tableHovers.cache["$"+table_i+"_"+td_i].addClass('over');
			}
		}
	};
	
	$.fn.tableHovers.clearTable = function(e) {
		var $parent = this.tagName == "TABLE" ? $(this) : $(this).parents("table");
		$('td',$parent).removeClass('over');
		$.fn.tableHovers.cache.index = null;
	};

})(jQuery);



// @tableHovers Plugin v2
// 5.28.12 D.O. : http://jsfiddle.net/YUzUz/
// makes row, column and or current hovering for tables. Still thead and th friendly.
// usage: $('table').tableHovers();
// http://jsfiddle.net/SDbQY/
$.fn.tableHovers = function(options) {
    var defaults = {
        single: true, //single cell highlighting
        column: true, //column highlighting
        row: true, //row highlighting
        autoReset:true, //clear highlights on mouse leave of table
        cached:false //keep clicked state of highlights
    };
    //inherit from provided configuration (if any)
    var o = $.extend(defaults, options);
    return this.each(function(){
        $(this).mouseover(function(e){
            var $t = $(e.target);
            var tableRow = $('tr',$(this));
            var isTable = $t.is('table');
            var row = $t.index();
            var col = $t.parent().index();

            if(!isTable && $(this).is(':not(.cached)')){
                $('.over, .single-over',this).removeClass('over single-over'); //clear previous hover
                $($t.parent(),$(this))[(o.row !== false)?'addClass':'removeClass']('over'); //set row highlight
                
                //set column highlight
                for(var i = tableRow.length; i--;){
                    $(tableRow[i]).find('td,th').eq(row)
                    .not((o.single !== false)?$t:'table')
                    [(o.column !== false)?'addClass':'removeClass']('over');
                }
                
                //set single highlight
                $t[(o.single === true)?'addClass':'removeClass']('single-over');
            }
        }).mouseout(function(){
            if(o.autoReset === true && $(this).is(':not(.cached)')){
                $('.over, .single-over',this).removeClass('over single-over');
            }
        }).click(function(e){
            if(o.cached !== false){
                $(this).toggleClass('cached');
                $(e.target).trigger('mouseenter');
            }
        });
    });
}; // end @tableHovers Plugin v2



/**
 * @tabs Plugin
 * 7.16.09 Will and Paul
 * Creates tabs style content switching.
 *
 * Add class="default" to the anchor in the html to trigger that tab or call the plugin with an index.
 * HTML class takes precedence over index argument
 *
 * 1. HTML
 * expects html like this:
 *
 * <ul class="tabs">
 *		<li><a href="#pane1">Pane 1</a></li>
 *		<li><a href="#pane2">Pane 2</a></li>
 * </ul>
 * <div id="pane1">Hi</div>
 * <div id="pane2">Mom</div>
 *
 * 2. JS
 * $('.tabs').IX_tabs();
 * $('.tabs').IX_tabs(3); // click the fourth tab (index starts at 0)
 *
 * NOTE: that the jQuery selector can be anything, class is not needed.
 *
 * 3. CSS
 * think this'll work. untested. -will
 *
 * .tabs	{overflow: hidden; margin: 0; padding: 0; list-style-type: none;}
 * .tabs a	{border: 1px solid #ccc; border-bottom: none; display:block; float:left; margin-right:3px; padding:3px;}
 *
 */

// generic tab builder
jQuery.fn.IX_tabs = function (tab) {
	return this.each(function () {
		var $container = jQuery(this),
			$tabs = jQuery("a", this),
			panes = [];

		$tabs.each(function () {
			var $this = jQuery(this),
				pane = $this.attr('href'); // using the href to make the collection of panes

			if (pane.indexOf("#") !== 0) {
				return true;
			}
			panes.push(pane);

			$this.bind("click", function () {
				//build the jq selector. cheap.
				jQuery(panes.join(",")).hide();

				//do some class switching
				$container.find('.active').removeClass('active');
				$this.parent("li").addClass("active");

				jQuery(pane).show();
				return false;
			});
		});
		// set which tab to show
		// if .default is available, get its index and set it. else, check for a tab index passed in or set to 0
		var show = jQuery('a.default', $container).length ? $tabs.index(jQuery('a.default')) : tab || 0;
		
		// optionally, use this to make tabs hashable. Note: doesn't make clicking the tabs hashable, only provides for linking directly to them
		// urltab = the hash in the url
		// show = if urltab isn't empty or a default link is checked, decide which of those two is true: if urltab, set it, otherwise set to a.default. If neither, set to tab or  0
		// this means the url hash is more important than the default class set in the html
		//
		// var urltab = window.location.hash,
		// show = urltab !== "" || jQuery('a.default', $container).length ? urltab !== "" ? $tabs.index(jQuery('a[href=' + urltab + ']')) : $tabs.index(jQuery('a.default')) : tab || 0;

		// these lines are pretty gross, but cheap
		// make sure the tab we think we can show is actually there. if so, click it. else click the first tab
		if ($tabs.eq(show).length) {
			$tabs.eq(show).click();
		}
		else {
			$tabs.eq(0).click();
		}
	});
};

/**
 * @tabs v2 Plugin
 * 5.28.12 D.O.
 * tabbed content switching.
 * Same features, markup and style setup as v1, but url hash feature (no page jump)
 * http://jsfiddle.net/KaBmy/
 */
jQuery.fn.IX_tabs = function(tab){
	return this.each(function(){
		var $tabs = $.each($('a',this),function(){ this.href = $(this).attr('href')+'_IX'; });
		$tabs.click(function(e){
			$.each($tabs, function(){ $(this.hash.replace('_IX','')).hide(); }); //hide all
			$(e.target.hash.replace('_IX','')).show(); //show clicked
			e.preventDefault();
		});
		var $default =($(window.location.hash).length)?
			$('a',this).index( $('[href='+window.location.hash+'_IX]') ) :
			($('.default',this).length)? $('a',this).index( $('.default') ) : (tab) ? tab : 0;

		$($tabs[$default]).click(); //open default if set multiple ways
	});
};
// end @tabs v2


/**
 * @shuffler
 * fake search results hocus pocus.
 * made for faking search results on the foodhub prototype but could be cleaned up for some other bizarre purpose.
 *
 * can only shuffle the container's immediate children
 *
 * example
 * $('ul#my-list').shuffleResults("li");
 *
 * CSS is something like...
 *  .loader{
 *		background: transparent url(/_resources/img/css/ajax-loader.gif) 0 0 no-repeat;
 *		margin: 1em 240px;
 *		padding: 0;
 *		height: 35px;
 *		text-indent: -9999em;
 *  }
 */

jQuery.fn.IX_shuffler = function(shufflee) {
	return this.each(function() {
		var $wrap = jQuery(this);
		var $shufflewhat = jQuery($wrap).find(shufflee).not(shufflee+" "+shufflee); // save the children!
		var shuffled = shuffle($shufflewhat);
		
		
		//fade and height junk needs to be an option
		//don't jump! only needed if fades
		var curHeight = $wrap.css("height");
		$wrap.css("height", curHeight);

		//fades nonsense
		jQuery($shufflewhat).fadeOut(300,function(){
			//could extend to include var htmlElement and var loadingText
			var loader = '<h2 class="loader">Loading...</h2>';
			$wrap.html(loader);
			$wrap.find("h2").fadeTo(500, 1, function(){
				jQuery($shufflewhat).show();
				$wrap.html(shuffled);
			});
		});

		// the hard work.
		function shuffle(o){ //v1.0
			for(var j, x, i = o.length; i; j = parseInt(Math.random() * i, 10), x = o[--i], o[i] = o[j], o[j] = x);
			return o;
		}
	});
}; // shuffleResults()


/**
 * @changeText
 * update text somewhere else.
 *
 * grabs the text from the object and copies it into something else.  used to show a preview, udpate a message/button...
 *
 * used a lot during foodhub prototyping.
 *
 */

jQuery.fn.changeText = function(updatee) {
	return this.each(function() {
		var newText = $(this).text();
		$(updatee).text(newText);
	});
};


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



// @maxHeight
// 01.8.10
// receives a jQuery object. Returns the height of the tallest element
var maxHeight = function($els) {
	var h = 0;
	$els.each(function(){
		h = h < parseInt($(this).height(), 10) ? parseInt($(this).height(), 10) : h;
	});
	return h;
};

// end @maxHeight



// @faq
// 01.26.10 pdf
// receives a dl
// inserts +/- for collapsing and a show all/hide all link
// http://jsfiddle.net/p8aDM/
/*

Example HTML:
<dl class="collapsible">
	<dt>Item one</dt>
	<dd><p>Item one sub content</p></dd>
	<dt>Item two</dt>
	<dd>
		<p>Item two sub content</p>
		<p>
			Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
		</p>
	</dd>
	<dt>Item three has a longer title that will wrap to the next line to check for proper indenting of said line.</dt>
	<dd><p>Item three sub content</p></dd>
	<dt>Item four</dt>
	<dd>
		<img src="_resources/img/content/fpo-tertiary.jpg" alt="FPO" />
		<p>Item four sub content</p>
	</dd>
</dl>

Example CSS -- NOTE: .js class for JS only styles:
.js dl.collapsible		{ margin: 0 0 0 1em; }
.js dl.collapsible dt	{ text-indent: -1.1em; margin-left: 1.1em; }
dl.collapsible dt		{ font-weight: bold; margin: 0; }
	dl.collapsible dt a				{ color: #111; outline: none; text-decoration: none; display: inline-block; }
	dl.collapsible dt a span		{ color: #76271a; }
	dl.collapsible dt a:hover,
	dl.collapsible dt a:hover span,
	dl.collapsible dt a:focus,
	dl.collapsible dt a:focus span	{ color: #666; }
dl.collapsible dd		{ padding: 0 0 .75em 0; }
dt span.state			{ font-family: "Courier New", Courier, monospace; font-size: 1.3em; }

*/
jQuery.fn.IX_faq = function() {
	return this.each(function() {
		jQuery(this).find("dd").hide();
		jQuery(this).find("dt").prepend('<span class="state">+</span> ').wrapInner('<a href="#"></a>').click(function(){
			var textinsert = jQuery("span.state",this).text() == "+" ? "-" : "+";
			jQuery(this).toggleClass("open").next("dd").slideToggle("fast").end().find("span.state").text(textinsert);
			return false;
		});
		var showtext = { show : "Show All", hide : "Hide All" };
		jQuery('<a class="revealer show" href="#">'+showtext.show+'</a>').insertBefore(this).click(function(){
			var action = jQuery(this).is(".show");
			jQuery(this).next("dl.collapsible").find(action ? "dt:not(.open)" : "dt.open").click().end().end().toggleClass("show").toggleClass("action-hide").text(showtext[action ? "hide" : "show"]);
			return false;
		});
	});
};

// end @faq



// @scoundrels
// 01.27.10 pdf
// http://www.alistapart.com/articles/gracefulemailobfuscation/
// http://github.com/jaz303/jquery-grab-bag/blob/master/javascripts/jquery.text-effects.js
/*
	
	Converts a ROT13'd href attribute to a mailto: link. Ideally some server awesomeness is
	used to redirect the ROT13 path to a contact form or captcha or something for non JS users
	
	usage:
	<a rel="nofollow" href="c/asdf+asdf+pbz">contact [at] something</a>
	$('a').scoundrels();
	
*/
$.fn.scoundrels = function() {
	this.each(function() {
		$(this).attr('href','mailto:'+$(this).attr('href').replace(/.*c\/([a-z0-9._%-]+)\+([a-z0-9._%-]+)\+([a-z.]+)/ig, function(chr,p1,p2,p3) {
			function replacer(str) {
				return str.replace(/[a-z0-9]/ig,function(chr) {
					var cc = chr.charCodeAt(0);
					if (cc >= 65 && cc <= 90) cc = 65 + ((cc - 52) % 26);
					else if (cc >= 97 && cc <= 122) cc = 97 + ((cc - 84) % 26);
					else if (cc >= 48 && cc <= 57) cc = 48 + ((cc - 43) % 10);
					return String.fromCharCode(cc);
				});
			}
			return replacer(p1) + '@' + replacer(p2) + '.' + replacer(p3);
		}));
	});
	return this;
};

// end @scoundrels


/**
 * @selectTabs
 * build select from link list to reveal and hide different options in a form
 * based on @tabs.
 * expects a list of links which it will transform into a select control (please be sure to use inside a form, doesn't add a fieldset!)
 * will reveal sections based on relative links and id's; see @tabs documentation for more info.
 * http://jsfiddle.net/tghgg/
**/
jQuery.fn.IX_selectTabs = function() {
	return this.each(function() {
		var $selector = jQuery('<select class="IX_selectTabs"><option value="">Please select one:</option></select>'),
			$this = jQuery(this),
			panes = [];
		
		$this.children('li').each(function(){
			var $tab = jQuery('a', this);
			$selector.append('<option value="'+$tab.attr('href')+'">'+$tab.text()+'</option>');
		});
		$this.replaceWith($selector);

		$selector.children('option').each(function () {
			var $this = jQuery(this);

			// using the href to make the collection of panes
			var pane = $this.attr('value');
			if (pane.indexOf("#") !== 0) {
				return true;
			}
			panes.push(pane);
		});

		jQuery(panes.join(",")).hide();
		
		$selector.bind("change", function(){
			if(jQuery(panes.join(":visible,")+':visible').length) { jQuery(panes.join(":visible,")+':visible').slideUp(250, function(){ jQuery($selector.val()).slideDown(350); }); }
			else { jQuery($selector.val()).slideDown(250); }
			return false;
		});
		
	});
};

// end @selectTabs



/**
 * @selectTabs v2
 * 5.29.12 D.O. : http://jsfiddle.net/ZEeLV/
 * build select from link list to reveal and hide different options in a form
 * based on @tabs.
 * expects a list of links which it will transform into a select control (please be sure to use inside a form, doesn't add a fieldset!)
 * will reveal sections based on relative links and id's; see @tabs documentation for more info.
 * http://jsfiddle.net/zjHCW/
**/
jQuery.fn.IX_selectTabs = function(tab) {
    return this.each(function() {
        var $tabs = $(this);
        var $select =  $('<select class="IX_selectTabs"><option> - - </option></select>').insertAfter($tabs);
        $.each($('a',$tabs),function(i){ //add options
            $select.append( '<option value="'+ $(this).attr('href') +'">'+ $(this).text() +'</option>');
        });
        
        var $options = $('option',$select);
        $select.change(function(){ //choose options
            $.each($options, function(){ $(this.value).hide(); }); //hide all
            $($options.eq($(':selected',$select).index()).val()).show(); //show selected
        });
        
        var $default =($(window.location.hash).length)? //default selection
            $('a',this).index( $('[href='+window.location.hash+']') )+1 : ($('.default',this).length) ?
            $('a',this).index( $('.default') )+1 : (tab) ? tab : 0 ;

        $('option:eq('+$default+')',$select).attr('selected', 'selected');
        $select.trigger('change');
        $tabs.remove(); //clean up after setup
    });
};

// end @selectTabs v2



/**
 * @fileUpload
 * make file inputs pretty - adds "fake" input/button combo to disguise file upload widget
 * http://jsfiddle.net/aZeHz/
 * basic css you'll need:
 * these elements are generated by the javascripts
 * .IX_fileUpload { position: relative; }
 *
 * .IX_fileUpload .fake-field {
 *		background-color:#fff;
 *		overflow:hidden;
 *		position:absolute; top:0; left:0;
 *		z-index:1;
 * }
 *  .IX_fileUpload:hover { cursor:pointer; }
 *	.IX_fileUpload .fake-field input {
 *		width:300px;
 *	}
 * .IX_fileUpload .real-field {
 *		height:26px;
 *		filter:alpha(opacity: 0);
 *		opacity:0;
 *		position:relative;
 *		text-align:right;
 *		width:400px;
 *		z-index:2;
 * }
 *
 */
jQuery.IX_fileUpload = function(){
	var uniqueSuffix = 0;
	return jQuery('input[type=file]').each(function(){
		var $fileInput = jQuery(this),
			currentID = 'IX_fileUpload'+uniqueSuffix;

		$fileInput.addClass('real-field').wrap('<div id="'+currentID+'" class="IX_fileUpload"></div>');
		$wrapper= jQuery('#'+currentID);
		$fileInput.after('<div class="fake-field"><input type="text" /><a class="button">Browse</a></div>');
		$wrapper.find('.fake-field input').focus(function(e){ jQuery(this).blur(); });
		$fileInput.change(function(){
			$wrapper.find('.fake-field input').val(this.value).blur();
		});
	});
};

/**
 * @filmstrip
 * makes a horizontal single frame carousel (i.e., perpetual) scroller.
 * http://jsfiddle.net/SyaDj/
 *
 * minimum html needed:
 * <div class="filmstrip">
 *	<ul>
 *		<li>
 *			<img src="img/path.jpg" alt="Pertinant alt text." />
 *			<p>Nam nec elit tortor! Aenean pharetra eros nec tellus eleifend rutrum. Vivamus in consequat sem.</p>
 *		</li>
 *		<li>
 *			<img src="img/path.jpg" alt="Pertinant alt text." />
 *			<p>Nam nec elit tortor! Aenean pharetra eros nec tellus eleifend rutrum. Vivamus in consequat sem.</p>
 *		</li>
 *		<li>
 *			<img src="img/path.jpg" alt="Pertinant alt text." />
 *			<p>Nam nec elit tortor! Aenean pharetra eros nec tellus eleifend rutrum. Vivamus in consequat sem.</p>
 *		</li>
 *	</ul>
 *	<div class="filmstrip-utility">
 *	</div>
 * </div>
 *
 * filmstrip-utility is maintained in the source as a place to emit more links or other static information. plugin does test for its presence so we won't break if it's absent.
 *
 * baseline CSS:
 * .IX_filmstrip .viewport { // this is the 'window' in which the slide is revealed.
 *		height:100px;
 *		overflow:hidden;
 *		position:relative;
 *		width:100px;
 * }
 *	.IX_filmstrip ul {
 *		margin:0;
 *		overflow:hidden;
 *		padding:0;
 *		position:absolute; top:0; left:0;
 *	}
 *		.IX_filmstrip li { // not necessary, but recomend setting height and width to match .viewport
 *			list-style:none;
 *			float:left;
 *			height:100px;
 *			margin:0;
 *			padding:0;
 *			position:relative;
 *			width:100px;
 *		}
 *
 * Usage:
 * $('.filmstrip').IX_filmstrip();
 *
 */

jQuery.fn.IX_filmstrip = function() {
	return this.each(function(){

		// grab the filmstrip itself and build some controls for it.
		var	$widget = jQuery(this),
			$strip = jQuery('ul', this),
			$slides = jQuery('li', this),
			$prev = jQuery('<span class="prev">prev</span>'),
			$next = jQuery('<span class="next">next</span>'),
			$pager = jQuery('<div class="pager"><span class="current">1</span> of <span class="total-slides"></span></div>'),
			$currentSlide = jQuery('.current', $pager),
			totalSlides = $slides.length,
			stripWidth = 0,
		
			filmstrip = {
				
				init : function(){
					$widget.addClass('IX_filmstrip');
					$strip.wrap('<div class="viewport"></div>');
					
					// add extra slides
					jQuery($slides[totalSlides-1]).clone(true).prependTo($strip);
					jQuery($slides[0]).clone(true).appendTo($strip);
					$slides = jQuery('li', $widget);
					
					// update pager
					$pager.find('.total-slides').text(totalSlides);
					if (jQuery('.filmstrip-utility', $widget).length) { jQuery('.filmstrip-utility', $widget).prepend($pager).append($next).append($prev); }
					else { $widget.prepend($pager).append($next).append($prev); }
					
					// arrange the filmstrip
					stripWidth = $slides.width() * $slides.length;
					$strip.width(stripWidth);
					$strip.css('left', '-'+$slides.width()+'px');
					
					// bind the animation to the controls
					$prev.bind('click', function(){ filmstrip.rewind(); });
					$next.bind('click', function(){ filmstrip.advance(); });
				},
				advance : function(){ filmstrip.move(true); },
				rewind : function(){ filmstrip.move(false); },
				move : function(adv){
					if($strip.is(':animated')){ return false; }
					var pos = parseInt($strip.css('left'), 10),
						dir = (adv) ? -1 : 1;
					
					// ready to animate
					$strip.animate({'left': pos + (dir * $slides.width()) + 'px'}, 300, 'swing', function(){
						if (parseInt($strip.css('left'), 10) == -1 * (stripWidth - $slides.width())) { $strip.css('left', -1 * ($slides.width()) + 'px'); }
						if (parseInt($strip.css('left'), 10) === 0) { $strip.css('left', -1 * (stripWidth - (2 * $slides.width())) + 'px'); }
						// update position count
						$currentSlide.text(-1 * (parseInt($strip.css('left'), 10) / $slides.width()));
					});
				}
			};
			
			
		filmstrip.init();

	});
};


/**
 * @filmstrip v2 : http://jsfiddle.net/Epgm3/ the basic version
 * http://jsfiddle.net/mRXaw/ - Horizontal with large preview version
 * http://jsfiddle.net/jkbbY/ - Vertical with large preview version
 * makes a generic (no auto progression, no pager, no animations) horizontal / vertical single frame carousel scroller.
 * Usage:
 * $ixite.filmstrip.init([TARGET ELEMENT STRING OR OBJECT],[PREVIEW TARGET STRING OR OBJECT]);
 *
 */
var $ixite = $ixite || {};
$ixite.filmstrip = {
    init:function(target){
        var $strip = (typeof target === 'objet')? target : $(target);
        //template shifters, script is not class dependent
        $strip.append('<li class="right">&raquo</li>')
        .prepend('<li class="left">&laquo</li>').end()
        .find('li:eq(1)').addClass('on').end()
        .click(function(e){
            $ixite.filmstrip.shift($(e.target),$strip);
        });
    },
    shift:function(dir,target){
        var $strip = target;
        var isShifter = dir.is(':first-child, :last-child');
        var $on = $('.on',$strip);
        if(isShifter){
            var isLeft = dir.is(':first-child');
            var $oppositeDir = (isLeft)? $(':last-child',$strip) : $(':first-child',$strip);
            var $nextPrev = $on[(isLeft)?'prev':'next']();
            var isVisible = ($nextPrev.position().top === 0);
            var isFirst = $nextPrev.is(':first-child');

            //FULL VIEWPORT SHIFT
            if(!isVisible || isFirst){
               $($oppositeDir,$strip)[(isLeft)?'prev':'next']()[(isLeft)?'insertAfter':'insertBefore'](dir);
            }
            
            //SELECTED SHIFT
            $on.removeClass('on');
            if (isFirst) {
				$('li:eq(1)',$strip).addClass('on');
            }
            else {
				$nextPrev.addClass('on');
            }
        }else if(dir.is('li',$strip)){
            $on.removeClass('on');
            dir.addClass('on');
        }
    }
};
//end @filmstrip v2


// end 1. jQuery




// 2. @Misc. useful both with or without jQuery -------------------------------------------------------------------------------------------------

// @cookie
// Cookies get/set/delete
// there is also a jQuery cookie plugin that does more magic but seems to usually be overkill
function getCookie( name ) {
	var start = document.cookie.indexOf( name + "=" );
	var len = start + name.length + 1;
	if ( ( !start ) && ( name != document.cookie.substring( 0, name.length ) ) ) { return null;	}
	if ( start == -1 ) return null;
	var end = document.cookie.indexOf( ";", len );
	if ( end == -1 ) end = document.cookie.length;
	return unescape( document.cookie.substring( len, end ) );
}
function setCookie( name, value, expires, path, domain, secure ) {
	var today = new Date();
	today.setTime( today.getTime() );
	if ( expires ) { expires = expires * 1000 * 60 * 60 * 24; }
	var expires_date = new Date( today.getTime() + (expires) );
	document.cookie = name+"="+escape( value ) +
		( ( expires ) ? ";expires="+expires_date.toGMTString() : "" ) + //expires.toGMTString()
		( ( path ) ? ";path=" + path : "/" ) +
		( ( domain ) ? ";domain=" + domain : "" ) +
		( ( secure ) ? ";secure" : "" );
}
function deleteCookie( name, path, domain ) {
	if ( getCookie( name ) ) document.cookie = name + "=" +
			( ( path ) ? ";path=" + path : "/") +
			( ( domain ) ? ";domain=" + domain : "" ) +
			";expires=Thu, 01-Jan-1970 00:00:01 GMT";
}
// end cookies

// @flicker
// prevent ie6 flicker
try { document.execCommand('BackgroundImageCache', false, true); } catch(e) {}


// @remotefileload
// fix elements over selects z-index issue
// load script without ajax to avoid ActiveX requirement
function loadScript(src, callback) {
	var script = document.createElement("script");
	if(script.attachEvent) {
		script.attachEvent("onreadystatechange",
		function() { loadScript.callbackIE(callback); });
	}
	script.src = src;
	document.getElementsByTagName("head")[0].appendChild(script);
}
loadScript.callbackIE = function(callback) {
	var target = window.event.srcElement;
	if(target.readyState == "loaded")
	callback.call(target);
};
callback = function() { $("#nav ul, some-selector").bgiframe(); };

loadScript("_resources/js/jquery.bgiframe.min.js", callback);

// remotefileload


// @isValidEmailAddress
//
// example:
// if(isValidEmailAddress(theEnteredEmailAddy) != true) { tell em there's an error }
// returns true if email is valid.
//
function isValidEmailAddress(emailAddress) {
	var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	return pattern.test(emailAddress);
}


// end 2. Misc




// 3. @non-jQuery -------------------------------------------------------------------------------------------------
// If you have jQuery on the page already, stop now. You don't want this stuff.

// @DOMutils
// get/add/remove/event from dustin diaz
var Dom = {
	get: function(el) {
		if (typeof el === 'string') {
			return document.getElementById(el);
		} else {
			return el;
		}
	},
	add: function(el, dest) {
		el = this.get(el);
		dest = this.get(dest);
		dest.appendChild(el);
	},
	remove: function(el) {
		el = this.get(el);
		el.parentNode.removeChild(el);
	}
};

var Event = {
	add: function() {
		if (window.addEventListener) {
			return function(el, type, fn) {
				Dom.get(el).addEventListener(type, fn, false);
			};
		} else if (window.attachEvent) {
			return function(el, type, fn) {
				var f = function() {
					fn.call(Dom.get(el), window.event);
				};
				Dom.get(el).attachEvent('on' + type, f);
			};
		}
	}()
};
// end DOM utils


// @getElementsByClass
function getElementsByClass(searchClass,node,tag) {
	var classElements = [];
	if ( node === null )
		node = document;
	if ( tag === null )
		tag = '*';
	var els = node.getElementsByTagName(tag);
	var elsLen = els.length;
	var pattern = new RegExp("(^|\s)"+searchClass+"(\s|$)");
	for (i = 0, j = 0; i < elsLen; i++) {
		if ( pattern.test(els[i].className) ) {
			classElements[j] = els[i];
			j++;
		}
	}
	return classElements;
}
// end getElementsByClass


// @toggle on/off
function toggle(obj) {
	var el = document.getElementById(obj);
	el.style.display = (el.style.display != 'none' ? 'none' : '' );
}
// end toggle


// @insertAfter
// Jeremy Keith does insertAfter
function insertAfter(newElement,targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
// end insert after



// @inArray by EmbiMEDIA
Array.prototype.inArray = function (value) {
	var i;
	for (i=0; i < this.length; i++) {
		if (this[i] === value) {
			return true;
		}
	}
	return false;
};
// end inArray



// @document.ready
// Like jQuery's document.ready but without the jQuery.
// no need for this if using jQuery
var ISITE = function() {
	// pretend it's $() and add some action
	console.log("The document is loaded. Manipulate its face off!", document.getElementsByTagName("*"));
};
// end document ready


// keep the rest or else no onload will fire
// the big init()
function init() {
	if (arguments.callee.done) return;
	arguments.callee.done = true;
	if (_timer) clearInterval(_timer);
	ISITE();
}

/* Dean Edwards window.onload */
/* for Mozilla */
if (document.addEventListener) {
   document.addEventListener("DOMContentLoaded", init, false);
}

// for Internet Explorer (using conditional comments)
/*@cc_on @*/
/*@if (@_win32)
document.write("<scr" + "ipt id=__ie_onload defer src=javascript:void(0)><\/script>");
var script = document.getElementById("__ie_onload");
script.onreadystatechange = function() {
	if (this.readyState == "complete") {
		init(); // call the onload handler
	}
};
/*@end @*/

if (/WebKit/i.test(navigator.userAgent)) { // sniff
	var _timer = setInterval(function() {
		if (/loaded|complete/.test(document.readyState)) {
			init(); // call the onload handler
		}
	}, 10);
}

/* for other browsers */
window.onload = init;


/* alt version needs some testing http://www.kryogenix.org/days/2007/09/26/shortloaded

(function(i) {var u =navigator.userAgent;var e=/*@cc_on!@*/
		  
		  /* remove this comment --------------------
		  
		  false; var st =
setTimeout;if(/webkit/i.test(u)){st(function(){var dr=document.readyState;
if(dr=="loaded"||dr=="complete"){i()}else{st(arguments.callee,10);}},10);}
else if((/mozilla/i.test(u)&&!/(compati)/.test(u)) || (/opera/i.test(u))){
document.addEventListener("DOMContentLoaded",i,false); } else if(e){     (
function(){var t=document.createElement('doc:rdy');try{t.doScroll('left');
i();t=null;}catch(e){st(arguments.callee,0);}})();}else{window.onload=i;}})(init);
*/

// end document.ready

// @extend
// extend object with one or more other objects
// properties in later arguments will overwrite properties in first few objects
var extend = function(obj, extObj) {
    if (arguments.length > 2) {
        for (var a = 1; a < arguments.length; a++) {
            extend(obj, arguments[a]);
        }
    } else {
        for (var i in extObj) {
            obj[i] = extObj[i];
        }
    }
    return obj;
};

