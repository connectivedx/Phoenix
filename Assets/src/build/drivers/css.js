'use strict';

var sass = require('gulp-sass');
var cssmin = require('gulp-minify-css');
var cmq = require('gulp-combine-media-queries');
var gulpif = require('gulp-if');

var CssDriver = {
	/* all rules by ID: https://github.com/stubbornella/csslint/wiki/Rules-by-ID */
	cssLintRuleset: {
		"adjoining-classes": false,
		"box-sizing": false,
		"outline-none": false,
		"compatible-vendor-prefixes": false,
		"floats": false,
		"unique-headings": false,
		"important": false
	},

	build: function(pipeline, debug) {
		return pipeline
			.pipe(sass())
			.pipe(cmq())
			.pipe(gulpif(!debug, cssmin()));
	}
};

module.exports = CssDriver;