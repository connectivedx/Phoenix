/*global require, module, process */
'use strict';
var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

var SpriteDrive = {
	build: function(pipeline, debug) {
		var sprite = pipeline.pipe(
						spritesmith({
							imgName: 'compiled-sprite.png',
							cssName: '_sprites.scss',
							cssOpts: {
								cssSelector: function (item) {
									//@ within file names of sprite images is not allowed
									item.name.replace("@","_"); 
									return '.' + item.name + ':before';
								}
							},
							algorithm: 'alt-diagonal'							
						})
					);

		sprite.img.pipe(gulp.dest('img/css'));
		sprite.css.pipe(gulp.dest('css/variables'));
		return pipeline;			
	}
};

module.exports = SpriteDrive;