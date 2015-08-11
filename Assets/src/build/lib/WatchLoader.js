/*jshint strict: true, node: true */
/*global console */
'use strict';

var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	path = require('path');

var WatchLoader = function(globalConfiguration) {
	this.configuration = globalConfiguration;
};

WatchLoader.prototype = {
	startWatching: function(tasks) {
		var currentTask,
			i;

		for(i = 0; i < tasks.length; i++) {
			currentTask = tasks[i];

			this.setWatch(currentTask);
		}

		livereload.listen();
	},

	setWatch : function(task) {
		var paths,
			self = this;

		if(task.watchPaths) paths = task.watchPaths;
		else if(task.paths) paths = task.paths;

		if(typeof paths === 'undefined') return;

		gulp.watch(paths, function(event) {
			var output = task.output ? task.output : self.configuration.output;
			
			console.log('WATCH > ' + path.relative(process.cwd(), event.path) + ' ' + event.type);

			if(typeof task.streamFactory !== 'function') return;

			task.streamFactory()
				.pipe(gulp.dest(output))
				.pipe(livereload({ auto: false }));
		});

		console.log('Registered watcher for ', paths);
	}
};

module.exports = WatchLoader;