/*global require, module */
'use strict';

var base64 = require('gulp-base64'),
	cmq = require('gulp-combine-media-queries'),
	cssmin = require('gulp-minify-css'),
	gulpif = require('gulp-if'),
	prefix = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
	sassdoc = require('sassdoc'),
	sourcemaps = require('gulp-sourcemaps');

var CssDriver = {
	build: function(pipeline, debug) {
		return pipeline
			.pipe(gulpif(debug, sourcemaps.init()))
			.pipe(gulpif(debug, sassdoc({
				basePath: 'https://github.com/connectivedx/Phoenix/tree/master/Assets/src',
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
			.pipe(prefix({
				browsers: ['last 2 versions', 'IE >= 9', 'Android >= 4']
			}))
			.pipe(gulpif(debug, sourcemaps.write('./')))
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