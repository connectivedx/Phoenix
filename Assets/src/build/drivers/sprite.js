/* global require, module, process */
//algorithm types = top-down | left-right | diagonal | alt-diagonal | binary-tree (default)

'use strict';
var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var wrench = require('wrench');

var SpriteDrive = {
	init: function(globalConfiguration, taskConfiguration){
		var paths = taskConfiguration.paths;
		var i = paths.length;
		while(i--){
			var path = paths[i].split('/')
				path = path.slice(0, path.length - 1).join("/");

			var sprites = gulp.src(paths[i]).pipe(
				spritesmith({
					//algorithm: 'left-right',	
					cssTemplate: './build/lib/sprite.handlebars', //SCSS variables template
					padding: 5, //Spacing between sprite images

					retinaSrcFilter: [path+'/*2x*'],
					retinaImgName: 'main-sprite-2x.png',
					retinaImgPath: '#{$imagesFolder}main-sprite-2x.png',

					imgName: 'main-sprite.png',
					imgPath: '#{$imagesFolder}main-sprite.png',
					cssName: '_sprites.scss'
				})
			);
			sprites.img.pipe(gulp.dest('img/css'));
			sprites.css.pipe(gulp.dest('css/variables'));
		}				
	},
	build: function(pipeline, debug) {
		return pipeline;
	}
};
module.exports = SpriteDrive;