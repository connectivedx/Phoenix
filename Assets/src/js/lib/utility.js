function breakpoint(breakpointName) {
	var breakpoints = {
		"breakpoint320": 320,
		"breakpoint480": 480,
		"breakpoint768": 768,
		"breakpoint960": 960,
		"breakpoint1220": 1220
	};

	// use the Modernizr function if available; it's more accurate
	if (mediaQuerySupport()) {
		return Modernizr.mq('(min-width: ' + breakpoints[breakpointName] + 'px)');
	}
	else {
		// According to http://quirksmode.org/mobile/tableViewport.html
		// documentElement.clientWidth/Height gets us the most reliable info
		return document.documentElement.clientWidth > breakpoints[breakpointName];
	}
}

function mediaQuerySupport() {
	return Modernizr.mq('only all');
}

exports.breakpoint = breakpoint;