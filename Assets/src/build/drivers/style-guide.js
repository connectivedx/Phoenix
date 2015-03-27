/*global require, module */
'use strict';

var styledown = require('gulp-styledown');

var StyleGuideDriver = {
	build: function(pipeline, debug) {
		return pipeline
			.pipe(styledown({
				config: './css/style-guide.scss',
				filename: '../../documentation/style-guide/index.html'
			}));
	}
};

module.exports = StyleGuideDriver;