'use strict';

var configuration = {
	output: '../dist', // where to write output to
	base: '.', // base path from which globs are considered relative. Usually should be .
	cleanProduction: true, // if true the output directory is rimraf'd before a build when debug = false
	
	tasks: [
		{
			driver: 'js',
			paths: ['./js/*.js'],
			watchPaths: ['js/**'],
			autoClean: true
		},
		{
			driver: 'css',
			paths: ['./css/*.scss'],
			watchPaths: ['css/**'],
			autoClean: true,
			autoCleanPaths: ['./css/*.css']
		},
		{
			// fonts are just a plain ol' copy, so they do not need a driver to process them on their way.
			paths: ['./fonts/**/*.{eot,ttf,woff,svg}'],
			watchPaths: ['fonts/**'],
		},
		{
			driver: 'img',
			paths: ['./img/**/*.{jpg,png,gif,ico}'],
			watchPaths: ['img/**'],
		},
		{
			paths: ['./templates/**/*.{php,html}'],
			base: './templates',
			watchPaths: ['templates/**'],
			output: './../..',
			autoClean: true,
			autoCleanPaths: ['*.php', 'inc']
		}
		/*
			Tasks are a unit of work. At their simplest tasks act as a simple file copy from [paths] to [output] (maintaining relative paths).
			By adding a driver your can intercept the sources the task gets and do things to them before they get to the output.
			The task below illustrates all the options for a task:

		{
			driver: // [optional] this is the name of the driver to use. A driver is a file in /lib/drivers that transforms the task items (eg minification).
			paths: // Required. Array of paths to include in the task. Globbing syntax is allowed. Paths are relative to this folder.
			watchPaths: // [optional] Array of paths to watch when doing file watching. Note that only simple globs (foo/**) should be used or new and renamed files cannot be watched. A change to these files triggers the task being run.
			autoClean: // [optional] true/false. If true, the paths in the output directory will be deleted before we start the build.
			autoCleanPaths: // [optional] Array of path globs. This overrides the autoclean behavior and specifies exactly what to clean before build. These paths are relative to the OUTPUT directory.
			output: // [optional] Overrides the output location for this task only
			base: // [optional] Overrides the base location for this task only
		}*/
	]
}

var gulp = require('gulp'),
	rev = require('gulp-rev-all'),
	rimraf = require('rimraf'),
	debug = require('gulp-debug'),
	watchLoader = require('./build/lib/watchLoader'),
	streamLoader = require('./build/lib/streamLoader');

// load up autoclean tasks and drivers
var taskLoader = require('./build/lib/taskLoader');
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

	masterStream = masterStream.pipe(rev({ ignore: ['.php'] }));

	masterStream = sLoader.executeCustomOutput(masterStream);
	
	return masterStream.pipe(gulp.dest(configuration.output));
});

gulp.task('watch', ['default'], function() {
	var watches = new watchLoader(configuration);

	watches.startWatching(configuration.tasks);

	console.log('\nPress Ctrl-C to stop watching.');
});