// @remotefileload
// fix elements over selects z-index issue
// load script without ajax to avoid ActiveX requirement
function loadScript(src, callback) {
	var script = document.createElement("script");
	if(script.attachEvent) {
		script.attachEvent("onreadystatechange",
		function() { loadScript.callbackIE(callback); });
	}
	script.src = src;
	document.getElementsByTagName("head")[0].appendChild(script);
}
loadScript.callbackIE = function(callback) {
	var target = window.event.srcElement;
	if(target.readyState == "loaded")
	callback.call(target);
};
callback = function() { $("#nav ul, some-selector").bgiframe(); };

loadScript("_resources/js/jquery.bgiframe.min.js", callback);

// remotefileload