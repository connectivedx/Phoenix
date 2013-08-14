/*
	
	Project Name Global Javascript Functions
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
	
	// placeholderText plugin should start replacing inputSetter, however, it may still be buggy.  leaving both options for now.
	//$('.input-setter').inputSetter();
	$('.input-setter').placeholderText();

	
});// document ready


// application logic


// jQuery plugins
// Input setter - pulls label sets as default value on related input.  If no label, looks for default value.
jQuery.fn.inputSetter = function(lower) {
	return this.each(function() {
		var $input = jQuery(this),
			$label = jQuery("label[for='"+$input.attr("id")+"']"),
			hideLabel = true,
			labelText, defaultText;
		if (($label.length && !this.value) || (this.value === $label.text())){
			labelText =  $label.text();
		} else {
			hideLabel = false;
			labelText = this.value ? this.value : false;
		}
		if (labelText) {
			defaultText = lower && lower==1 ? labelText.toLowerCase() : labelText;
			if (hideLabel) { $label.hide(); }
			if ($input.is('input')) {
				$input.val(defaultText).addClass('settered');
			}
			else {
				$input.text(defaultText).addClass('settered');
			}
			$input.focus(function() { if (this.value == defaultText) { this.value = ""; } })
				.blur(function() { if (!this.value.length) { this.value = defaultText; } });
		}
	});
};

// Placeholder Text - if HTML5 placeholder attrib is available on input, set it to appropriate lable text.
// if placeholder doesn't work, bind functionality to mimic placeholder functionality.
jQuery.fn.placeholderText = function () {
    var placeholderTest;
	var NS = IX.getProjectNamespace(); // alias to project namespace.
   
    if (typeof Modernizr !== 'undefined' && typeof Modernizr.input !== 'undefined') {
        placeholderTest = Modernizr.input.placeholder;
    }
    else {
        placeholderTest = NS.util.testAttrib('input', 'placeholder');
    }
    
    function focus() {
        var $t = jQuery(this);
        
        if ($t.val() === $t.data('placeholder')) {
            $t.val('');
        }
    }
    
    function blur() {
        var $t = jQuery(this);
        
        if ( !$t.val().match(/\w+/) ) {
            $t.val($t.data('placeholder'));
        }
    }
    
    return this.not('.placeholdered').each(function () {
        var $t = jQuery(this);
        var $l = jQuery('[for=' + this.id + ']'); // associated label
        var placeholderText = $t.attr('placeholder') || $l.text();
        
        $l.hide();
        $t.addClass('placeholdered');
        
        if (placeholderTest) { // browsers that support placeholder attribute
			if (!$t.attr('placeholder')) {
				$t.attr('placeholder', placeholderText);
			}
			return true;
        }
        else { // browsers that do not support placeholder attribute
            $t.val(placeholderText)
            .data('placeholder', placeholderText)
            .focus(focus)
            .blur(blur);
        }
    });
};



// etc

