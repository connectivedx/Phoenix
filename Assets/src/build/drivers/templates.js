/*jshint strict: true, node: true */
/*global console */
'use strict';

var nunjucksRender = require('gulp-nunjucks-render'),
	data = require('gulp-data'),
	path = require('path');


var templatesDriver = {

	// var getData = function(file) {
	// 	var dataPath = path.resolve();
	// 	return JSON.parse(fs.readFileSync(dataPath, 'utf8'))
	// };

	build: function(pipeline, debug) {
		return pipeline
			// .pipe(data(getData))
			.pipe(nunjucksRender());
	}
};

module.exports = templatesDriver;