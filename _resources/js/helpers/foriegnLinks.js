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