/*global require, module */
'use strict';

var sassdoc = require('sassdoc');
var gulpif = require('gulp-if');

var CssApiDriver = {
	build: function(pipeline, debug) {
		return pipeline
			.pipe(gulpif(debug, sassdoc({
				basePath: 'https://github.com/isitedesign/Phoenix/tree/master/Assets/src',
				dest: '../../documentation/css-api',
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
			})));
	}
};

module.exports = CssApiDriver;