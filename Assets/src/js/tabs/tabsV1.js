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