/*jshint strict: true, node: true */
/*global console */
'use strict';

var gulpFilter = require('gulp-filter'),
	imagemin = require('gulp-imagemin');

var ImageDriver = {
	build: function(pipeline, debug) {
		if(debug) return pipeline; // in debug we do no image processing

		var imageFilter = new gulpFilter(['**/*.jpg', '**/*.png', '**/*.gif', '**/*.svg']);

		return pipeline
			.pipe(imageFilter)
			.pipe(imagemin({ progressive: true, interlaced: true }))
			.pipe(imageFilter.restore());
	}
};

module.exports = ImageDriver;