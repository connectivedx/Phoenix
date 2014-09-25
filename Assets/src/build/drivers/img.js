/*global require, module */
'use strict';

var imagemin = require('gulp-imagemin');
var svgmin = require('gulp-svgmin');
var gulpFilter = require('gulp-filter');

var ImageDriver = {
	build: function(pipeline, debug) {
		if(debug) return pipeline; // in debug we do no image processing

		var imageFilter = new gulpFilter(['**/*.jpg', '**/*.png', '**/*.gif']);
		var svgFilter = new gulpFilter('**/*.svg');

		return pipeline
			.pipe(imageFilter)
			.pipe(imagemin({ progressive: true, interlaced: true }))
			.pipe(imageFilter.restore())
			.pipe(svgFilter)
			.pipe(svgmin())
			.pipe(svgFilter.restore());
	}
};

module.exports = ImageDriver;