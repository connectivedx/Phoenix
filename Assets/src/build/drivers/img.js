/*jshint strict: true, node: true */
/*global console */
'use strict';

var GulpFilter = require('gulp-filter'),
	imagemin = require('gulp-imagemin');

var imageDriver = {
	build: function(pipeline, debug) {
		if(debug) return pipeline; // in debug we do no image processing

		var imageFilter = new GulpFilter(['**/*.jpg', '**/*.png', '**/*.gif', '**/*.svg']);

		return pipeline
			.pipe(imageFilter)
			.pipe(imagemin({ progressive: true, interlaced: true }))
			.pipe(imageFilter.restore());
	}
};

module.exports = imageDriver;