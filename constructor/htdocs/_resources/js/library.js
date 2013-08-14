 /***********************************************************************************************************
 *
 * ISITE baseline library functions for new project
 * functions are optional and serving suggestions.  If removing functions, please note these dependencies:
 * jquery.fn.placeholder - defined in global.js, depends on util.testAttrib
 *
 ***********************************************************************************************************/

(function() {
	// return the 'util' object from the PROJECT namespace or create it if it doesn't yet exist.
	var util = IX.namespace('util'); 
	// alias for cookie functions
	var cookie = IX.namespace('util.cookie');
	
	IX.getProjectNamespace().loggable = (function() {
			if (typeof(window.console) === 'object') {
				if (typeof(console.log === 'function')) {
					return true;
				}
			}
			return false;
		}());
	
	util.testAttrib = util.testAttrib || function testAttrib(elementName, attributeName) {
		var testElement = document.createElement(elementName);

		if (attributeName in testElement) {
			return true;
		}
		else {
			return false;
		}
	};
	
	// return query string as an object
	// if no string is provided, tries to pull query from location object.
	// if it can't find a query to process, it returns false
	util.parseQuery = util.parseQuery || function parseQuery(queryStr) { 
		var query = typeof queryStr === 'string' ? queryStr : /[a-zA-z]/.test(window.location.search) ? unescape(window.location.search.substr(1)) : false;
		var retObj = query ? {} : false;
		var arr;
		var index;
		var pair;
		
		if (retObj) {
			arr = query.split('&');
			
			for(index = arr.length; index--;) {
				pair = arr[index].split('=');
				retObj[pair[0]] = pair[1] || 0;
			}
		}
		
		return retObj;
	};
	
	// accept an object (map) or string and append to query.
	// if url is not passed as argument, gets the query to append to from the location object.
	// if you just want a new query, pass an empty string as url
	// to prevent unexpected reloads, returns result as string w/out appending to location object.
	// TODO: when string is passed, should check to ensure string is formatted properly.
	util.createQuery = util.createQuery || function createQuery(query, url) {
		
		var initial = '';
		url = (typeof url) === 'string' ? url : unescape(window.location.search);
		initial = /\?/.test(url) ? '&' : '?';
		
		function buildQuery(obj) {
			var queryString = '';
			var key = '';
			for (key in obj) {
				if (obj.hasOwnProperty(key)) {
					queryString += '&' + key + '=' + obj[key];
				}
			}
			queryString = queryString.substr(1);
			return queryString;
		}
		
		if (typeof(query) === 'object') {
			query = buildQuery(query);
		}
		
		if (typeof(query) !== 'string') { // don't try to append something that's not a string.
			return false;
		}
		
		return url + initial + query;
	};
	
	// accepts an object and maps any 
	util.objToArray = util.objToArray || function objToArray(obj) {
		var arr = [];
		var key = '';
		for (key in obj) {
			if (obj.hasOwnProperty(key)) {
				if (/^[0-9]+$/.test(key)) {
					arr[parseInt(key, 10)] = obj[key];
				}
			}
		}
		
		if (arr.length === 0) {
			arr = false;
		}
		
		return arr;
	};
	
	// scriptloader method.
	// attempts to append a script element with src=source and will return false if it fails.
	// defaults to loading in the head, so please pay attention to where in the source it is called.
	// adding a tag to the head from lower in the source will cause it to lazy-load, and the script may not be available immediately.
	// the optional second argument can be set to false which will append the element to the body tag and may avoid the lazy-load
	// keep in mind that during page load, the body element may not exist yet
	util.scriptLoad = util.scriptLoad || function scriptLoad(source, head) {
		
		var script = document.createElement('script');
		
		if (source) {
			script.src = source;
	
			head = (typeof head === 'boolean') ? head : true;
			
			if (head) {
				if (document.documentElement.firstChild.appendChild(script) === script) {
					return true;
				}
			}
			else {
				if (document.body.appendChild(script) === script) {
					return true;
				}
			}
		}
		return false;
	};
	
	
	// cookie reader by Lea Verou: http://lea.verou.me/2009/12/reading-cookies-the-regular-expression-way/
	cookie.get = function getCookie(name) {
		// Escape regexp special characters
		name = name.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');

		var regex = new RegExp('(?:^|;)\\s?' + name + '=(.*?)(?:;|$)','i'),
			match = document.cookie.match(regex);

		return match && unescape(match[1]);
		
	};
	
	cookie.set = function setCookie(cookie) {
		var MILS = 1000 * 60 * 60 * 24; // value to convert days to miliseconds
		var now = Date.now();
		var name = cookie.name ? cookie.name + '=' : false;
		var val = cookie.val ? cookie.val : '';
		var expires = cookie.days ? '; expires=' + new Date((cookie.days * MILS) + now).toUTCString() : cookie.mils? '; expires=' + new Date(cookie.mils + now).toUTCString()  : '';
		var path = cookie.path ? '; path=' + cookie.path : '; path=/';
		var domain = cookie.domain ? '; domain=' + cookie.domain : '';
		var secure = cookie.secure ? '; secure' : '';

		if (name) {
			document.cookie = name + val + expires + path + domain + secure;
		}
	
	};
	
	cookie.del = function delCookie(cookieName) {
		cookie.set({name:cookieName,expires:false});
	};
	
	// Development utilities, in the IX namespace.
	IX.cl = function cl() {
		if (IX.getProjectNamespace().loggable) {
			var args = [].splice.call(arguments, 0);
			console.log(args.join(","));
		}
	};	

}());