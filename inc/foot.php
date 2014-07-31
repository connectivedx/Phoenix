	<script src="Assets/dist/js/jquery.min.js"></script>
	<script src="Assets/dist/js/tabs/jquery.responsive-tabs.js"></script>
	<script src="Assets/dist/js/lightboxes/jquery.fancybox.pack.js"></script>
	<script src="Assets/dist/js/tooltips/jquery.tipsy.js"></script>
	<script>
		$(function() {
			$('.nav-handle').click(function() {
				$('.nav-list').toggleClass('expanded');
			});
			$('select').wrap('<div class="decorator-select"></div>');

			$('.fancybox').fancybox();

			$('.tooltip-tipsy').tipsy({
				gravity: 'w'
			});

			$('.custom-file-upload').click(function(e) {
				e.preventDefault();

				$(this).next('input[type="file"]').click();
			});
		});
	</script>
</body>
</html>