<?php
	$pageTitle = 'Semantic Grid System Test';
	$bodyClass = 'template-two-column not-shifted no-gutters';
	include_once 'inc/head.php';
?>
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

	<footer class="wrapper">
		<div class="row">
			Footer
		</div>
	</footer>

	<div class="wrapper">
		<div class="row">
			<button class="toggle-position">Toggle Position</button>
			<button class="toggle-gutters">Toggle Gutters</button>
		</div>
	</div>
<?php
	include_once 'inc/foot.php';
?>