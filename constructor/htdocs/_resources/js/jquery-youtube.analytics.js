/*
	YouTube Analytics
	Code adapted from:
		http://www.lunametrics.com/blog/2012/10/22/automatically-track-youtube-videos-events-google-analytics/
		http://lunametrics.wpengine.netdna-cdn.com/js/lunametrics-youtube.js
	Code adapted by Alex Mueller for ISITE Design http://isitedesign.com
*/

// enable cross-domain scripting in IE < 10 for the YouTube Data API
// https://github.com/jaubourg/ajaxHooks/blob/master/src/xdr.js
if(window.XDomainRequest){jQuery.ajaxTransport(function(e){if(e.crossDomain&&e.async){if(e.timeout){e.xdrTimeout=e.timeout;delete e.timeout}var t;return{send:function(n,r){function i(e,n,i,s){t.onload=t.onerror=t.ontimeout=jQuery.noop;t=undefined;r(e,n,i,s)}t=new XDomainRequest;t.onload=function(){i(200,"OK",{text:t.responseText},"Content-Type: "+t.contentType)};t.onerror=function(){i(404,"Not Found")};t.onprogress=jQuery.noop;t.ontimeout=function(){i(0,"timeout")};t.timeout=e.xdrTimeout||Number.MAX_VALUE;t.open(e.type,e.url);t.send(e.hasContent&&e.data||null)},abort:function(){if(t){t.onerror=jQuery.noop;t.abort()}}}}})}

// load the YouTube iframe API
var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// initialize our arrays to hold video and player information
var playerArray = [],
	videoArray = [];

// safely pass the jQuery object as $
(function($) {
	// enables tracking of all YouTube videos on the page
	function trackYouTube() {
		// iterate through every iframe on the page
		$('iframe').each(function(i) {
			// grab the video source and other properties
			var baseUrlLength,
				$iframe = $(this),
				iframeSrc = $iframe.attr('src'),
				isYouTubeVideo = false,
				videoID,
				url;

			// if the video uses the http protocol
			if (iframeSrc.substr(0,29) == "http://www.youtube.com/embed/") {
				baseUrlLength = 29;
				isYouTubeVideo = true;
			}
			// otherwise if the video uses the https protocol
			else if (iframeSrc.substr(0,30) == "https://www.youtube.com/embed/") {
				baseUrlLength = 30;
				isYouTubeVideo = true;
			}

			// if we're dealing with a YouTube video, store its information in our arrays
			if (isYouTubeVideo) {
				// grab the videoID
				videoID = iframeSrc.substr(baseUrlLength);
				url = '//gdata.youtube.com/feeds/api/videos/' + videoID + '?v=2&alt=json';

				// if the ID ends with extra characters...
				if (videoID.indexOf('?') > -1) {
					// ...remove the extra characters
					videoID = videoID.substr(0, videoID.indexOf('?'));
				}

				// put an object in our array with the videoID...
				videoArray[i] = {};
				videoArray[i].id = videoID;

				// ...and the video title (pulled from the YouTube data API)
				$.ajax({
					dataType: 'JSON',
					type: 'GET',
					url: url
				})
				.done(function(data) {
					videoArray[i].title = data.entry.title.$t;
				});

				// put the videoID on the iframe as its id
				$iframe.attr('id', videoID);
			}
		});
	}

	$(function() {
		// initiate tracking on document ready
		trackYouTube();
	});
})(jQuery);

// when the YouTube iframe API has loaded
function onYouTubeIframeAPIReady() {
	// insert YouTube Player objects into our playerArray
	for (var i = 0; i < videoArray.length; i++) {
		playerArray[i] = new YT.Player(videoArray[i].id, {
			events: {
				'onStateChange': onPlayerStateChange
			}
		});
	}
}

// when the player changes states
function onPlayerStateChange(event) {
	var videoIndex = event.target.id - 1;

	// if the video begins playing, send the event
	if (event.data == YT.PlayerState.PLAYING) {
		_gaq.push(['_trackEvent', 'Videos', 'Play', videoArray[videoIndex].title ]);
	}
	// if the video ends, send the event
	if (event.data == YT.PlayerState.ENDED) {
		_gaq.push(['_trackEvent', 'Videos', 'Ended', videoArray[videoIndex].title ]);
	}
}