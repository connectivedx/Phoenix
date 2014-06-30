/*global require, module */
'use strict';

var rimraf = require('rimraf');
var plumber = require('gulp-plumber');
var newer = require('gulp-newer');
var imagemin = require('gulp-imagemin');
var svgmin = require('gulp-svgmin');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var bytediff = require('gulp-bytediff');

/**
	Image Processor
	By default this processor copies newer source image files to the destination, and if in prod mode runs imagemin on them
**/

var config = {
	imageSourcePath: ['img/**/*.jpg', 'img/**/*.png', 'img/**/*.gif'],
	svgSourcePath: 'img/**/*.svg',
	imageWatchGlob: 'img/**',
	imageOutputPath: '../img'
};

function createImageStream(gulp) {
	return gulp.src(config.imageSourcePath)
		.pipe(plumber())
		.pipe(newer(config.imageOutputPath));
}

module.exports = function(gulp) {
	gulp.task('img-dev', function() {
		createImageStream(gulp)
			.pipe(gulp.dest(config.imageOutputPath));

		gulp.src(config.svgSourcePath)
			.pipe(gulp.dest(config.imageOutputPath));
	});
	
	gulp.task('img-production', ['img-clean'], function() {
		createImageStream(gulp)
			.pipe(imagemin({ progressive: true, interlaced: true }))
			.pipe(gulp.dest(config.imageOutputPath));

		gulp.src(config.svgSourcePath)
			.pipe(bytediff.start())
			.pipe(svgmin())
			.pipe(bytediff.stop())
			.pipe(gulp.dest(config.imageOutputPath));
	});

	gulp.task('img-clean', function(cb) {
		rimraf(config.imageOutputPath, cb);
	});
	
	gulp._watchTasks = gulp._watchTasks || [];
	gulp._watchTasks.push(function(gulp, liveReloadServer) {
		watch({ glob:config.imageWatchGlob, emitOnGlob:false, name: 'ImageWatcher' }, function(changedFiles) {
			changedFiles
				.pipe(plumber())
				.pipe(gulp.dest(config.imageOutputPath))
				.pipe(livereload(liveReloadServer));
		});
	});
};