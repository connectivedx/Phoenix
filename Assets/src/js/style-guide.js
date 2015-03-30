global.jQuery = require('jquery');
global.$ = global.jQuery;

var StyleGuide = StyleGuide || {};

StyleGuide = {

	init: function () {
		this.makeTOC();
		this.updateTitle();
		this.smoothScroll();
	},

	makeTOC: function () {
		var itemTemplate  = "<li><a href='%url%'>%title%</a></li>",
			sectionHeads  = $(".sg-section > h2.sg"),
			toc           = $('#toc-list'),
			text          = [],
			items         = [],
			sectionsText  = function() {
				sectionHeads.each( function(i, el) {
					return text.push($(this).text());
				});
			};

		sectionsText();
		text.shift();
		$.each(text,function(i,el){
			// build link template with actual values
			var itemTmp = itemTemplate.replace(/%url%/, "#" + el.toLowerCase()),
				item    = itemTmp.replace(/%title%/, el);
			// add them to list
			toc.append(item);
		});

	},

	updateTitle: function () {
		// change title tag value, becuase Styledown doesn't provide this option
		var title = document.getElementsByTagName('title');
		$(title).text('Style Guide');
	},

	smoothScroll : function () {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 500);

					return false;
				}
			}
		});
	}

};

StyleGuide.init();