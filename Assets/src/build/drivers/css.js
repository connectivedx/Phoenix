'use strict';

var sass = require('gulp-sass');
var cssmin = require('gulp-minify-css');
var cmq = require('gulp-combine-media-queries');
var gulpif = require('gulp-if');

var CssDriver = {
	build: function(pipeline, debug) {
		return pipeline
			.pipe(sass())
			.pipe(cmq())
			.pipe(gulpif(!debug, cssmin()));
	}
};

module.exports = CssDriver;