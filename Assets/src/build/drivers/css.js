/*global require, module */
'use strict';

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');
var cssmin = require('gulp-minify-css');
var cmq = require('gulp-combine-media-queries');
var gulpif = require('gulp-if');

var CssDriver = {
	build: function(pipeline, debug) {
		return pipeline
			.pipe(gulpif(debug, sourcemaps.init()))
			.pipe(sass())
			.pipe(gulpif(debug, sourcemaps.write('./')))
			.pipe(gulpif(!debug, prefix('last 2 versions', 'IE >= 8', 'Android >= 4')))
			.pipe(gulpif(!debug, cmq()))
			.pipe(gulpif(!debug, cssmin({
				noAdvanced: true
			})));
	}
};

module.exports = CssDriver;