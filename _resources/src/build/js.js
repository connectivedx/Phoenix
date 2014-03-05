'use strict';

var clean = require('gulp-clean');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
//var yuidoc = require('gulp-yuidoc');
var jshint = require('gulp-jshint');
var bytediff = require('gulp-bytediff');

/**
	JS Processor
	By default this processor runs browserify, jshint, and if in prod mode uglify over a set of source JS files
**/
var config = {
	jsSourcePath: 'js/**/*.js', /* where to read JS files to build from (footer) NOTE: this should be one file most likely */
	jsHeaderSourcePath: 'js/header.js', /* these JS files go in the header */
	jsWatchGlob: 'js/**', /* JS file pattern to watch for changes when in watch mode */
	jsOutputPath: '../js', /* where to emit the processed files */
	
	/* see http://www.jshint.com/docs/options/ */
	jsHintOptions: {
		asi: true
	}
};

function createJsStream(gulp, sourcePath, debug) {
	return gulp.src(sourcePath)
		.pipe(plumber())
		.pipe(browserify({debug: debug}))
		.pipe(jshint(config.jsHintOptions))
		.pipe(jshint.reporter('jshint-stylish'));
}

function createProductionJsStream(gulp, sourcePath, debug) {
	return createJsStream(gulp, config.jsSourcePath, false)
			.pipe(bytediff.start())
			.pipe(uglify())
			.pipe(bytediff.stop())
}

module.exports = function(gulp) {
	gulp.task('js-dev', ['js-clean'], function() {	
		createJsStream(gulp, config.jsSourcePath, true)
			.pipe(gulp.dest(config.jsOutputPath));

		createJsStream(gulp, config.jsHeaderSourcePath, true)
			.pipe(gulp.dest(config.jsOutputPath));
	});
	
	gulp.task('js-production', ['js-clean'], function() {
		createProductionJsStream(gulp, config.jsSourcePath, false)
			.pipe(gulp.dest(config.jsOutputPath));

		createProductionJsStream(gulp, config.jsHeaderSourcePath, false)
			.pipe(gulp.dest(config.jsOutputPath));
	});
	
	gulp.task('js-clean', function() {
		return gulp.src(config.jsOutputPath, {read:false})
			.pipe(clean({force:true}));
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

			createJsStream(gulp, config.jsHeaderSourcePath, true)
				.pipe(gulp.dest(config.jsOutputPath))
				.pipe(livereload(liveReloadServer));
		});
	});
};