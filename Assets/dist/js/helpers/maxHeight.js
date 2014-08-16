// @maxHeight
// 01.8.10
// receives a jQuery object. Returns the height of the tallest element
var maxHeight = function($els) {
	var h = 0;
	$els.each(function(){
		h = h < parseInt($(this).height(), 10) ? parseInt($(this).height(), 10) : h;
	});
	return h;
};

// end @maxHeight