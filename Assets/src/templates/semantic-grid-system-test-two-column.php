<?php
	$pageTitle = 'Semantic Grid System Test';
	$bodyClass = 'template-two-column not-shifted no-gutters';
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

	<header class="row">
		Header
	</header>

	<section class="wrapper">
		<article class="layout-primary">
			<h2>Primary</h2>
			<p>This is a nine column container.  It will hold your primary content.</p>

			<section class="nested wrapper">
				<div class="two-up">
					This is a sub-layout using a class of "two-up".
				</div>
				<div class="two-up">
					This is a sub-layout using a class of "two-up".
				</div>
			</section>
		</article>

		<nav class="layout-secondary">
			<h3>Secondary</h3>
			<p>This is a three column container.  It will hold navigation content.</p>
		</nav>

		<div class="layout-centered">
			<h3>Centered</h3>
			<p>This is an eight column centered container.</p>
		</div>
	</section>

	<footer class="row">
		Footer
	</footer>

	<div class="wrapper">
		<div class="row">
			<button class="toggle-push-and-pull">Toggle Push and Pull</button>
			<button class="toggle-gutters">Toggle Gutters</button>
		</div>
	</div>
<?php
	include_once 'inc/foot.php';
?>