//For compile purposes only//
var script = document.getElementsByTagName('script')[0].getAttribute('src');
	script = script.replace(/(.*).js\?/g,'');
	
var params = script.split('&');
var i = params.length;
var queries = [];
while(i--){
	var param = params[i].split('=');
	queries[param[0]] = param[1].replace('<br />','');
}
//End for compile purposes//


/**
 * Global Namespace definitions for PROJECT_NAME
 * 
 * Instructions for using this file:
 * - Place file at bottom of <head>. Make sure it comes after modernizr.js.
 * - Set project namespace by setting IX.project
 * - Remove namespace reminder function (clearly marked below)
 * - Declare any other namespaces needed for project 
 *
 */
 // default utilities
 var IX = IX || {};
 IX.project = (queries.namespace != '')?queries.namespace:''; // this should be set to the project abbreviation in Jira

 /*******************************************
 * BEGIN NAMESPACE REMINDER FUNCTION
 * Remove this function only after setting IX.project!
 ********************************************/
 (function(){
	var h1 = "Before beginning cuts on a new project, please set the global Namespace.";
	var content1 = "Set the <code>IX.project</code> variable (<em>namespace.js, line 10</em>) to match the project abbreviation. This will establish the Namespace.";
	var content2 = "Remove the Namespace reminder function (<em>namespace.js, lines 16-52</em>).";
	var content3 = "You can close this window by clicking on the background overlay.";
	
	if (IX.project === '') {
		IX.project = 'DEV';
		window.onload = function () {
			var body = document.getElementsByTagName('body')[0];
			var overlay = document.createElement('div');
			var message = document.createElement('div');
			var styles = document.createElement('style');
			
			styles.innerHTML = "#FED-setup-message{background:white;box-shadow: 0 0 40px #000;margin:-250px 0 0 -250px;padding:25px;position:fixed;height:450px;width:450px;top:50%;left:50%;z-index:2000;}#FED-setup-message h1{color:#af0000;font-size:18px;margin:0 0 1em;}#FED-setup-message ol{margin:0 0 1em 1.5em;}#FED-setup-overlay{cursor:pointer;position:fixed;top:0;left:0;height:100%;width:100%;background:rgba(0,0,0,.75);z-index:1000;}";
			
			message.id = "FED-setup-message";
			overlay.id = "FED-setup-overlay";
			
			message.innerHTML = '<h1>%h1%</h1><ol><li>%content1%</li><li>%content2%</li></ol><p>%content3%</p>'.replace(/%h1%/,h1).replace(/%content1%/, content1).replace(/%content2%/, content2).replace(/%content3%/, content3);
			overlay.onclick = function(){
				body.removeChild(message);
				body.removeChild(overlay);
				body.removeChild(styles);
			};
			
			body.appendChild(styles);
			body.appendChild(overlay);
			body.appendChild(message);
		};
	}
 }());
 /*******************************************
 * END NAMESPACE REMINDER FUNCTION
 *******************************************/

 // project specific functions
 window[IX.project] = window[IX.project] || {};
 // if desired, create further namespaces for specific types of functionality, e.g., NAV, MODAL, AJAX, etc.

/**
 * Namespace js active state for document CSS.  Class js is added to HTML by Modernizer.  If we don't see Modernizer running, append the class.
 */

if ( (typeof Modernizr).toLowerCase() === 'undefined' ) {
	(function(){
		var html = document.getElementsByTagName('HTML')[0];
		html.className = html.className === '' ? 'js' : html.className + ' js';
	}());
}

/**
 * Namespace utility.  Safely add a member to a namespace.
 * Function taken from Mark A. Ziesemer: http://blogger.ziesemer.com/2008/05/javascript-namespace-function.html
 *
 * Usage:
 * var foo = UTIL.namespace("PRJ.child.method");
 *
 * UTIL.namespace("PRJ.child").method = function(){};
 *
 * function doStuff(){
 *     var ns = Array.prototype.slice.call(arguments);
 *     UTIL.namespace(arguments.join('!'), '!', FOO);
 * };
 *
 */

IX.namespace = function namespace(name, container, separator) {
	var ns = name.split(separator || '.'),
	o = container || window,
	i = ns.length;
	
	if (/[a-z]/.test(ns[0]) && o === window) {
		o = window[IX.project];
	}
	
	while (i--){
		o = o[ns[i]] = o[ns[i]] || {};
	}
	return o;
};

/**
 * Return the project namespace object so that it can be referenced in a a closure.
 * Falls back to the IX object if no project namespace available.
 *
 */
IX.getProjectNamespace = function getNamespace() {
	return window[IX.project] || IX;
};

/**
 * Inherit utility. Pass a copy of a "parent" object's prototype to a "child"
 * This one taken from Javascript Patterns by Stoyan Stefanov
 * Mimics classical inheritance
 * Specifically expects constructors
 *
 */

IX.inherit = (function () {
	var F = function () {};
	return function inherit(Parent, Child) {
		F.prototype = Parent.prototype;
		Child.prototype = new F();
		Child.uber = Parent.prototype;
		Child.prototype.constructor = Child;
	};
}());
