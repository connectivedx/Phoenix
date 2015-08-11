/*jshint strict: true, node: true */
/*global console */
'use strict';

// this is gulp-filter@2.0.0 with the 'invert' option added on line 24.

var gutil = require('gulp-util'),
	multimatch = require('multimatch'),
	through = require('through2');

module.exports = function (pattern, options) {
	var restoreStream = through.obj(),
		stream;
	pattern = typeof pattern === 'string' ? [pattern] : pattern;
	options = options || {};

	if (!Array.isArray(pattern) && typeof pattern !== 'function') {
		throw new gutil.PluginError('gulp-filter', '`pattern` should be a string, array, or function');
	}

	stream = through.obj(function (file, enc, cb) {
		var match = typeof pattern === 'function' ? pattern(file) :
					multimatch(file.relative, pattern, options).length > 0;

		if (options.invert ? !match : match) {
			cb(null, file);
			return;
		}

		restoreStream.write(file);
		cb();
	}, function (cb) {
		restoreStream.end();
		cb();
	});

	stream.restore = function (options) {
		options = options || {};

		if (options.end) {
			return restoreStream;
		}

		return restoreStream.pipe(through.obj(), {end: false});
	};

	return stream;
};