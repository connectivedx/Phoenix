/*global require, module */
'use strict';

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var sassdoc = require('sassdoc');
var prefix = require('gulp-autoprefixer');
var base64 = require('gulp-base64');
var cssmin = require('gulp-minify-css');
var cmq = require('gulp-combine-media-queries');
var gulpif = require('gulp-if');

var CssDriver = {
	build: function(pipeline, debug) {
		return pipeline
			.pipe(gulpif(debug, sourcemaps.init()))
			.pipe(gulpif(debug, sassdoc({
				basePath: 'https://github.com/isitedesign/Phoenix/tree/master/Assets/src',
				dest: '../../documentation/sass-api',
				groups: {
					"grid": "Grid System",
					"semantic-grid": "Semantic Grid System",
					"measurements": "Measurements",
					"options": "Options",
					"transitions": "Transitions",
					"typography": "Typography",
					"undefined": "Helper"
				},
				shortcutIcon: "../dist/img/content/favicon.png",
				sort: ["group", "file"],
				theme: "./sassdoc-theme"
			})))
			.pipe(sass())
			.pipe(gulpif(debug, sourcemaps.write('./')))
			.pipe(gulpif(!debug, prefix({
				browsers: ['last 2 versions', 'IE >= 9', 'Android >= 4']
			})))
			.pipe(base64({
				exclude: [/\icomoon/],
				extensions: ['svg']
			}))
			.pipe(gulpif(!debug, cmq()))
			.pipe(gulpif(!debug, cssmin({
				advanced: false
			})));
	}
};

module.exports = CssDriver;