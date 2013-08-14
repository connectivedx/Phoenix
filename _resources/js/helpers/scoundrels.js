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