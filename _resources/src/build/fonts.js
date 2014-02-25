'use strict';

var clean = require('gulp-clean');
var plumber = require('gulp-plumber');
var newer = require('gulp-newer');
var imagemin = require('gulp-imagemin');
var svgmin = require('gulp-svgmin');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var bytediff = require('gulp-bytediff');

/**
	Fonts Processor
	By default this processor copies newer source font files to the destination, and if in prod mode runs svgmin on svg versions of fonts
**/

var config = {
	fontSourcePath: ['fonts/*.eot', 'fonts/*.ttf', 'fonts/*.woff'],
	svgSourcePath: 'fonts/*.svg',
	fontWatchGlob: 'fonts/**',
	fontOutputPath: '../fonts'
};

function createFontStream(gulp) {
	return gulp.src(config.fontSourcePath)
		.pipe(plumber())
		.pipe(newer(config.fontOutputPath));
}

module.exports = function(gulp) {
	gulp.task('fonts-dev', function() {
		createFontStream(gulp)
			.pipe(gulp.dest(config.fontOutputPath));

		gulp.src(config.svgSourcePath)
			.pipe(gulp.dest(config.fontOutputPath));
	});
	
	gulp.task('fonts-production', ['fonts-clean'], function() {
		createFontStream(gulp)
			.pipe(gulp.dest(config.fontOutputPath));

		gulp.src(config.svgSourcePath)
			.pipe(bytediff.start())
			.pipe(svgmin())
			.pipe(bytediff.stop())
			.pipe(gulp.dest(config.fontOutputPath));
	});

	gulp.task('fonts-clean', function() {
		return gulp.src(config.fontOutputPath, {read:false})
			.pipe(clean({force:true}));
	});
	
	gulp._watchTasks = gulp._watchTasks || [];
	gulp._watchTasks.push(function(gulp, liveReloadServer) {
		watch({ glob:config.fontWatchGlob, emitOnGlob:false, name: 'FontWatcher' }, function(changedFiles) {
			changedFiles
				.pipe(plumber())
				.pipe(gulp.dest(config.fontOutputPath))
				.pipe(livereload(liveReloadServer));
		});
	});
};