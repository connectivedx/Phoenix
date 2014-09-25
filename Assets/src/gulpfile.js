/*global require */
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
			paths: ['./img/**/*.{jpg,png,gif,ico,svg}'],
			watchPaths: ['img/**'],
		}
		/*
			Tasks are a unit of work. At their simplest tasks act as a simple file copy from [paths] to [output] (maintaining relative paths).
			By adding a driver your can intercept the sources the task gets and do things to them before they get to the output.
			The task below illustrates all the options for a task:

		{
			driver: // [optional] this is the name of the driver to use. A driver is a file in /lib/drivers that transforms the task items (eg minification). Without a driver, the task becomes a file watch/copy.
			paths: // Required. Array of paths to include in the task. Globbing syntax is allowed. Paths are relative to this folder.
			base: // [optional] Overrides the base location for this task only (e.g. if path = ./css/foo and base = ./css, and you write to ./lol, the files from /css/foo will go in /lol/foo not /lol/css/foo)
			watchPaths: // [optional] Array of paths to watch when doing file watching. Note that only simple globs (foo/**) should be used or new and renamed files cannot be watched. A change to these files triggers the task being run.
			autoClean: // [optional] true/false. If true, the paths in the output directory will be deleted before we start the build.
			autoCleanPaths: // [optional] Array of path globs. This overrides the autoclean behavior and specifies exactly what to clean before build. These paths are relative to the OUTPUT directory.
			output: // [optional] Overrides the output location for this task only
		}*/
	]
};

require('./build/tasks')(configuration);