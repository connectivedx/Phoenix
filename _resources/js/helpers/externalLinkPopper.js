// @external
// External link popper
// checks href against current domain. If not matching and href contains http://, target blank it
// http://jsfiddle.net/UPhwk/

$('a[href^="http://"]').not('[href*='+window.location.host+']').attr('target','_blank');

// end External link popper