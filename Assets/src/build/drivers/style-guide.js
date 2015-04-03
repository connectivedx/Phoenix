/*global require, module */
'use strict';

var styledown = require('gulp-styledown');
var gulpif = require('gulp-if');

var StyleGuideDriver = {
	build: function(pipeline, debug) {
		return pipeline
			.pipe(gulpif(debug, styledown({
				config: './css/style-guide.scss',
				filename: '../../documentation/style-guide/index.html'
			})));
	}
};

module.exports = StyleGuideDriver;