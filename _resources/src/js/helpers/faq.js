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