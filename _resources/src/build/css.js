/*global require, module */
'use strict';

var clean = require('gulp-clean');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var cssmin = require('gulp-minify-css');
var csslint = require('gulp-csslint');
var cmq = require('gulp-combine-media-queries');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var bytediff = require('gulp-bytediff');

/**
	CSS Processor
	By default this processor runs sass, csslint, and if in prod mode cssmin over a set of source SCSS files
**/

var config = {
	scssSourcePath: 'scss/*.scss',
	scssWatchGlob: 'scss/**',
	cssOutputPath: '../css',
	
	/* all rules by ID: https://github.com/stubbornella/csslint/wiki/Rules-by-ID */
	cssLintRuleset: {
		"adjoining-classes": false
	}
};

function createSassStream(gulp) {
	return gulp.src(config.scssSourcePath)
		.pipe(plumber())
		.pipe(sass())
		.pipe(cmq())
		.pipe(csslint(config.cssLintRuleset))
		.pipe(csslint.reporter());
}

function emitCssStream(stream, gulp) {
	return stream.pipe(gulp.dest(config.cssOutputPath));
}

module.exports = function(gulp) {
	gulp.task('css-dev', ['css-clean'], function() {
		var sassStream = createSassStream(gulp);
	
		emitCssStream(sassStream, gulp);
	});
	
	gulp.task('css-production', ['css-clean'], function() {
		var sassStream = createSassStream(gulp)
			.pipe(bytediff.start())
			.pipe(cssmin())
			.pipe(bytediff.stop());
		
		emitCssStream(sassStream, gulp);
	});
	
	gulp.task('css-clean', function() {
		return gulp.src(config.cssOutputPath, {read:false})
			.pipe(clean({force:true}));
	});
	
	gulp._watchTasks = gulp._watchTasks || [];
	gulp._watchTasks.push(function(gulp, liveReloadServer) {
		watch({ glob:config.scssWatchGlob, emitOnGlob:false, name: 'ScssWatcher' }, function(changedFiles) {
			var watchStream = createSassStream(gulp);
				
			emitCssStream(watchStream, gulp)
				.pipe(livereload(liveReloadServer));
		});
	});
};