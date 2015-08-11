/*jshint strict: true, node: true */
/*global console */
'use strict';

var gulp = require('gulp'),
	rev = require('gulp-rev-all'),
	rimraf = require('rimraf'),
	StreamLoader = require('./lib/StreamLoader'),
	TaskLoader = require('./lib/TaskLoader'),
	WatchLoader = require('./lib/WatchLoader');


module.exports = function(configuration) {
	// load up autoclean tasks and drivers
	var loader = new TaskLoader(gulp, configuration);
	loader.loadTasks();

	// this is the debug build task
	gulp.task('default', loader.getBuildDependencies(), function() {
		var masterStream,
			sLoader = new StreamLoader(gulp, configuration);

		sLoader.loadStreams(true);

		masterStream = sLoader.getTaskStreams();

		masterStream = sLoader.executeCustomOutput(masterStream);

		return masterStream.pipe(gulp.dest(configuration.output));
	});

	// this is the top level production task (minified, no sourcemaps, rev'd)
	gulp.task('production', loader.getBuildDependencies(), function() {
		var masterStream,
			sLoader = new StreamLoader(gulp, configuration);

		if(configuration.cleanProduction) {
			rimraf.sync(configuration.output);
		}

		sLoader.loadStreams(false);

		masterStream = sLoader.getTaskStreams();

		if (configuration.cacheBusting) {
			// rev stamps all files with a hash for cache-busting
			// ignores php files and contents of /img/content directory.
			masterStream = masterStream.pipe(rev({ ignore: ['.php', /img\/content/] }));
		}

		masterStream = sLoader.executeCustomOutput(masterStream);

		return masterStream.pipe(gulp.dest(configuration.output));
	});

	gulp.task('watch', ['default'], function() {
		var watches = new WatchLoader(configuration);

		watches.startWatching(configuration.tasks);

		console.log('\nPress Ctrl-C to stop watching.');
	});
};