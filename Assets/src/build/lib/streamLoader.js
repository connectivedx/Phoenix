'use strict';

var plumber = require('gulp-plumber');
var merge = require('merge-stream');

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

	generateBuildStreamFactory: function(task, debug) {
		var self = this;
		task.streamFactory = function() {
			var stream;

			if(task.driverInstance && task.driverInstance.createStream)
				stream = task.driverInstance.createStream(task.paths, debug);
			else
			 	stream = self.gulp.src(task.paths, { base: self.globalConfiguration.base });
				
			stream = stream.pipe(plumber());

			if(task.driverInstance && task.driverInstance.build)
				stream = task.driverInstance.build(stream, debug);

			return stream;
		}
	}
};

module.exports = streamLoader;