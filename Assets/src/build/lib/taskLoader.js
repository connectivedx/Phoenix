/*global require, module, console */
'use strict';

var path = require('path');
var del = require('del');

// initializes and loads registered tasks
// including:
// * driver resolution
// * registration of clean and autoclean tasks with Gulp
// * calculating build dependencies

var taskLoader = function(gulp, globalConfiguration) {
	this.gulp = gulp;
	this.globalConfiguration = globalConfiguration;
};

taskLoader.prototype = {
	loadTasks: function() {
		this.loadDrivers(this.globalConfiguration);

		for(var i = 0; i < this.globalConfiguration.tasks.length; i++) {
			var currentTask = this.globalConfiguration.tasks[i];

			var hasClean = this.registerCleanTask(currentTask, this.globalConfiguration);

			var hasAutoClean = this.registerAutoCleanTask(currentTask, this.globalConfiguration, hasClean);

			currentTask.buildDependencies = hasAutoClean ? [currentTask.driver + '-autoclean'] : (hasClean ? [currentTask.driver + '-clean'] : []);
		}
	},

	getBuildDependencies: function(tasks) {
		if(!tasks) tasks = this.globalConfiguration.tasks;

		var deps = [];

		for(var i = 0; i < tasks.length; i++) {
			if(!tasks[i].buildDependencies) continue;

			for(var j = 0; j < tasks[i].buildDependencies.length; j++) {
				deps.push(tasks[i].buildDependencies[j]);
			}
		}

		return deps;
	},

	loadDrivers: function(globalConfiguration) {
		var tasksConfiguration = globalConfiguration.tasks;

		for(var i = 0; i < tasksConfiguration.length; i++) {
			var currentTask = tasksConfiguration[i];

			// load the driver instance (class)
			currentTask.driverInstance = this.getDriver(currentTask);

			// init the driver if it needs it
			if(currentTask.driverInstance && currentTask.driverInstance.init) currentTask.driverInstance.init(globalConfiguration, currentTask);

			// if a task has no driver (copy only task), we assign it an arbitrary name for its gulp tasks
			if(!currentTask.driver) currentTask.driver = 'task' + i;
		}
	},

	getDriver: function(taskConfiguration) {
		if(taskConfiguration.driver) {
			return require('../drivers/' + taskConfiguration.driver);
		}

		return undefined;
	},

	registerCleanTask: function(task, globalConfiguration) {
		if(task.driverInstance && task.driverInstance.clean) {
			this.gulp.task(task.driver + '-clean', function() {
				return task.driverInstance.clean(globalConfiguration.output);
			});
			return true;
		}
	},

	registerAutoCleanTask : function(task, globalConfiguration, hasClean) {
		if(!task.autoClean) return false;

		var self = this;
		var dependencies = hasClean ? [task.driver + '-clean'] : [];

		this.gulp.task(task.driver + '-autoclean', dependencies, function(cb) {
			var outputPath = globalConfiguration.output;
			var inputPaths = task.autoCleanPaths;

			if(task.output) outputPath = task.output;
			if(!inputPaths) inputPaths = task.paths;

			if(!outputPath || !inputPaths) return;

			if(task.base && !task.autoCleanPaths) {
				console.log('I will not autoclean a task with a custom base to avoid damage. Manually specify the autoclean paths.');
				cb();
				return;
			}

			inputPaths = inputPaths.slice(); // make a copy for ourselves

			for(var i = 0; i < inputPaths.length; i++) {
				inputPaths[i] = path.join(outputPath, inputPaths[i]);
			}

			console.log('Autocleaning: ', inputPaths);

			del(inputPaths, { force:true }, cb);
		});

		return true;
	}
};

module.exports = taskLoader;