/*global require, module */
'use strict';

var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var cssmin = require('gulp-minify-css');
var cmq = require('gulp-combine-media-queries');
var gulpif = require('gulp-if');

var CssDriver = {
	build: function(pipeline, debug) {
		return pipeline
			.pipe(sass())
			.pipe(prefix('last 2 versions', 'IE >= 8', 'Android >= 4'))
			.pipe(cmq())
			.pipe(gulpif(!debug, cssmin()));
	}
};

module.exports = CssDriver;