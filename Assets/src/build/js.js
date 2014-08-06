/*global require, module */
'use strict';

var rimraf = require('rimraf');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
//var yuidoc = require('gulp-yuidoc');
var jshint = require('gulp-jshint');
var bytediff = require('gulp-bytediff');
var filter = require('gulp-filter');

/**
	JS Processor
	By default this processor runs browserify, and if in prod mode uglify over a set of source JS files
**/
var config = {
	/* 
		where to read JS files to build from (can be an array)
		NOTE: you probably do not want every single JS file here, since you
		should be using Browserify to manage your depenedencies. Only
		include discrete files that you need here.
	 */
	jsSourcePath: ['js/main.js', 'js/head.js', 'js/oldie.js'],
	jsWatchGlob: 'js/**', /* JS file pattern to watch for changes when in watch mode */
	jsOutputPath: '../dist/js', /* where to emit the processed files */
	
	/* see http://www.jshint.com/docs/options/ */
	jsHintOptions: {
		asi: true,
		camelcase: true,
		curly: true,
		eqeqeq: true,
		freeze: true,
		immed: true,
		noarg: true,
		unused: true,
		jquery: true
	}
};

function createJsStream(gulp, sourcePath, debug) {
	return gulp.src(sourcePath)
		.pipe(plumber())
		.pipe(browserify({debug: debug}))
}

function createProductionJsStream(gulp, sourcePath, debug) {
	return createJsStream(gulp, config.jsSourcePath, false)
			.pipe(bytediff.start())
			.pipe(uglify())
			.pipe(bytediff.stop());
}

module.exports = function(gulp) {
	gulp.task('js-dev', ['js-clean'], function() {
		createJsStream(gulp, config.jsSourcePath, true)
			.pipe(gulp.dest(config.jsOutputPath));
	});
	
	gulp.task('js-production', ['js-clean'], function() {
		createProductionJsStream(gulp, config.jsSourcePath, false)
			.pipe(gulp.dest(config.jsOutputPath));
	});

	gulp.task('js-analyze', ['js-dev'], function() {
		var excludeFilter = filter('!{*,**/*}{.min,.pack,.lib}.js');

		return gulp.src(config.jsSourcePath)
			.pipe(plumber())
			.pipe(excludeFilter)
			.pipe(jshint(config.jsHintOptions))
			.pipe(jshint.reporter('jshint-stylish'));
	});
	
	gulp.task('js-clean', function(cb) {
		rimraf(config.jsOutputPath, cb);
	});
	
	/* Uncomment (and add to tasks in the gulpfile) if using YUIdoc for JS
		also add 'gulp-yuidoc' to package.json
	
	gulp.task('js-doc', function() {
		gulp.src(config.jsSourcePath)
			.pipe(yuidoc())
			.pipe(gulp.dest('../js-docs'))
	}); */
	
	gulp._watchTasks = gulp._watchTasks || [];
	gulp._watchTasks.push(function(gulp, liveReloadServer) {
		watch({ glob: config.jsWatchGlob, emitOnGlob:false, name: 'JSWatcher' }, function(changedFiles) {
			createJsStream(gulp, config.jsSourcePath, true)
				.pipe(gulp.dest(config.jsOutputPath))
				.pipe(livereload(liveReloadServer));
		});
	});
};