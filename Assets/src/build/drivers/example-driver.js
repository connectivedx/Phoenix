/*jshint strict: true, node: true */
/*global console */
'use strict';

var exampleDriver = {
	// Hook to allow the driver to respond to global configurations and driver-specific customizations
	// optional.
	// param: globalConfiguration (the configuration var in the gulpfile)
	// param: taskConfiguration (the configuration object for this task within the configuration)
	//init: function(globalConfiguration, taskConfiguration) {
	//	console.log('inited example driver', taskConfiguration)
	//},

	// Hook to override default behavior when loading included paths. Generally NOT needed.
	// Use this when you have a plugin that needs to control the source of the stream, such as Browserify.
	// param: paths (the included paths in the config. An array of glob strings)
	// param: debug (whether the build is in debug mode - eg minify, etc)
	// return: a vinyl stream should be returned (e.g. gulp.src())
	//createStream: function(paths, debug) {
		// return gulp.src(paths); - this is what happens if you do not define this function
	//},

	// Perform cleaning actions on previously generated output or temp files before a build
	// Note: if autoClean is passed to the task configuration, the relative input paths in the output folder are
	// automatically cleaned by the framework without the need for this method. If both clean and autoclean are defined, both will be called.
	// optional.
	// param: outputDirectory (the root directory where the build output is heading to)
	// return: the return value will be sent to the gulp stream as if this was a gulp task
	//clean: function(outputDirectory) {
	//	console.log('clean example driver: ' + outputDirectory);
	//},

	// Perform the primary build action of the driver. Not optional.
	// param: pipeline (the gulp stream containing the files for this driver to process)
	// param: debug (if true, this driver should not perform production optimizations such as minifying - use gulp-if if needed)
	// return: return the pipeline after you have appended your pipes to it
	build: function(pipeline, debug) {
		return pipeline;
			// for example:
			//.pipe(browserify({ debug:debug }))
			//.pipe(gulpif(!debug, uglify()))
	}
};

module.exports = exampleDriver;