'use strict';

var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');

/**
	PHP Processor
	By default this processor will watch all PHP files in the project and reload the browser when a change occurs.
**/

var config = {
	phpWatchGlob: '../../**/*.php'
};

module.exports = function(gulp) {
	gulp._watchTasks = gulp._watchTasks || [];
	gulp._watchTasks.push(function(gulp, liveReloadServer) {
		watch({ glob:config.phpWatchGlob, emitOnGlob:false, name: 'PHPWatcher' }, function(changedFiles) {
			changedFiles
				.pipe(plumber())
				.pipe(livereload(liveReloadServer));
		});
	});
};