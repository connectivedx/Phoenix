/*
	
	Fed Template Engine Core Global Javascript Functions
	if IE6 is required for project, use global-ie6.js as starting point.
	Auhthor: ISITE Design

*/

// globals set for jsLint
/*globals $,jQuery,window,setTimeout,document,console */

// jquery no conflict. use $j or jQuery outside of ready function
var $j = jQuery.noConflict();


// jQuery document ready
jQuery(function ($) {

	var cl = IX.cl; // console.log shortcut
	var NS = IX.getProjectNamespace(); // alias to project namespace.
	body = $('body');
	body.on('click',function(e){
		IX.toggleOptions(e);
		IX.optionsResize(e);
	});
	var typeWait;
	$('#template-options')
	.find('select').bind('change',function(e){
		IX.querySettings(e,typeWait);
	}).end()
	.find('input[type=text]').bind('blur',function(e){
		IX.querySettings(e,typeWait);
	}).end()
	.find('input[type=checkbox]').bind('click',function(e){
		IX.querySettings(e,typeWait);
	});
	
	//Setup Namespace Notice (triggers blur, finds great uncle lenged to class and focuses empty namespace field)
	$('[data-key="js-namespace"]').blur()
	.parents('li').eq(1).find('legend').addClass('open')
	.end().end().end().focus();

	
	var resizeWait;
	IX.resizeWindows(resizeWait);
	$(window).bind('resize',function(){
		IX.resizeWindows(resizeWait);
	});
	
});// document ready

// application logic
IX.toggleOptions = function(e){
	var target = jQuery(e.target);
	var isOpen = (target.is(':not(.open)'))?'addClass':'removeClass';
	
	if(target.is('legend')){
		target[isOpen]('open');
	}
}

IX.querySettings = function(e){
	var pallet = jQuery('#constructor-preview')
	.addClass('loading-indication')
	.fadeOut(function(){
		var queryValues = '';
		var form = jQuery('#template-options');
		var fields = form.find('[data-key]');
		var templateType;
		var i = fields.length;
		while(i--){
			var field = jQuery(fields[i]);
			var key = (field.attr('data-key'))?field.attr('data-key'):'';
			var value = (field.val())?field.val():'';
			queryValues += key+'='+value+[(i === 0)?'':'&'];
			if(key == 'template-type'){ templateType = value; }
		}
		var url = pallet.attr('src');
			url = url.replace(/\?(.*)/g,'');
		pallet.attr('src','constructor/htdocs/_resources/html/'+templateType+'?'+queryValues);
		setTimeout(function(){ pallet.removeClass('loading-indication').fadeIn(); },200);	
	});	
};

//Very lightweight way to resize elements
IX.resizeWindows = function(resizeWait){
	if(typeof resizeWait != 'undefined'){
		clearTimeout(resizeWait);
	}
	resizeWait = setTimeout(function(){
		body.css('height',parseInt(jQuery(window).height())+'px');
		IX.optionsResize(resizeWait);
	},175);
};


IX.optionsResize = function(resizeWait){
	if(typeof resizeWait != 'undefined'){
		clearTimeout(resizeWait);
	}
	resizeWait = setTimeout(function(){
		var target = jQuery('#template-options');
		var legendHeight = jQuery('#main > legend').innerHeight()+5;
		
		target.css('height',(jQuery(window).height()-legendHeight)+'px');
	},65);
};
// jQuery plugins

// etc

