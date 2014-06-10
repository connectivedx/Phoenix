/*global require, module */
'use strict';

var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');

/**
	Markup Processor
	By default this processor will watch all files containing markup in the project (defaulting to PHP and HTML) and reload the browser when a change occurs.
	The file types to be watched can be added to the fileTypes array.
**/

var fileTypes = ['php', 'html'],
	config = {
		markupWatchGlob: []
	};

for (var i = 0; i < fileTypes.length; i++) {
	config.markupWatchGlob.push('../../**/*.' + fileTypes[i]);
}

module.exports = function(gulp) {
	gulp._watchTasks = gulp._watchTasks || [];
	gulp._watchTasks.push(function(gulp, liveReloadServer) {
		watch({ glob:config.markupWatchGlob, emitOnGlob:false, name: 'MarkupWatcher' }, function(changedFiles) {
			changedFiles
				.pipe(plumber())
				.pipe(livereload(liveReloadServer));
		});
	});
};