/*global require, module */
'use strict';

var sass = require('gulp-sass');
var sassdoc = require('sassdoc');
var sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');
var cssmin = require('gulp-minify-css');
var cmq = require('gulp-combine-media-queries');
var gulpif = require('gulp-if');

var CssDriver = {
	build: function(pipeline, debug) {
		return pipeline
			.pipe(gulpif(debug, sourcemaps.init()))
			.pipe(sassdoc({
				dest: '../../documentation/api'
			}))
			.pipe(sass())
			.pipe(gulpif(debug, sourcemaps.write('./')))
			.pipe(gulpif(!debug, prefix({
				browsers: ['last 2 versions', 'IE >= 8', 'Android >= 4']
			})))
			.pipe(gulpif(!debug, cmq()))
			.pipe(gulpif(!debug, cssmin({
				advanced: false
			})));
	}
};

module.exports = CssDriver;