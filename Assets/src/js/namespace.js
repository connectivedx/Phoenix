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
 IX.project = 'FED'; // this should be set to the project abbreviation in Jira
  
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

global.IX = IX;