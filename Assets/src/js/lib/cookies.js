// @cookie
// Cookies get/set/delete
// there is also a jQuery cookie plugin that does more magic but seems to usually be overkill

// cookie reader by Lea Verou: http://lea.verou.me/2009/12/reading-cookies-the-regular-expression-way/
function getCookie(name) {
	// Escape regexp special characters
	name = name.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');

	var regex = new RegExp('(?:^|;)\\s?' + name + '=(.*?)(?:;|$)','i'),
		match = document.cookie.match(regex);

	return match && unescape(match[1]);
}

function setCookie(cookie) {
	var MILS = 1000 * 60 * 60 * 24; // value to convert days to miliseconds
	var now = Date.now();
	var name = cookie.name ? cookie.name + '=' : false;
	var val = cookie.val ? cookie.val : '';
	var expires = cookie.days ? '; expires=' + new Date((cookie.days * MILS) + now).toUTCString() : cookie.mils? '; expires=' + new Date(cookie.mils + now).toUTCString()  : '';
	var path = cookie.path ? '; path=' + cookie.path : '; path=/';
	var domain = cookie.domain ? '; domain=' + cookie.domain : '';
	var secure = cookie.secure ? '; secure' : '';

	if (name) {
		document.cookie = name + val + expires + path + domain + secure;
	}
}

function deleteCookie(cookieName) {
	setCookie({name:cookieName,expires:false});
}

exports.get = getCookie;
exports.set = setCookie;
exports.delete = deleteCookie;