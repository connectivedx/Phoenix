/*global require, module */
var gulp = require('gulp'),
	rev = require('gulp-rev-all'),
	rimraf = require('rimraf'),
	streamLoader = require('./lib/streamLoader'),
	taskLoader = require('./lib/taskLoader'),
	watchLoader = require('./lib/watchLoader');


module.exports = function(configuration) {
	// load up autoclean tasks and drivers
	var loader = new taskLoader(gulp, configuration);
	loader.loadTasks();

	// this is the debug build task
	gulp.task('default', loader.getBuildDependencies(), function() {
		var masterStream,
			sLoader = new streamLoader(gulp, configuration);

		sLoader.loadStreams(true);

		masterStream = sLoader.getTaskStreams();

		masterStream = sLoader.executeCustomOutput(masterStream);

		return masterStream.pipe(gulp.dest(configuration.output));
	});

	// this is the top level production task (minified, no sourcemaps, rev'd)
	gulp.task('production', loader.getBuildDependencies(), function() {
		var masterStream,
			sLoader = new streamLoader(gulp, configuration);

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
		var watches = new watchLoader(configuration);

		watches.startWatching(configuration.tasks);

		console.log('\nPress Ctrl-C to stop watching.');
	});
};