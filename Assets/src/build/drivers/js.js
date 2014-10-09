/*global require, module, process */
'use strict';

var browserify = require('browserify');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var glob = require('glob');
var merge = require('merge-stream');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var buffer = require('gulp-buffer');

var JsDriver = {
	// browserify creates its own streams, so we need to src for ourselves here
	createStream: function(paths, debug) {
		var streams = false;

		for(var i = 0; i < paths.length; i++) {
			var files = glob.sync(paths[i]); // unglob all paths from config (browserify does one file at a time)

			for(var j = 0; j < files.length; j++) {
				// create the individual browserify stream, and concat the results to any other browserify streams
				var browserifyStream = createBrowserifyStream(files[j], debug);
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

module.exports = JsDriver;