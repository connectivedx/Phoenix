/*global require, module, process */
'use strict';
var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

var SpriteDrive = {
	build: function(pipeline, debug) {
		var sprite = pipeline.pipe(
						spritesmith({
							algorithm: 'alt-diagonal',
							cssName: '_sprites.scss',
							cssOpts: {
								functions: false
							},
							imgName: 'compiled-sprite.png',
							imgPath: '#{$imagesFolder}compiled-sprite.png'
						})
					);
		sprite.img.pipe(gulp.dest('img/css'));
		sprite.css.pipe(gulp.dest('css/variables'));
		return pipeline;			
	}
};

module.exports = SpriteDrive;