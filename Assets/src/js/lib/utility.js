function breakpoint(breakpointName) {
	var breakpoints = {
		"extraSmall": 320,
		"small": 480,
		"medium": 768,
		"large": 960,
		"extraLarge": 1220
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