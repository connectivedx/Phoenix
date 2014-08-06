# What is Browserify?

Browserify is a dependency management library for JavaScript. Instead of directly including a bunch of JS files and haphazardly managing dependencies between them all - usually including more than you need - in Browserify you simply declare what you need and it will bundle and include it in the main js file for you. Take this example:

	// without Browserify
	<script src="jquery.js"></script>
	<script src="global.js"></script>

	// global.js
	var NS = NS || {};

	NS.MyObject = (function() {
		this.property = "foo";
	})();

	jQuery(function($)) {
		$('#foo').hide();
	});

	// with browserify
	<script src="global.js"></script>

	// global.js
	var $ = require('jquery'); // this 'requires' jQuery - you don't need noconflict because it's a local var now

	$(function() {
		$('#foo').hide();
	});

	// 'exports' (or 'module.exports') is a special variable that exports its value to something else that requires this file.
	// for example, if another file did var foo = require('global');, the foo variable would contain the object set below
	exports = {
		property: "foo";
	}


The second advantage of Browserify is that it brings sane scope management to JS. Instead of having to write a bunch of syntactic hacks such as IIFE and revealing module patterns that just make things hard to read and debug, Browserify simplifies this down to each _file_ defines a variable scope. Take this example:

	// foo.js (without browserify)
	var foo = "hello"; // this is now a global

	// foo.js (with browserify)
	var foo = "hello"; // this is now a private variable within this file only

Finally, Browserify allows us to utilize _npm_ (Node's package manager) to manage dependencies - much like Bower, only even more automatic. All you have to do is add a line to your `package.json` like this: `"jquery": "~1.11.0"`, run `npm install`, and then you can go use `var $ = require('jquery');` anywhere you want.

All of this magic takes place because of the CommonJS pattern - the way that Node.js maintains its code. So a lot of things related to Node also apply to Browserify.

# A Field Guide to Browserify

Now let's talk about implementation. There are a number of bad habits you'll want to abolish entirely with Browserify:

* Using globals (because everything in a Browserify dependency except `exports` is private, it's hard to even create globals)
* Inline JS (because Browserify operates at the Gulp level, you cannot use `require()` in inline scripts)

## Using `require()`

There are two things you can use `require()` on. First, your own files. You can use absolute or relative paths when referring to these, and you omit the '.js' in the filename, for example:

	var specialJQuery = require('lib/jquery.min');
	var myLib = require('./library'); // note the need to have ./ for a same-dir relative path

Second, you can refer to _npm_ modules that you have registered in your `package.json` file alongside the gulpfile. When referring to _npm_ modules, you simply refer to the module name:

	var jquery = require('jquery');
	var underscore = require('underscore');

## Using non-browserify-aware modules

Most JS out there does not expect Browserify, and registers globals. jQuery, for example, by default registers `jQuery` and `$` globals. This can cause problems if you want to use Browserify - and you should - to concatenate all your dependencies into a single file. Fortunately there are some easy polyfills for existing libraries.

### Exposing a single global to Browserify JS

Most libraries, such as jQuery or Modernizr expose a single useful global for their APIs. If you simply `require()` their JS files however, that global becomes a private variable due to the new per-file scope rules. How to fix this? Easy: just `export` the global:

	// jquery.js
	// ...tons of code
	export = jQuery;

	// myFile.js
	var $ = require('./jquery'); // this will be the equivalent of the jQuery global because we exported it - but it's a local variable

### jQuery plugins

jQuery plugins, or other JS files that depend on other libraries' globals, may require you to add simple tweaks to them so their globals are present as locals. This just means `require()`ing their globals at the top of their files:

	// jquery.responsivetabs.js
	var $ = require('jquery'); // if we didn't require this, jquery - no longer being a global - would be undefined
	// ..tons of code


### Needing a real global

Sometimes you may need a real JS global. Examples of this might be legacy code, integrating with less-well-written third party APIs that use inline JS, analytics packages, etc. __Use this as a last resort. Seriously.__ Fortunately, this is also pretty easy - you use the `global` variable instead of `export`:

	// respond.js
	// ...tons of code
	global.respond = respond;

	// foo.html
	<script>
		respond.update(); // if we didn't global this, we'd get 'respond is not defined' here
	</script>

### Browserify-shim

There is also a shim module that can perform some of these operations for you. So far, I've found it simpler to just add a line or two to the library to make it Browserify-aware. But you may think differently and investigate this further if you want.