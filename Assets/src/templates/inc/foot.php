	<script src="<?php echo getAsset('Assets/dist/js/main.js');?>"></script>
	<script>
		// toggle buttons for test pages
		$('.toggle-push-and-pull').on('click', function(e) {
			e.preventDefault();
			$('body').toggleClass('not-shifted shifted');
		});
		$('.toggle-gutters').on('click', function(e) {
			e.preventDefault();
			$('body').toggleClass('no-gutters gutters');
		});
	</script>
</body>
</html>