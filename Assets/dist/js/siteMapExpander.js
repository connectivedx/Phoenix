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
