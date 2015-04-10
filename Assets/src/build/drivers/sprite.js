/*global require, module, process */
//algorithm types = top-down | left-right | diagonal | alt-diagonal | binary-tree (default)

'use strict';
var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

var SpriteDrive = {
	build: function(pipeline, debug) {
		var sprites = pipeline.pipe(
			spritesmith({
				//algorithm: 'binary-tree', 
				cssTemplate: './build/lib/sprite.handlebars', //SCSS variables template
				padding: 5, //Spacing between sprite images
				cssSpritesheetName: 'main-sheet',
				cssName: '_sprites.scss',
				imgName: 'main-sprite.png',
				imgPath: '#{$imagesFolder}main-sprite.png'
			})			
		);
		sprites.img.pipe(gulp.dest('img/css'));
		sprites.css.pipe(gulp.dest('css/variables/tmp'));

		return pipeline;
	}
};
module.exports = SpriteDrive;