/*global require, module */
'use strict';

var imagemin = require('gulp-imagemin');
var gulpFilter = require('gulp-filter');

var ImageDriver = {
	build: function(pipeline, debug) {
		if(debug) return pipeline; // in debug we do no image processing

		var imageFilter = new gulpFilter(['**/*.jpg', '**/*.png', '**/*.gif', '**/*.svg']);

		return pipeline
			.pipe(imageFilter)
			.pipe(imagemin({ progressive: true, interlaced: true }))
			.pipe(imageFilter.restore())
	}
};

module.exports = ImageDriver;