/*jshint strict: true, node: true */
/*global console */
'use strict';

var filter = require('./gulp-filter.mod'),
	merge = require('merge-stream'),
	path = require('path'),
	plumber = require('gulp-plumber');

var StreamLoader = function(gulp, globalConfiguration) {
	this.gulp = gulp;
	this.globalConfiguration = globalConfiguration;
};

StreamLoader.prototype = {
	// augments the streams with stream factories that can later be used to create real result streams
	// (useful so we don't always create every stream, say for watches)
	loadStreams: function(debug) {
		var currentTask,
			i;
		for(i = 0; i < this.globalConfiguration.tasks.length; i++) {
			currentTask = this.globalConfiguration.tasks[i];

			this.generateBuildStreamFactory(currentTask, debug);
		}
	},

	// gets one or more tasks' result streams, merged into a superstream
	getTaskStreams: function(tasks) {
		var currentTask,
			i,
			streams = false;

		if(!tasks) tasks = this.globalConfiguration.tasks;

		for(i = 0; i < tasks.length; i++) {
			currentTask = tasks[i];

			if(!streams) streams = currentTask.streamFactory();
			else streams = merge(streams, currentTask.streamFactory());
		}

		return streams;
	},

	// augments the task object with the factory method that can be called to get the stream for the task
	generateBuildStreamFactory: function(task, debug) {
		var self = this;
		task.streamFactory = function() {
			var base,
				stream;

			if(task.driverInstance && task.driverInstance.createStream)
				stream = task.driverInstance.createStream(task.paths, debug);
			else {
				base = task.base ? task.base : self.globalConfiguration.base;
				stream = self.gulp.src(task.paths, { base: base });
			}

			if(!stream) throw "Stream from driver '" + task.driver + "' was falsy! This may mean the files or directories do not exist, or other error condition.";

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
		var base,
			currentFilter,
			currentTask,
			excludeFilter,
			filterInputPaths,
			i,
			j;

		if(!tasks) tasks = this.globalConfiguration.tasks;

		for(i = 0; i < tasks.length; i++) {
			currentTask = tasks[i];

			if(!currentTask.output) continue;

			filterInputPaths = currentTask.paths.slice();

			for(j = 0; j < filterInputPaths.length; j++) {
				base = currentTask.base ? currentTask.base : this.globalConfiguration.base;
				filterInputPaths[j] = path.relative(base, path.normalize(filterInputPaths[j])); // the paths may have inverted \ and / in them; normalize that, and account for bases
			}

			currentFilter = filter(filterInputPaths);
			excludeFilter = filter(filterInputPaths, { invert: true });

			// take the whole stream, filter it to just this task, output the items, restore everything, then set this task's files to be ignored henceforth
			mergedOutputStream = mergedOutputStream.pipe(currentFilter)
				.pipe(this.gulp.dest(currentTask.output))
				.pipe(currentFilter.restore())
				.pipe(excludeFilter);
		}

		return mergedOutputStream;
	}
};

module.exports = StreamLoader;