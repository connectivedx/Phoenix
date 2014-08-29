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