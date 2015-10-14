/*jshint strict: true, node: true */
/*global console */
'use strict';

var fs = require('fs'),
	gulpif = require('gulp-if'),
	nunjucks = require('gulp-nunjucks-html'),
	data = require('gulp-data'),
	path = require('path'),
	dataMatter = require("gulp-data-matter");


var templatesDriver = {
	build: function(pipeline) {
		return pipeline
			.pipe(data(function(file) {
				var jsonCheck = './data/' + path.basename(file.path, '.html') + '.json',
					jsonFile = '../../data/' + path.basename(file.path, '.html') + '.json';

				return fileExistsSync(jsonCheck) ? require(jsonFile) : {};
			}))
			.pipe(dataMatter())
			.pipe(nunjucks({
				searchPaths: ['../nunjucks-templates/**/*.html']
			}));
	}
};

// essentially replicates the now deprecated fs.existsSync()
function fileExistsSync(file) {
	try {
		fs.accessSync(file);
		return true;
	} catch(ex) {
		return false;
	}
}

module.exports = templatesDriver;
