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