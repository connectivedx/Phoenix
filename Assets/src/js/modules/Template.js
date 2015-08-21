/*global require, module, $ */
'use strict';

function Template(templateString, options) {

	options = options || {};
	this.settings = $.extend({
		tokenPrefix: '%',
		tokenSuffix: '%',
		regexpModifiers: 'gi'
	}, options);

	this.templateString = templateString;
}

Template.prototype = Object.create({
	buildRegExp: function buildRegExp(token) {
		return new RegExp(this.settings.tokenPrefix + token + this.settings.tokenSuffix, this.settings.regexpModifiers);
	},
	replaceToken: function replaceToken(token, value, template) {
		var pattern = this.buildRegExp(token);

		template = template || this.templateString;
		return template.replace(pattern, value);
	},
	populate: function populate(hash) {
		var populated = this.template;
		var self = this;

		$.each(hash, function(token, value) {
			populated = self.replaceToken(token, value, populated);
		});

		return populated;
	}
		
});

module.exports = {
	createTemplate: function createTemplate(templateString, options) {
		return new Template(templateString, options);
	}
}