/*jshint strict: true, node: true */
/*global console */
'use strict';

var browserify = require('browserify'),
	buffer = require('gulp-buffer'),
	glob = require('glob'),
	gulpif = require('gulp-if'),
	gutil = require('gulp-util'),
	merge = require('merge-stream'),
	source = require('vinyl-source-stream'),
	uglify = require('gulp-uglify');

var jsDriver = {
	// browserify creates its own streams, so we need to src for ourselves here
	createStream: function(paths, debug) {
		var browserifyStream,
			files,
			i,
			j,
			streams = false;

		for(i = 0; i < paths.length; i++) {
			files = glob.sync(paths[i]); // unglob all paths from config (browserify does one file at a time)

			for(j = 0; j < files.length; j++) {
				// create the individual browserify stream, and concat the results to any other browserify streams
				browserifyStream = createBrowserifyStream(files[j], debug);
				if(!streams) streams = browserifyStream;
				else streams = merge(streams, browserifyStream);
			}
		}

		return streams; // this is now the concatenated vinyl of all the browserify streams
	},

	build: function(pipeline, debug) {
		return pipeline
			// note lack of browserify here - this is because that's run as part of creating the source stream
			.pipe(gulpif(!debug, buffer())) // uglify can't handle browserify streams, so we have to buffer it first
			.pipe(gulpif(!debug, uglify()));
	}
};

function createBrowserifyStream(path, debug) {
	var bundler = browserify(path, { standalone: 'noscope', debug: debug });

	return bundler.bundle()
		.on('error', function(error) {
			gutil.log('Browserify error: ' + error.message);
			process.exit(1);
		})
		.pipe(source(path));
}

module.exports = jsDriver;