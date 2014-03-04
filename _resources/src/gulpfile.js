'use strict';

var gulp = require('gulp');
var TinyLR = require('tiny-lr');

// load task plugins (which contain groups of tasks and watch mixins within a CJS module)
require('./build/css')(gulp);
require('./build/js')(gulp);
require('./build/img')(gulp);
require('./build/fonts')(gulp);

// this is the top level default (dev) task
gulp.task('default', ['css-dev', 'js-dev', 'img-dev', 'fonts-dev'], function(){});

// this is the top level production task
gulp.task('production', ['css-production', 'js-production', 'img-production', 'fonts-production'], function() {});

// this is the top level watch task, which gets watcher delegates augmented onto it by task plugins
gulp.task('watch', ['default'], function() {
	var liveReloadServer = new TinyLR();
	liveReloadServer.listen(35729);

	if(gulp._watchTasks) {
		gulp._watchTasks.forEach(function(entry) {
			entry(gulp, liveReloadServer);
		});
	}
});

