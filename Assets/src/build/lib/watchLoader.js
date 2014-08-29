/*global require, module, console, process */
'use strict';

var gulp = require('gulp');
var livereload = require('gulp-livereload');
var path = require('path');

var watchLoader = function(globalConfiguration) {
	this.configuration = globalConfiguration;
};

watchLoader.prototype = {
	startWatching: function(tasks) {
		for(var i = 0; i < tasks.length; i++) {
			var currentTask = tasks[i];
			
			this.setWatch(currentTask);
		}

		livereload.listen();
	},

	setWatch : function(task) {
		var self = this;
		var paths;

		if(task.watchPaths) paths = task.watchPaths;
		else if(task.paths) paths = task.paths;

		if(typeof paths === 'undefined') return;

		gulp.watch(paths, function(event) {
			console.log('WATCH > ' + path.relative(process.cwd(), event.path) + ' ' + event.type);

			if(typeof task.streamFactory !== 'function') return;

			var output = task.output ? task.output : self.configuration.output;
			task.streamFactory()
				.pipe(gulp.dest(output))
				.pipe(livereload({ auto: false }));
		});

		console.log('Registered watcher for ', paths);
	}
};

module.exports = watchLoader;