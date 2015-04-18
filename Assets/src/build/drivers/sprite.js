/* global require, module, process */
//algorithm types = top-down | left-right | diagonal | alt-diagonal | binary-tree (default)
'use strict';

var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var wrench = require('wrench');
var fs = require('fs');

var SpriteDrive = {
	init: function(globalConfiguration, taskConfiguration){
		var paths = taskConfiguration.paths;
		var i = paths.length;
		while(i--){
			var path = paths[i].split('/');
			var file_name = path.slice(0, path.length - 1)[path.length -2];
				path = path.slice(0, path.length - 1).join("/");

			var sprites = gulp.src(paths[i]).pipe(
				spritesmith({
					//algorithm: 'left-right',	
					cssTemplate: './build/lib/sprite.handlebars', //SCSS variables template
					padding: 5, //Spacing between sprite images

					retinaSrcFilter: [path+'/*2x*'],
					retinaImgName: (i == 0)?'main-sprite-2x.png':file_name+'-2x.png',
					retinaImgPath: (i == 0)?'#{$imagesFolder}main-sprite-2x.png': '#{$imagesFolder}'+file_name+'-2x.png',

					imgName: (i == 0)?'main-sprite.png': file_name+'.png',
					imgPath: (i == 0)?'#{$imagesFolder}main-sprite.png':'#{$imagesFolder}'+file_name+'.png',
					cssName: (i == 0)?'_main-sprite.scss':'_'+file_name+'.scss' 
				})
			);
			sprites.img.pipe(gulp.dest('img/css'));
			sprites.css.pipe(gulp.dest('css/variables/sprites'));

			if(i == 0){ //end if loop?
				fs.truncate('./css/variables/sprites/_all.scss', 0, function(){ //empty _all.scss
					wrench.readdirRecursive('./css/variables/sprites', function(err, files){ //then fill _all.scss
						if(files == null) { return false; }
						var j = files.length;
						while(j--){
							if(!files[j].match('_all.scss')){
								fs.appendFile('./css/variables/sprites/_all.scss', '@import "'+files[j]+'";\n\r');
							}
						}
					});
				});				
			}
		}		
	},
	build: function(pipeline, debug) {
		return pipeline;
	}
};
module.exports = SpriteDrive;