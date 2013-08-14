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