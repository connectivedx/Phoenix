// @document.ready
// Like jQuery's document.ready but without the jQuery.
// no need for this if using jQuery
var ISITE = function () {
	// pretend it's $() and add some action
	console.log("The document is loaded. Manipulate its face off!", document.getElementsByTagName("*"));
};
// end document ready


// keep the rest or else no onload will fire
// the big init()
function init() {
	if (arguments.callee.done) return;
	arguments.callee.done = true;
	if (_timer) clearInterval(_timer);
	ISITE();
}

/* Dean Edwards window.onload */
/* for Mozilla */
if (document.addEventListener) {
	document.addEventListener("DOMContentLoaded", init, false);
}

// for Internet Explorer (using conditional comments)
/*@cc_on @*/
/*@if (@_win32)
document.write("<scr" + "ipt id=__ie_onload defer src=javascript:void(0)><\/script>");
var script = document.getElementById("__ie_onload");
script.onreadystatechange = function() {
	if (this.readyState == "complete") {
		init(); // call the onload handler
	}
};
/*@end @*/

if (/WebKit/i.test(navigator.userAgent)) { // sniff
	var _timer = setInterval(function () {
		if (/loaded|complete/.test(document.readyState)) {
			init(); // call the onload handler
		}
	}, 10);
}

/* for other browsers */
window.onload = init;


/* alt version needs some testing http://www.kryogenix.org/days/2007/09/26/shortloaded

(function(i) {var u =navigator.userAgent;var e=/*@cc_on!@*/

/* remove this comment --------------------

false; var st =
setTimeout;if(/webkit/i.test(u)){st(function(){var dr=document.readyState;
if(dr=="loaded"||dr=="complete"){i()}else{st(arguments.callee,10);}},10);}
else if((/mozilla/i.test(u)&&!/(compati)/.test(u)) || (/opera/i.test(u))){
document.addEventListener("DOMContentLoaded",i,false); } else if(e){     (
function(){var t=document.createElement('doc:rdy');try{t.doScroll('left');
i();t=null;}catch(e){st(arguments.callee,0);}})();}else{window.onload=i;}})(init);
*/

// end document.ready