<?php
	$pageTitle = 'Multi Grid';
	include_once 'inc/head.php';
?>
	<div class="wrapper">
		<div class="row">
			<div class="eight columns centered">
				<a href="index.php">
					<img src="<?php echo getAsset('Assets/dist/img/content/logo-placeholder.png');?>" alt="Phoenix by ISITE Design" class="img-align-center">
				</a>
			</div>
		</div>
	</div>

	<div class="wrapper">
		<h1 class="row">Multi-Grid</h1>
		<p class="row">The multi-grid allows you to define element widths at multiple breakpoints.  Below there are 3 columns on large resolutions, 2 on medium, and 1 on small.</p>
	</div>

	<div class="row">
		<ul class="multi-grid">
			<li>
				Column 1
			</li>
			<li>
				Column 2
			</li>
			<li>
				Column 3
			</li>
		</ul>
	</div>
<?php
	include_once 'inc/foot.php';
?>