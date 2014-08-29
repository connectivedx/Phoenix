/*global require, module */
'use strict';

var plumber = require('gulp-plumber');
var merge = require('merge-stream');
var filter = require('./gulp-filter.mod');
var path = require('path');
var gdebug = require('gulp-debug');

var streamLoader = function(gulp, globalConfiguration) {
	this.gulp = gulp;
	this.globalConfiguration = globalConfiguration;
};

streamLoader.prototype = {
	// augments the streams with stream factories that can later be used to create real result streams
	// (useful so we don't always create every stream, say for watches)
	loadStreams: function(debug) {
		for(var i = 0; i < this.globalConfiguration.tasks.length; i++) {
			var currentTask = this.globalConfiguration.tasks[i];

			this.generateBuildStreamFactory(currentTask, debug);
		}
	},

	// gets one or more tasks' result streams, merged into a superstream
	getTaskStreams: function(tasks) {
		if(!tasks) tasks = this.globalConfiguration.tasks;

		var streams = false;

		for(var i = 0; i < tasks.length; i++) {
			var currentTask = tasks[i];

			if(!streams) streams = currentTask.streamFactory();
			else streams = merge(streams, currentTask.streamFactory());
		}
		
		return streams;
	},

	// augments the task object with the factory method that can be called to get the stream for the task
	generateBuildStreamFactory: function(task, debug) {
		var self = this;
		task.streamFactory = function() {
			var stream;

			if(task.driverInstance && task.driverInstance.createStream)
				stream = task.driverInstance.createStream(task.paths, debug);
			else {
				var base = task.base ? task.base : self.globalConfiguration.base;
					stream = self.gulp.src(task.paths, { base: base });
			}
				
			stream = stream.pipe(plumber());

			if(task.driverInstance && task.driverInstance.build)
				stream = task.driverInstance.build(stream, debug);

			return stream;
		};
	},

	// runs any custom output directives on tasks
	// this function must be run after all build is complete and we have the final merged stream
	// and after all other transforms (e.g. rev) are run on the stream
	executeCustomOutput: function(mergedOutputStream, tasks) {
		if(!tasks) tasks = this.globalConfiguration.tasks;

		for(var i = 0; i < tasks.length; i++) {
			var currentTask = tasks[i];

			if(!currentTask.output) continue;

			var filterInputPaths = currentTask.paths.slice();

			for(var j = 0; j < filterInputPaths.length; j++) {
				var base = currentTask.base ? currentTask.base : this.globalConfiguration.base;
				filterInputPaths[j] = path.relative(base, path.normalize(filterInputPaths[j])); // the paths may have inverted \ and / in them; normalize that, and account for bases
			}

			var currentFilter = filter(filterInputPaths);
			var excludeFilter = filter(filterInputPaths, { invert: true });

			// take the whole stream, filter it to just this task, output the items, restore everything, then set this task's files to be ignored henceforth
			mergedOutputStream = mergedOutputStream.pipe(currentFilter)
				.pipe(this.gulp.dest(currentTask.output))
				.pipe(currentFilter.restore())
				.pipe(excludeFilter);
		}

		return mergedOutputStream;
	}
};

module.exports = streamLoader;