/*jshint strict: true, node: true */
/*global console */
'use strict';
var jade = require('gulp-jade');
var config;

var htmlDriver = {
	init: function(globalConfiguration, taskConfiguration){
		config = taskConfiguration.config;
	},
	build: function(pipeline, debug) {
		return pipeline.pipe(jade(config));
	}
};

module.exports = htmlDriver;