/*global require, module */
var gulp = require('gulp'),
	rev = require('gulp-rev-all'),
	rimraf = require('rimraf'),
	debug = require('gulp-debug'),
	watchLoader = require('./lib/watchLoader'),
	streamLoader = require('./lib/streamLoader'),
	taskLoader = require('./lib/taskLoader');


module.exports = function(configuration) {
	// load up autoclean tasks and drivers
	var loader = new taskLoader(gulp, configuration);
	loader.loadTasks();

	// this is the debug build task
	gulp.task('default', loader.getBuildDependencies(), function() {
		var sLoader = new streamLoader(gulp, configuration);

		sLoader.loadStreams(true);

		var masterStream = sLoader.getTaskStreams();

		masterStream = sLoader.executeCustomOutput(masterStream);

		return masterStream.pipe(gulp.dest(configuration.output));
	});

	// this is the top level production task (minified, no sourcemaps, rev'd)
	gulp.task('production', loader.getBuildDependencies(), function() {
		if(configuration.cleanProduction) {
			rimraf.sync(configuration.output);
		}
		
		var sLoader = new streamLoader(gulp, configuration);

		sLoader.loadStreams(false);

		var masterStream = sLoader.getTaskStreams();

		// rev stamps all files with a hash for cache-busting
		masterStream = masterStream.pipe(rev({ ignore: ['.php'] }));

		masterStream = sLoader.executeCustomOutput(masterStream);
		
		return masterStream.pipe(gulp.dest(configuration.output));
	});

	gulp.task('watch', ['default'], function() {
		var watches = new watchLoader(configuration);

		watches.startWatching(configuration.tasks);

		console.log('\nPress Ctrl-C to stop watching.');
	});
};