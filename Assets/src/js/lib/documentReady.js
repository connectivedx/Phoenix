$('select:not([multiple])').wrap('<div class="decorator-select" />');
$('select[multiple]').wrap('<div class="decorator-select-multiple" />');

$('.custom-file-upload').click(function(e) {
	e.preventDefault();

	$(this).next('input[type="file"]').click();
});

// toggle buttons for test pages
$('.toggle-position').on('click', function(e) {
	e.preventDefault();
	$('body').toggleClass('not-shifted shifted');
});
$('.toggle-gutters').on('click', function(e) {
	e.preventDefault();
	$('body').toggleClass('no-gutters gutters');
});