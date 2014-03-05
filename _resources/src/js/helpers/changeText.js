/**
 * @changeText
 * update text somewhere else.
 *
 * grabs the text from the object and copies it into something else.  used to show a preview, udpate a message/button...
 *
 * used a lot during foodhub prototyping.
 *
 */

jQuery.fn.changeText = function(updatee) {
	return this.each(function() {
		var newText = $(this).text();
		$(updatee).text(newText);
	});
};