/**
 * Shim Scripts.
 * Extending prototypes must be done with extreme caution.  The methods included here are 
 * available in newer versions of JavaScript and are only included here to ensure backwards 
 * compatability with older browsers.
 */

(function () {

	"use strict";

	// Array.indexOf() was added in ECMA-262 (ECMA 5); this code is from Mozilla to shim older browsers
	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function (searchElement) {
			if (this == null) {
				throw new TypeError();
			}
			var t = Object(this);
			var len = t.length >>> 0;  
			if (len === 0) {  
				return -1;  
			}  
			var n = 0;  
			if (arguments.length > 0) {  
				n = Number(arguments[1]);  
				if (n != n) { // shortcut for verifying if it's NaN  
					n = 0;  
				} else if (n != 0 && n != Infinity && n != -Infinity) {  
					n = (n > 0 || -1) * Math.floor(Math.abs(n));  
				}  
			}  
			if (n >= len) {  
				return -1;  
			}  
			var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);  
			for (; k < len; k++) {  
				if (k in t && t[k] === searchElement) {  
					return k;  
				}  
			}  
			return -1;  
		};  
	}
	
	if(!Array.isArray) {  
		Array.isArray = function (arg) {  
			return Object.prototype.toString.call(arg) == '[object Array]';  
		};  
	}
	
	// String.trim() was added by Mozilla to JavaScript 1.8.1, and is spec'd in ECMA 5
	// this implimentation is written by Steven Leviathan
	// see: http://blog.stevenlevithan.com/archives/faster-trim-javascript
	if (!String.prototype.trim) {
		String.prototype.trim = function () {
			var	str = this.replace(/^\s\s*/, ''),
				ws = /\s/,
				i = str.length;
			while (ws.test(str.charAt(--i)));
			return str.slice(0, i + 1);
		};
	}


}());