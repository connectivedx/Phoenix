/*

	@minHeight
	03.10.09 - pdf
	
	Extend $.support to test for minHeight
	
	Seems to be working. Be sure to test in the required browsers just to be sure.
	
	returns boolean
	
	Usage:
	$.support.minHeight();
	
	Note that is slightly different than the other $.support objects which do not require the ().

*/

jQuery.extend(jQuery.support, {
	minHeight : function() {
		var id = "minheightsupport" + (new Date()).getTime();
		$("<div></div>").attr("id",id).css({height:"1px",minHeight:"2px",overflow:"hidden",border:"none",padding:"0",margin:"0"}).appendTo("body");
		var correctheight = document.getElementById(id).offsetHeight==2;
		$("#"+id).remove();
		return correctheight;
	}
});

//. end support.minHeight