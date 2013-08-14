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