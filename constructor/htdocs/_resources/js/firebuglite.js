/*

	12.19.08 - pdf
	
	Include FireBugLite based on url param/cookie
	This file should not be included on a page by using a script tag. Instead:
	
	execute: $.getScript("_resources/js/firebuglite.js");

	Console.logs that execute on page/dom load might trigger before this gets added throwing an error.

	activate: 	domain.com?firebuglite=true
	deactivate: domain.com?firebuglite=false

*/
var addFirebugLite = {
	init: function(){
		if(addFirebugLite.getCookie("firebuglite")) {
			$.getScript("http://getfirebug.com/releases/lite/1.2/firebug-lite-compressed.js",function(){				
				firebug.init();				
				console.log("loaded");			
			});
		}		
	},
	getUrlParam: function(name) {
		name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
		var regexS = "[\\?&]"+name+"=([^&#]*)";
		var regex = new RegExp( regexS );
		var results = regex.exec( window.location.href );
		if (results == null)
			return "";
		else
			return results[1];
	},
	getCookie: function( name ) {
		var start = document.cookie.indexOf( name + "=" );
		var len = start + name.length + 1;
		if ( ( !start ) && ( name != document.cookie.substring( 0, name.length ) ) ) {
			return null;
		}
		if ( start == -1 ) return null;
		var end = document.cookie.indexOf( ";", len );
		if ( end == -1 ) end = document.cookie.length;
		return unescape( document.cookie.substring( len, end ) );
	},				
	setCookie: function( name, value, expires, path, domain, secure ) {
		var today = new Date();
		today.setTime( today.getTime() );
		if ( expires ) {
			expires = expires * 1000 * 60 * 60 * 24;
		}
		var expires_date = new Date( today.getTime() + (expires) );
		document.cookie = name+"="+escape( value ) +
			( ( expires ) ? ";expires="+expires_date.toGMTString() : "" ) + //expires.toGMTString()
			( ( path ) ? ";path=" + path : "" ) +
			( ( domain ) ? ";domain=" + domain : "" ) +
			( ( secure ) ? ";secure" : "" );
	},	
	deleteCookie: function( name, path, domain ) {
		if ( addFirebugLite.getCookie( name ) ) document.cookie = name + "=" +
				( ( path ) ? ";path=" + path : "") +
				( ( domain ) ? ";domain=" + domain : "" ) +
				";expires=Thu, 01-Jan-1970 00:00:01 GMT";
	}
};
if(addFirebugLite.getUrlParam("firebuglite").toLowerCase()=="true") 	{ addFirebugLite.setCookie("firebuglite",true); }
if(addFirebugLite.getUrlParam("firebuglite").toLowerCase()=="false") 	{ addFirebugLite.deleteCookie("firebuglite"); }
addFirebugLite.init();